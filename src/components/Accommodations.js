import React from "react";

import Button from "./Button";

let americInn = {
  name: "AmericInn Lodge & Suites",
  address: "11800 US 31 North",
  city: "Charlevoix, MI 48720",
  phone: "231-237-0988",
  link: "https://www.wyndhamhotels.com/americinn/charlevoix-michigan/americinn-lodge-and-suites-charlevoix/overview",
  hotelButton: true,
};

let charlevoixInn = {
  name: "Charlevoix Inn & Suites",
  address: "800 Petoskey Ave",
  city: "Charlevoix, MI 48720",
  phone: "231-547-0300",
  link: "",
  hotelButton: true
};

const Accommodations = () => (
  <section id="accommodations" className="main">
    <div className="accommodations">
      <div className="content">
        <header className="major">
          <h2>Accommodations</h2>
        </header>
        <p>Mention the Hall/Rougeau wedding to receive</p>
        <p>A reservation discount at these hotels.</p>
        <ul className="hotels">
          <li>
            <Button {...americInn}/>
          </li>
          <li>
            <Button {...charlevoixInn}/>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Accommodations;