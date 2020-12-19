import React from "react";

const Movie = ({ movie }) => {
    const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;
    return (
        <div className="movie">
            <h2>{movie.title}</h2>
            <div>
                <img
                width="200"
                alt={`${movie.title}`}
                src={getImage(movie.poster_path)}
                />
            </div>
            <p>{movie.release_date ? movie.release_date.split('-')[0]: ''}</p>
        </div>
  );
};


export default Movie;