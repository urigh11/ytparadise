import React from "react";
import { Link } from "react-router-dom";

import { FootContainer, FootButton } from "./Footer.style";

const Footer = () => (
  <FootContainer>
    <FootButton>
      <Link to="/contato">Get in touch / Support</Link>
    </FootButton>
    <>
      Thanks for visiting
    </>
  </FootContainer>
);

export default Footer;
