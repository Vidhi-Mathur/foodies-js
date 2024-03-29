//Reaches out to database and fetch data
import sql from "better-sqlite3"
import slugify from "slugify"
import xss from "xss"
import fs from "node:fs"
const db = sql("meals.db")

export default async function getMeals(){
    await new Promise((resolve) => setTimeout(resolve, 2000))
    // throw new Error('Loading meals failed')
    //No promise returned basically here
    return db.prepare('SELECT * FROM meals').all()
}

export function getMeal(slug){
    return db.prepare('SELECT * FROM meals WHERE slug= ?').get(slug)
}

export async function saveMeal(meal){
    //Generate slugs based on title, and force to lowercase
    meal.slug = slugify(meal.title, { lower: true })
    //Sanitise instructions
    meal.instructions = xss(meal.instructions)
    //To store images in public folder
    const extension = meal.image.name.split('.').pop()
    const fileName = `${meal.slug}.${extension}`
    const stream = fs.createWriteStream(`/public/images/${fileName}`)
    const bufferedImage = await meal.image.arrayBuffer()
    stream.write(Buffer.from(bufferedImage), err => {
        if(err){
            throw new Error('Saving Image failed!')
        }
    })
    meal.image = `/images/${fileName}`
    db.prepare(`INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug) VALUES (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)`).run(meal)
}