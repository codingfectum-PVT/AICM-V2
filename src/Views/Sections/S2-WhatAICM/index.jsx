import React, { useState, useRef,useEffect } from 'react';
import styled from '@emotion/styled';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import voicevedio from '../../../assets/voicevedio.mp4';
import voiceimg from '../../../assets/voiceimg.png';
import SectionWarpper from '../../Components/SectionWrapper';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { whitepaperLink } from '../../../links';


const AboutButton = styled(Button)`
  padding: 5px 20px;
  background-color:rgba(255, 255, 255, 0.20);
  border-radius: 25px;
  text-transform: capitalize;
  border: 1px solid #ffffff;
  color: #ffffff;
  cursor: default;
  margin-bottom: 40px;
  :hover{
    background-color:rgba(255, 255, 255, 0.20);
  }
`;

const HighlightTypography = styled(Typography)`
  margin-bottom: 40px;
    background: linear-gradient(
    131deg,
    #ffffff 40%,
    #ff7b29 55%,
    #fd9c39 60%,
    #fcbd49 90%
  );
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 700;
`;

const ReadButton = styled(Button)`
  padding: 8px 35px;
  background-color: #ffffff;
  border-radius: 25px;
  color: #000000;
  margin-bottom: 50px;
  transition: all 0.3s ease-in-out !important; /* Smooth transition */

  :hover{
 box-shadow: 0 0 10px 0 #fff inset, 0 0 10px 2px #fff;
  background-color: #ffffff;
}
`;

const VideoWrapper = styled(Box)`
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  @media (max-width: 600px) {
    height: 250px;
  }
`;

const BackgroundVideo = styled('video')`
  width: 100%;
  height: 100%;
  object-fit: cover;
-webkit-object-fit: cover;

`;

const OverlayImage = styled('img')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 90px;
  z-index: 1;
  cursor: pointer;
  opacity: ${({ hide }) => (hide ? 0 : 1)};
  transition: opacity 0.5s ease-in-out;
  @media (max-width: 600px) {
    max-width: 70px;
  }
`;

const WhatAICM = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(true);
  const videoRef = useRef(null);
    

  const handleImageClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true); 
      setIsImageVisible(false); 
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false); 
      setIsImageVisible(true); 
    }
  };



  return (
    <> 
      <Container maxWidth="md"  id="what">  
        <Grid item xs={12} justifyContent={'center'} textAlign={'center'}>
          <AboutButton  data-aos="fade-up">About</AboutButton>
          <HighlightTypography variant="h2" sx={{ fontSize: { xs: '45px', sm: '40px', md: '60px' } }}   data-aos="fade-up" >
            What is AICM?
          </HighlightTypography>
          <Typography variant="body1"sx={{maxWidth: '800px',margin: '0 auto',marginBottom: '50px',fontSize: { xs: '14px', sm: '18px', md: '22px' },}}
            data-aos="fade-up" >
            AICM is an AI-powered marketplace for physical goods, digital products, and services. Built on blockchain, we provide secure, transparent, and scalable trading solutions, connecting crypto communities and revolutionizing global e-commerce.
          </Typography>
          <ReadButton sx={{ fontSize: { xs: '14px', sm: '16px', md: '18px' } }} href={whitepaperLink} target='blank'  data-aos="fade-up" >Read Whitepaper</ReadButton>

          <VideoWrapper data-aos="fade-up" >
            <BackgroundVideo ref={videoRef} src={voicevedio} loopmuted={!isPlaying} playsInlineonClick={handleVideoClick} />
            {isImageVisible && (
              <OverlayImage src={voiceimg} alt="Overlay Voice Image" onClick={handleImageClick}  hide={!isImageVisible} />
            )}
          </VideoWrapper>
        </Grid>
      </Container>
    </>
  );
};

export default WhatAICM;
