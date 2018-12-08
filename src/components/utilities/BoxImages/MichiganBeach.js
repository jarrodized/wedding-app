import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';

const MichiganBeach = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { regex: "/michigan-beach-park/" }) {
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

export default MichiganBeach;