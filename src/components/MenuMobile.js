import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const LinkStyle = styled.a`
display: block;
position: relative;
color: #ffffff;
text-decoration: none;
overflow: hidden;
&:hover {
  opacity: 0.8;
}
`;

const MobileMenu = props => {
  const data = useStaticQuery(graphql`
    query MainMobileMenuQuery {
      allMainMenuJson {
        edges {
          node {
            name
            url
            weight
            className
          }
        }
      }
    }
  `);
  return (
    <div id="main-menu-mobile" className={`main-menu-mobile ${props.active ? 'open' : ''}`}>
      <ul>
        {data.allMainMenuJson.edges.map(({ node }) => (
          <li className={node.className}key={node.name}>
          <LinkStyle href={node.url}>{node.name}</LinkStyle>
        </li>
      ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
