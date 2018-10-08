import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Waypoint from 'react-waypoint';
import get from 'lodash/get';

import Header from '../components/Header'
import Navbar from '../components/Navbar'
import weddingSection from '../img/wedding-section.png'
import accSection from '../img/accomodations.png'
import hotel1 from '../img/hotel-button1.png'
import hotel2 from '../img/hotel-button2.png'
import hotel3 from '../img/hotel-button3.png'
import hotel4 from '../img/hotel-button4.png'
import registrySection from '../img/registry.png'
import registry1 from '../img/registry-button1.png'
import registry2 from '../img/registry-button2.png'
import registry3 from '../img/registry-button3.png'
import registry4 from '../img/registry-button4.png'

import '../layouts/wedding.css'

class IndexPage extends React.Component {
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
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <div className="header__container">
          <Header />
          <Waypoint
            onEnter={this._handleWaypointEnter}
            onLeave={this._handleWaypointLeave}
          >
          </Waypoint>
          <Navbar sticky={this.state.stickyNav} />
        </div>
        <section className="weddingSection">
          <div className="weddingContainer">
            <div className="weddingContent">
              {/* <div id='story' className="">
                <h1 className="has-text-weight-bold is-size-2">Our Story</h1>
                <p>Lorem ipsum dolor sit amet, timeam facilis expetendis cu vim, cu porro mollis omnesque vim. Vix elit ubique molestie ne, ex mea minim simul recteque, ad postea convenire consequat has. Pro eu aeterno tincidunt intellegebat, philosophia consectetuer reprehendunt ea sit. Ei accusam voluptatum nam, ex enim referrentur adversarium cum, an illud errem menandri usu. Hinc omittantur persequeris nec eu.

  Nec ad mollis interesset. No quo nemore dissentias, mel et vidit dicunt accumsan. Iisque senserit democritum in sit, apeirian repudiandae eam ex. Semper intellegam his eu, has tale etiam ceteros an.

  Cu probo vivendum mea, qui ea zril graeci salutatus. Choro detraxit qui ex, at cum posse admodum. Mea prima neglegentur id, mea ludus graeco debitis ne, ad alterum accusata evertitur quo. Nostrum postulant has te, pro ex purto option constituam. Omittam epicurei et ius, qui ei dolorem delectus.

  His et justo partem ponderum. Eu tollit utroque singulis cum. Ne audire albucius vivendum mea. Aliquip eruditi est id, ut nulla aliquid vituperata vis. Eam everti nostrum platonem et, ei incorrupte consequuntur duo, error graeco vulputate nec an. Id persecuti disputationi mei, mel id natum omnes. Ad cum alterum labores, vis quot nominati deseruisse te.
  </p>
              </div> */}
              <div id='wedding' className="">
                <figure className="weddingImage">
                  <img className="" src={weddingSection} />
                </figure>
              </div>
              <div id='accommodations' className="">
                <figure className="">
                  <img className="accomodationsImage" src={accSection} />
                </figure>
                <div className="hotelButtons">
                  <a href="https://www.charlevoixinn.com/" target="_blank">
                    <div className="hotelButton__right button__container">
                      <figure className="hotelButton__two hotelButton">
                        <img className="" src={hotel2} />
                      </figure>
                      <figure className="hotelButton__four hotelButton">
                        <img className="" src={hotel4} />
                      </figure>
                    </div>
                  </a>
                  <a href="https://www.wyndhamhotels.com/americinn/charlevoix-michigan/americinn-lodge-and-suites-charlevoix/overview" target="_blank">
                    <div className="hotelButton__left button__container">
                      <figure className="hotelButton__one hotelButton">
                        <img className="" src={hotel1} />
                      </figure>
                      <figure className="hotelButton__three hotelButton">
                        <img className="" src={hotel3} />
                      </figure>
                    </div>
                  </a>
                </div>
              </div>
              <div id='registry' className="">
                <figure className="">
                  <img className="registryImage" src={registrySection} />
                </figure>
                <div className="registryButtons registryButton__bottom">
                    <div className="button__container registry__container">
                      <a href="https://www.target.com/gift-registry/gift/4fbf8b183e754c99885b0c12a8b528c7" target="_blank">
                        <figure className="hotelButton__two registryButton">
                          <img className="" src={registry2} />
                        </figure>
                        <figure className="hotelButton__four registryButton">
                          <img className="" src={registry4} />
                        </figure>
                      </a>
                    </div>
                </div>
                <div  className="registryButtons registryButton__top">
                  
                    <div className="button__container registry__container">
                      <a href="https://www.zola.com/registry/rougeauwedding/" target="_blank">
                        <figure className="hotelButton__one registryButton">
                          <img className="" src={registry1} />
                        </figure>
                        <figure className="hotelButton__three registryButton">
                          <img className="" src={registry3} />
                        </figure>
                      </a>
                    </div>
                  
                </div>
              </div>
              
            </div> 
          </div>
        </section>
        <div className="bg-color"></div>
      </div>
    )
  }
}


// IndexPage.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       edges: PropTypes.array,
//     }),
//   }),
// }

export const pageQuery = graphql`
  query TitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default IndexPage;
