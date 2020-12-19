import React, { useState, useEffect } from "react";
import { fetchMovies } from "../actions";
import { connect } from "react-redux";
import {Input} from 'semantic-ui-react';
import styled from 'styled-components';

const InputContainer = styled.div`
    line-height: 18px;
    display: inline-block;
    min-width: 200px;
    width: 30%;
    vertical-align: middle;
    margin: 6px 0px 0px 0px;
    @media (max-width: 640px) {
      flex-direction: column;
      display:flex;
      margin: 5px auto;
      width: 60%;
    }
`;


const Search = ({ fetchMovies }) => {
  const [query, setQuery] = useState("");
  useEffect(() => {
      if(query !== ''){
          fetchMovies(query);
      }
  }, [query]);
  
  return ( 
    <InputContainer>
      <Input
        size='mini'
        icon='search'  
        placeholder="Search ..."
        name="search"
        value={query}
        style={{marginBottom:'40px'}}
        onChange={(event) => setQuery(event.target.value)}
      />
    </InputContainer>
  );
};

const mapStateToProps = (state) => {
    return {
      query: state.movies.submittedQuery,
      movies: state.movies.movies,
    };
  };

export default connect(mapStateToProps, { fetchMovies })(Search);