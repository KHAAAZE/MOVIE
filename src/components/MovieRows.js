import React from "react";
import "bootstrap/dist/css/bootstrap.css";

class MovieRow extends React.Component {
  viewMovie() {
    // console.log("Trying to view movie")
    // console.log(this.props.movie.title)
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
    window.location.href = url;
  }

  render() {
    return (
      <div className="col-sm-offset-1">
        <div className="box">
          <div className="bolt-post">
            <table key={this.props.movie.id}>
              <tbody>
                <tr>
                  <td className="posterRow">
                    <img
                      className="poster"
                      alt="poster"
                      src={this.props.movie.poster_src}
                    />
                  </td>
                  <td>
                    <p className="movieTitle"> {this.props.movie.title}</p>
                    <p className="movieOverview">{this.props.movie.overview}</p>
                    <input
                      className="btn btn-primary btn-sm"
                      onClick={this.viewMovie.bind(this)}
                      value="View"
                    />
                    <input
                      className="btn btn-success btn-sm ml-2"
                      onClick={this.viewMovie.bind(this)}
                      value="Download"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieRow;
