import React, { useEffect, useState } from "react";
import {
  Details,
  HeadLine,
  Awards,
  StyledAward,
  ImageDisplay,
} from "../styles";
import { useLocation } from "react-router-dom";
import { MovieState } from "../movieState";
import { pageAnimation } from "../animation.js";

const MovieDetails = () => {
  //   const navigate = useNavigate();
  const location = useLocation();
  const url = location.pathname;
  //   console.log(url);

  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Details
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt={movie.title} />
          </HeadLine>
          <Awards>
            {movie.awards.map((award) => (
              <Award award={award} key={award.title} />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

const Award = ({ award }) => {
  return (
    <StyledAward>
      <h3>{award.title}</h3>
      <div className="line"></div>
      <p>{award.description}</p>
    </StyledAward>
  );
};

export default MovieDetails;
