import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';

import Button from './Button';

const Registry = () => (
  <section id="registry" className="main">
    <div className="content">
      <header className="major">
        <h2>Registry</h2>
      </header>
      <div>
        <div>
          <p>We hope our Zola registry is easy for you!</p>
          <p>Everything is online, so you never have to leave your couch.</p>
        </div>
        <div>
          <Icons />
        </div>
        <div>
          <p>Interested in going in on a gift with someone else?</p>
          <p>We've enabled gift sharing on big ticket items, allowing multiple people to contribute to one item on the zola website.</p>
        </div>
        <Button name={'View Zola Registry'}/>
        <div>
          <p>We also figured some of you wanted an excuse to go to target,</p>
          <p>so we registered there too. Thanks for helping us start our next adventure!</p>
        </div>
        <Button name={'View Target Registry'}/>
      </div>
    </div>
  </section>
);

const Icons = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { regex: "/icons/" }) {
          childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={({ file }) => (
      <span className="registry__image">
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

export default Registry;