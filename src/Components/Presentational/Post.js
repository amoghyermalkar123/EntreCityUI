import React from "react";
import { HashRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

// custom components
import Upvote from "../../Assets/upvote.png";
import Downvote from "../../Assets/downvote.png";
import Comment from "../../Assets/comment.png";
import titles from "../Store";
import communityName from "../Store";

//custom css
import "../../App.css";
import "../../Assets/Colors.css";
import "../../Assets/svg.css";

//third party css
import "bootstrap/dist/css/bootstrap.min.css";
var moment = require("moment");

function Post(props) {
  const history = useHistory();

  function handlePostPageRoute() {
    titles[0].title = props.postData.title 
    let temp = props.postData.title
    let path = `/home/post/view/${temp}`
    history.push(path)
  }

  function handleCommunityPageRoute() {
    communityName[0].community_name = props.postData.community_name
    let tempp = props.postData.community_name
    let pathh = `/com/${tempp}`
    history.push(pathh)
  }

  function handleStartupPageRoute () {
    let temppp = props.postData.startup_name
    let pathhh = `/${temppp}`
    history.push(pathhh)

  }

  return (
    <div>
      {/* {setpostKey("rima-is-amazing")} */}
      <div class="post">
        <div
          class="vote_class"
          style={{
            width: "40px",
            borderLeft: "4px solid transparent",
            background: "#1A1A1B",
          }}
        >
          <div class="upvote_button">
            <img src={Upvote}></img>
          </div>
          <div class="vote_count">10</div>
          <div class="downvote_button">
            <img src={Downvote}></img>
          </div>
        </div>
        <div class="post_content" style={{ background: "#1A1A1B" }}>
          <div class="content_container">
            <div class="content">
              <div class="post_title">
                <a class="titletext" onClick={handlePostPageRoute}>
                  <h3 class="titleactul">
                    {props.postData.title}
                  </h3>
                </a>
              </div>
              <div class="info_container">
                <div class="comm_name">
                  <a class="community_name_text" onClick={handleCommunityPageRoute}>
                    {props.postData.community_name}
                  </a>
                </div>
                <span class="spanner"> . </span>
                <div class="startup_name_div">
                  <span class="posted_by">Posted by</span>
                  <div class="strartup_name_cont">
                    <a class="startup_name_text" onClick = {handleStartupPageRoute}>
                      {props.postData.startup_name}
                    </a>
                  </div>
                  <span>.</span>
                  <a class="post_time">
                    {moment(props.postData.created_at).fromNow()}
                  </a>
                </div>
              </div>

              <div style={{ paddingBottom: "8px" }}></div>

              <div class="actions_container_wrapper">
                <div className="actions_container">
                  <a class="comments_container">
                    <img class="icon-comment" src={Comment}></img>
                    <span class="comment_text">Comments</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
