import React from "react";

// custom components
import Upvote from "../../Assets/upvote.png";
import Downvote from "../../Assets/downvote.png";
import Comment from "../../Assets/comment.png";
//custom css
import "../../App.css";
import "../../Assets/Colors.css";
import "../../Assets/svg.css";

//third party css
import "bootstrap/dist/css/bootstrap.min.css";
var moment = require("moment");

function Post(props) {
    console.log(props)
  return (
    <div>
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
                <a class="titletext">
                  <h3 class="titleactul">
                    {props.postData.title}
                  </h3>
                </a>
              </div>
              <div class="info_container">
                <div class="comm_name">
                  <a href="/" class="community_name_text">
                    {props.postData.community_name}
                  </a>
                </div>
                <span class="spanner"> . </span>
                <div class="startup_name_div">
                  <span class="posted_by">Posted by</span>
                  <div class="strartup_name_cont">
                    <a href="/" class="startup_name_text">
                      {props.postData.startup_name}
                    </a>
                  </div>
                  <a href="/" class="post_time">
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