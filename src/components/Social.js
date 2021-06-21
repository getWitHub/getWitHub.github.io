import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const SocialStyle = styled.div`
  display: block;
  img {
    width: 20px;
    height: 20px;
  }
  a {
    padding: 10px;
    display: inline-block;
    &:hover {
      opacity: 0.8;
    }
  }
`;
const Social = props => {
  const data = useStaticQuery(graphql`
    query SocialQuery {
      allSocialJson {
        edges {
          node {
            name
            image
            link
          }
        }
      }
    }
  `);
  return (
    <SocialStyle>
      {data.allSocialJson.edges.map(({ node }) => (
        <a key={node.name} href={node.link} target="blank"><img src={node.image} title={node.name} alt={node.name} /></a>
      ))}
    </SocialStyle>
  );
};

export default Social;
