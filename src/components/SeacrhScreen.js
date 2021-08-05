import React from 'react';
import {movies} from '../data/movies';
import { MovieCard } from './MovieCard';
import {useForm} from '../hooks/useForm';
import {useLocation} from 'react-router-dom';
import querystring from 'query-string'
import {getMoviesByName} from '../selectors/getMoviesByName';

export const SeacrhScreen = ({history}) => {

    const location = useLocation();
    const {q = ''} = querystring.parse(location.search);
    console.log(q);


  const [formValues, handleInputChange] = useForm({
      searchText: q
  })

  const {searchText} = formValues;

  const moviesFiltered = getMoviesByName(searchText);

  const handleSearch = (e) =>{
      e.preventDefault();
      history.push(`?q=${searchText}`)
  }

    return (
        <div>
             <h1>Search Screen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4> Search Form </h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input 
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            name="searchText"
                            value={searchText}
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4> Results </h4>
                    <hr />
                    {
                        moviesFiltered.map(movie => (
                            <MovieCard key={movie.id} 
                            {...movie}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
