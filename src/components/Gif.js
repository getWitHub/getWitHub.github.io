import React from "react";
import GIF from "../../static/gifs/test.gif";
import styled from "styled-components";

const Container = styled.div`
  width: 35vw;
  height: auto;
  white-space: nowrap;
  max-height: 40px;
  line-height: 40px;
  
  border-radius: 7px;
  padding-left: 26vw;
  position: absolute;
  box-sizing: border-box;
  break-before: auto;
  img{
    width: inherit;
    height: auto;
    border-radius: 5px;
    &:hover {
      box-shadow: 2.5px 2.5px 2px #888888;
      border-radius: 14px;
    }
  }
`;

const Giffy = () => {
  return (
    <Container className="gif">
      <img src={GIF} alt="testing..." />
    </Container>
  );
};

export default Giffy;
