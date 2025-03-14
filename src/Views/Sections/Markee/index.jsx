import React from "react";
import styled from "@emotion/styled";
import { Box, Typography, Grid } from "@mui/material";
import bitcoin from "../../../assets/bitcoin.png";
import ethereum from "../../../assets/ethereum.png";
import xrp from "../../../assets/xrp.png";
import tether from "../../../assets/tether.png";
import solana from "../../../assets/solana.png";
import bnb from "../../../assets/bnb.png";
import dodgecoin from '../../../assets/dogecoin.png';
import usd from '../../../assets/usd.png';
import cardano from '../../../assets/cardano.png';
import tron from '../../../assets/tron.png';
import box1 from '../../../assets/box1.png'

const MarkeeContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: absolute;
  background: rgb(0 0 0 / 50%);
  top: 0;
  backdrop-filter: blur(6px);
  z-index: 2;
  display: flex;
  align-items: center;
`;

const StaticContent = styled(Box)`
  color: #ffffff;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  white-space: nowrap;
  position: relative;
  z-index: 2;
  width: fit-content;
  @media (max-width: 600px) {
    padding: 10px 20px;
  }
`;

const MarqueeContent = styled.div`
  display: inline-block;
  white-space: nowrap;
  animation: scrolling 100s linear infinite;
  padding-left: 15px;
  margin-left: 10px;
  display: flex;

  @keyframes scrolling {
    0% {
      transform: translateX(15%);
    }
    100% {
      transform: translateX(-900%);
    }
  }
  
  @media (max-width: 600px) {
    animation: scrolling 10s linear infinite;
    
  @keyframes scrolling {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-800%);
    }
  }
    
  }
`;

const OverlayContent = styled(Box)`
  color: #ffffff;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  gap: 55px;

  @media (max-width: 768px) {
    gap: 60px;
  }
`;

const Image = styled("img")`
  width: 100%;
  max-width: 32px;
  height: auto;
`;

export const Markee = () => {
  return (
    <MarkeeContainer>
      <StaticContent>
        <Grid item xs={12} display="flex" alignItems="center" gap={1}>
          <Image src={box1} alt="Box 1" />
          <Typography variant="h6" color="#ffffff">
            Trending project
          </Typography>
        </Grid>
      </StaticContent>

      <div style={{ width: 'calc(100% - 205px)', overflow: 'hidden' }}>
        {/* Marquee Content */}
        <MarqueeContent>
          {Array(10).fill('test').map((item, index) => {
            return(
              <OverlayContent key={index} style={{marginRight: '100px'}}>
                <Grid item xs={12} display="flex" alignItems="center" gap={1}>
                  <Typography variant="h6" color="white">
                    #1
                  </Typography>
                  <Image src={bitcoin} alt="Bitcoin" />
                  <Typography variant="h6" color="white">
                    Bitcoin
                  </Typography>
                </Grid>
                <Grid item xs={12} display="flex" alignItems="center" gap={1}>
                  <Typography variant="h6" color="white">
                    #2
                  </Typography>
                  <Image src={ethereum} alt="Ethereum" />
                  <Typography variant="h6" color="white">
                    Ethereum
                  </Typography>
                </Grid>
                <Grid item xs={12} display="flex" alignItems="center" gap={1}>
                  <Typography variant="h6" color="white">
                    #3
                  </Typography>
                  <Image src={xrp} alt="XRP" />
                  <Typography variant="h6" color="#ffffff">
                    XRP
                  </Typography>
                </Grid>
                <Grid item xs={12} display="flex" alignItems="center" gap={1}>
                  <Typography variant="h6" color="white">
                    #4
                  </Typography>
                  <Image src={tether} alt="Tether" />
                  <Typography variant="h6" color="#ffffff">
                    Tether
                  </Typography>
                </Grid>
                <Grid item xs={12} display="flex" alignItems="center" gap={1}>
                  <Typography variant="h6" color="white">
                    #5
                  </Typography>
                  <Image src={solana} alt="Solana" />
                  <Typography variant="h6" color="white">
                    Solana
                  </Typography>
                </Grid>
                <Grid item xs={12} display="flex" alignItems="center" gap={1}>
                  <Typography variant="h6" color="white">
                    #6
                  </Typography>
                  <Image src={bnb} alt="BNB" />
                  <Typography variant="h6" color="white">
                    BNB
                  </Typography>
                </Grid>
                <Grid item xs={12} display="flex" alignItems="center" gap={1}>
                  <Typography variant="h6" color="white">
                    #7
                  </Typography>
                  <Image src={dodgecoin} alt="Dogecoin" />
                  <Typography variant="h6" color="white">
                    Dogecoin
                  </Typography>
                </Grid>
                <Grid item xs={12} display="flex" alignItems="center" gap={1}>
                  <Typography variant="h6" color="white">
                    #8
                  </Typography>
                  <Image src={usd} alt="USDC" />
                  <Typography variant="h6" color="white">
                    USDC
                  </Typography>
                </Grid>
                <Grid item xs={12} display="flex" alignItems="center" gap={1}>
                  <Typography variant="h6" color="white">
                    #9
                  </Typography>
                  <Image src={cardano} alt="Cardano" />
                  <Typography variant="h6" color="white">
                    Cardano
                  </Typography>
                </Grid>
                <Grid item xs={12} display="flex" alignItems="center" gap={1}>
                  <Typography variant="h6" color="white">
                    #10
                  </Typography>
                  <Image src={tron} alt="Tron" />
                  <Typography variant="h6" color="white">
                    Tron
                  </Typography>
                </Grid>
              </OverlayContent>
            )
          })}
        </MarqueeContent>
      </div>
    </MarkeeContainer>
  );
};
