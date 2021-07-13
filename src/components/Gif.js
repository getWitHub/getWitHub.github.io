import React from 'react';
import GIF from '../../static/gifs/test.gif'
import styled from 'styled-components';

const Container = styled.div`
width: 20%; 
white-space: nowrap;
display: inline-block;
height: 40px;
line-height: 40px;
border-radius: 4px;
padding-left: 35vw;
`;

const Giffy = () => {

  return (
    <Container className="gif">
        <img src={GIF} alt="testing..." />
    </Container>
  );
};

export default Giffy;
