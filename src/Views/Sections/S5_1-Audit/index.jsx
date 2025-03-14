import React, { useEffect } from "react";
import SectionWarpper from "../../Components/SectionWrapper";
import styled from "@emotion/styled";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import solidproof from "../../../assets/solidproof.png";
import audited from "../../../assets/audited.png";
import silver from "../../../assets/silver.png";
import glow from "../../../assets/auditsectionbg.png";
import AOS from "aos";
import "aos/dist/aos.css";
import EastIcon from "@mui/icons-material/East";

const AboutButton = styled(Button)`
  padding: 5px 15px;
  background-color:rgba(255, 255, 255, 0.20);
  border-radius: 25px;
  border: 1px solid #ffffff;
  color: #ffffff;
  text-transform: capitalize;
  margin-bottom: 40px;
  cursor: default;
  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
    :hover{
    background-color:rgba(255, 255, 255, 0.20);
  }
`;

const HighlightTypography = styled(Typography)`
  margin-bottom: 30px;
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
  text-align: center;
`;

const CardImage = styled("img")`
  // width: 100%;
  height: auto;
  object-fit: cover; /* Ensures images fill the space without distortion */
  user-drag: none;
  pointer-events: none;
  -webkit-user-drag: none;
  padding: 10px 0;
`;


const Imagewrapper = styled(Box)`
  background-image: url(${glow});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;

  @media (max-width: 768px) {
    height: auto;
    padding-top: 30px;
  }
`;

const ProjectDescription = styled(Typography)`
  color: #ffffff;
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
  max-width: 260px; /* Limits text width for better readability */
`;

const ShopLink = styled(Button)`
 padding: 8px 35px;
  border-radius: 25px;
  color: #fff;
  text-transform: capitalize;
  margin: 20px 0 0;  
    transition: all 0.3s ease-in-out !important; /* Smooth transition */

  background: linear-gradient(290deg, #FF7B29, #FF7B29, #FF7B29, #FCBD49);
  :hover{
 box-shadow: 0 0 10px 0 #FF7B29 inset, 0 0 10px 2px #FF7B29;
  
}
`;

const Audit = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);


  return (
    <>
      <Imagewrapper>
        <Container maxWidth="xl">
          <Grid data-aos="fade-up" item xs={12} justifyContent={"center"} textAlign={"center"}>
            <AboutButton id="Services" data-aos="fade-up">
              Security
            </AboutButton>
            <HighlightTypography
              variant="h2"
              sx={{ fontSize: { xs: "35px", sm: "40px", md: "60px" } }}
              data-aos="fade-up"
            >
              AICM Audits
            </HighlightTypography>
            <Typography variant="body1" sx={{ maxWidth: '800px', margin: '0 auto', marginBottom: '50px', fontSize: { xs: '14px', sm: '18px', md: '22px' }, }}
              data-aos="fade-up" >
              AICM has successfully completed the KYC & Audit with SolidProof.io. This ensures that AICM operates transparently, adheres to regulatory requirements, and fosters a safe environment for the users.          </Typography>
            <CardImage data-aos="fade-up" src={solidproof} alt="solidproof" />
            <Grid
              data-aos="fade-up"
              container
              spacing={3}
              textAlign={"center"}
              justifyContent="center"
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                gap: "10px",
                padding: '25px 10px 0',
              }}
            >
              <CardImage src={silver} alt="silver" />
              <CardImage src={audited} alt="audited" />


            </Grid>
            <ShopLink data-aos="fade-up" href="https://app.solidproof.io/projects/aicm" target="blank">View Audit and KYC</ShopLink>
          </Grid>
        </Container>
      </Imagewrapper>
    </>
  );
};

export default Audit;
