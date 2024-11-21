import React from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";

const MovieCastPage = (props) => {
  const { id } = useParams();
  const { data, error, isLoading, isError } = useQuery(["movieCast", { id }], getMovieCast);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const cast = data.cast;

  return (
    <div>
      <h1>Movie Cast</h1>
      <ul>
        {cast.map((member) => (
          <li key={member.id}>
            <p>{member.name} as {member.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCastPage;
