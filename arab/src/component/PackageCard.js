import React from "react";
import { Link } from "react-router-dom";

function PackageCard({cardWidth}) {
  return (
    <div className={cardWidth}>
    <div className="cardWrapper">

      <h4>Basic</h4>
      <p>kuch bhi</p>
      <h5>
        $9.99 <span>/month</span>
      </h5>

      <div className="cardContent">
        <ul>
          <li>
            <span>upto 28 users</span>
          </li>
          <li>
            <span>upto 28gb storage</span>
          </li>
          <li>
            <span>Email support</span>
          </li>
        </ul>
        <Link>Explore Features</Link>
      </div>
      </div>
    </div>
  );
}

export default PackageCard;
