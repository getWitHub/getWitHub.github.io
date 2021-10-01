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


const Home = (props) => {
  const intro = props.data.intro;
  const site = props.data.site.siteMetadata;
  // const introImageClasses = `intro-image ${
  //   intro.frontmatter.intro_image_absolute && "intro-image-absolute"
  // } ${
  //   intro.frontmatter.intro_image_hide_on_mobile && "intro-image-hide-mobile"
  // }`;
  return (
    <Layout bodyClass="page-home">
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
      </Helmet>.
      <div style={{textAlign : 'center' }}>
      <LandingText />
      </div>
      <div style={{textAlign : 'center' }}>
      <LandingSubText />
      </div>
      <div style={{textAlign : 'center' }}>
      <Call />
      </div>
    </Layout>
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
