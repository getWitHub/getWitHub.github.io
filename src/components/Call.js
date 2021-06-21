import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const ButtonStyle = styled.button`
white-space: nowrap;
display: inline-block;
height: 40px;
line-height: 40px;
padding: 0 14px;
background: #4460D9;
border-radius: 4px;
font-size: 14px;
font-weight: normal;
text-transform: uppercase;
letter-spacing: 0.025em;
color: #ffffff;
text-decoration: none;
-webkit-transition: all 0.15s ease;
transition: all 0.15s ease;
&:hover {
  color: #ffffff;
  background-color: lighten(#4460D9, 10%);
  transform: translateY(-1px);
  text-decoration: none;
}
`;


const Call = props => {
  const data = useStaticQuery(graphql`
    query ContactQuery {
        contactJson {
          contact_button_link
        }
    }
   `);
  return (
    <div className="call">
      {props.showButton && (
        <div className="call-box-bottom">
          <ButtonStyle href={data.contactJson.contact_button_link}>Reserve Your Invite</ButtonStyle>
        </div>
      )}
    </div>
  );
};

export default Call;
