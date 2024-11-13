import React from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToWatchListIcon from "../components/cardIcons/addToWatchList"; 

const UpcomingMoviesPage = () => {
  // Fetch upcoming movies
  const { data, error, isLoading, isError } = useQuery("upcoming", getUpcomingMovies);

  // Handle loading state
  if (isLoading) {
    return <Spinner />;
  }

  // Handle error state
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  // Access movies from the API data
  const movies = data.results;

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => <AddToWatchListIcon movie={movie} />} // Use AddToWatchListIcon component
    />
  );
};

export default UpcomingMoviesPage;
