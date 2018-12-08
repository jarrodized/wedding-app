import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';

const UmGame = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { regex: "/um-game/" }) {
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

export default UmGame;