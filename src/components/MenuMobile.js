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
          }
        }
      }
    }
  `);
  const handleClick = () => {

    window.location.href = 'https://withub.typeform.com/to/UGIXbK89?utm_source=xxxxx&utm_medium=xxxxx&utm_campaign=xxxxx&utm_term=xxxxx&utm_content=xxxxx'

  }
  return (
    <div id="main-menu-mobile" className={`main-menu-mobile ${props.active ? 'open' : ''}`}>
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

export default MobileMenu;
