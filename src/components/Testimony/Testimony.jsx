import React from "react";
import "./Testimony.css";

const Testimony = () => {
  return (
    <div className="testimony-container">
      <img
        src={require("../../images/img3 freecodecamp.png")}
        alt="Emma"
        className="testimony-image"
      />
      <div className="testimony-text-container">
        <p className="testimony-name">Emma Bostian in Sweden</p>
        <p className="testimony-position">Software Engineer at Spotify</p>
        <p className="testimony-message">
          I've always struggled with learning JavaScript. I've taken many
          courses but freeCodeCamp's course was the one which stuck. Studying
          JavaScript as well as data structures and algorithms on freeCodeCamp
          gave me the skills and confidence I needed to land my dream job as a
          software engineer at Spotify.
        </p>
      </div>
    </div>
  );
};

export default Testimony;
