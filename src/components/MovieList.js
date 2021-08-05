import React, {useMemo} from 'react'
import { getMoviesByCategory } from '../selectors/getMoviesByCategory'
import { MovieCard } from './MovieCard';

export const MovieList = ({category}) => {

    const movies = useMemo(() => getMoviesByCategory(category), category) 
    

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
