import React, { Component } from 'react';
import axios from 'axios';

export default class PostTwit extends Component {
  constructor(props) {
    super(props);

    this.onChangeTwitBody = this.onChangeTwitBody.bind(this);
    this.onChangeTwitAuthor = this.onChangeTwitAuthor.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = { // TODO: this might override the default declared in models/Twit.js
      body: '',
      author: '',
    }
  }

  onChangeTwitBody(e) {
    this.setState({
      body: e.target.value
    });
  }

  onChangeTwitAuthor(e) {
    this.setState({
      author: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(`Twit Author: ${this.state.author}`);
    console.log(`Twit Body: ${this.state.body}`);

    var author_switch = this.state.author;
    if (author_switch==='') {
      author_switch = 'Anon';
    }

    const newTwit = {
      body: this.state.body,
      author: author_switch,
      hidden: this.state.hidden,
      likes: this.state.likes
    };

    axios.post('http://localhost:4000/twits/post', newTwit) // TODO: Use config variables
      .then(res => console.log(res.data));

    // TODO: find out how to flash success message

    this.setState({
      body: '',
      author: '',
    })
  }

  render() {
    return (
      <div>
        <h3>Post Twit</h3>
        <br />
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Author: (optional) </label>
            <input type="text" className="form-control"
              value={this.state.author} onChange={this.onChangeTwitAuthor} />
          </div>
          <div className="form-group">
            <label>Message: </label>
            <textarea id="body" maxLength="144" autoFocus className="form-control"
              onChange={this.onChangeTwitBody} value={this.state.body} required />
          </div>
          <div className="form-group">
            <input type="submit" value="Post" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
