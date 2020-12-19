import {
    GET_MOVIES,
    GET_MOVIES_SUCCESS,
    GET_MOVIES_FAILURE,
    SUBMIT_SEARCH
  } from "./types";
  
  import { TMDB_API_KEY } from "../api/key";
  import tmdb from "../api/tmdb";
  
  export const fetchMovies = (query = "") => async (dispatch) => {
      const url = `/search/movie?api_key=${TMDB_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false&840`;
      if (query) {
        dispatch({ type: SUBMIT_SEARCH, payload: query });
      }

      dispatch({ type: GET_MOVIES });

      try {
        const response = await tmdb.get(url);
    
        await Promise.all(
          response.data.results.map(async (movie) => {
            const response = await tmdb.get(
              `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${TMDB_API_KEY}&&language=en-US`
            );
              
            movie.details = response.data;
          })
        );
    
        dispatch({ type: GET_MOVIES_SUCCESS, payload: response.data.results });
      } catch (error) {
        dispatch({ type: GET_MOVIES_FAILURE });
        console.error(`Error: ${error}`);
      }
    
  };
  