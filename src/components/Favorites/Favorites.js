import React, { Component } from 'react';
import './Favorites.css';


class Favorites extends Component {
    
    render() { 
        return (
            <div className="favorites">
                <input defaultValue="Новый список" className="favorites__name" />
                <ul className="favorites__list">
                    {this.props.selectedListFilms.map((item) => {
                        return <li key={item.imdbID}>{item.Title} ({item.Year})<button onClick={()=> this.props.deleteFilm(item.imdbID)}>x</button></li>;
                    })}
                </ul>
                <button type="button" className="favorites__save">Сохранить список</button>
            </div>
        );
    }
}
 
export default Favorites;