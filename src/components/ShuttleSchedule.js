import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';

const ShuttleSchedule = () => (
  <section id="shuttle-schedule" className="main">
    <div className="shuttle-schedule-container">
      <div className="content">
        <header className="major">
          <h2>Shuttle Service</h2>
        </header>
        <p>COMPLIMENTARY WEDDING SHUTTLE DEPARTURE TIMES</p>
        <div className="shuttle-times-container">
          <div className="shuttle-times-subcontainer">
            <div className="shuttle-times-header">
              <span>TO CASTLE</span>
            </div>
            <h3>AMERICINN LODGE & SUITES</h3>
            <p>2:50 PM</p>
            <p>3:30 PM</p>
            <p>4:10 PM</p>
            <h3>CHARLEVOIX INN & SUITES</h3>
            <p>3:00 PM</p>
            <p>4:00 PM</p>
          </div>
          <div className="shuttle-times-subcontainer">
            <div className="shuttle-times-header">
              <span>FROM CASTLE</span>
            </div>
            <h3>BOTH HOTELS</h3>
            <p>9:00 PM</p>
            <p>9:40 PM</p>
            <p>10:20 PM</p>
            <p>11:10 PM</p>
            <h3>ONLY AMERICINN LODGE & SUITES</h3>
            <p>11:45 PM</p>
            <p>12:20 AM</p>
          </div>
        </div>
        <p>PLEASE ARRIVE AT LEAST FIVE MINUTES BEFORE DEPARTURE TIMES</p>
        <p>TO ENSURE SHUTTLE STAYS ON SCHEDULE</p>
      </div>
    </div>
  </section>
);

export default ShuttleSchedule;