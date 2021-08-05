import React, {useMemo} from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getMovieById } from '../selectors/getMovieById';

export const MovieScreen = ({history}) => {

    const { id } = useParams();
    console.log(id);

    const movie = useMemo(() => getMovieById(id), id);
    console.log(movie);

    const { name, category, description } = movie;

    if (!movie) {
        return <Redirect to="/" />
    }
    const handleReturn = () =>{
        history.goBack();
    }

    return (
        <div>
            <div className="row mt-5">
                <div className="col-4">
                    <img
                        src={`../assets/movies/${id}.jpg`}
                        alt=""
                        className="img-thumbnail animate__animated animate__fadeInLeft"
                    />
                </div>

                <div className="col-8 animate__animated animate__fadeIn">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"> <b> Name: </b>{name} </li>
                        <li className="list-group-item"> <b> Description: </b>{description} </li>
                    </ul>

                    <button
                        className="btn btn-outline-info"
                        onClick={handleReturn}
                    >
                        Return
                    </button>

                </div>

            </div>
        </div>
    )
}
