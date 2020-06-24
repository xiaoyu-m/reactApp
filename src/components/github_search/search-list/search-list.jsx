import React, { Component } from "react";
import PropTypes from "props-type";
class SearchList extends Component {
  static propTypes = {
    songs: PropTypes.array,
  };

  render() {
    const { songs } = this.prop;
    return (
      <div className="songs-list">
        <ul>
          {songs.map((song, index) => (
            <li key={index}>
              <p>
                <img src={song.artists[0].img1v1Url} alt={song.name} />
              </p>
              <p>{song.name}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SearchList;
