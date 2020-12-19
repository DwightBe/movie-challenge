import './App.css';
import {useState, useEffect} from "react";
import { connect } from "react-redux";
import Movie from "./Movie";
import Search from "./Search";
import {Button} from 'semantic-ui-react';
import styled from 'styled-components';


const Logo = styled.img`
    margin-bottom: 4px; 
    height: 2em;
    filter: invert(0%) hue-rotate(180deg) ;
  `;

const SearchLabel = styled.label`
    display: inline-block;
    height: 3.8em;
    vertical-align: middle;
    margin: 0 14px;
    @media (max-width: 640px) {
        height: 3em;
    }
  }`;

const MovieResults = styled.div`
  padding-top:9em;
  margin: 0 auto;
  color:#fff;
  background-color: rgba(159, 183, 185, 0.6);
  display:flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    flex: 0 0 33.333333%;
  }
`;

const LoadMoreButton = styled.div`
  @media (min-width: 768px) {
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
`;

const App = ({movies, isLoading}) => {
  const [parsedMovies, setParsedMovies] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    setParsedMovies(movies.slice(0, 5))
  },[movies]);

  const nextResults = () =>{
    setParsedMovies(movies.slice(0, (pageCount+1)*5 + 5));
    setPageCount(pageCount+1);
  }

  return (
    <div className="App">
      <header>
        <Logo src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"/>
         <SearchLabel>Movie Search</SearchLabel>
        <Search />
      </header>
        { isLoading && <div>Loading...</div> }
        { parsedMovies.length > 0 &&
          <MovieResults>
            {parsedMovies.map((movie, index) => (
              <Movie key={`${index}-${movie.title}`} movie={movie} />
            ))}
            {movies.length/((pageCount+1)*5) > 1 ?
              (<LoadMoreButton>
                <Button size='mini' onClick={nextResults} style={{margin:'20px auto', height: '40px', width:'100px'}}>Load More ... </Button> 
              </LoadMoreButton>) :'' 
            }
            </MovieResults>
        }
        
    </div>

  );
};


const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
    isLoading:state.movies.isLoading
  };
};

export default connect(mapStateToProps)(App);