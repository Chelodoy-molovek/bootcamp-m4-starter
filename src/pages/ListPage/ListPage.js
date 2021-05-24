import React, { Component } from 'react';
import './ListPage.css';
import { loadId, renderingList } from "../../components/Fetch/api"
import { Link } from "react-router-dom";
class ListPage extends Component {
    state = {
        fetchId: "1",
        movies: [
            { title: 'The Godfather', year: 1972, imdbID: 'tt0068646' }
        ]
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        loadId(id).then(data => this.setState({ fetchId: data }))
    }
    componentDidUpdate(props, state) {
        if (state.fetchId !== this.state.fetchId) {
            console.log(this.state.fetchId.movies)
            renderingList(this.state.fetchId.movies).then(data => this.setState({ movies: data }))
        }
    }

    render() {
        const { movies } = this.state;
        return (
            <div className="list-page">
                <Link to={`/`} >Домой</Link>
                <h1 className="list-page__title">{this.state.fetchId.title}</h1>
                <ul>
                    {movies.map((item) => {
                        return (
                            <li key={item.imdbID}>
                                <div><img src={item.Poster} /></div>
                                <a href={`https://www.imdb.com/title/${item.imdbID}`} target="_blank">{item.Title} ({item.Year})</a>
                            </li>
                        );
                    })}
                </ul>

            </div>
        );
    }
}

export default ListPage;