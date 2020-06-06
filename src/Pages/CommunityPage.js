import React, { Component } from "react";
import "./PageStyles/communitypage.css";
import HomeFeedPost from "../Components/Container/HomeFeedPost";

export class CommunityPage extends Component {
  render() {
    const url_comm_req = "http://localhost:8000/s/getCommunityByTitle"
    return (
      <div>
        <div>COMMUNITY HEADER</div>
        <div className="cp_parent_container">
          <div className="left_parent_container">
            <HomeFeedPost request_url = {url_comm_req}/>
          </div>
          <div
            className="right_parent_container dispProp"
            style={{ marginLeft: "24px", marginTop: "0px" }}
          >
            <div className="cp_about_container">
              <div className="cp_header_container">
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    lineHeight: "20px",
                  }}
                >
                  <h2
                    style={{
                      fontSize: "14px",
                      fontWeight: "700",
                      lineHeight: "18px",
                      textTransform: "none",
                      display: "inline",
                    }}
                  >
                    About Community
                  </h2>
                </div>
              </div>
              <div className="cp_community_info">
                <div style={{ marginBottom: "8px", position: "relative" }}>
                  <div className = "cp_info">
                      Fugiat cillum ea consectetur deserunt est consectetur elit ut cupidatat. Cupidatat enim eu sunt nulla laborum. Lorem proident veniam officia nostrud excepteur in consectetur eiusmod aute anim aliquip minim culpa deserunt. Veniam nisi exercitation cillum amet duis adipisicing enim ipsum est nulla proident. Dolor irure sunt laboris dolor adipisicing minim incididunt voluptate eu culpa ut eu. Dolor laboris et nisi sunt excepteur veniam exercitation. Esse nostrud adipisicing culpa magna esse.
                  </div>
                </div>
                <div className = "button_container">
                  <a className = "create_post_button_comm">
                      Create Post
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CommunityPage;
