import { movies } from '../data/movies';

export const getMoviesByCategory = ( category ) => {

    const validCategory = ['senior', 'hobbit'];

    if ( !validCategory.includes( category ) ) {
        throw new Error(`La categoría "${ category }" no es correcto`);
    }

    return movies.filter( movie => movie.category === category );

}
