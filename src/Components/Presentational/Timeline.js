import React from "react";
import "../Styles/PresentationalStyles/timeline.css"

function Timeline() {
  return (
    <div>
      <h2 >Timeline</h2>
      <ol class="activity-feed">
        <li class="feed-item">
          <time class="date" datetime="9-25">
            Sep 25
          </time>
          <span class="text">
            Responded to need{" "}
            <a href="single-need.php">“Volunteer opportunity”</a>
          </span>
        </li>
        <li class="feed-item">
          <time class="date" datetime="9-24">
            Sep 24
          </time>
          <span class="text">Added an interest “Volunteer Activities”</span>
        </li>
        <li class="feed-item">
          <time class="date" datetime="9-23">
            Sep 23
          </time>
          <span class="text">
            Joined the group{" "}
            <a href="single-group.php">“Boardsmanship Forum”</a>
          </span>
        </li>
        <li class="feed-item">
          <time class="date" datetime="9-21">
            Sep 21
          </time>
          <span class="text">
            Responded to need{" "}
            <a href="single-need.php">“In-Kind Opportunity”</a>
          </span>
        </li>
        <li class="feed-item">
          <time class="date" datetime="9-18">
            Sep 18
          </time>
          <span class="text">
            Created need <a href="single-need.php">“Volunteer Opportunity”</a>
          </span>
        </li>
        <li class="feed-item">
          <time class="date" datetime="9-17">
            Sep 17
          </time>
          <span class="text">
            Attending the event <a href="single-event.php">“Some New Event”</a>
          </span>
        </li>
      </ol>
    </div>
  );
}

export default Timeline;
