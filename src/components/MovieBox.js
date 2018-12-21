import React, { Component } from "react";
import "./MovieBox.css";
class MovieBox extends Component {
  state = { items: [] };

  constructor(props) {
    super(props);
    var watchMovies = { items: [] };
    //this.state = { items: [] };
  }
  handleAdd(event) {
    const id = event.target.id;
    this.addToWatchList(id);
  }
  render() {
    return (
      <div
        key={this.props.movie.id}
        style={{
          width: 240,
          height: 400,
          paddingTop: 25,
          color: "#00cca3",
          float: "left"
        }}
      >
        <div className="poster">
          <img alt="poster" src={this.props.movie.poster} />
          <div className="hoverText">
            <strong>{this.props.movie.title}</strong>
            <p>{this.props.movie.overview}</p>
          </div>
        </div>
        <br />
        <center>
          <div className="title">
            {this.props.movie.title}
            <br />
            <span style={{ textAlign: "right" }}>Genres:</span>
            <span>{this.props.movie.id}</span>
            <span style={{ textAlign: "left" }}>Year:</span>
            <span>{this.props.movie.id}</span>
          </div>
        </center>
        <center>
          <div className="vote">{this.props.movie.vote_average}</div>
        </center>

        <br />
        {/* <button id={this.props.movie.id} onClick={this.handleAdd.bind(this)}>
          ADD
        </button> */}
      </div>
    );
  }
}

export default MovieBox;
