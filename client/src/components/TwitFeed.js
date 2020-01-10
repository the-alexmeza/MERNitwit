import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Twit = props => (
  <div className={props.twit.hidden ? 'container-hidden' : ''}>
    <div className="container">
      <h4>{props.twit.author}</h4>
      <hr />
      <p>{props.twit.body}</p>
      <Link to={"/edit"+props.twit._id}>Edit</Link>
    </div>
    <br />
  </div>
)

export default class TwitFeed extends Component {
  constructor(props) {
    super(props);

    this.state = {twits:[]};
  }

  componentDidMount() {
    axios.get('http://localhost:4000/twits/')
      .then(res => {
        this.setState({ twits: res.data });
      })
      .catch(function(err) {
        console.log(err);
      })
  }

  twitList() {
    return this.state.twits.map(function(currentTwit, i) {
      return <Twit twit={currentTwit} key={i} />;
    })
  }

  render() {
    return (
      <div>
        <h3>TwitFeed</h3>
        <hr />
          { this.twitList() }
      </div>
    )
  }
}
