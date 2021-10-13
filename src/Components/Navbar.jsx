import React from "react";
import { VscBell } from "react-icons/vsc";
import { MdOutlineLogout } from "react-icons/md";
export default function Navbar() {
  return (
    <div className="navbar">
      <img
        height={60}
        width={160}
        src="./src/images/mobitalkslogo.png"
        alt="mabitalks-logo"
        className="mabitalks-logo"
      />
      <div className="navbar-butttons">
        <div className="button-notifications">
          <VscBell size="30px" />
        </div>
        <div className="button-log-out">
          <span className="button-text">Logout</span>
          <MdOutlineLogout size="30px" />
        </div>
      </div>
    </div>
  );
}
