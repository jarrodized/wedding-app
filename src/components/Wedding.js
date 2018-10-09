import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';

const Wedding = () => (
  <section id="wedding" className="main">
    <div className="spotlight">
      <div className="content">
        <header className="major">
          <h2>The Wedding</h2>
        </header>
        <ul className="logistics">
          <li>
            <div>
              <h3>Where</h3>
              <p>Castle Farms</p>
              <p>5052 M-66</p>
              <p>Charlevoix, MI 49720</p>
            </div>
          </li>
          <li>
            <div>
              <h3>When</h3>
              <p>December 29, 2018</p>
              <p>Ceremony: 4:30 PM</p>
              <p>Reception: 6:30 PM</p>
            </div>
          </li>
        </ul>
      </div>
      <CharlevoixMap />
    </div>
  </section>
);

const CharlevoixMap = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { regex: "/charlevoix-map/" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={({ file }) => (
      <span className="wedding__image">
        <Img
          backgroundColor={false}
          css={{ }}
          style={{ }}
          fluid={file.childImageSharp.fluid}
        />
      </span>
    )}
  />
)

export default Wedding;