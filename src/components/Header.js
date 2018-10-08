import React from 'react'
import Link from 'gatsby-link'

import aj from '../img/aj-jumping.jpg'
import weddingHeader from '../img/wedding-header-text.png'

const Header = () => (
<div className="header">
    <figure className="header__image_container">
        <img className="header__image" src={aj} />
    </figure>
    <div className="header__text">
        <figure className="">
            <img className="" src={weddingHeader} />
        </figure>
    </div>
</div>
)

export default Header