// import React from "react";
// import { getMovies } from "../api/tmdb-api";
// import PageTemplate from '../components/templateMovieListPage';
// import { useQuery } from 'react-query';
// import Spinner from '../components/spinner';
// import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
// //import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

// const UpcomingMoviesPage = () => {
//   const { data, error, isLoading, isError } = useQuery('upcoming', getMovies);

//   if (isLoading) {
//     return <Spinner />;
//   }

//   if (isError) {
//     return <h1>{error.message}</h1>;
//   }

//   const movies = data.results;

//   return (
//     <PageTemplate
//       title="Discover Movies"
//       movies={movies}
//       action={(movie) => {
//         return <PlaylistAddIcon movie={movie} />
//       }}
//     />
// );
// };
// export default UpcomingMoviesPage;

// //   return (
// //     <PageTemplate
// //       title="Upcoming Movies"
// //       movies={movies}
// //       action={(movie) => <PlaylistAddIcon movie={movie} />}
// //     />
// //   );
// // };

// // export default UpcomingMoviesPage;
import React from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

const UpcomingMovies = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('discover', getMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  return (
    <PageTemplate
      title="Discover Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
);
};
export default UpcomingMovies;