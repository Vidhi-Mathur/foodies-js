'use client'

export default function Error({error}){
    return (
        //Used in globals.css
        <main className="error">
            <h1>An error occurred</h1>
            <p>Failed to fetch data</p>
        </main>
    )
}