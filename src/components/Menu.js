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
          }
        }
      }
    }
  `);
  const handleClick = () => {
    if(window.location.href === 'https://www.getwithub.com/team/') {
      window.location.href = 'https://withub.typeform.com/to/UGIXbK89'
    }
    if(window.location.href === 'https://www.getwithub.com/') {
      window.scroll({
        top: document.body.offsetHeight,
        left: 0, 
        behavior: 'smooth',
      }); 
    }
  }
  return (
    <div id="main-menu" className="main-menu">
      <ul>
        {data.allMainMenuJson.edges.map(({ node }) => (
          <li key={node.name}>
            <LinkStyle className={node.name} href={node.url}>{node.name}</LinkStyle>
          </li>
        ))}
        <li>
        <LinkStyle className="cta2" onClick={() => handleClick()}>Get Your Invite</LinkStyle>
        </li>
      </ul>
    </div>
  );
};

export default Menu;

