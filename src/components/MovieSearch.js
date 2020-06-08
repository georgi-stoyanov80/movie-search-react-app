import React from 'react';

const MovieSearch = ({getMovieData, getInputValue}) => {
    return (
        <form onSubmit={getMovieData} className="mt-3">
            <div className="input-group">
                <input 
                    onChange={getInputValue} 
                    type="text" 
                    className="form-control" 
                    placeholder="Movie Search" 
                    aria-describedby="button-addon" 
                />
                <div className="input-group-append">
                    <button
                        className="btn btn-secondary btn-submit" 
                        type="submit" 
                        id="button-addon">Search
                    </button>
                </div>
            </div>
        </form>
    )
};

export default MovieSearch;
