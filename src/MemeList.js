import React, { Component } from 'react';
import { connect } from 'react-redux';
import Meme from './Meme';

class MemeList extends Component {
  render() {
    return (
      <div>
        {this.props.memes.map(meme =>
          <Meme top={meme.top} bottom={meme.bottom} id={meme.id} key={meme.id} img={meme.img} />
        )}
      </div>
    )
  }
}
function mapStateToProps(state) {
  return { memes: state.memes }
}


export default connect(mapStateToProps)(MemeList);
