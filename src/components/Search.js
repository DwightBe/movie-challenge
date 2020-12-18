import React, { useState, useEffect } from "react";


const Search = () => {
  const [query, setQuery] = useState("");

  useEffect(() => {

  }, [query]);
  
  const url = `/search/movie?api_key=${TMDB_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false&840`;

  return (
    <div>   
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
    </div>
  );
};
  
export default Search;