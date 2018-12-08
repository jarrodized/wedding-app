import React from 'react'

import Wedding from '../Wedding'
import Accommodations from '../Accommodations'
import ShuttleSchedule from '../ShuttleSchedule'
import ThingsToDo from '../ThingsToDo'
import Registry from '../Registry'

const Sections = () => (
  <div
    className="sections"
  >
    <Wedding />
    <Accommodations />
    <ShuttleSchedule />
    <ThingsToDo />
    <Registry />
  </div>
)

export default Sections;