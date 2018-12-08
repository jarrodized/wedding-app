import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';

import Box from "./utilities/ThingsBox";
import ThingsMobile from "./ThingsToDoMobile";

let castleFarms = {
  text: "GET A SNEAK PEEK OF CASTLE FARMS AND ITS HOLIDAY LIGHTS",
  bg: true,
  bgImg: "castlefarms",
  linkText: 'Visit Website',
  url: 'https://www.castlefarms.com/visit/plan-your-visit/',
  width: 'one-third'
}

let castleFarmsInfo = {
  title1: "EXPLORE CASTLE FARMS",
  text1: "OUR WEDDING VENUE IS AN HISTORIC SITE!",
  text4: "TAKE A SELF-GUIDED TOUR TO GET TO KNOW MORE ABOUT THE PLACE WE’RE GETTING MARRIED.",
  title2: "DRIVE-THRU HOLIDAY LIGHTS DISPLAY AT THE CASTLE",
  text2: "CAR: $10 VAN/SUV: $25",
  text3: "DECEMBER 26 - 30 • 6:00 - 10:00 P.M.",
  bg: false,
  linkText: null,
  url: null,
  width: 'two-thirds'
}

let avalanche = {
  text: "TAKE A DIP AT AVALANCHE BAY INDOOR WATER PARK",
  bg: true,
  bgImg: "avalanche",
  linkText: "Visit Website",
  url: "https://www.boynemountain.com/activities/indoor-waterpark",
  width: 'one-third'
}

let boyne = {
  text: "HIT THE SLOPES AT BOYNE MOUNTAIN",
  bg: true,
  bgImg: 'boyne',
  linkText: "Visit Website",
  url: "https://www.boynemountain.com/winter-activities",
  width: 'one-third'
}

let kilwins = {
  text: "INDULGE IN A KILWIN CHOCOLATE FACTORY TOUR",
  bg: true,
  bgImg: 'kilwins',
  linkText: "Visit Website",
  url: "https://www.kilwins.com/kilwins-chocolate-tours",
  width: 'one-third'
}

let mushroom = {
  text: "TAKE A DRIVE BY THE MUSHROOM HOUSES",
  bg: true,
  bgImg: 'hobbitthouse',
  linkText: "Visit Website",
  url: "https://minivanadventures.com/charlevoix-mushroom-houses/?fbclid=IwAR2GifYE_7o7L-rPKLtaNjSsNlpN6VE3XBuZabBWqfO0DhGTZ0uD6lGK3xg",
  width: 'one-third'
}

let brewing = {
  text: "GET A DRINK AT THE LAKE CHARLEVOIX BREWING COMPANY",
  bg: true,
  bgImg: 'charlevoixbrewing',
  linkText: "Visit Website",
  url: "https://www.lakecharlevoixbrewing.com/",
  width: 'one-third'
}

let tapRoom = {
  text: "DINE AND DRINK AT THE BRIDGE STREET TAP ROOM",
  bg: true,
  bgImg: 'bridgestreet',
  linkText: "Visit Website",
  url: "https://www.bridgestreettaproom.com/",
  width: 'one-third'
}

let michiganBeach = {
  text: "BUNDLE UP AND CHECK OUT MICHIGAN BEACH PARK",
  bg: true,
  bgImg: 'michiganbeach',
  linkText: "Visit Website",
  url: "https://www.visitcharlevoix.com/Michigan-Beach-Park",
  width: 'one-third'
}

let umGame = {
  text: "WATCH THE PEACH BOWL AT SHANAHAN'S PUB",
  bg: true,
  bgImg: 'umgame',
  linkText: "Visit Website",
  url: "http://www.chxcountryclub.com/shanahans-pub-charlevoix-golf-fitness.html",
  width: 'one-third'
}

let odawaCasino = {
  text: "GET LUCKY AT ODAWA CASINO",
  bg: true,
  bgImg: 'odawacasino',
  linkText: "Visit Website",
  url: "https://www.odawacasino.com/",
  width: 'one-third'
}

let boxes = [
  castleFarms, 
  castleFarmsInfo, 
  avalanche, 
  boyne, 
  kilwins,
  mushroom,
  brewing,
  tapRoom,
  michiganBeach,
  umGame,
  odawaCasino
];

const ThingsToDo = () => (
  <section id="things-to-do" className="main no-bottom-space">
    <div className="things-to-do-container things-to-do-desktop">
      <div className="content">
        <header className="major">
          <h2>Things to do</h2>
          <div className="things-container">
            <div className="things-subcontainer">
              <Box {...castleFarms}/>
              <Box {...castleFarmsInfo}/>
            </div>
            <div className="things-subcontainer">
              <Box {...avalanche}/>
              <Box {...boyne}/>
              <Box {...kilwins}/>
            </div>
            <div className="things-subcontainer">
              <Box {...mushroom}/>
              <Box {...brewing}/>
              <Box {...tapRoom}/>
            </div>
            <div className="things-subcontainer">
              <Box {...michiganBeach}/>
              <Box {...umGame}/>
              <Box {...odawaCasino}/>
            </div>
          </div>
        </header>
      </div>
    </div>
    <ThingsMobile {...boxes}/>
  </section>
);

export default ThingsToDo;