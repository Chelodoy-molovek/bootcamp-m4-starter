import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';

class Movies extends Component {

    render() {
        return (
            <ul className="movies">
                {this.props.listProps.map((movie) => (
                    <li className="movies__item" key={movie.imdbID}>
                        <MovieItem {...movie} addFilmList={this.props.addFilmList} turnButton={this.props.turnButton} />
                    </li>
                ))}
            </ul>
        );
    }
}

export default Movies;