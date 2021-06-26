import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const MobileMenu = props => {
  const data = useStaticQuery(graphql`
    query MainMobileMenuQuery {
      allMainMenuJson {
        edges {
          node {
            name
            url
            weight
          }
        }
      }
    }
  `);
  return (
    <div id="main-menu-mobile" className={`main-menu-mobile ${props.active ? 'open' : ''}`}>
      <ul>
        {data.allMainMenuJson.edges.map(({ node }) => (
          <li key={node.name}>
            <a className={node.name} href={node.url} >{node.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
