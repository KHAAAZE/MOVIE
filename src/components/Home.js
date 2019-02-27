import React, { Component } from "react";
import fire from "../config/fire";
import $ from "jquery";
import MovieRow from "./MovieRows";
import "bootstrap/dist/css/bootstrap.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.performSearch("A");
  }

  logout = () => {
    fire.auth().signOut();
  };
  performSearch(searchTerm) {
    const urlString =
      "https://api.themoviedb.org/3/search/movie?api_key=b9e6a9add75ed4c519142886d87db870&query=" +
      searchTerm;

    $.ajax({
      url: urlString,
      success: searchResults => {
        console.log("Fetched data successfully");
        // console.log(searchResults)
        const results = searchResults.results;
        // console.log(results[0])

        var movieRows = [];

        results.forEach(movie => {
          movie.poster_src =
            "https://image.tmdb.org/t/p/w185" + movie.poster_path;
          // console.log(movie.poster_path)
          const movieRow = <MovieRow key={movie.id} movie={movie} />;
          movieRows.push(movieRow);
        });

        this.setState({ rows: movieRows });
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data");
      }
    });
  }

  searchChangeHandler(event) {
    console.log(event.target.value);
    const boundObject = this;
    const searchTerm = event.target.value;
    boundObject.performSearch(searchTerm);
  }

  render() {
    return (
      <div className="App">
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="sample" width="80" src="green_app_icon.svg" />
              </td>
              <td width="8" />
              <td>
                <h1 className="movieDB">MovieDB Search</h1>
              </td>
              <td />
              <td className="buttonGap" />
              <td>
                <button className="btn btn-danger m-3" onClick={this.logout}>
                  Logout
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <input
          className="searchBox"
          onChange={this.searchChangeHandler.bind(this)}
          placeholder="Enter Movie Title"
        />
        {this.state.rows}
        <footer className="footer">
          <table>
            <tbody>
              <tr>
                <td>
                  <img alt="sample" width="200" src="green_app_icon.svg" />
                </td>
                <td width="8" />
                <td>
                  <h1 className="movieDB">MovieDB Search</h1>
                </td>
                <td />
              </tr>
            </tbody>
          </table>
        </footer>
      </div>
    );
  }
}

export default Home;
