import React, { useState } from 'react';
import SectionWarpper from '../../Components/SectionWrapper';
import { Box, Container, Grid, styled, Typography, Tooltip, useMediaQuery } from '@mui/material';
import footer from '../../../assets/footer.png';
import logo from '../../../assets/logo.png';
import copyImage from '../../../assets/copy.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  glow from '../../../assets/glow.png';
import { coingeckoLink, coinmarketcapLink, dexScreenerLink, privacypolicyLink, termofserviceLink, tgLink, uniSwapLink, whitepaperLink, xLink } from '../../../links';



const Logo = styled('img')`
  width: 100%;
  max-width: 130px;
  margin-bottom: 20px;
  
  @media (max-width: 600px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Link = styled(Typography)`
  margin-bottom: 10px;
  position: relative;
  cursor: pointer;
  font-size: 14px;
`;

const SectionTitle = styled(Typography)`
  margin-bottom: 20px;
  position: relative;
  font-size: 16px;
`;

const FooterWrapper = styled(Box)`
  background-image: url(${footer});
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;

  @media (max-width: 600px) {
    padding: 50px 0;
    background-size: cover;
    
  }

  @media (min-width: 960px) {
    padding-top: 170px;
  }
`;

const CopyImage = styled('img')`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: 10px;
`;




const Footer = () => {
    const isMobile = useMediaQuery('(max-width:699px)');
  
  const [copySuccess, setCopySuccess] = useState('');
  const contractAddress = '0x87904bE82BC1C29E94a0b99474d183B4e08a7E47';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress).then(
      () => {
       
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
      },
      (err) => {
        setCopySuccess('Failed to copy!');
        toast.error('Failed to copy address!', {
          position: 'bottom-center',
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          closeButton: false,
          style: {
            backgroundColor: '#ff4747',
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
      }
    );
  };

  return (
    <FooterWrapper>
      <Grid container xs={12}>
        <Container maxWidth="xl">
          <Grid style={{ background: '#0000004a',backdropFilter: 'blur(3px)', marginBottom: '60px', padding: '60px 20px'}}>
            <Grid container spacing={4} justifyContent="space-between">
              <Grid item xs={12} md={4}>
                <Logo src={logo} alt="logo" />
                <Typography variant="body1" maxWidth="400px" marginBottom="20px">
                  AICM is an AI-driven e-commerce marketplace powered by blockchain. It connects crypto
                  communities to buy, sell, and list physical goods, digital products, and services, offering
                  advanced AI tools and secure transactions.
                </Typography>

                <Typography variant="body1"  sx={{lineBreak: isMobile ? 'anywhere':"", fontSize: { xs: '11px', sm: '12px', md: '14px', lg: '16px' }, display:'flex'}}>
                  Contract address:  0x87904bE82BC1C29E94a0b99474d183B4e08a7E47
                  <Tooltip title="Click to copy address" arrow>
                      <CopyImage  src={copyImage}  alt="copy"  onClick={copyToClipboard} sx={{marginTop: { xs: '10px', md: '25px' },marginRight:{md:'15px'} }}  />
                    </Tooltip>

                </Typography>
                
                 
                {copySuccess && (
                  <Typography variant="body2" color="green" sx={{ marginTop: '5px' }}>
                    {copySuccess}
                  </Typography>
                )}
              </Grid>

              <Grid item xs={12} md={1.5}>
                <SectionTitle>Who we are</SectionTitle>
                <Link>About</Link>
               <a href={whitepaperLink} target='blank'  style={{textDecoration:'none'}}><Link>Whitepaper</Link></a>
                <Link>News & Media</Link>
              </Grid>

              <Grid item xs={12} md={1.8}>
                <SectionTitle>Product</SectionTitle>
                <a href='#'  style={{textDecoration:'none'}}><Link>Physical Products Store</Link></a>
                <a href='#'  style={{textDecoration:'none'}}><Link>Virtual Products Store</Link></a>
                <a href='#'  style={{textDecoration:'none'}}><Link>Virtual Services Store</Link></a>
              </Grid>

              <Grid item xs={12} md={1.5}>
                <SectionTitle>Find us on</SectionTitle>
                <a href={uniSwapLink} target='blank'   style={{textDecoration:'none'}}><Link>Uniswap</Link></a>
                <a href={dexScreenerLink} target='blank' style={{textDecoration:'none'}}><Link>Dexscreener</Link></a>
                <a href={coinmarketcapLink}  target='blank' style={{textDecoration:'none'}}><Link>CoinMarketCap</Link></a>
                <a href={coingeckoLink} target='blank' style={{textDecoration:'none'}}><Link>Coingecko</Link></a>
              </Grid>

              <Grid item xs={12} md={1.5}>
                <SectionTitle>Socials</SectionTitle>
                <a href={xLink} target='blank'  style={{textDecoration:'none'}}><Link >X (Twitter)</Link></a>
               <a href={tgLink}  style={{textDecoration:'none'}}> <Link>Telegram</Link></a>
              </Grid>

              <Grid item xs={12} md={1.5}>
                <SectionTitle>Contact us</SectionTitle>
                <Link>info@aicm.store</Link>
              </Grid>
            </Grid>
          </Grid>

          <Grid container spacing={2} justifyContent="space-between" sx={{ flexDirection: { xs: 'column-reverse', sm: 'row' }, alignItems: 'center',marginBottom:'30px'}}>
            <Grid item xs={12} sm={4} sx={{ textAlign: { xs: 'center', sm: 'left' }, marginLeft: { md: '30px' } }}>
           <Typography variant="body1">Copyright © 2024 AICM</Typography>
            </Grid>

            <Grid item xs={12} sm={4} sx={{ display: 'flex', justifyContent: 'center', flexDirection: { xs: 'column', sm: 'row' }, textAlign: 'center' }}>
              <a href={termofserviceLink} style={{textDecoration:'none'}}>
              <Typography variant="body1" sx={{ marginBottom: { xs: '10px', sm: '0' }  }}>
                Terms of Service
              </Typography>
              </a>
              <a  href= {privacypolicyLink} style={{textDecoration:'none'}}>
              <Typography variant="body1" style={{ marginLeft: '20px' }}>
                Privacy Policy
              </Typography>
              </a>
            </Grid>
          </Grid>
        </Container>
      </Grid>

      <ToastContainer />
    </FooterWrapper>
  );
};

export default Footer;
