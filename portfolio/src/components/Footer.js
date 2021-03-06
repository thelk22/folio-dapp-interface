import React from 'react';
import Logo from "../assets/logos/folio-tnr.svg";
import PieLogo from "../assets/logos/pie-chart-logo.svg"
import { Link } from "react-router-dom";


const Footer = () => {
  return (
      <footer id='footer'>
        {/* <Link className="logo" to="/">
          {/* <img  src={PieLogo} alt="The Folio Logo" /> */}
        {/* <h4>This is the footer</h4> */}
        {/* </Link> */}

        <Link className="logo" to="/">
        <img className='logo' src={PieLogo} alt="The Folio Logo" />
        </Link>

      </footer>
  )
};

export default Footer;