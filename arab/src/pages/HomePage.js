import React from "react";
import Sidebar from "../component/Sidebar";
import PackageCard from "../component/PackageCard";

function HomePage() {
  return (
    <div className="mainWrapper">
      <Sidebar />

      <div className="contentWrapper">

      <div className="headerWrapper">
        <h4>choose a plan that just rite for you!</h4>
        <div className="btnWrapper">
            <button className="btn active">Monthly</button>
            <button className="btn">Annually <sup>-2%</sup></button>
        </div>
      </div>
      <div className="cardRow">
        <PackageCard cardWidth="col-md-4" />
        <PackageCard cardWidth="col-md-4" />
        <PackageCard cardWidth="col-md-4" />
      </div>
      <div className="cardRow">
        <PackageCard cardWidth="col-md-6" />
        <PackageCard cardWidth="col-md-6" />
      </div>
      <div className="foot">
      <h5>*some unique features are provided as add-ons with individual plans for each features</h5>
      </div>
      </div>


    </div>
  );
}

export default HomePage;
