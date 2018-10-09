import React from 'react'

import Wedding from './Wedding'
import Accommodations from './Accommodations'
import Registry from './Registry'

const Sections = () => (
  <div
    className="sections"
  >
    <Wedding />
    <Accommodations />
    <Registry />
  </div>
)

export default Sections;