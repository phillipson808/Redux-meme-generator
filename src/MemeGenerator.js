import React, { Component } from 'react'
import AddMeme from './AddMeme';
import MemeList from './MemeList';

export default class MemeGenerator extends Component {
  render() {
    return (
      <div>
        <h1>Meme Generator</h1>
        <AddMeme/>
        <MemeList />
      </div>
    )
  }
}
