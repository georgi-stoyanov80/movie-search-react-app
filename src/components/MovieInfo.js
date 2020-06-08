import React from 'react';

const MovieInfo = props => {
    let { poster_path,
          title, 
          vote_average, 
          release_date, 
          original_language, 
          popularity, 
          overview 
        } = props.location.state.movie;

    let image = poster_path ? 
    `https://image.tmdb.org/t/p/w300${poster_path}` : 
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQV6FXfa9Qtj8Ns-ZtGZvV7yQWnlmvmzysk0GSWPhbrq332oAE-&usqp=CAU';

    return (
        <div className="row mt-5">
            <div className="col-md-5 text-center">
                <img src={image} alt={title} />
            </div>
            <div className="col-md-7">
                <ul className="list-group">
                    <li className="list-group-item text-center">
                        <h3>{title}</h3>
                        <span className="badge badge-warning">{vote_average}</span>
                    </li>
                    <li className="list-group-item">
                        <b>Release Date:</b> {release_date}
                    </li>
                    <li className="list-group-item">
                        <b>Language:</b> {original_language}
                    </li>
                    <li className="list-group-item">
                        <b>Popularity:</b> {popularity}
                    </li>
                    <li className="list-group-item">
                        {overview}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MovieInfo;
