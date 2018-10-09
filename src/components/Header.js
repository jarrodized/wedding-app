import React from 'react';

import Banner from './Banner';
import BannerText from './BannerText'

const Header = () => (
  <header id="header" css={{ height: `90%`}}>
    <Banner />
    <BannerText />
  </header>
)

export default Header;