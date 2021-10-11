import React from "react";
import {useContext} from 'react';

import {FavContext} from "../Store/FavouriteContext";
import MeetupList from "../Components/Layout/meetups/MeetupList";

function FavouritesPage(){
    const FavoriteCtx = useContext(FavContext);

    let content;

    if(FavoriteCtx.totalFavorites === 0){
        content = <p>You Have no Favourites Yet. Start Adding Some</p>
    }else{
        content = <MeetupList meetups={FavoriteCtx.favorites}/>
    }
    return(
        <div>
            <h1>My Favorites</h1>
            {content}
      
        </div>
    );
}

export default FavouritesPage;