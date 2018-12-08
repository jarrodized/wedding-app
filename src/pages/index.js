import React from "react";
import Helmet from 'react-helmet';
import get from 'lodash/get';
import Waypoint from 'react-waypoint';

import "../assets/css/base.css";
import "../assets/css/main.css";
import "../assets/css/mobile.css";

import Header from "../components/collections/Header";
import Nav from "../components/collections/Navigation";
import Sections from "../components/collections/Sections";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <div>
        <link rel="stylesheet" href="https://use.typekit.net/azh0amb.css"></link> 
        <div
          css={{ height: `100vh`, width: `100%`, overflow: `hidden` }}
        >
          <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
          <Header />
          <Waypoint
            onEnter={this._handleWaypointEnter}
            onLeave={this._handleWaypointLeave}
          >
          </Waypoint>
          <Nav sticky={this.state.stickyNav} />
        </div>
        <div id="main">
          <Sections />
        </div>
      </div>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

// const IndexPage = () => (
//   <div>
//     <Header />
//     <Wedding />
//     <Accommodations />
//     <Registry />
//     <Footer />
//   </div>
// );

// export default IndexPage;
