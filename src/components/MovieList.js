import React from 'react'
import { getMoviesByCategory } from '../selectors/getMoviesByCategory'

export const MovieList = ({category}) => {

    const movies = getMoviesByCategory(category);

    return (
        <div>
            <ul>
                {
                    movies.map(movie => (
                        <li key={movie.id}>
                            {movie.name}
                        </li>
                    ))
                }
            </ul>
            
        </div>
    )
}
