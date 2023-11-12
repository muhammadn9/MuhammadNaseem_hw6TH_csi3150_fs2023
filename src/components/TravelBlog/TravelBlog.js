import React from "react";
import "./travelBlog.css";

const TravelBlog = ({ placeData }) => (
  <div className="travel-blog">
    <h3>{placeData.placeHeading}</h3>
    <div className="images">
      <img src={placeData.placeImg1} alt="Place 1" />
      <img src={placeData.placeImg2} alt="Place 2" />
      <img src={placeData.placeImg3} alt="Place 3" />
    </div>
    <p>{placeData.placeDescription}</p>
  </div>
);

export default TravelBlog;
