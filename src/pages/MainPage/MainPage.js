import React, { Component } from 'react';
import './MainPage.css';
import Header from '../../components/Header/Header';
import SearchBox from '../../components/SearchBox/SearchBox';
import Movies from '../../components/Movies/Movies';
import Favorites from '../../components/Favorites/Favorites';
import { loadList, creatNewList } from "../../components/Fetch/api";

class MainPage extends Component {
    state = {
        selectedListFilms: [],
        list: [],
        searchLine: '',
        title: " ",
        listValue: "",
        turnButton: true,
        serveId: ""
    }
    searchLineChangeHandler = (e) => {
        this.setState({ searchLine: e.target.value });
    }
    searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        const slam = new FormData(e.target);
        this.setState({ searchLine: slam.get('value') });

        loadList(this.state.searchLine).then(result => {
            if (result.Response === "False") {
                alert('FalseFetch')
            } else {
                this.setState({ list: result.Search })
            }

        })
    };
    addFilmList = (id) => {
        const films = this.state.list.find((item) => {
            return item.imdbID === id
        });
        const newListFilms = [...this.state.selectedListFilms, films]
        const oneFilms = newListFilms.filter((item) => { return item.imdbID === films.imdbID })
        if (oneFilms.length === 1) {
            this.setState({ selectedListFilms: newListFilms })
        }
    }

    deleteFilm = (id) => {
        const newArr = this.state.selectedListFilms.filter((item) => {
            return item.imdbID !== id
        })
        this.setState({ selectedListFilms: newArr });
    }


    slam = () => {
        let arr = this.state.selectedListFilms.map((item) => item.imdbID)
        creatNewList(arr, this.state.listValue).then((data) => {
            this.setState({ title: this.state.listValue, turnButton: false, serveId: data.id });
        })
    }

    listContent = (value) => {
        this.setState({ listValue: value });
    }


    render() {
        const { list, searchLine } = this.state;
        const { searchLineChangeHandler, searchBoxSubmitHandler } = this;
        return (
            <div className="main-page">
                <Header />
                <main className="main-page__content">
                    <section className="main-page__main-section">
                        <div className="main-page__search-box">
                            <SearchBox list={list}
                                searchLine={searchLine}
                                ChangeHandler={searchLineChangeHandler}
                                SubmitHandler={searchBoxSubmitHandler} />
                        </div>
                        <div className="main-page__movies">
                            <Movies listProps={list}
                                addFilmList={this.addFilmList}
                                turnButton={this.state.turnButton} />
                        </div>
                    </section>
                    <aside className="main-page__favorites">
                        <Favorites selectedListFilms={this.state.selectedListFilms}
                            deleteFilm={this.deleteFilm}
                            addNewList={this.addNewList}
                            slam={this.slam}
                            listContent={this.listContent}
                            title={this.state.title}
                            turnButton={this.state.turnButton}
                            sala={this.sala}
                            serveId={this.state.serveId} />
                    </aside>
                </main>
            </div>
        );
    }
}

export default MainPage;