import React from "react";
import "./Feature.css";

const Feature = ({ type, title, desc, image }) => {
  return (
    <div className={`main ${type === "rev" ? "reverse" : ""}`}>
      <div className="text">
        <div className="title">{title}</div>
        <div className="desc">{desc}</div>
        <button className="btn">Read More</button>
      </div>
      <img src={image} alt="features" className="image" />
    </div>
  );
};

export default Feature;
