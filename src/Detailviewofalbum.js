import React from 'react';

function DetailView({ item }) {
  return (
    <div className="detail-view">
      <img src={item.image} alt={item.name} />
      <h2>{item.albumTitle}</h2>
      <p>{item.favorite}</p>
      <p>{item.description}</p>
      
      <h3>Songs</h3>
      <ul>
        {item.songs.map((song, index) => (
          <li key={index}>
            <img src={song.image} alt={song.title} />
            <h4>{song.title}</h4>
            <button>Play</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DetailView;
