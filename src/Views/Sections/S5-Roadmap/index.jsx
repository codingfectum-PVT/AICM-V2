import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import SectionWarpper from '../../Components/SectionWrapper';
import { Container, Grid, Box, Typography } from '@mui/material';
import tick from '../../../assets/tick.png'; 
import loading from '../../../assets/loading.png'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'; 

const AboutButton = styled(Box)`
  display: inline-block;
  padding: 5px 15px;
  background-color: #707070;
  border-radius: 25px;
  border: 1px solid #ffffff;
  color: #ffffff;
  cursor: default;
  margin-bottom: 30px;
`;

const HighlightTypography = styled(Typography)`
  margin-bottom: 20px;
  background: linear-gradient(131deg, #ffffff 30%, #fcbd49 65%, #fd9c39 85%);
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 700;
  margin: 0 auto;
`;

const RoadmapCard = styled(Box)`
  background: linear-gradient(180deg, #1e1e1e, #000000);
  border-radius: 10px;
  padding: 30px 20px;
  color: #ffffff;
  text-align: left;
`;

const RoadmapCardactive = styled(Box)`
  background: linear-gradient(180deg, #000000 0%, #fd9c3969 85%);
  border-radius: 10px;
  padding: 30px 20px;
  color: #ffffff;
  text-align: left;
  position: relative;
`;

const RoadmapListItem = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const RoadmapIcon = styled('img')`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const RoadmapHeader = styled(Typography)`
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const CurrentPhaseButton = styled(Box)`
  position: absolute;
  left: 200px;
  background: linear-gradient(180deg, #68340069 100%, #c04c03 10%);
  margin-top: 5px;
  padding: 7px 20px;
  border-radius: 20px;
  border: 1px solid #FF7B29;
  color: #ff660e;
  @media (max-width: 600px) {
   padding: 10px 10px;
  }
`;

