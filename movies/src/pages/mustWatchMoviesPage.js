import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovies } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromMustWatch from "../components/cardIcons/removeFromMustWatch"; // Create this icon if needed


const MustWatchMoviesPage = (props) => {

  const { mustWatch: movieIds } = useContext(MoviesContext);

  // Create an array of queries to fetch movies in parallel
  const mustWatchMovieQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovies,
      };
    })
  );

  // Check if any of the parallel queries is still loading
  const isLoading = mustWatchMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  // Format the movie data to add genre_ids
  const movies = mustWatchMovieQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map((g) => g.id);
    return q.data;
  });

  return (
    <PageTemplate
      title="Must Watch Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromMustWatch movie={movie} />
            
          </>
        );
      }}
    />
  );
};

export default MustWatchMoviesPage;
