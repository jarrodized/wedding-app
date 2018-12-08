import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';

const TapRoom = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { regex: "/bridge-street-tap-room/" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={({ file }) => (
      <Img
        backgroundColor={false}
        css={{ }}
        style={{ }}
        fluid={file.childImageSharp.fluid}
      />
    )}
  />  
)

export default TapRoom;