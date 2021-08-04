import React from "react";
import styled from "styled-components";

const VideoStyle = styled.div`
  height: 42vh;
  width: 30vw;
  position: absolute;
  top: 20vh;
  left: 53vw;
  @media (max-width: 1200px) and (min-width: 600px) {
    width: 70vw;
    top: 10vh;
    left: 15vw;
    height: 35vh;
  }
  @media (max-width: 600px) and (min-width: 350px){
    width: 80vw;
    top: 17vh;
    left: 10vw;
    height: 35vh;
  }
  @media (max-width: 350px) and (min-width: 260px){
    width: 80vw;
    top: 17vh;
    left: 10vw;
  }
`;

const DemoVideo = () => {
  return (
    <VideoStyle className="demovideo">
      <iframe
        src="https://www.youtube.com/embed/Mx15C7HASN8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        style={{
          height: "100%",
          width: "100%",
          borderRadius: "10px",
        }}
      ></iframe>
    </VideoStyle>
  );
};

export default DemoVideo;
