import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import TypeformLink from "./ExtensionLink";
const Footer = (props) => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      allFooterMenuJson {
        edges {
          node {
            weight
            url
            name
            className
          }
        }
      }
      configJson {
        logo {
          alt
          desktop
          mobile
          desktop_height
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-inner">
              <img
                height={data.configJson.logo.desktop_height}
                alt={data.configJson.logo.alt}
                src={data.configJson.logo.desktop}
              />
              <ul>
                {data.allFooterMenuJson.edges.map(({ node }) => (
                  <li className={node.className} key={node.name}>
                    <a href={node.url}>{node.name}</a>
                  </li>
                ))}
                <li className="cta3" key="Sign Up">
                  <a href={TypeformLink()}>Sign Up</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
