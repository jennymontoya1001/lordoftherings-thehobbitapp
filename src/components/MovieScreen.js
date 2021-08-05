import React from 'react'
import { useParams } from 'react-router-dom'
import { getMovieById } from '../selectors/getMovieById';

export const MovieScreen = () => {

  const {id} = useParams();
  console.log(id);

  const movie = getMovieById(id);
  console.log(movie);

    return (
        <div>
            <h1>Movie Screen</h1>
        </div>
    )
}
