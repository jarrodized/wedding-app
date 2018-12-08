import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';

import AvalanchePark from '../utilities/BoxImages/AvalanchePark'
import Boyne from '../utilities/BoxImages/Boyne'
import Brewing from '../utilities/BoxImages/Brewing'
import CastleFarms from '../utilities/BoxImages/CastleFarms'
import Kilwins from '../utilities/BoxImages/Kilwins'
import MichiganBeach from '../utilities/BoxImages/MichiganBeach'
import Mushroom from '../utilities/BoxImages/Mushroom'
import OdawaCasino from '../utilities/BoxImages/OdawaCasino'
import TapRoom from '../utilities/BoxImages/TapRoom'
import UmGame from '../utilities/BoxImages/UmGame'


export default (props) => (
  <div className={`things-box-container things-box-${props.width}`}>
    <div className="things-box-image">
      {getImageComponent(props)}
    </div>
    <div className="things-box">
      <div className="things-text">
        {getText(props)}
      </div>
      {boxLink(props)}
    </div>
  </div>
)

function getText(props) {
  if(props.width == 'one-third') {
    return props.text;
  }
  return (
    <div>
      <h3>{props.title1}</h3>
      <p>{props.text1}</p>
      <p>{props.text4}</p>
      <h3 className='second-header'>{props.title2}</h3>
      <p>{props.text2}</p>
      <p>{props.text3}</p>
    </div>
  )
}

function getImageComponent(props) {
  if(props.bg) {
    switch(props.bgImg)
    {
      case 'avalanche':
        return <AvalanchePark />;
      case 'boyne':
        return <Boyne />;
      case 'bridgestreet':
        return <TapRoom />;
      case 'castlefarms':
        return <CastleFarms />;
      case 'charlevoixbrewing':
        return <Brewing />;
      case 'hobbitthouse':
        return <Mushroom />;
      case 'kilwins':
        return <Kilwins />;
      case 'michiganbeach':
        return <MichiganBeach />;
      case 'odawacasino':
        return <OdawaCasino />;
      case 'umgame':
        return <UmGame />;
    }
  }
  return '';
}

function boxLink(props) {
  if(props.url) {
    return (
      <div className="things-link">
        <a href={props.url}>
          <button className="btn-primary btn " type="button">
            <div><p>{props.linkText}</p></div>
          </button>
        </a>
      </div>
    )
  }
  return '';
}
