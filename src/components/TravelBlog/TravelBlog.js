import React from "react";
import "./travelBlog.css";

const TravelBlog = ({ placeData }) => (
  <div className="travel-blog">
    <h3>{placeData.place}</h3>
    <div className="images">
      {placeData.images.map((image, index) => (
        <img key={index} src={image} alt={`Place ${index + 1}`} />
      ))}
    </div>
    <p>{placeData.description}</p>
  </div>
);

export default TravelBlog;
