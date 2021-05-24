import React, { Component } from 'react';
import './SearchBox.css';
class SearchBox extends Component {


    render() {
        const { ChangeHandler, SubmitHandler, searchLine } = this.props;
        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={(e) => SubmitHandler(e)}>
                    <label className="search-box__form-label">
                        Искать фильм по названию:
                        <input
                            value={searchLine}
                            type="text"
                            name="value"
                            className="search-box__form-input"
                            placeholder="Например, Shawshank Redemption"
                            onChange={ChangeHandler}
                        />
                    </label>
                    <button
                        type="submit"
                        className="search-box__form-submit"
                        disabled={!searchLine}
                    >
                        Искать
                    </button>
                </form>
            </div>
        );
    }
}

export default SearchBox;