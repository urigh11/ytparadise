import React from "react";

import {
  ContactContainer,
  ContactText,
  Donation,
  Img,
  MercadoPago,
  DonationOptions,
} from "./Contact.style";

import coffee from "../../assets/images/buymecoffee.jpg"
import dede from "../../assets/images/dede.jpg"

const Contact = () => (
  <ContactContainer>
    <ContactText>
      Send us a message to suggest new content, request removal or advertise: ytparadise@protonmail.com
    </ContactText>
   

    <Donation>
      <p>Feel free to support this page :)</p>

      <DonationOptions>
        <MercadoPago>
          <a
            href="https://www.buymeacoffee.com/ytparadise"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img srcSet={coffee} alt="" />
          </a>
        </MercadoPago>
      </DonationOptions>
    </Donation>
    <Img>
    <img srcSet={dede} alt="" />
    </Img>
  </ContactContainer>
);

export default Contact;
