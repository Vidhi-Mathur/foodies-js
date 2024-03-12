import ImagePicker from "@/components/meals/image-picker"
import classes from "./page.module.css"
import shareMeal from "@/lib/actions"
import MealsFormSubmit from "@/components/meals/meals-form-submit"

export default function ShareMealPage(){
    return (
        <>
        <header className={classes.header}>
            <h1>
                Share your <span className={classes.highlight}>favorite meal</span>
            </h1>
            <p>Or any other meal you feel needs sharing!</p>
        </header>
        <main className={classes.main}>
            <form className={classes.form} action={shareMeal}>
                <div className={classes.row}>
                    <p>
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" name="name" required />
                    </p>
                    <p>
                        <label htmlFor="email">Your Email</label>
                        <input type="email" id="email" name="email" required />
                    </p>
                </div>
                    <p>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" required />
                    </p>
                    <p>
                        <label htmlFor="summary">Summary</label>
                        <input type="text" id="summary" name="summary" required />
                    </p>
                    <p>
                        <label htmlFor="instructions">Instructions</label>
                        <textarea id="instrcutions" name="instructions" rows="10" required />
                    </p>
                    <ImagePicker label="Your Image" name="image"/>
                    <p className={classes.actions}>
                        <MealsFormSubmit />
                    </p>
            </form>
        </main>
        </>
    )
}