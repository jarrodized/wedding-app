import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
  <div className='navwrapper'>
    <nav id="nav" 
      className={props.sticky ? 'alt' : ''}
      >
      <Scrollspy items={ ['intro', 'first', 'second', 'cta'] } currentClassName="is-active" offset={-300}>
        <li>
          <Scroll type="id" element="intro">
            <a href="#">Home</a>
          </Scroll>
        </li>
        <li>
          <Scroll type="id" element="intro">
            <a href="#">Wedding</a>
          </Scroll>
        </li>
        <li>
          <Scroll type="id" element="first">
            <a href="#">Accommodations</a>
          </Scroll>
        </li>
        <li>
          <Scroll type="id" element="second">
            <a href="#">Registry</a>
          </Scroll>
        </li>
      </Scrollspy>
    </nav>
  </div>
)

export default Nav
