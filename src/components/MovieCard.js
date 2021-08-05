import React from 'react'
import {Link} from 'react-router-dom';

export const MovieCard = ({
    id,
    name,
    category,
    description
}) => {
    return (
        <div>
            <div className="card ms-3 animate__animated animate__fadeIn" style={{ maxWidth: 540 }}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={`./assets/movies/${id}.jpg`} className="card-img" alt={name} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <Link to={`./movie/${id}`}>
                                Más...
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
