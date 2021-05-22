import React, { Component } from 'react';
import './Favorites.css';
import { Link } from "react-router-dom";


class Favorites extends Component {

    render() {
        return (
            <div className="favorites">
                <input defaultValue="Новый список" className="favorites__name" />
                <ul className="favorites__list">
                    {this.props.selectedListFilms.map((item) => {
                        return <li key={item.imdbID}>{item.Title} ({item.Year})<button onClick={() => this.props.deleteFilm(item.imdbID)}>x</button></li>;
                    })}
                </ul>
                <button type="button" className="favorites__save" onClick={this.props.slam}>Сохранить список</button><br/><br/>
                <Link to="/list/:id">Ссылка на список</Link>
            </div>
        );
    }
}

export default Favorites;