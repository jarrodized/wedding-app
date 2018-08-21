import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import $ from 'jquery'

import Header from '../components/Header'
import Navbar from '../components/Navbar'
import './all.sass'


const TemplateWrapper = ({ children }) => (
  <div>
    <link href='http://fonts.googleapis.com/css?family=Great+Vibes' rel='stylesheet' type='text/css'/>
    <Helmet title="Adrienne & Jarrod's Wedding" />
    <Header />
    <Navbar />
    <div>{children()}</div>
    <div className="bg-color"></div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
