
import './App.css';
import { connect } from "react-redux";
import Movie from "./Movie";
import Search from "./Search";
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
  }`;
const MovieResults = styled.div`
  padding-top:9em;
  width: 90%;
  margin: 0 auto;
  color:#fff;
  background-color: rgba(159, 183, 185, 0.6);
`;

const App = ({movies, isLoading}) => {
  console.log(movies);
  return (
    <div className="App">
      <header>
        <Logo src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"/>
         <SearchLabel>Movie Search</SearchLabel>
        <Search />
      </header>
        { isLoading && <div>Loading...</div> }
        { movies.length > 0 &&
          <MovieResults>
            {movies.map((movie, index) => (
              <Movie key={`${index}-${movie.title}`} movie={movie} />
            ))}
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