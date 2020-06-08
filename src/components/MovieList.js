import React from 'react';
import { Link } from "react-router-dom";

const MovieList = ({movies}) => {
    
    const image = movie => movie.poster_path ? 
        `https://image.tmdb.org/t/p/w200${movie.poster_path}` : 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQV6FXfa9Qtj8Ns-ZtGZvV7yQWnlmvmzysk0GSWPhbrq332oAE-&usqp=CAU';
     
    return (
        <div className="row">
            {movies.map(movie => 
                <Link to={{
                        pathname: `/movieInfo/${movie.id}`, 
                        state: { movie }
                    }} 
                        id={movie.id} 
                        key={movie.id} 
                        className="card col-md-2 m-3"
                        style={{ textDecoration: 'none'}}
                    >
                    <img 
                        src={image(movie)}
                        className="card-img-top card-img" 
                        alt={movie.title} 
                        style={{ height: 230}}
                    />
                    <div className="card-body">
                        <h6 className="text-secondary">
                            {movie.title} ({movie.release_date.substring(0, 4)})
                        </h6>
                    </div>
                </Link>
            )}
        </div>
    )
}

export default MovieList;
