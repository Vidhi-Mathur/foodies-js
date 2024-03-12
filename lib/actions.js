//Directive to create a server action which is a function guaranteed to execute only on server 
'use server'

import { saveMeal } from "./meals"

export default async function shareMeal(formData){
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email') 
    }
    console.log(meal)
    await saveMeal(meal)
}