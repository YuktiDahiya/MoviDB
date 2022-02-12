
import React from "react";
import {addFavourite, removeFromFavourites} from '../actions';



class MovieCard extends React.Component {
    handleFavouriteClick = () => {
        const {movie} = this.props;
        this.props.dispatch(addFavourite(movie))
        console.log("movie",movie);
    }
    handleUnFavouriteClick = () => {
        const {movie} = this.props;
        this.props.dispatch(removeFromFavourites(movie))
        
    }
    render() {
        return (

            <div className="movie-card">
                
                <div className="left">
                    <img alt="movie-poster" src={this.props.movie.Poster} />

                </div>
                <div className="right">
                    <div className="title">{this.props.movie.Title}</div>
                    <div className="plot">{this.props.movie.Plot}</div>
                    <div className="footer"></div>
                    <div className="rating">{this.props.movie.imdbRating}</div>
                    {
                        this.props.isFavourite
                        ?<button className="unfavourite-btn" onClick={this.handleUnFavouriteClick}>UnFavourite</button>
                        :<button className="favourite-btn" onClick={this.handleFavouriteClick}>Favourite</button>
                    }
                    

                </div>
                    
            </div>
                    

        );
    }
}

export default MovieCard;