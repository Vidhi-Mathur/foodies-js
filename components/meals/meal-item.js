import classes from "./meal-item.module.css"
import Image from "next/image"
import Link from "next/link"

export default function MealItem({title, image, summary, creator, dynamicSeg}){
    return (
        <article className={classes.meal}>
            <header>
                <div className={classes.image}>
                {/* If don't know width and height of image in advance, we can use fill prop to fill available space with image defined in parent component */}
                <Image src={image} alt={title} fill/>
                </div>
                <div className={classes.headerText}>
                    <h2>{title}</h2>
                    <p>by {creator}</p>
                </div>
            </header>
            <div className={classes.content}>
                <p className={classes.summary}>{summary}</p>
                <div className={classes.actions}>
                    <Link href={`/meals/${dynamicSeg}`}>View Details</Link>
                </div>
            </div>
        </article>
    )
}