import React from 'react';
import { graphql, useStaticQuery} from 'gatsby';

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
  return (
    <div id="main-menu" className="main-menu">
      <ul>
        {data.allMainMenuJson.edges.map(({ node }) => (
          <li key={node.name}>
            <a className={node.name} href={node.url}>{node.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
