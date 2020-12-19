import './App.css';
import { connect } from "react-redux";
import Search from "./Search";
import Movie from "./Movie";

const App = ({movies}) => {

  return (
    <div className="App">
      <header className="App-header">
        <Search />
        <div className="movies">
            {
              movies.map((movie, index) => (
                <Movie key={`${index}-${movie.title}`} movie={movie} />
              ))
            }
          </div>
      </header>
    </div>

  );
};


const mapStateToProps = (state) => {
  return {
   movies: state.movies.movies,
  };
};

export default connect(mapStateToProps)(App);