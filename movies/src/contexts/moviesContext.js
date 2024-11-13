import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 
  const [watchlist, setWatchList] = useState([]);

  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };
  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  
  
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

 
 const addToWatchlist = (movie) => {
  let newWatchList = [];
  if (!watchlist.includes(movie.id)) {
    newWatchList = [...watchlist, movie.id];
  } else {
    newWatchList = [...watchlist];
  }
  setWatchList(newWatchList);
};


const removeFromWatchList = (movie) => {
  setWatchList(watchlist.filter((mId) => mId !== movie.id));
  console.log(
    "Updated Must Watch List after removal:",
    watchlist.filter((id) => id !== movie.id)
  ); // Log the current state after removal
};



  return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        addReview,
        addToWatchlist,
        removeFromWatchList,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;