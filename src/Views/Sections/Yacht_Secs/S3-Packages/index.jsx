// src/Views/Pages/Pricing.js
import React, { useEffect } from "react";
import { Box, Container, Grid, Typography, Button, styled, CircularProgress } from "@mui/material";
import star from '../../../../assets/star.svg';
import Bgshadowpricing from "../../../../assets/bgshadowpricing.png";
import logo3 from '../../../../assets/Logo3.svg';
import singer from '../../../../assets/singer.svg';
import Shirt from '../../../../assets/Shirt.svg';
import placement from '../../../../assets/placement.svg';
import telegram from '../../../../assets/Telegram.svg';
import dev from '../../../../assets/dev.svg';
import starfill from '../../../../assets/starfill.svg';
import Gift from '../../../../assets/Gift.svg'
import recap from '../../../../assets/recap.svg';
import wine from '../../../../assets/wine.svg';
import dj from '../../../../assets/dj.svg';
import person from '../../../../assets/person.svg';
import food from '../../../../assets/food.svg';
import share from '../../../../assets/Share.svg';
import Cardauto from "../cardauto";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from "react-router-dom";
import useContractInteraction from "../../../../hooks/useContractInteraction";

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
 padding: 80px 0px;
  background-image: url(${Bgshadowpricing});
  background-size: cover;
  background-position: center;
