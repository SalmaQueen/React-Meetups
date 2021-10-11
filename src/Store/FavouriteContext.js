
import React, { useState } from "react";

//  export const FavoritesContext = createContext({
//     favorites: [],
//     totalFavorites: 0,
//     addFavorite: (favoriteMeetup) => {},
//     removeFavorite: (meetupId) => {},
//     itemIsFavorite: (meetupId) => {}


// });
const FavoritesContext = {
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
  }
export const FavContext = React.createContext(FavoritesContext)

export default function FavoritesContextProvider(props){
        const [userFavorites, setUserFavorites] = useState([]);

        function addFavoriteHandler(favoriteMeetup){
            setUserFavorites((prevUserFavorites) => {
                return prevUserFavorites.concat(favoriteMeetup)

            });
        }

        function removeFavoriteHandler(meetupId){
            setUserFavorites((prevUserFavorites) => {
                return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
            });
        }

        function itemIsFavoriteHandler(meetupId){
            return userFavorites.some(meetup => meetup.id === meetupId)
        }

        const context = {
            favorites: userFavorites,
            totalFavourites: userFavorites.length,
            addFavorite: addFavoriteHandler,
            removeFavorite: removeFavoriteHandler,
            itemIsFavorite: itemIsFavoriteHandler

        };

    return(
        <FavContext.Provider value={context}>
                {props.children}
        </FavContext.Provider>
    );
}

