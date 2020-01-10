import React, { Component } from 'react';
import axios from 'axios';

export default class EditTwit extends Component {
  constructor(props) {
    super(props);

    this.onChangeTwitBody = this.onChangeTwitBody.bind(this);
    this.onChangeTwitAuthor = this.onChangeTwitAuthor.bind(this);

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
    console.log(`Twit Body: ${this.state.body}`);
    console.log(`Twit Author: ${this.state.author}`);

    // const newTwit = {
    //   body: this.state.body,
    //   author: this.state.author,
    //   hidden: this.state.hidden,
    //   likes: this.state.likes
    // };
    //
    // axios.post('http://localhost:4000/twits/post') // TODO: Use config variables
    //   .then(res => console.log(res.data));

    // TODO: find out how to flash success message

    this.setState({
      body: '',
      author: '',
    })
  }

  render() {
    return (
      <div>
        <h3>Edit Twit</h3>
      </div>
    )
  }
}
