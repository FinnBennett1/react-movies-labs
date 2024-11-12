 import React from "react";
 import { getUpcomingMovies } from "../api/tmdb-api";
 import PageTemplate from '../components/templateMovieListPage';
 import { useQuery } from 'react-query';
 import Spinner from '../components/spinner';
 import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
 import { MoviesContext } from '../contexts/moviesContext';


 const UpcomingMoviesPage = () => {
   const { data, error, isLoading, isError } = useQuery('upcoming', getUpcomingMovies);

   if (isLoading) {
     return <Spinner />;
   }

   if (isError) {
     return <h1>{error.message}</h1>;
   }

   const movies = data.results;

   return (
     <PageTemplate
       title="Discover Movies"
       movies={movies}
       action={(movie) => {
         return <PlaylistAddIcon movie={movie} />
       }}
     />
 );
 };
 export default UpcomingMoviesPage;


