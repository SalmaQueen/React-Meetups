import React from "react";
import classes from './MeetupItem.module.css';
import UICard from "../User Interface/UICard";
import {useContext} from 'react';
import {FavContext} from "../../../Store/FavouriteContext";

function MeetupItem(props){

    const favoritesCtx = useContext(FavContext)

    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler(){
        if(itemIsFavorite){
            favoritesCtx.removeFavorite(props.id)
        }else {
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address
            });
        }
    }
    return(
        <li className={classes.item}>
           <UICard>
                
           <div className={classes.image}>
                <img src={props.image} alt='' />
            </div>

            <div className={classes.content}> 
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>

            <div className={classes.actions}>
                <button onClick={toggleFavoriteStatusHandler}>
                    {itemIsFavorite ? 'Remove from Favourites': 'Add To Favorites'}
                    </button>
            </div>

           </UICard>
        </li>
    );
}

export default MeetupItem;