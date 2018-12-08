import React from "react";

import Button from "./utilities/Button";

let americInn = {
  name: "AmericInn Lodge & Suites",
  address: "11800 US 31 North",
  city: "Charlevoix, MI 48720",
  phone: "231-237-0988",
  link: "https://www.wyndhamhotels.com/americinn/charlevoix-michigan/americinn-lodge-and-suites-charlevoix/overview",
  hotelButton: true,
  target: '_blank'
};

let charlevoixInn = {
  name: "Charlevoix Inn & Suites",
  address: "800 Petoskey Ave",
  city: "Charlevoix, MI 48720",
  phone: "231-547-0300",
  link: "https://www.charlevoixinn.com/",
  hotelButton: true,
  target: '_blank'
};

const Accommodations = () => (
  <section id="accommodations" className="main">
    <div className="accommodations">
      <div className="content">
        <header className="major">
          <h2>Accommodations</h2>
        </header>
        <p>Mention the Hall/Rougeau wedding to receive a reservation discount at these hotels.</p>
        <ul className="hotels">
          <li>
            <Button {...americInn}/>
          </li>
          <li>
            <Button {...charlevoixInn}/>
          </li>
        </ul>
        <p>A shuttle will be available to and from hotels and venue before and after the wedding — schedule coming soon!</p>
      </div>
    </div>
  </section>
);

export default Accommodations;