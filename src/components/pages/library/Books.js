import React, { useState, Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../../actionMethods/bookActionMethods";
import Layout from "../Layout";
import Book from "./Book";
import BookGrid from "./BookGrid";
import Loading from "../../commons/Loading";
import SelectClasses from "../../commons/SelectClasses";

function Books() {
  const state = useSelector((state) => state.book);
  const dispatch = useDispatch();
  const [Name, setName] = useState("");
  const [view, setView] = useState("grid");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (state.books.length === 0) {
      //console.log("dispatch(fetchBooks())")
      dispatch(fetchBooks());
    }
  }, []);

  const showCollegeBooksListView = () => {
    console.log("state=", state);
    return (
      <Fragment>
        {state.loading ? (
          <Loading text="Retriving Books..." />
        ) : (
          state.books &&
          state.books.length > 0 &&
          state.books.map((book) => <Book key={book.BookID} book={book} />)
        )}
      </Fragment>
    );
  };

  const showCollegeBooksGridView = () => {
    return (
      <Fragment>
        {state.loading ? (
          <Loading text="Retriving Books..." />
        ) : (
          <BookGrid books={state.books} />
        )}
      </Fragment>
    );
  };

  const searchBook = (e) => {
    e.preventDefault();
    const newArray = state.books.filter((book) => book.Title.includes(Name));
    setSearchResult(newArray);
  };

  const showSearchResult = () => {
    return (
      <Fragment>
        {searchResult === null || searchResult.length === 0
          ? ""
          : searchResult &&
            searchResult.length > 0 &&
            searchResult.map((book) => <Book key={book.BookID} book={book} />)}
      </Fragment>
    );
  };
  const showSearchResultHeader = () => {
    return (
      <Fragment>
        {searchResult === null || searchResult.length === 0 ? (
          ""
        ) : (
          <h6>
            Search Result: {searchResult.length} record
            {searchResult.length > 1 ? "s" : ""} found.
          </h6>
        )}
      </Fragment>
    );
  };

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
                <div className="input-group-text">Search</div>
              </div>
              <input
                type="text"
                className="form-control"
                id="user_name"
                name="user_name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                minLength="4"
                placeholder="Enter title of the book to search (at least four alphabets)"
                required
              />
              <button
                type="submit"
                className="btn btn-primary btn-outline ml-1"
              >
                Go
              </button>
              <button
                type="button"
                className="btn btn-primary btn-outline ml-1"
                onClick={clearSearchResult}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  };

  const handleClassesOnChange = (selectedOptions) => {
    if (selectedOptions == null) {
      setSearchResult([]);
      return;
    }
    //console.log("selected depts ", selectedOptions);
    setName("");
    const filteredArray = state.books.filter((array) =>
      selectedOptions.some((filter) => filter.value === array.CategoryID)
    );

    setSearchResult(filteredArray);
  };

  const showLibraryPosition = () => (
    <Fragment>
      {/* <strong className="mt-2">Library Position:</strong> */}
      <table className="table table-bordered table-hover mt-2">
        <thead>
          <tr className="table-success">
            <th scope="col">Name of the Subject</th>
            <th scope="col" className="text-center">
              Text Books
            </th>
            <th scope="col" className="text-center">
              Reference Books
            </th>
            <th scope="col" className="text-center">
              No. of Journals
            </th>
            <th scope="col" className="text-center">
              TOTAL BOOKS
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>English</td>
            <td className="text-center">201</td>
            <td className="text-center">27</td>
            <td className="text-center">3</td>
            <td className="text-center">231</td>
          </tr>
          <tr>
            <td>Odia</td>
            <td className="text-center">272</td>
            <td className="text-center">510</td>
            <td className="text-center">0</td>
            <td className="text-center">782</td>
          </tr>
          <tr>
            <td>Political Science</td>
            <td className="text-center">644</td>
            <td className="text-center">787</td>
            <td className="text-center">0</td>
            <td className="text-center">1431</td>
          </tr>
          <tr>
            <td>History</td>
            <td className="text-center">649</td>
            <td className="text-center">883</td>
            <td className="text-center">2</td>
            <td className="text-center">1534</td>
          </tr>

          <tr>
            <td>Economics</td>
            <td className="text-center">95</td>
            <td className="text-center">337</td>
            <td className="text-center">3</td>
            <td className="text-center">435</td>
          </tr>

          <tr>
            <td>Education</td>
            <td className="text-center">25</td>
            <td className="text-center">16</td>
            <td className="text-center">0</td>
            <td className="text-center">41</td>
          </tr>

          <tr>
            <td>Env. Studies </td>
            <td className="text-center">111</td>
            <td className="text-center">115</td>
            <td className="text-center">0</td>
            <td className="text-center">226</td>
          </tr>
          <tr>
            <td>Miscellanies</td>
            <td className="text-center">0</td>
            <td className="text-center">7</td>
            <td className="text-center">0</td>
            <td className="text-center">7</td>
          </tr>
        </tbody>

        <tfoot style={{ fontWeight: "bold" }}>
          <tr>
            <td className="text-center">GRAND TOTAL</td>
            <td className="text-center">1997</td>
            <td className="text-center">2682</td>
            <td className="text-center">8</td>
            <td className="text-center">4687</td>
          </tr>
        </tfoot>
      </table>
    </Fragment>
  );

  const showLibraryContent = () => {
    return (
      <div className="row m-2 p-2">
        <div className="col-lg-1 col-xs-12"></div>
        <div className="col-lg-10 col-xs-12">
          <div className="row">
            <div className="col-lg-6 col-xs-12 text-justify mt-2">
              <img
                class="img img-responsive img-fluid d-block m-0 p-0 rounded mb-2"
                src="./slides/slide_5_college_library.jpg"
                alt="Library of the College"
              ></img>
              <p>
                Anchalika Degree College <b>Library</b> provides a large number
                of services to its community such as circulation of books,
                newspaper clippings, photocopying services, printing facility,
                information display, display of new arrivals etc.
              </p>
              <p>
                Current as well as back volumes of newspapers, magazines and
                periodicals are available in this section. Readers have open
                access to these materials for reading and reference only we have
                been preserving back issues of important dailies. Popular
                magazines are kept in the general section and subject journals
                in the reference hall.
              </p>
              <p>
                Reference section;The documents which are available in this
                section are meant for reference only.No books are lent out from
                this section.
              </p>
              <p>
                Internet facilities are also available in the library and are
                open to all the members of the library
              </p>
            </div>
            <div className="col-lg-6 col-xs-12">{showLibraryPosition()}</div>
          </div>
        </div>
        <div className="col-lg-1 col-xs-12"></div>
      </div>
    );
  };
  return (
    <Layout title="College Library">
      {showLibraryContent()}
      {/* <div className="row">
        <div className="col-lg-6 col-xs-12"></div>
        <div className="col-lg-6 col-xs-12">{showSearchForm()}</div>
      </div>
      <div
        className="row m-1 p-1 bg-adc"
        style={{
          display:
            searchResult !== null && searchResult.length > 0 ? "" : "none",
        }}
      >
        {showSearchResultHeader()}
      </div>
      <div
        className="row m-1 p-1 bg-adc"
        style={{
          display:
            searchResult !== null && searchResult.length > 0 ? "" : "none",
        }}
      >
        {showSearchResult()}
      </div>
      <div className="row m-1 p-1">
        {view === "list"
          ? showCollegeBooksListView()
          : showCollegeBooksGridView()}
      </div> */}
    </Layout>
  );
}

export default Books;
