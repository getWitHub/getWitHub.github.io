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
            <TextStyle className="bannerText">New slots are opened in batches everyday. SignUp to access with the next batch</TextStyle>
        </BannerStyle>
    )
}

export default Banner;