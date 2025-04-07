import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { Box, IconButton, Typography, Fade } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import party from '../../../../assets/party.mp4';
import thumbnail from '../../../../assets/yachtbg.png';

const Wrapper = styled(Box)`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

const BackgroundVideo = styled('video')`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
`;

const Overlay = styled(Box)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 55px;
  /* background: rgba(0, 0, 0, 0.6); */
  /* backdrop-filter: blur(7px); */
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.5s ease-in-out;
`;

const ScrollText = styled(Typography)`
  color: white;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: glow 0.6s infinite alternate; 

  @keyframes glow {
    from {
      text-shadow: 0 0 4px rgba(255, 255, 255, 0.6);
    }
    to {
      text-shadow: 0 0 15px rgba(255, 255, 255, 1);
    }
  }
`;

const ArrowIcon = styled(ExpandMoreIcon)`
  font-size: 28px;
  margin-top: 2px;
  animation: bounce 1.5s infinite;

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(6px);
    }
  }
`;

const MuteButton = styled(IconButton)`
  position: absolute;
  bottom: 80px;
  right: 20px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  color: white;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: rgba(255, 255, 255, 0.4);
    transform: scale(1.1);
  }
`;

const Header = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [showScrollText, setShowScrollText] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollText(false);
      } else {
        setShowScrollText(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Wrapper>
      <BackgroundVideo ref={videoRef} src={party} autoPlay loop muted={isMuted} playsInline poster={thumbnail} />

      <MuteButton onClick={toggleMute}>
        {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
      </MuteButton>

      <Overlay>
        <Fade in={showScrollText}>
          <ScrollText>
            Scroll to view more
            <ArrowIcon />
          </ScrollText>
        </Fade>
      </Overlay>
    </Wrapper>
  );
};

export default Header;
