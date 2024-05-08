import React from "react";
import { image } from "../data/data";

function About() {
  return (<div id="about">
    <h2>About me</h2>
    <p>Sylvia Chebet is a Geospatial Engineering graduate and an aspiring Full Stack Web Developer</p>
   <img src={image} alt="I made this"></img>
   </div>
  )
}

export default About;