import { useEffect, useState, useRef, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';

import { fetchMovieDetails } from 'movies-api/Api';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { PLACEHOLDER } from 'movies-api/constant-images';

import styled from 'styled-components';



 const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const backButton = useRef(location.state?.from || '/');

  useEffect(() => {
    const movieDetails = async () => {
      try {
        const movie = await fetchMovieDetails(movieId);
        setMovieDetails(movie);
      } catch (error) {
        console.error(error);
      }
    };

    movieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <Loader />;
  }

  

  const roundedPopularity = Math.round(movieDetails.vote_average * 10);

  return (
    <main>
      <Link to={backButton.current}>
        <Button text="Go back" />
      </Link>
     
      <WrapperStyled>
        
         
          <img
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                : `${PLACEHOLDER}`
            }
          alt={movieDetails.title}
          height='500'
          />
     

        <div>
          <h1>{movieDetails.title}</h1>
          <h4>User score: {roundedPopularity}%</h4>
          <h2>Overview</h2>
          <p>{movieDetails.overview}</p>
          <h2>Genres</h2>
          <p>
            {movieDetails.genres.map(genre => (
              <span key={genre.id}> {genre.name}</span>
            ))}
          </p>
        </div>
     </WrapperStyled>
    
      <h3>Additional information</h3>
      <Link to="Cast">
        <Button text="Cast" />
      </Link>
      <Link to="Reviews">
        <Button text="Reviews" />
      </Link>
      
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;

const WrapperStyled = styled.div`
  display: flex;
  gap: 12px;`