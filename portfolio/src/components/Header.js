import React from "react";
import Logo from "../assets/Folio_logo_no-bg.png";

function Header() {
  return (
    <div className="container">
      <img src={Logo} alt="FolioLogo" />
    </div>
  );
}

export default Header;
