import React, { useState } from 'react';

export const SearchForm = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    setSearchParams({ query });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name movie"
        autoFocus
        value={query}
        onChange={({ target: { value } }) => setQuery(value)}
        onBlur={() => setSearchParams({ query })}
        aria-label="Search movies"
      />
      <button type="submit" disabled={!query} aria-label="Submit search">
        Search
      </button>
    </form>
  );
};


// import { useState } from 'react';


// export const SearchForm = ({ setSearchParams }) => {
//   const [query, setQuery] = useState('');

//   const handleSubmit = event => {
//     event.preventDefault();

//     setSearchParams({ query });
//   };

//   const handleSearchParams = ({ target: { value } }) => {
//     setQuery(value);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Name movie"
//         autoFocus
//         value={query}
//         onChange={handleSearchParams}
//       />
//       <button type="submit" disabled={!query}>
//         Search
//       </button>
//     </form>
//   );
// };

