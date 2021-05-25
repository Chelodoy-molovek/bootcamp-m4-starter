import React, { Component } from 'react';
import './Favorites.css';
import { Link } from "react-router-dom";


class Favorites extends Component {

    render() {
        return (
            <div className="favorites">
                <input defaultValue="Новый список" disabled={!this.props.turnButton} onChange={(e) => this.props.listContent(e.target.value)} className="favorites__name" placeholder="Название списка" />
                <ul className="favorites__list">
                    {this.props.selectedListFilms.map((item) => {
                        return <li key={item.imdbID}>{item.Title} ({item.Year}){this.props.turnButton && <button onClick={() => this.props.deleteFilm(item.imdbID)}>x</button>}</li>;
                    })}
                </ul>
                {this.props.turnButton && <button type="button" className="favorites__save" onClick={this.props.slam}>Сохранить список</button>}<br /><br />
                {!this.props.turnButton && <a>Ссылка на ваш список: </a>}
                <Link to={`/list/${this.props.serveId}`} >{this.props.title !== "" ? this.props.title : "Без названия" }</Link>
            </div>
        );
    }
}

export default Favorites;