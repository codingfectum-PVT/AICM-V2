import React from 'react'
import { PageWrapper } from '../../Styles/style';
import Header from '../../Sections/Yacht_Secs/S1-Header';
import { Markee } from '../../Sections/Markee';
import LockerMenu from '../../Components/LockerMenu';
import AiSummit from '../../Sections/Yacht_Secs/S2-AiSummit';
import Bgshadowpricing from "../../../assets/bgshadowpricing.png";
import Packages from '../../Sections/Yacht_Secs/S3-Packages';
import Footer from '../../Sections/S6-Footer';
import WagmiWrapper from '../../Components/wagmiWrapper';

const Yachtparty = () => {
  return (
     <WagmiWrapper>
        <PageWrapper>
        <Markee/>
        <LockerMenu/>
        <Header/>
        <AiSummit/>
        <Packages/>
        <Footer />
        </PageWrapper>
     </WagmiWrapper>
 
  )
}

export default Yachtparty