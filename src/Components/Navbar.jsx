import React from "react";
import { BiBell, BiLogIn } from "react-icons/bi";

export default function Navbar() {
  return (
    <div className="navbar">
      <img
        height={60}
        width={160}
        src="/images/mobitalkslogo.png"
        alt="mabitalks-logo"
        className="mabitalks-logo"
      />
      <div className="navbar-butttons">
        <div className="button-notifications">
          <BiBell size="30px" />
        </div>
        <div className="button-log-out">
          <span className="button-text">Logout</span>
          <BiLogIn size="30px" />
        </div>
      </div>
    </div>
  );
}
