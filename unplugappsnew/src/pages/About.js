import './About.css'
import React from "react";

export const About = () => {
  return (
    <div className="about" >
      <h1 >About</h1>
      <p>
      It works! However if you widen your screen, then it'll hide your links, which isn't something we want. To fix this,
       you'll need to add a const below the first one, that will detect the screen width
      </p>
    </div>
  );
};
export default About