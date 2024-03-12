import classes from "./loading-out.module.css"

export default function MealsLoading(){
    //We have heading which don't depend on any data to be fetched. So can display it, and show loading state only for data to be fetched
    return <p className={classes.loading}>Fetching Meals....</p>
}