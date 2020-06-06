import React, { Component, Fragment } from "react";
import Post from "../Presentational/Post";
import titles from "../Store";

import "../Styles/ContainerStyles/ViewPostPage.css";

const axios = require("axios");
var moment = require("moment");

const mystyle = {
    color : 'white'
}

export class ViewPostPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {},
    };
  }

  componentWillMount() {
    const url_string = "http://localhost:8000/s/postbytitle";
    // retrive from your store
    let title_string_payload = titles[0].title;
    console.log(title_string_payload);

    // create a payload
    const post_request_payload = {
      title: title_string_payload,
    };
    // make request
    axios
      .post(url_string, post_request_payload)
      .then((res) => {
        this.setState({
          post: res.data.message,
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
        console.log();
      });

    // render the ui
  }

  render() {
    console.log(this.state.post)
    return (
      <div style = {{display: 'flex', flexDirection: 'column'}}>
        <div className="vpp_post_container">
          <div className = "part_one">
            <a className="text_styles" style = {mystyle}>{this.state.post.PostTitle}</a>
            <div className = "time_stamp">{moment(this.state.post.CreatedAt).fromNow()}</div>
          </div>
          <div className = "vpp_content">{this.state.post.PostContent}</div>
        </div>
        <div className = "vpp_comments_container">
            comments
        </div>
      </div>
    );
  }
}

export default ViewPostPage;
