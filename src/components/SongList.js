import React, { useState } from "react";
import { v4 } from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {

  const [songs, setSongs ] = useState([
    { title: 'Almost Home', id: 1},
    { title: 'Memory Gospel', id: 2 },
    { title: 'This Wild Darkness', id: 3}
  ]);

  const addSong = (title) => {
    setSongs([...songs, { title, id: v4() }]);
  };

  return (
    <div>
      <ul>
        {songs.map(song => {
          return ( <li key={song.id}>{song.title}</li> );
        })}
      </ul>
      <NewSongForm addSong={addSong}/>
    </div>
  );
};

export default SongList;