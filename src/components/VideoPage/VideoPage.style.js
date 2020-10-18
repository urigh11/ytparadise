import styled from "styled-components";

export const VideoUnit = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;

  @media screen and (min-width: 768px) {
    width: 70%
  } 

  @media screen and (min-width: 768px) {
    width: 60%
  } 
`;

export const VideoUnitTitle = styled.h1`
  font-size: 1em;
  width: 100%;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 1.5em;
  }
`;

export const VideoAndAds = styled.div`
  /* display: flex; */
`;

export const VideoContainer = styled.div`
  position: relative;

  ::after {
    padding-top: 56.25%;
    display: block;
    content: "";
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

// Support 
export const Donate = styled.div`

margin: 20px auto;

  img {
    width: 250px;
    background: white;
  }

  /* @media screen and (min-width: 1024px) {
    margin: 0 30px;
  } */
`

// Ads 
export const AdVertical = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    /* margin: 0 auto; */
    position: absolute;
    top: 250px;
    left: 150px;
  }
`;