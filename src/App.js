import React from 'react';
import './App.css';
import AddMeme from './AddMeme';
import MemeList from './MemeList';


export default function App() {
  return (
    <div className="App">
      <AddMeme/>
      <MemeList />
    </div>
  );
}


