import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebarContainer">
     <div
      style={{
        width: 100,
        height: 100,
        borderRadius: '50%',
        backgroundColor: '#ccc',
        overflow: 'hidden',
      }}
    >
      <img
        src="https://www.example.com/avatar.png"
        alt="Avatar"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>
Abhishek Kumar 
<br />
  abp6394@gamil.com
      <ul className="sideLinks">
        <li>
          <Link>Dashboard</Link>
        </li>
        <li>
          <Link>Perks</Link>
        </li>
        <li>
          <Link>Addon</Link>
        </li>
        <li>
          <Link>FAQ</Link>
        </li>
        <li>
          <Link>Support</Link>
        </li>
        <li className="log">
            <Link>Logout</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
