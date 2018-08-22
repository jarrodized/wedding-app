import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import aj from '../img/AJLogo.jpeg'

const Navbar = () => (
  <nav id="main" className="">
    <ul>
      <li class="logo"><a href="#">A&J</a></li>
      {/* <li><a href="#story">Our Story</a></li> */}
      <li><a href="#wedding">Wedding</a></li>
      <li><a href="#lodging">Lodging</a></li>
      <li><a href="#registry">Registry</a></li>
    </ul>
  </nav>
)

export default Navbar
