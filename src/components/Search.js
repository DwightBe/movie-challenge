import React, { useState, useEffect } from "react";
import { fetchMovies } from "../actions";
import { connect } from "react-redux";

const Search = ({fetchMovies}) => {
    const [query, setQuery] = useState("");
    useEffect(() => {
        if(query !== ''){
            fetchMovies(query);
        }
    }, [query]);
  
  return (
    <div>   
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
    </div>
  );
};

export default connect(null, { fetchMovies })(Search);