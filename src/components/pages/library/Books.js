import React, { useState, Fragment, useEffect } from 'react';
import NumberCounter from 'number-counter';
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from '../../../actionMethods/bookActionMethods';
import Layout from '../Layout';
import Book from './Book';
import BookGrid from './BookGrid';
import Loading from '../../commons/Loading';
import SelectClasses from '../../commons/SelectClasses';

function Books() {
    const state = useSelector(state => state.book);
    const dispatch = useDispatch();
    const [Name, setName] = useState("");
    const [view, setView] = useState('grid');
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        if (state.books.length === 0) {
            //console.log("dispatch(fetchBooks())")
            dispatch(fetchBooks());
        }
    }, [])

    const showCollegeBooksListView = () => {
        console.log("state=", state);
        return (
            <Fragment>
                {state.loading ?
                    (<Loading text="Retriving Books..." />)
                    :
                    (
                        state.books && state.books.length > 0 &&
                        state.books.map(book => <Book key={book.BookID} book={book} />)
                    )
                }
            </Fragment >
        )
    }

    const showCollegeBooksGridView = () => {
        return (
            <Fragment>
                {state.loading ?
                    (<Loading text="Retriving Books..." />)
                    :
                    (
                        <BookGrid books={state.books} />
                    )
                }
            </Fragment >
        )
    }

    const searchBook = (e) => {
        e.preventDefault();
        const newArray = state.books.filter(book => book.Title.includes(Name));
        setSearchResult(newArray);
    };

    const showSearchResult = () => {
        return (
            <Fragment>
                {searchResult === null || searchResult.length === 0 ?
                    ('')
                    :
                    (
                        searchResult && searchResult.length > 0 &&
                        searchResult.map(book => <Book key={book.BookID} book={book} />)
                    )
                }
            </Fragment >
        )
    }
    const showSearchResultHeader = () => {
        return (
            <Fragment>
                {searchResult === null || searchResult.length === 0 ?
                    ('')
                    :
                    (
                        <h6>Search Result: {searchResult.length}  record{searchResult.length > 1 ? 's' : ''} found.</h6>
                    )
                }
            </Fragment >
        )
    }

    const clearSearchResult = () => {
        setName("");
        setSearchResult([]);
    };

    const showSearchForm = () => {
        return (
            <form onSubmit={searchBook}>
                <div className="col-lg-12">
                    <div className="form-group">
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    Search
                            </div>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                id="user_name"
                                name="user_name"
                                value={Name}
                                onChange={(e) => setName(e.target.value)}
                                minLength="4"
                                placeholder="Enter title of the book to search (at least four alphabets)" required />
                            <button type="submit" className="btn btn-primary btn-outline ml-1">Go</button>
                            <button type="button" className="btn btn-primary btn-outline ml-1" onClick={clearSearchResult}>Clear</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    };

    const handleClassesOnChange = selectedOptions => {

        if (selectedOptions == null) {
            setSearchResult([]);
            return;
        }
        //console.log("selected depts ", selectedOptions);
        setName('');
        const filteredArray = state.books.filter(array =>
            selectedOptions.some(filter => filter.value === array.CategoryID)
        );

        setSearchResult(filteredArray);
    };

    return (
        <Layout title="College Library Books">
            {/* <div className="row">
                <div className="col-lg-6 col-xs-12">
                   
                </div>
                <div className="col-lg-6 col-xs-12">
                    {showSearchForm()}
                </div>
            </div>
            <div className="row m-1 p-1 bg-adc" style={{ display: searchResult !== null && searchResult.length > 0 ? '' : 'none' }}>
                {showSearchResultHeader()}
            </div>
            <div className="row m-1 p-1 bg-adc" style={{ display: searchResult !== null && searchResult.length > 0 ? '' : 'none' }}>
                {showSearchResult()}
            </div> */}
            <div className="row m-1 p-1">
                {view === 'list' ? (showCollegeBooksListView()) : (showCollegeBooksGridView())}
            </div>
        </Layout>
    );
}

export default Books;