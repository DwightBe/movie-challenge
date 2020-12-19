import {
    GET_MOVIES,
    GET_MOVIES_FAILURE,
    GET_MOVIES_SUCCESS,
    SUBMIT_SEARCH
  } from "../actions/types";
  
  const initialState = {
    movies: [],
    submittedQuery: "",
    isError: false,
    isLoading: false,
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_MOVIES:
        return {
          ...state,
          isError: false,
          isLoading: true,
        };
  
      case GET_MOVIES_FAILURE:
        return {
          ...state,
          isError: true,
          isLoading: false,
        };
  
      case GET_MOVIES_SUCCESS:
        return {
          ...state,
          movies: action.payload,
          isError: false,
          isLoading: false,
        };
  
      case SUBMIT_SEARCH:
        return {
          ...state,
          query: action.payload,
        };
  
      default:
        return state;
    }
  };