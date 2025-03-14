import React, { useEffect } from "react";
import SectionWarpper from "../../Components/SectionWrapper";
import styled from "@emotion/styled";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import card1 from "../../../assets/listedsected.png";
import card2 from "../../../assets/listednfinity.png";
import card3 from "../../../assets/listedtg.png";
import glow from "../../../assets/listedglow.png";
import AOS from "aos";
import "aos/dist/aos.css";
import EastIcon from "@mui/icons-material/East";

const AboutButton = styled(Button)`
  padding: 5px 15px;
  background-color:rgba(255, 255, 255, 0.20);
  border-radius: 25px;
  border: 1px solid #ffffff;
  text-transform: capitalize;
  color: #ffffff;
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
  width: 100%;
  height: auto;
  object-fit: cover; /* Ensures images fill the space without distortion */
  user-drag: none;
  pointer-events: none;
  -webkit-user-drag: none;
`;


const Imagewrapper = styled(Box)`
  background-image: url(${glow});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100vh;
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
  text-align: left;
  margin-top: 10px;
  max-width: 260px; /* Limits text width for better readability */
  @media (max-width: 468px) {
    max-width: 350px; /* Limits text width for better readability */

}
`;

const ShopLink = styled("a")`
  display: flex;
  justify-content: left;
  align-items: left;
  color: #ffffff;
  font-size: 16px;
  text-align: left;
  margin-top: 10px;
  text-decoration: none;
  font-weight: bold;
  text-decoration: underline;
`;

const ListedProjects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  const projects = [
    {
      image: card1,
      title: "Sectbot",
      description:
        "Sectbot is a call tracking bot designed to significantly improve the monitoring and evaluation process of various calls posted within Telegram groups.",
      link: "https://app.aicm.store/services-sectbot",
    },
    {
      image: card2,
      title: "NFINITY",
      description:
        "NFINITY Studios Creates AI-Powered Content That Makes Founders Cry, Audiences Cheer, And Brands Come To Life.",
      link: "https://app.aicm.store/services-nfinity",
    },
    {
      image: card3,
      title: "Telegram Premium",
      description:
        "Telegram Premium unlocks exclusive perks like faster downloads, 4GB uploads, no ads, and a premium badge.",
      link: "https://app.aicm.store/services-telegram",
    },
  ];

  return (
    <SectionWarpper>
      <Imagewrapper>
        <Container maxWidth="xl">
          <Grid item xs={12} justifyContent={"center"} textAlign={"center"}>
            <AboutButton id="Services" data-aos="fade-up">
              Shop Now
            </AboutButton>
            <HighlightTypography
              variant="h2"
              sx={{ fontSize: { xs: "35px", sm: "40px", md: "60px" } }}
              data-aos="fade-up"
            >
              Listed Projects
            </HighlightTypography>

            <Grid
              container
              spacing={3}
              textAlign={"center"}
              justifyContent="center"
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
              }}
            >
              {projects.map((project, index) => (
                <Grid
                  item
                  xs={12}
                  sm={4}
                  md={3.5}
                  lg={2.5}
                  key={index}
                  data-aos="fade-up"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                    textAlign: "left",
                  }}
                >
                    <CardImage src={project.image} alt={project.title} draggable="false" />
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ShopLink href={project.link} target="_blank" rel="noopener noreferrer">
                    Shop Now <EastIcon style={{ marginLeft: "8px" }} />
                  </ShopLink>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Imagewrapper>
    </SectionWarpper>
  );
};

export default ListedProjects;
