import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';

import Box from "./utilities/ThingsBox";

const ThingsToDoMobile = (props) => (
  <div className="things-to-do-container things-to-do-mobile">
    <div className="content">
      <header className="major">
        <h2>Things to do</h2>
        <div className="things-container">
          <div className="things-subcontainer">
            <Box {...props[1]}/>
            <Box {...props[0]}/>
            <Box {...props[2]}/>
            <Box {...props[3]}/>
            <Box {...props[4]}/>
            <Box {...props[5]}/>
            <Box {...props[6]}/>
            <Box {...props[7]}/>
            <Box {...props[8]}/>
            <Box {...props[9]}/>
            <Box {...props[10]}/>
          </div>
        </div>
      </header>
    </div>
  </div>
);

export default ThingsToDoMobile;