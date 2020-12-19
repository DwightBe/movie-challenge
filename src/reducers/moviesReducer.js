import {
    GET_MOVIES,
    GET_MOVIES_FAILURE,
    GET_MOVIES_SUCCESS,
    SUBMIT_SEARCH
  } from "../actions/types";
  
  const initialState = {
    movies: [],
    submittedQuery: "",
    isLoading: false,
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_MOVIES:
        return {
          ...state,
          isLoading: true,
        };
  
      case GET_MOVIES_FAILURE:
        return {
          ...state,
          isLoading: false,
        };
  
      case GET_MOVIES_SUCCESS:
        return {
          ...state,
          movies: action.payload,
          isLoading: false,
        };
  
      case SUBMIT_SEARCH:
        return {
          ...state,
          submittedQuery: action.payload,
        };
  
      default:
        return state;
    }
  };