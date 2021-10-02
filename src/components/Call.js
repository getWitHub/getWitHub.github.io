import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import TypeformLink from "./ExtensionLink";

// must be 'a' tag, gatsby external linking shit otherwise onclick dosent work
const ButtonTextStyle = styled.a`
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 32px;
line-height: 37px;
color: #FFFFFF;
flex: none;
order: 0;
flex-grow: 0;
text-align: -webkit-center;

margin: 5px 0px;
`;

const ButtonStyle = styled.div`
display: flex;
flex-direction: row-reverse;
justify-content: center;
align-items: center;
padding: 31px 50px;
width: 337px;
height: 100px;

background: #6546DE;
box-shadow: 0px 0px 10px rgba(68, 68, 68, 0.45);
border-radius: 25px;
`;
const Call = () => {
  let link = TypeformLink();
  const data = useStaticQuery(graphql`
    query ContactQuery {
      contactJson {
        contact_button_link
      }
    }
  `);
  return (
    <ButtonStyle>
      <ButtonTextStyle className="cta1" href={link}>
        Join our Waitlist
      </ButtonTextStyle>
      <a href="www.slack.com">...or chat with us first</a>
    </ButtonStyle>
  );
  
};
export default Call;
