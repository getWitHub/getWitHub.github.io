import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

const Footer = props => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      allFooterMenuJson {
        edges {
          node {
            weight
            url
            name
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
              <img height={data.configJson.logo.desktop_height} alt={data.configJson.logo.alt} src={data.configJson.logo.desktop} />
              <ul>
                {data.allFooterMenuJson.edges.map(({ node }) => (
                  <li key={node.name}>
                    <a className="cta3" href='https://www.getwithub.com/register'>{node.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
