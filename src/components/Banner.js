import React from 'react';
import styled from 'styled-components'; 


const BannerStyle = styled.div`
background: #5271FF;
width: 100%
height: 3rem;
margin-top: 0rem;
font-size: 1.1rem;
text-align: center;
padding-top: 0.4rem;
`;

const TextStyle = styled.p`
color: #ffffff
`;

const Banner = () => {
    return(
        <BannerStyle className="banner">
            <TextStyle className="bannerText">New slots are opened in batches everyday. SignUp to access with the next batch</TextStyle>
        </BannerStyle>
    )
}

export default Banner;