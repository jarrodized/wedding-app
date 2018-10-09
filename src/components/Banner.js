import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const Banner = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { regex: "/aj-jumping/" }) {
          childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={({ file }) => (
      <div id="banner" style={{ height: `100%` }}>
        <div className="banner__image" style={{ position: `relative`, height: `100%` }}>
          <Img
            css={{ height: `100vh`, width: `100%`, maxHeight: `100%` }}
            style={{ }}
            fluid={file.childImageSharp.fluid}
          />
        </div>
      </div>
    )}
  />
)

export default Banner;