const Roadmap = () => {
 useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    });
    AOS.refresh();
  }, []);

  return (
    <SectionWarpper>
      <Container maxWidth="xl" id='roadmap'>
        <Grid container justifyContent={'center'} textAlign={'center'} spacing={4}>
          <Grid item xs={12}>
            <AboutButton data-aos="fade-up">Action Plan</AboutButton>
            <HighlightTypography variant="h2" data-aos="fade-up"
              sx={{ fontSize: { xs: '45px', sm: '40px', md: '60px' } }}>
              Roadmap
            </HighlightTypography>
            <Typography variant="body1" mt={4} data-aos="fade-up" marginBottom={'50px'}>
              Explore our vision for the future, from launching innovative features to <br /> expanding our marketplace globally.
            </Typography>
          </Grid>
        </Grid>

        <Swiper
          spaceBetween={30}    
          slidesPerView={3}      
          loop={true}          
          centeredSlides={true}  
          grabCursor={true}     
          breakpoints={{
            0: {
              slidesPerView: 1, 
            },
            600: {
              slidesPerView: 1, 
            },
            900: {
              slidesPerView: 2, 
            },
            1200: {
              slidesPerView: 3, 
            },
          }}
          className="roadmap-swiper">
              <SwiperSlide>
            <RoadmapCardactive data-aos="fade-up">
              <div style={{display:'flex'}}>
              <RoadmapHeader>Q1 2025</RoadmapHeader>
               <CurrentPhaseButton>
                Current Phase
              </CurrentPhaseButton>
                </div>
              <Typography mb={2}>Early Development and Demo Release</Typography>
              <RoadmapListItem>
                <RoadmapIcon src={tick} alt="Complete" />
                Release of Demo
              </RoadmapListItem>
              <RoadmapListItem>
                <RoadmapIcon src={loading} alt="In Progress" />
                Platform Development
              </RoadmapListItem>
              <RoadmapListItem>
                <RoadmapIcon src={loading} alt="In Progress" />
                AI Integration for Homepage
              </RoadmapListItem>
              <RoadmapListItem>
                <RoadmapIcon src={loading} alt="In Progress" />
                Smart Contract Integration
              </RoadmapListItem>
              <RoadmapListItem>
                <RoadmapIcon src={loading} alt="In Progress" />
                Prepare for Merchandise Sales
              </RoadmapListItem>
              <RoadmapListItem>
                <RoadmapIcon src={loading} alt="In Progress" />
                Referral System (Refer to Earn)
              </RoadmapListItem>
            </RoadmapCardactive>
          </SwiperSlide>

      
        
          <SwiperSlide>
            <RoadmapCard data-aos="fade-up">
              <RoadmapHeader>Q2 2025</RoadmapHeader>
              <Typography mb={2}>Vendor Onboarding and Storefront Development</Typography>
              <RoadmapListItem>
                <RoadmapIcon src={loading} alt="In Progress" />
                Vendor Store Release
              </RoadmapListItem>
              <RoadmapListItem>
                <RoadmapIcon src={loading} alt="In Progress" />
                Storefront Features
              </RoadmapListItem>
              <RoadmapListItem>
                <RoadmapIcon src={loading} alt="In Progress" />
                AI-Powered Product Recommendations
              </RoadmapListItem>
              <RoadmapListItem>
                <RoadmapIcon src={loading} alt="In Progress" />
                Product Customization Integration
              </RoadmapListItem>
            </RoadmapCard>
          </SwiperSlide>

          <SwiperSlide>
            <RoadmapCard data-aos="fade-up">
              <RoadmapHeader>Q3 2025</RoadmapHeader>
              <Typography mb={2}>Marketplace Expansion and Full Launch</Typography>
              <RoadmapListItem>
                <RoadmapIcon src={loading} alt="In Progress" />
                Full Platform Launch
              </RoadmapListItem>
              <RoadmapListItem>
                <RoadmapIcon src={loading} alt="In Progress" />
                Cart and Checkout Pages
              </RoadmapListItem>
              <RoadmapListItem>
                <RoadmapIcon src={loading} alt="In Progress" />
                Order Confirmation and Tracking
              </RoadmapListItem>
              <RoadmapListItem>
                <RoadmapIcon src={loading} alt="In Progress" />
                Promotional Campaigns
              </RoadmapListItem>
            </RoadmapCard>
          </SwiperSlide>

          <SwiperSlide>
            <RoadmapCard data-aos="fade-up">
              <RoadmapHeader>Q4 2025</RoadmapHeader>
              <Typography mb={2}>Scaling and Advanced Features</Typography>
              <RoadmapListItem>
                <RoadmapIcon src={loading} alt="In Progress" />
                Advanced AI Capabilities
              </RoadmapListItem>
              <RoadmapListItem>
                <RoadmapIcon src={loading} alt="In Progress" />
                Mobile App Release
              </RoadmapListItem>
              <RoadmapListItem>
                <RoadmapIcon src={loading} alt="In Progress" />
                Global Expansion
              </RoadmapListItem>
            </RoadmapCard>
          </SwiperSlide>
          <SwiperSlide>
            <RoadmapCard data-aos="fade-up">
              <RoadmapHeader>Q4 2024</RoadmapHeader>

              <Typography mb={2}>Post-Token Launch Activities</Typography>
              <RoadmapListItem>
                <RoadmapIcon src={tick} alt="Completed" />
                Community Building & Marketing
              </RoadmapListItem>
              <RoadmapListItem>
                <RoadmapIcon src={tick} alt="Completed" />
                Web2 Marketing Material
              </RoadmapListItem>
              <RoadmapListItem>
                <RoadmapIcon src={tick} alt="Completed" />
                Finalize Platform Design & Architecture
              </RoadmapListItem>
              <RoadmapListItem>
                <RoadmapIcon src={tick} alt="Completed" />
                Smart Contract Development
              </RoadmapListItem>
              <RoadmapListItem>
                <RoadmapIcon src={tick} alt="Completed" />
                Onboarding KOLs (Key Opinion Leaders)
              </RoadmapListItem>
              <RoadmapListItem>
                <RoadmapIcon src={tick} alt="Completed" />
                Develop MVP
              </RoadmapListItem>
              <RoadmapListItem>
                <RoadmapIcon src={tick} alt="Completed" />
                Onboarding Projects
              </RoadmapListItem>
              <RoadmapListItem>
                <RoadmapIcon src={tick} alt="Completed" />
                AI-Driven Chatbot for Data Collection and Personalization
              </RoadmapListItem>
              
            </RoadmapCard>
          </SwiperSlide>

        </Swiper>
      </Container>
    </SectionWarpper>
  );
};

export default Roadmap;
