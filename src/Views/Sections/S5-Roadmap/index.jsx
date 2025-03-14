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
const RoadmapCard = styled(Box)`
  background: linear-gradient(180deg, #000000, #5c5858);
  border-radius: 10px;
  padding: 30px 20px;
  color: #ffffff;
  text-align: left;
  height: 500px;
  position: relative;
  
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 10px;
    padding: 1px; /* Border width */
    background: linear-gradient(180deg, #70707030, #707070);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
`;

const UpcomingRoadmapCard = styled(Box)`
  background: linear-gradient(180deg, #3c3c3c61, #000000);
  border-radius: 10px;
  padding: 30px 20px;
  color: #ffffff;
  text-align: left;
  height: 500px;
  position: relative;
  
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 10px;
    padding: 1px; /* Border width */
    background: linear-gradient(180deg, #3c3c3c30, #3c3c3c);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
`;

const RoadmapCardactive = styled(Box)`
  background: linear-gradient(180deg, #000000 0%, #fd9c3969 85%);
  border-radius: 10px;
  padding: 30px 20px;
  color: #ffffff;
  text-align: left;
  height: 500px;
  position: relative;
  
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 10px;
    padding: 1px; /* Border width */
    background: linear-gradient(180deg, #ff7b2930, #ff7b29);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
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
const RoadmapIconCompleted = styled('img')`
filter: grayscale(100%); 
width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const RoadmapHeader = styled(Typography)`
  font-size: 35px;
  font-weight: bold;
  // margin-bottom: 15px;
  @media (max-width: 999px) {
   font-size: 25px;
  }
  @media (max-width: 400px) {
   font-size: 25px;
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  width: auto;
  height: auto;
  // Remove max-width to let the Swiper's slidesPerView control sizing
  
  @media (max-width: 768px) {
    // No max-width needed here
  }
`;

const CurrentPhaseButton = styled(Box)`
  font-size: 14px;
  background: #ff7b2926;
  padding: 4px 18px;
  border-radius: 20px;
  border: 1px solid #FF7B29;
  color: #ff660e;
 @media (max-width: 820px) {
   padding: 5px;
   font-size: 10px;
  }
`;
const PassedPhaseButton = styled(Box)`
font-size: 14px;  
background: hsla(0, 0%, 13%, 1);
padding: 4px 18px;
border-radius: 20px;
color: #ffffff63;
  border: 1px solid #707070;
  color: #ffffff63;
  @media (max-width: 820px) {
     padding: 5px;
     font-size: 10px;
    
    }
    `;
const WrapCrousle = styled(Box)`
padding: 0 0 0 105px;

@media (max-width: 468px) {
padding: 0 10px;
}

`
const WrapButtonHeading = styled(Box)`
display: flex;
    gap: 20px;
    flex-direction: row;
    align-items: center;
    `
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

      </Container>
      <WrapCrousle >
        <Swiper
          spaceBetween={30}
          slidesPerView={3.3}
          loop={true}
          centeredSlides={false}
          grabCursor={true}
          initialSlide={4}
          breakpoints={{
            0: {
              slidesPerView: 1,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 1.5,
              centeredSlides: false,
            },
            1200: {
              slidesPerView: 3.3,
              centeredSlides: false,
            },
            1600: {
              slidesPerView: 3.5,
              centeredSlides: false,
            }
          }}
          className="roadmap-swiper"
        >


          <StyledSwiperSlide>
            <RoadmapCardactive data-aos="fade-up">
              <WrapButtonHeading >
                <RoadmapHeader>Q1 2025</RoadmapHeader>
                <CurrentPhaseButton>
                  Current Phase
                </CurrentPhaseButton>
              </WrapButtonHeading>
              <Typography mb={2}>Early Development and Demo Release</Typography>
              <RoadmapListItem>
                <RoadmapIcon src={tick} alt="In Progress" />
                Platform Development
              </RoadmapListItem>
              <RoadmapListItem>
                <RoadmapIcon src={loading} alt="In Progress" />
                AI Integration for Homepage
              </RoadmapListItem>
              <RoadmapListItem>
                <RoadmapIcon src={tick} alt="Complete" />
                Release of Demo
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
              <RoadmapListItem>
                <RoadmapIcon src={loading} alt="In Progress" />
                AI-Driven Chatbot for Data Collection and Personalization
              </RoadmapListItem>
            </RoadmapCardactive>
          </StyledSwiperSlide>



          <StyledSwiperSlide>
            <UpcomingRoadmapCard data-aos="fade-up">
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
            </UpcomingRoadmapCard>
          </StyledSwiperSlide>

          <StyledSwiperSlide>
            <UpcomingRoadmapCard data-aos="fade-up">
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
            </UpcomingRoadmapCard>
          </StyledSwiperSlide>
          <StyledSwiperSlide>
            <UpcomingRoadmapCard data-aos="fade-up">
              <RoadmapHeader>Q4 2025</RoadmapHeader>
              <Typography mb={2}>Scaling and Advanced Features</Typography>
              <RoadmapListItem>
                <RoadmapIcon src={loading} alt="In Progress" />
                Advanced AI Capabilities
              </RoadmapListItem>
              <RoadmapListItem>
                <RoadmapIcon src={loading} alt="In Progress" />
                Feedback and Referral Systems
              </RoadmapListItem>
              <RoadmapListItem>
                <RoadmapIcon src={loading} alt="In Progress" />
                NFT Integration (Optional)
              </RoadmapListItem>
              <RoadmapListItem>
                <RoadmapIcon src={loading} alt="In Progress" />
                Global Outreach
              </RoadmapListItem>
            </UpcomingRoadmapCard>
          </StyledSwiperSlide>
          <StyledSwiperSlide>
            <RoadmapCard data-aos="fade-up">
              <WrapButtonHeading>
                <RoadmapHeader>Q4 2024</RoadmapHeader>
                <PassedPhaseButton>
                  Completed Phase
                </PassedPhaseButton>
              </WrapButtonHeading>
              <Typography mb={2}>Post-Token Launch Activities</Typography>
              <RoadmapListItem>
                <RoadmapIconCompleted src={tick} alt="Completed" />
                Community Building & Marketing
              </RoadmapListItem>
              <RoadmapListItem>
                <RoadmapIconCompleted src={tick} alt="Completed" />
                Web2 Marketing Material
              </RoadmapListItem>
              <RoadmapListItem>
                <RoadmapIconCompleted src={tick} alt="Completed" />
                Finalize Platform Design & Architecture
              </RoadmapListItem>
              <RoadmapListItem>
                <RoadmapIconCompleted src={tick} alt="Completed" />
                Smart Contract Development
              </RoadmapListItem>
              <RoadmapListItem>
                <RoadmapIconCompleted src={tick} alt="Completed" />
                Onboarding KOLs (Key Opinion Leaders)
              </RoadmapListItem>
              <RoadmapListItem>
                <RoadmapIconCompleted src={tick} alt="Completed" />
                Develop MVP
              </RoadmapListItem>
              <RoadmapListItem>
                <RoadmapIconCompleted src={tick} alt="Completed" />
                Onboarding Projects
              </RoadmapListItem>
            </RoadmapCard>
          </StyledSwiperSlide>

        </Swiper>
      </WrapCrousle>
    </SectionWarpper>
  );
};

export default Roadmap;
