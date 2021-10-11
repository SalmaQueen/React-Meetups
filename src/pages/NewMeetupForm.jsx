import React from "react";
import { useRef } from "react";
import classes from '../pages/NewMeetupForm.module.css';
import UICard from '../Components/Layout/User Interface/UICard'

function NewMeetupForm(props){
   const titleInputRef = useRef();
   const imageInputRef = useRef();
   const addressInputRef = useRef();
   const descriptionInputRef = useRef();

    function SubmitHandler(event){
        event.preventDefault();

        const keyedTitle = titleInputRef.current.value;
        const keyedImage = imageInputRef.current.value;
        const keyedAddress = addressInputRef.current.value;
        const keyedDescription= descriptionInputRef.current.value;

        const meetupData = {
            title: keyedTitle,
            image: keyedImage,
            address: keyedAddress,
            description:keyedDescription

        };
        props.onAddMeetup(meetupData);


    }

    return(
        <UICard>
            <form className={classes.form} onSubmit={SubmitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Tittle</label>
                    <input type="text" id="title" required ref={titleInputRef} />

                </div>

                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" id="image" required  ref={imageInputRef}/>

                </div>

                <div className={classes.control}>
                    <label htmlFor="addresss">Address</label>
                    <input type="text" name="" id="address" required  ref={addressInputRef}/>

                </div>

                <div className={classes.control}>
                    <label htmlFor="desc">Description</label>
                    <textarea id="desc" cols="10" rows="10" ref={descriptionInputRef}></textarea>

                </div>

                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>



            </form>
        </UICard>
       
    );
}

export default NewMeetupForm;