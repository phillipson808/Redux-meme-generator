import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddMeme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: '',
      bottom: '',
      img: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }


  handleSubmit(evt) {
    evt.preventDefault();
    this.props.dispatch({type: 'ADD', payload: this.state});
  }


  render() {
    return (
      <div>
        <h1>Meme Form</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <label htmlFor="top">Top Text: </label>
          <input id="top" name="top"
            value={this.state.top}
            onChange={this.handleChange}
            placeholder="Top Text"
            required />

          <label htmlFor="bottom"> Bottom Text: </label>
          <input id="bottom" name="bottom"
            value={this.state.bottom}
            onChange={this.handleChange}
            placeholder="Bottom Text"
            required />

          <label htmlFor="img"> Img Url: </label>
          <input id="img" name="img"
            value={this.state.img}
            onChange={this.handleChange}
            placeholder="Img Url"
            required />
          <button>Make Meme</button>
        </form>
      </div>
    )
  }
}



export default connect()(AddMeme);
