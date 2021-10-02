import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import Call from "../components/Call";
import DemoVideo from "../components/Demo";
import TypeformLink from "../components/ExtensionLink";
import LandingText from "../components/LandingText";
import LandingSubText from "../components/LandingSubText";
import Background from './../../static/images/background.png';
import TopBar from "../components/TopBar";
import Social from "../components/Social";

const Home = (props) => {
  const intro = props.data.intro;
  const site = props.data.site.siteMetadata;
  // const introImageClasses = `intro-image ${
  //   intro.frontmatter.intro_image_absolute && "intro-image-absolute"
  // } ${
  //   intro.frontmatter.intro_image_hide_on_mobile && "intro-image-hide-mobile"
  // }`;
  return (
    <div style={{width : '100%' , height : '100vh', backgroundImage:`url(${Background})`}}>
      <SEO title={site.title} />
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
      <div style={{width: '100%',paddingTop:'0'}}>
      <TopBar />
      </div>
      <div style={{width: '100%',paddingTop:'30vh', textAlign:'-webkit-center'}}>
      <LandingText />
      </div>
      <div style={{width: '100%',paddingTop:'8vh', textAlign:'-webkit-center'}}>
      <LandingSubText />
      </div>
      <div style={{width: '100%' , paddingTop:'15vh', textAlign:'-webkit-center'}}>
      <Call />
      </div>
      <div style={{width: '100%' , paddingTop:'3vh', textAlign:'-webkit-center'}}>
      <a style={{color: '#6B4CAB'}} href="www.google.com">...or talk to us first.</a>
      </div>
      <div style={{width: '100%' , paddingTop:'10vh', textAlign:'-webkit-center'}}>
      <Social />
      </div>
    </div>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Home;
