import React from 'react';
import styled from 'styled-components'; 


const BannerStyle = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: #5271FF;
width: 100%;
height: 5vh;
font-size: 1.1rem;
color: #ffffff
`;

const TextStyle = styled.div`
text-align: center;
`;

const Banner = () => {
    return(
        <BannerStyle className="banner">
            <TextStyle className="bannerText">Fresh invites are released in batches <span style={{fontWeight: 'bolder'}}>everyday</span>. Sign up to reserve your invite and <span><a className="cta0"style={{fontWeight: 'bolder',color:'#ffffff'}} href="https://withub.typeform.com/to/dOTkG3oa">get started with WitHub</a>.</span></TextStyle>
        </BannerStyle>
    )
}

export default Banner;