import React from 'react';
import { useGlobalContext } from './Context';

const Movies = () => {
    const {movie, isLoading} = useGlobalContext();

    if(isLoading){
        return(
            <div className="loading">
                <h2>Loading...</h2>
            </div>
        );
    }

    // else condition
    return (
        <div className="movie-page">
            { movie ?
                movie.map((curMovie)=>{
                    const { Title, Poster} = curMovie;
                    return( 
                        <div className="box">
                            <div className="inner-box">
                                <h2>
                                    {Title}
                                </h2>
                                <img src={Poster} alt="movie-logo" className="poster"/>
                            </div>
                        </div>
                    );
                }) 
                : <h2 className="blank">"Please Enter Movie Name"</h2>
            }
        </div>
    );  
};

export default Movies;