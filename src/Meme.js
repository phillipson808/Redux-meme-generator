import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Meme.css';


class Meme extends Component {
  constructor(props) {
    super(props);
    this.remove = this.remove.bind(this);
  }

  remove() {
    this.props.dispatch({ type: 'REMOVE', payload: this.props.id });
  }

  render() {
    return (
      <div>
        <div className='meme' style={{ backgroundImage: `url(${this.props.img})` }}>
          <p className='top'>{this.props.top}</p>
          <p className='bottom'>{this.props.bottom}</p>
        </div>
        <button onClick={this.remove}>Remove</button>
      </div>
    )
  }
}

export default connect()(Meme);
