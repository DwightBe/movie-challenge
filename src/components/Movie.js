import React from "react";
import {Card, Image, Icon} from 'semantic-ui-react';

const Movie = ({ movie }) => {
    const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;
    return (           
            <Card centered>
                <Image 
                    as='a'
                    src={getImage(movie.poster_path)} 
                    wrapped ui={false} 
                    href={`https://imdb.com/title/${movie.details.imdb_id}`}/>
                <Card.Content>
                    <Card.Header><a href={`https://imdb.com/title/${movie.details.imdb_id}`}>{movie.title}</a></Card.Header>
                    <Card.Meta>
                        <span>{movie.release_date ? movie.release_date.split('-')[0]: ''}</span>
                    </Card.Meta>
                    <Card.Description>
                        {`${movie.overview.substring(0,200)}...`}
                    </Card.Description>
                    <Card.Content extra>
                        <a>
                            <Icon name='star' />
                            {movie.vote_average} stars
                        </a>
                        </Card.Content>
                </Card.Content>
            </Card>
  );
};


export default Movie;