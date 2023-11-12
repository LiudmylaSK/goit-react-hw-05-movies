import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearch } from 'movies-api/Api';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const MoviesPages = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  // useEffect(() => {
  //   const currentQuery = searchParams.get('query');
  //   if (!currentQuery) return;

  //   const fetchMovieByQuery = async () => {
  //     try {
  //       const movieByQuery = await fetchSearch(currentQuery);
  //       setMovies(movieByQuery);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchMovieByQuery();
  // }, [searchParams]);

  useEffect(() => {
  const fetchMovieByQuery = async () => {
    try {
      const currentQuery = searchParams.get('query');
      if (!currentQuery) return;

      const movieByQuery = await fetchSearch(currentQuery);
      setMovies(movieByQuery);
    } catch (error) {
      console.error(error);
    }
  };

  fetchMovieByQuery();
}, [searchParams]);


  return (
    <>
      <SearchForm setSearchParams={setSearchParams} />
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};


