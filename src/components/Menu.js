import React from 'react';
import { graphql, useStaticQuery} from 'gatsby';
import styled from 'styled-components';

const LinkStyle = styled.a`
  padding: 10px 12px 10px 12px;
  display: inline-block;
  font-weight: normal;
  text-decoration: none;
  color: #4460D9;
  &.hover {
    text-decoration: underline;
  }
  &.active {
    font-weight: bold;
    text-decoration: none;
    &:hover {
      text-decoration: none;
      transition: all 225ms ease-in 0s;
    }
  }
`;
const Menu = props => {
  const data = useStaticQuery(graphql`
    query MainMenuQuery {
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
  // remember to apply same changes in MenuMobile
  return (
    <div id="main-menu" className="main-menu">
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

export default Menu;

