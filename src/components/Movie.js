import React from "react";
import {Card, Image} from 'semantic-ui-react';


const Movie = ({ movie }) => {
    const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;
    return (
        <Card centered>
            <Image src={getImage(movie.poster_path)} wrapped ui={false}/>
             <Card.Content>
                <Card.Header>{movie.title}</Card.Header>
                <Card.Meta>
                    <span>{movie.release_date ? movie.release_date.split('-')[0]: ''}</span>
                </Card.Meta>
                <Card.Description>
                    {`${movie.overview.substring(0,200)}...`}
                </Card.Description>
            </Card.Content>
        </Card>
  );
};


export default Movie;