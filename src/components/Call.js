import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import TypeformLink from "./ExtensionLink";

// must be 'a' tag, gatsby external linking shit otherwise onclick dosent work
const ButtonTextStyle = styled.a`
  font-family: Helvetica, Arial, sans-serif, -apple-system;
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  color: #ffffff;
  padding: 0.8rem 1.2rem;

  @media (max-width: 1200px) and (min-width: 600px) {
    font-size: 1.2rem;
  }
  @media (max-width: 600px) and (min-width: 350px) {
    font-size: 0.9rem;
  }
  @media (max-width: 350px) and (min-width: 260px) {
    font-size: 0.7rem;
  }
`;

const ButtonStyle = styled.div`
  background: #6546de;
  box-shadow: 0px 0px 10px rgba(68, 68, 68, 0.45);
  width: 27%;
  border-radius: 15px;
  padding-top: 10px;
  padding-left: 20px;
  @media (max-width: 1200px) and (min-width: 600px) {
    width: 45%;
  }
  @media (max-width: 600px) and (min-width: 350px) {
    min-width: 65%;
  }
  @media (max-width: 350px) and (min-width: 260px) {
    min-width: 55%;
  }
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
    </ButtonStyle>
  );
};
export default Call;
