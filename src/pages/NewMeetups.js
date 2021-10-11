import React from "react";
import NewMeetupForm from "./NewMeetupForm";
import { useHistory } from 'react-router-dom'

function NewMeetupsPage(){
    const history = useHistory();

    function addMeetupHandler(meetupData){
        fetch(
            'https://react-getting-started-4a0bb-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST', 
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }

            }  

        ).then(() => {
            history.replace('/');
        });

    }

    return(
       <section>
           <h3>Add New Meetup</h3>
           <NewMeetupForm onAddMeetup={addMeetupHandler}/>
       </section>
    );
}

export default NewMeetupsPage;
