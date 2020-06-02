import React, { Component, useState } from "react";
import "./PageStyles/postpage.css";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser from "react-html-parser";

const axios = require("axios");


function CreatePostPage() {
  const [postContent, setPostContent] = useState("");
  const [titleContent, setTitleContent] = useState("");

  const handleOnChange = (e, editor) => {
    const data = editor.getData();
    setPostContent(data);
  };
  function submitData() {
    const url_string = "http://localhost:8000/s/createPost";

    let post_data = ReactHtmlParser(postContent);
    if (post_data.length === 0) { //TODO :  give title check 
      alert("enter some content boi");
      return;
    } else {
      const post_content_string = post_data[0].props.children[0];
      const title_content_string = titleContent;

      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      // final date
      var dateTime = date+' '+time;
          // creating the final payload 
    const post_payload = {
        "StartupId" : 1366,
        "CommunityID":2,
        "PostTitle" : title_content_string,
        "CreatedAt": dateTime,
        "UpdatedAt" : dateTime,
        "PostContent": post_content_string
    }
        // making the axios request

        axios.post(url_string, post_payload)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
}

  function handleTitle(e) {
    const title_string = e.target.value;
    setTitleContent(title_string);
  }

  return (
    <div>
      <div className="title_editor_container">
        <div className="title_bar">
          <textarea
            placeholder="Title"
            className="title_text_area"
            onChange={handleTitle}
          ></textarea>
        </div>
      </div>
      <div class="create_post_form_container">
        <CKEditor editor={ClassicEditor} onChange={handleOnChange} />
      </div>
      <div className="post_button_container">
        <button className="post_button" onClick={submitData}>
          POST
        </button>
      </div>
    </div>
  );
}

export default CreatePostPage;
