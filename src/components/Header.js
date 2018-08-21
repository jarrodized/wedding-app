import React from 'react'
import Link from 'gatsby-link'

import aj from '../img/aj-jumping.jpg'

const Header = () => (
<div className="header">
    <figure className="header__image_container">
        <img className="header__image" src={aj} />
    </figure>
    <div className="header__text">
        <div className="main_text">
            Adrienne & Jarrod
        </div>
        <div className="sub_text">
            December 29
        </div>
    </div>
</div>
)

export default Header
