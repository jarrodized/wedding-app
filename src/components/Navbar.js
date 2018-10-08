import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
  <div className='navwrapper'>
    <nav id="nav" 
      className={props.sticky ? 'alt' : ''}
      >
      <Scrollspy items={ ['intro', 'first', 'second'] } currentClassName="is-active" offset={-300}>
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


// import React from 'react'
// import Link from 'gatsby-link'

// import github from '../img/github-icon.svg'
// import logo from '../img/logo.svg'
// import aj from '../img/AJLogo.jpeg'

// const Navbar = () => (
//   <nav id="main" className="">
//     <ul>
//       <li className="logo"><a href="#">A&J</a></li>
//       {/* <li><a href="#story">Our Story</a></li> */}
//       <li><a href="#wedding">Wedding</a></li>
//       <li><a href="#accommodations">Accommodations</a></li>
//       <li><a href="#registry">Registry</a></li>
//     </ul>
//   </nav>
// )

// export default Navbar
