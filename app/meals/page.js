import Link from 'next/link'
import classes from './page.module.css'
import MealsGrid from '@/components/meals/meals-grid'
import getMeals from '@/lib/meals'
//Displays fallback until its children have finished loading.
import { Suspense } from 'react'
import MealsLoading from './loading-out'

//Server component can use async, which normal react components don't. Can get data here, without useEffect or unecessary fetch request being send
async function MealsFetch(){
    const meals = await getMeals()
    return <MealsGrid meals={meals} />
}

export default function MealsPage(){
    return (
        <>
        <header className={classes.header}>
            <h1>Delicious Meals, created{' '}<span className={classes.highlight}>Created By You</span></h1>
            <p>Choose your favourite receipe and cook it, it is easy and fun!</p>
            <p className={classes.cta}>
                <Link href="/meals/share">Share your favourite receipes</Link>
            </p>
        </header>
        <main className={classes.main}>
        <Suspense fallback={<MealsLoading />}>
            <MealsFetch />
        </Suspense>
        </main>
        </>
    )
}