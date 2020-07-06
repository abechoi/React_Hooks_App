import React, { useState, useEffect } from "react";
import { v4 } from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {

  const [songs, setSongs ] = useState([
    { title: 'Almost Home', id: 1},
    { title: 'Memory Gospel', id: 2 },
    { title: 'This Wild Darkness', id: 3}
  ]);

  const [age, setAge] = useState(20);

  const addSong = (title) => {
    setSongs([...songs, { title, id: v4() }]);
  };

  useEffect(() => {
    console.log('useEffect hook run', songs);
  }, [songs]);

  useEffect(() => {
    console.log('useEffect hook run', age);
  }, [age]);

  return (
    <div>
      <ul>
        {songs.map(song => {
          return ( <li key={song.id}>{song.title}</li> );
        })}
      </ul>
      <NewSongForm addSong={addSong}/>
      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
    </div>
  );
};

export default SongList;