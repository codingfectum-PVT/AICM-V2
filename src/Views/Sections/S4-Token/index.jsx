import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { Box, Button, Grid, Typography, Tooltip } from '@mui/material';
import SectionWarpper from '../../Components/SectionWrapper';
import glow from '../../../assets/Ellipse.png';
import token from '../../../assets/token.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import tokenmob from '../../../assets/tokenmob.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CA } from '../../../links';

import copyImage from '../../../assets/copy.png';
const AboutButton = styled(Button)`
  padding: 5px 15px;
  background-color:rgba(255, 255, 255, 0.20);
  border-radius: 25px;
  border: 1px solid #ffffff;
  text-transform: capitalize;
  color: #ffffff;
  cursor: default;
  margin-bottom: 30px;
  :hover{
    background-color:rgba(255, 255, 255, 0.20);
  }
`;

const HighlightTypography = styled(Typography)`
  margin-bottom: 20px;
  background: linear-gradient(
    131deg,
    #ffffff 40%,
    #ff7b29 55%,
    #fd9c39 60%,
    #fcbd49 90%
  );  background-clip: text;
  text-fill-color: transparent;
  font-weight: 700;
  margin: 0 auto;
`;

const Tokenimg = styled('img')`
  width: 100%;
  max-width: 1100px;
   user-drag: none;
  pointer-events: none;
  -webkit-user-drag: none;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const Tokenmob = styled('img')`
  display: none;
  width: 100%;
  max-width: 400px;

  @media (max-width: 1024px) {
    display: block;
    margin: 0 auto;
  }
`;

const Imagewrapper = styled(Box)`
  background-image: url(${glow});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;

const ContractAddressBox = styled(Box)`
  width: 100%;
  background-color: transparent;
  border-radius: 25px;
  border: 1px solid #1C1C1C;
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 15px;
  justify-content: space-between;
  margin-top: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
    padding: 20px;
    max-width: 95%;
    margin: 0 auto;
  }
  @media (max-width: 330px) {
    padding: 10px;
  }
`;

const Token = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    });
    AOS.refresh();
  }, []);

  const contractAddress = CA;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    toast.success('Contract Address Copied!', {
      position: 'bottom-center',
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      closeButton: false,
      style: {
        backgroundColor: '#1a1a1a',
        color: '#ffffff',
        borderRadius: '10px',
        padding: '12px 24px',
        fontWeight: 'bold',
        fontSize: '16px',
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
        transition: 'all 0.3s ease-in-out',
        border: '1px solid #ffffff',
      },
    });
  };

  const CopyImage = styled('img')`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: 0px;
`;

  return (
    <SectionWarpper>
      <Imagewrapper id='token'>
        <Grid item xs={12} justifyContent={'center'} textAlign={'center'}>
          <AboutButton  data-aos="fade-up">$AICM</AboutButton>
          <HighlightTypography variant="h2" data-aos="fade-up" sx={{fontSize: { xs: '45px', sm: '40px', md: '60px' },}}>
            Token Utility
          </HighlightTypography>
          <Typography variant="body1" sx={{ fontSize: { xs: '14px', sm: '18px', md: '22px' }, marginTop: '20px' }}data-aos="fade-up">
            Discover how the $AICM token powers transactions, rewards, and exclusive <br /> features across our marketplace
          </Typography>
          <Tokenimg src={token} alt="Token" data-aos="fade-up" />
          <Tokenmob src={tokenmob} alt="token" data-aos="fade-up" />

          <Tooltip title="Copy to Clipboard" arrow>
            <ContractAddressBox data-aos="fade-up" onClick={copyToClipboard} sx={{ cursor: 'pointer', }}>
              <Typography variant="body1"color="#ffffff"
                sx={{marginBottom: { xs: '10px', sm: '0' },fontSize: { xs: '16px', sm: '14px', md: '20px' },}}>
                Contract Address:
              </Typography>
              <Box sx={{ display: 'flex',flexDirection: { xs: 'column', sm: 'row' },alignItems: 'center',}}>
                <Typography variant="body1" color="#ffffff" paddingRight={{ sm: '20px' }}
                  sx={{marginBottom: { xs: '10px', sm: '0' },fontSize: { xs: '11px', sm: '12px', md: '18px' },}}>
                  {contractAddress}
                </Typography>
                <CopyImage  src={copyImage}  alt="copy"  onClick={copyToClipboard} sx={{marginTop: { xs: '10px', md: '25px' },marginRight:{md:'15px'} }}  />
                  
              </Box>
            </ContractAddressBox>
            
          </Tooltip>
        </Grid>
      </Imagewrapper>
      <ToastContainer />
    </SectionWarpper>
  );
};

export default Token;