`;

const HighlightTypography = styled(Typography)`
  margin-bottom: 30px;
  background: linear-gradient(131deg, #ffffff 30%, #FF7B29 65%, #fd9c39 85%);
  background-clip: text;
  color: transparent;
  font-weight: 700;
`;
const Totalbox = styled(Box)`
display: flex !important;
align-items: center !important;
`
const Totalimg = styled('img')`
width: 18px !important;
margin-right: 8px !important;
`


const Packages = () => {
  const { prices, priceLoadingStates } = useContractInteraction();

  const navigate = useNavigate(); // Import this from react-router-dom
  
  const handleBookNow = (packageType) => {
    navigate('/yacht-party-form', { state: { selectedPackage: packageType } });
  };
  
const pricingPlans = [
    
  {
    title: "Standard Package",
    // price: `${prices?.standard} ETH`,
    price: priceLoadingStates?.standard ? <CircularProgress size={25}/> : `${prices?.standard ?? '<N/A>'} ETH`,

    // tagline: "A high-impact sponsorship designed to give your project premium exposure at the most anticipated AI x Crypto gathering during Token2049.",
    features: [
      <Totalbox><Totalimg src={star} alt="star icon"/>Elite Listing on AICM Platform (Valued at 1 ETH)</Totalbox>,
      <Totalbox><Totalimg src={Shirt} alt="star icon"/>100 Custom Printed Shirts</Totalbox>,
      <Totalbox> <Totalimg  src={logo3} alt="star icon"/>Logo Placement at the Exclusive Token2049 AI Summit Yacht Party</Totalbox>,
      <Totalbox> <Totalimg  src={share} alt="star icon" />Social Media Promotion</Totalbox>,
      <Totalbox> <Totalimg  src={telegram} alt="star icon"/>Telegram Community Push</Totalbox>,
      <Totalbox> <Totalimg  src={Gift} alt="star icon"/>Exclusive Giveaway Sponsorship</Totalbox>,
      <Totalbox> <Totalimg  src={person} alt="star icon"/>1 Person Entry</Totalbox>,
      <Totalbox> <Totalimg  src={dj} alt="star icon"/>Live DJ</Totalbox>,
     <Totalbox> <Totalimg  src={food} alt="star icon" />Live Cooking Station</Totalbox> ,
     <Totalbox>  <Totalimg  src={wine} alt="star icon"/>Open Bar</Totalbox>,
    ],
    buttonText: "Book Now",
    highlight1: true
  },
  {
    title: "Premium Package",
    price: priceLoadingStates?.premium ? <CircularProgress size={25}/> : `${prices?.premium ?? '<N/A>'} ETH`,

    // tagline: "An exclusive, high-impact sponsorship designed for maximum visibility at Token2049’s most influential AI x Crypto event.",
    features: [
   
      <Totalbox><Totalimg  src={star} alt="star icon"/>Elite Listing on AICM Platform (Valued at 1 ETH)</Totalbox>,
     <Totalbox> <Totalimg  src={Shirt} alt="star icon"/>100 Custom Printed Shirts</Totalbox> ,
      <Totalbox> <Totalimg  src={logo3} alt="star icon"/>Logo Placement at the Exclusive Token2049 AI Summit Yacht Party</Totalbox>,
      <Totalbox> <Totalimg src={share} alt="star icon"/>Social Media Promotion</Totalbox>,
      <Totalbox> <Totalimg  src={telegram} alt="star icon"/>Telegram Community Push</Totalbox>,
      <Totalbox> <Totalimg  src={Gift} alt="star icon"/>Sponsored Giveaway for Attendees</Totalbox>,
      <Totalbox> <Totalimg  src={singer} alt="star icon"/>Exclusive Stage Shoutout</Totalbox>,
      <Totalbox> <Totalimg  src={recap} alt="star icon"/>Featured in the Official Post-Event Recap Video</Totalbox>,
      <Totalbox> <Totalimg  src={placement} alt="star icon"/>Priority Placement on AICM Platform & Social Media</Totalbox>,
      <Totalbox> <Totalimg  src={person} alt="star icon"/>2 Persons Entry</Totalbox>,
      <Totalbox> <Totalimg src={dj} alt="star icon"/>Live DJ</Totalbox>,
     <Totalbox> <Totalimg src={food} alt="star icon"/>Live Cooking Station</Totalbox> ,
     <Totalbox> <Totalimg  src={wine} alt="star icon"/>Open Bar</Totalbox>,
   
    ],
    buttonText: "Book Now",
    highlight2: true,
    
  },
  {
    title: "Degen Package",
    price: priceLoadingStates?.degen ? <CircularProgress size={25}/> : `${prices?.degen ?? '<N/A>'} ETH`,

    // tagline: "The Degen Package is your exclusive access to the Token2049 AI Summit Yacht Party, bringing you closer to your favorite KOLs, developers, and top-tier crypto projects in an epic, high-energy setting.",
    features: [
     <Totalbox> <Totalimg  src={starfill} alt="star icon"/>Meet Your Favorite KOLs</Totalbox> ,
     <Totalbox> <Totalimg  src={dev} alt="star icon"/>Connect with Top Devs</Totalbox> ,
      <Totalbox> <Totalimg  src={Shirt} alt="star icon"/>Exclusive Project Merch</Totalbox>,
      <Totalbox> <Totalimg  src={share} alt="star icon"/>Giveaway Access</Totalbox>,
      <Totalbox> <Totalimg  src={person} alt="star icon"/>1 Person Entry</Totalbox>,
      <Totalbox> <Totalimg  src={dj} alt="star icon"/>Live DJ</Totalbox> ,
      <Totalbox> <Totalimg  src={food} alt="star icon"/>Live Cooking Station</Totalbox>,
      <Totalbox> <Totalimg  src={wine} alt="star icon"/>Open Bar</Totalbox>
    ],
    buttonText: "Book Now",
    highlight3: true
  },

];
  return (
    <Wrapper>
      <Container maxWidth="lg">
        <Grid container justifyContent="center" textAlign="center">
          <Grid item xs={12}>
            <HighlightTypography variant="h2"  sx={{ padding: "40px 0 0", fontSize: { xs: "50px", sm: "50px", lg: "55px" } }}>
              Packages
            </HighlightTypography>
          </Grid>
        </Grid>

        <Grid container spacing={3} justifyContent="center" sx={{ mt: 5 }}>
          {pricingPlans.map((plan, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} >
              <Cardauto 
              {...plan} 
              onBookNow={() => handleBookNow(
                index === 0 ? 'standard' : 
                index === 1 ? 'premium' : 'degen'
              )}
            />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Packages;
