import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import SEO from "../components/SEO";

import Call from "../components/Call";
import LandingText from "../components/LandingText";
import LandingSubText from "../components/LandingSubText";
import Background from "./../../static/images/background.png";
import TopBar from "../components/TopBar";
import Social from "../components/Social";
import styled from "styled-components";

const GlassBox = styled.div`
  position: absolute;
  left: 14.35%;
  right: 14.41%;
  top: 17.96%;
  bottom: 9.91%;
  z-index: 0;
  background: transparent;
  backdrop-filter: blur(4px);
  border-radius: 40px;
`;

const Paragraph = styled.p`
  width: 1016px;
  height: 190px;

  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;

  font-family: Helvetica, Arial, sans-serif, -apple-system;
  font-style: normal;
  font-weight: 300;
  font-size: 1.5rem;
  line-height: 37px;

  color: #000000;
`;

const Team = (props) => {
  const team = props.data.team.edges;
  const { intro } = props.data;

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${Background})`,
      }}
    >
      <SEO title="Team" />
      <Helmet>
        <meta name="title" content="WitHub-Highlight the Web" />
        <meta
          name="twitter:image"
          content="https://www.getwithub.com/images/twitter-card.png"
        ></meta>
        <meta
          name="google-site-verification"
          content="o3HIEwGXZYyzUc78j6msWtj3TnGWNJIFlra-sliw5kk"
        />
      </Helmet>
      <div style={{ width: "100%", paddingTop: "0", textAlign: "end" }}>
        <TopBar />
      </div>
      <GlassBox>
        <div
          style={{
            width: "100%",
            paddingTop: "5vh",
            textAlign: "-webkit-center",
          }}
        >
          <LandingText />
        </div>
        <div
          style={{
            width: "100%",
            paddingTop: "5vh",
            textAlign: "-webkit-center",
          }}
        >
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centurie
          </Paragraph>
        </div>
        <div
          style={{
            width: "100%",
            paddingTop: "2vh",
            textAlign: "-webkit-center",
          }}
        >
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centurie
          </Paragraph>
        </div>
      </GlassBox>
        <div
          style={{
            paddingTop: '93vh',
            paddingLeft: '90vw',
            width: '20vw',
          }}
        >
          <Social />
        </div>
    </div>
  );
};

export const query = graphql`
  query TeamQuery {
    team: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/team/.*/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            promoted
            image
            jobtitle
            linkedinurl
            twitterurl
          }
        }
      }
    }
    intro: markdownRemark(fileAbsolutePath: { regex: "/(team.md)/" }) {
      html
      frontmatter {
        image
        intro_image
        intro_image_absolute
        intro_image_hide_on_mobile
        title
      }
    }
  }
`;

export default Team;
