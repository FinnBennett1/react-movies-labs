import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle"; // Icon to remove

const RemoveFromMustWatch = ({ movie }) => {
  const { removeFromMustWatch } = useContext(MoviesContext);

  const handleRemoveFromMustWatch = () => {
    removeFromMustWatch(movie);
  };

  return (
    <IconButton
      aria-label="remove from must watch"
      onClick={handleRemoveFromMustWatch}
    >
      <RemoveCircleIcon color="secondary" />
    </IconButton>
  );
};

export default RemoveFromMustWatch;
