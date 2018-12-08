import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from '../utilities/Scroll'

const Nav = (props) => (
  <div className='navwrapper'>
    <nav id="nav" 
      className={props.sticky ? 'alt' : ''}
      >
      <Scrollspy items={ ['', 'first', 'second', 'cta'] } currentClassName="is-active" offset={-300}>
        <li>
          <Scroll type="id" element="">
            <a href="#">Home</a>
          </Scroll>
        </li>
        <li>
          <Scroll type="id" element="wedding">
            <a href="#wedding">Wedding</a>
          </Scroll>
        </li>
        <li>
          <Scroll type="id" element="accommodations">
            <a href="#accommodations">Accommodations</a>
          </Scroll>
        </li>
        <li>
          <Scroll type="id" element="shuttle-schedule">
            <a href="#shuttle-schedule">Shuttle Service</a>
          </Scroll>
        </li>
        <li>
          <Scroll type="id" element="things-to-do">
            <a href="#things-to-do">Things To Do</a>
          </Scroll>
        </li>
        <li>
          <Scroll type="id" element="registry">
            <a href="#registry">Registry</a>
          </Scroll>
        </li>
      </Scrollspy>
    </nav>
  </div>
)

export default Nav
