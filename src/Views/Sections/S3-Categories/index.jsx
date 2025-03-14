import React, { useEffect } from 'react';
import SectionWarpper from '../../Components/SectionWrapper';
import styled from '@emotion/styled';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import card1 from '../../../assets/card1.png';
import card2 from '../../../assets/card2.png';
import card3 from '../../../assets/card3.png';
import lineGrade from '../../../assets/lineGrade.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { DigitalGoodsLink, PhysicalGoodsLink, ServicesLink } from '../../../links';

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
  );  background-clip: text;
  text-fill-color: transparent;
  font-weight: 700;

`;

const CardImageContainer = styled('div')`
  position: relative;
  z-index: 999;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 470px;
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover .card-content {
    background: linear-gradient(180deg, #000000 0%,rgba(247, 115, 7, 0.55) 65%);
    height: 100%;
    border-radius: 20px;
    padding: 12% 7%;
    .card-button{ opacity: 1}
  }
 
`;

const CardImage = styled('img')`
  width: 100%;
  border-radius: 10px;
`;
const GradeImge = styled('img')`
  width: 100%;
    user-drag: none;
  pointer-events: none;
  -webkit-user-drag: none;
  bottom: 0;
`;

const CardContent = styled('div')`
  position: absolute;
  bottom: 0px;
  left: 0;
  transition: all 0.3s ease;
  transform: translateY(0);
  width: 100%;
  height: 30%;
  padding: 12% 7%;
  text-align: left;
  @media (max-width: 768px) {
    padding: 9% 7%; 
    }
    
    @media (max-width: 1268px) {
      height: 35%;
  }
    @media (max-width: 968px) {
      height: 40%;
      padding-bottom: 30px;
      }
      @media (max-width: 568px) {
        height: 34%;
  }
`;

const CardText = styled(Typography)`
  color: #ffffff;
  margin-bottom: 10px;
  font-weight: bold;
   @media (max-width: 1268px) {
font-size: 30px;
   }
`;

const CardPara = styled(Typography)`
  color: #ffffff;
  font-size: 18px;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Limit to 2 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all 0.3s ease;

  /* Expand on hover */
  .card-content:hover & {
    -webkit-line-clamp: unset;
    overflow: visible;
    text-overflow: unset;
  }
`;

const CardButton = styled(Button)`
  opacity: 0;
  margin-top: 20px;
  background-color: #ffffff;
  color: #000000;
  border-radius: 20px;
  padding: 10px 25px;
  transition: all 0.3s ease-in-out !important; /* Smooth transition */

  :hover{
 box-shadow: 0 0 10px 0 #fff inset, 0 0 10px 2px #fff !important;
 background-color:#fff;
  
}
`;


const Categories = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    });
    AOS.refresh();
  }, []);

  return (
    <div >
    <>
      <>
        <Container maxWidth="xl" id="DigitalGoods">
          <Grid item xs={12} justifyContent={'center'} textAlign={'center'}>
            <AboutButton id="Services"  data-aos="fade-up">Decentralized Commerce</AboutButton>
            <HighlightTypography variant="h2" sx={{ fontSize: { xs: '45px', sm: '40px', md: '60px' } }}data-aos="fade-up"  >
              Categories
            </HighlightTypography>
            <Typography variant="body1" sx={{ fontSize: { xs: '14px', sm: '18px', md: '22px' } }} maxWidth="600px" margin={'0 auto'} data-aos="fade-up">
              Redefining e-commerce with AI and blockchain. Buy, sell, and list
              physical products, digital goods, and specialized services
              seamlessly on AICM.
            </Typography>

            <Grid container spacing={2} justifyContent="center" mt={5}>
              {[ 
               { 
                image: card1, 
                title: 'Physical Goods', 
                desc: 'Discover a wide range of physical products, from custom apparel to merchandise and collectibles. AICM connects creators and vendors with buyers seeking quality, transparency, and security in every transaction.', 
                link:  PhysicalGoodsLink, 
               
              },
              { 
                image: card2, 
                title: 'Digital Goods', 
                desc: 'Explore digital products like e-books, courses, and creative content. Whether you’re a buyer or seller, AICM provides a seamless platform to trade securely with blockchain-powered transparency.', 
                link:  DigitalGoodsLink, 
               
              },
              { 
                image: card3, 
                title: 'Services', 
                desc: 'Unlock access to a variety of specialized services, including private Telegram crypto signal groups, crypto courses, and Web3 advertising solutions. AICM provides a seamless platform to list, discover, and purchase services securely, powered by AI tools and decentralized transparency.', 
                link:  ServicesLink, 
           
              },
              ].map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index} data-aos="fade-up" id={item.id}>
                  <CardImageContainer>
                    <CardImage src={item.image} alt={item.title} />
                    <CardContent className="card-content">
                      <CardText variant="h4">{item.title}</CardText>
                      <CardPara>{item.desc}</CardPara>
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <CardButton className="card-button" variant="contained">
                          Explore Now
                        </CardButton>
                      </a>
                    </CardContent>
                  </CardImageContainer>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Container>
      </>
    </>
    <GradeImge src={lineGrade} alt="lineGrade" />
    </div>
  );
};

export default Categories;
