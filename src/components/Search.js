import React, { useState, useEffect } from "react";
import { fetchMovies } from "../actions";
import { connect } from "react-redux";
import styled from 'styled-components';

const Input = styled.input`
    font-size: 14px;
    line-height: 18px;
    display: inline-block;
    min-width: 200px;
    width: 30%;
    vertical-align: middle;
    color: #2f3846;
    margin: 0px 10px 12px 10px;
    padding: 5px 10px;
    @media (max-width: 640px) {
      flex-direction: column;
      display:flex;
      margin: 5px auto;
      width: 60%;
    }
`;

const Search = ({fetchMovies}) => {
    const [query, setQuery] = useState("");
    useEffect(() => {
        if(query !== ''){
            fetchMovies(query);
        }
    }, [query]);
  
  return ( 
      <Input
        type="text"
        placeholder="Search"
        name="search"
        autoComplete="off"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
  );
};

const mapStateToProps = (state) => {
    return {
      query: state.movies.submittedQuery,
      movies: state.movies.movies,
    };
  };

export default connect(mapStateToProps, { fetchMovies })(Search);