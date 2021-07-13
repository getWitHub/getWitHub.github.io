import React from "react";
import GIF from "../../static/gifs/test.gif";
import styled from "styled-components";

const Container = styled.div`
  width: 45vw;
  white-space: nowrap;
  height: 40px;
  line-height: 40px;
  border-radius: 4px;
  padding-left: 25vw;
  
  img{
    width: 37vw;
    height: auto;
    border-radius: 5px;

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
