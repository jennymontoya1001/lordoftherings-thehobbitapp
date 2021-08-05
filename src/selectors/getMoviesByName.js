import { movies } from '../data/movies';


export const getMoviesByName = ( name = '' ) => {

    if ( name === '' ) {
        return [];
    }

    name = name.toLocaleLowerCase();
    return movies.filter( movie => movie.name.toLocaleLowerCase().includes( name )  );

}