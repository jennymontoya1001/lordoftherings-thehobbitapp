import React from 'react'
import { getMoviesByCategory } from '../selectors/getMoviesByCategory'
import { MovieCard } from './MovieCard';

export const MovieList = ({category}) => {

    const movies = getMoviesByCategory(category);

    return (
        <div>
            <div className="card-columns">
                {
                    movies.map(movie => (
                       <MovieCard key={movie.id}
                       {...movie}
                       />
                    ))
                }
            </div>
            
        </div>
    )
}
