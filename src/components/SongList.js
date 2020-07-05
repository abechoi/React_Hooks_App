import React, { useState } from "react";
import { v4 } from 'uuid';

const SongList = () => {

  const [songs, setSongs ] = useState([
    { title: 'Almost Home', id: 1},
    { title: 'Memory Gospel', id: 2 },
    { title: 'This Wild Darkness', id: 3}
  ]);

  const addSong = () => {
    setSongs([...songs, { title: 'new song', id: v4() }]);
  };

  return (
    <div>
      <ul>
        {songs.map(song => {
          return ( <li key={song.id}>{song.title}</li> );
        })}
      </ul>
      <button onClick={addSong}>Add Song</button>
    </div>
  );
};

export default SongList;