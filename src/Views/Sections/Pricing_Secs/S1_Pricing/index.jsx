// src/Views/Pages/Pricing.js
import React, { useEffect } from "react";
import LockerMenu from "../../../Components/LockerMenu";
import { Box, Container, Grid, Typography, Button, styled } from "@mui/material";
import { Markee } from "../../Markee";
import glow from "../../../../assets/pricingbg.png";
import PricingCard from "../../../Components/PricingCard";
import ComparePlans from "../../../Components/Compare";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 200px;
  background-image: url(${glow});
  background-size: cover;
  background-position: center;
`;

const HighlightTypography = styled(Typography)`
  margin-bottom: 10px;
  background: linear-gradient(131deg, #ffffff 30%, #FF7B29 65%, #fd9c39 85%);
  background-clip: text;
  color: transparent;
  font-weight: 700;
`;

const Sec1_Pricing = () => {

    const pricingPlans = [
        {
            title: "Essential",
            price: "Free",
            tagline: "For new vendors looking to establish\n their presence with AI-powered tools.",
            features: [
                "AI Conversion Pro",
                "AI Smart Search Optimization (Coming Soon)",
                "Product/Service Detail Page",
                "Real Reviews & Ratings",
                "Secure Payment Gateway",
                "Basic Analytics Dashboard",
                "AI-Driven FAQs"
            ],
            buttonText: "Try For Free",
            highlight: false
        },
        {
            title: "Elevate",
            price: "0.5 ETH",
            tagline: "For growing vendors who want enhanced\n features and data insights.",
            features: [
                "AI Conversion Pro",
                "AI Smart Search Optimization (Coming Soon)",
                "Product/Service Detail Page",
                "Real Reviews & Ratings",
                "Secure Payment Gateway",
                "Basic Analytics Dashboard",
                "AI-Driven FAQs",
                "Verified Seller Badge",
                "AI Vendor Copilot (Coming Soon)",
                "Reduced Transaction Fees",
                "Sponsored Ad Discounts"
            ],
            buttonText: "Buy Now",
            highlight: true
        },
        {
            title: "Elite",
            price: "1 ETH",
            tagline: "For vendors seeking top placement, AI\n tools, and social media boost.",
            features: [
                "AI Conversion Pro",
                "AI Smart Search Optimization (Coming Soon)",
                "Product/Service Detail Page",
                "Real Reviews & Ratings",
                "Secure Payment Gateway",
                "Basic Analytics Dashboard",
                "AI-Driven FAQs",
                "Verified Seller Badge",
                "AI Vendor Copilot (Coming Soon)",
                "Reduced Transaction Fees",
                "Sponsored Ad Discounts",
                "Custom Token Integration",
                "Multi-Language AI Support",
                "Dedicated Account Manager",
                "Exclusive Beta Feature Access",
                "Project Awareness Campaign"
            ],
            buttonText: "Buy Now",
            highlight: false
        }
    ];
useEffect(() => {
      AOS.init({
        duration: 1000,  
        once: false,     
        easing: 'ease-in-out',
      });
      AOS.refresh(); 
    }, []);

    return (
        <Wrapper>
            <Markee />
            <LockerMenu />
            <Container maxWidth="xl">
                <Grid container justifyContent="center" textAlign="center">
                    <Grid item xs={12}>
                        <HighlightTypography variant="h2" sx={{  padding:"40px 0 0", fontSize: {  xs: "50px", sm: "50px", lg: "55px" } }}>
                            Go from Listing to Growth with AICM.
                        </HighlightTypography>
                        <Grid contanier display="flex" justifyContent={'center'}>
                            <Grid item xs={12} md={8} lg={7} xl={5.8} >
                                <Typography variant="body1" color="#FFFFFF" sx={{ padding:"10px 0 20px", fontSize: { xs: "14px", sm: "16px", md: "18px" } }}>
                                    Power your e-commerce, Web3, and physical goods business with AI-driven
                                    listings and sales agents for seamless growth.
                                </Typography>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container spacing={3} justifyContent="center" sx={{ mt: 5 }}  data-aos="fade-up">
                    {pricingPlans.map((plan, index) => (
                        <Grid item key={index}>
                            <PricingCard {...plan} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Wrapper>
    );
};

export default Sec1_Pricing;
