import React, { Component, Fragment } from "react";
import Post from "../Presentational/Post";

const axios = require("axios");

export class HomeFeedPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
    this.getFeed = this.getFeed.bind(this);
  }

  getFeed() {
    const url_string = "http://localhost:8000/s/feed/1366/";

    axios
      .post(url_string)
      .then((res) => {
        // handle success
        this.setState({
          posts: res.data.message
        });
        // console.log(this.state.posts[0].ceo_name);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
        console.log();
      });

  }

  render() {

    return (
      <div>
          <button onClick = {this.getFeed}>refresh</button>
          <Fragment>
        {this.state.posts.map((post) => (
          <Post key = {post.title} postData={post} />
        ))}
        </Fragment>
      </div>
    );
  }
}

export default HomeFeedPost;
// const resDate = response.data.message[0].CreatedAt
// console.log("dateeee", moment(resDate).fromNow())
