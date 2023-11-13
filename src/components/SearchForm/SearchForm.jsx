import { fetchSearch } from 'movies-api/Api';
import React, { useState } from 'react';
import { Loader } from 'components/Loader/Loader';

export const SearchForm = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [noResults, setNoResults] = useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const result = await fetchSearch(query);

      if (result.length === 0) {
        setNoResults(true);
        setSearchParams({ query, result: [] });
      } else {
        setNoResults(false);
        setSearchParams({ query, result });
      }
    } catch (error) {
      console.error(error);
      setError('Something went wrong...');
    } finally {
      setLoading(false);
    }
  };

 

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name movie"
        autoFocus
        value={query}
        onChange={({ target: { value } }) => setQuery(value)}
        aria-label="Search movies"
      />
      <button type="submit" disabled={!query} aria-label="Submit search">
        Search
      </button>
        {loading && <Loader />}
      {error && <p>{error}</p>}
      {noResults && <p>No movie found with that title. Please check the request</p>}
    </form>
  );
};


