import React from 'react';
import LockerMenu from '../../Components/LockerMenu';
import { PageWrapper } from '../../Styles/style';
import Header from '../../Sections/S1-Header';
import styled from '@emotion/styled';
import headervedio from "../../../assets/headervedio.mp4";
import WhatAICM from '../../Sections/S2-WhatAICM';
import Categories from '../../Sections/S3-Categories';
import Token from '../../Sections/S4-Token';
import Roadmap from '../../Sections/S5-Roadmap';
import Footer from '../../Sections/S6-Footer';
import { Markee } from '../../Sections/Markee';

const HeaderVideo = styled("video")`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1; 
  

  @media (max-width: 768px) {
    width: 100%;
    object-fit: cover;
  }
`;


const MainPage = () => {
  return (
    <div style={{backgroundColor:"black"}}>
      <HeaderVideo src={headervedio} autoPlay loop muted playsInline />
      <Header />
      <PageWrapper>
      <Categories/>
      <WhatAICM />
      <Token/>
      <Roadmap/>
      <Footer/>
    </PageWrapper>
    </div>
  );
};

export default MainPage;
