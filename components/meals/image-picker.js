'use client'
import { useRef, useState } from "react"
import Image from "next/image"
import classes from "./image-picker.module.css"

export default function ImagePicker({label, name}){
    //Basically to show to preview once picked
    const [pickedImage, setPickedImage] = useState()
    const imageInput = useRef()
    function imageClickHandler(){
        imageInput.current.click()
    }
    function imagePickHandler(e){
        const file = e.target.files[0]
        if(!file){
            //Reset preview
            setPickedImage(null)
            return
        }
        //Convert to url to be used for image <input>
        const fileReader = new FileReader(file)
        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        }
        fileReader.readAsDataURL(file)
    }
    return (
        <div className={classes.picker}> 
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No picked Image yet</p>}
                    {pickedImage && <Image src={pickedImage} alt="Selected Img" fill/>}
                </div>
                <input className={classes.input} type="file" id={name} accept="image/jpeg image/png" name={name} ref={imageInput} onChange={imagePickHandler} required/>
                {/* Connect <input> and <button> through ref */}
                <button className={classes.button} type="button" onClick={imageClickHandler}>Pick an image</button>
            </div>
        </div>
    )
}