// src/Views/Pages/Pricing.js
import React from 'react';
import Sec1_Pricing from '../../Sections/Pricing_Secs/S1_Pricing';
import { PageWrapper } from '../../Styles/style';
import Footer from '../../Sections/S6-Footer';
import ChatBot from '../../Components/chatbot';
import ComparePlans from '../../Components/Compare';

const Pricing = () => {
    return (
        <>
            <PageWrapper>
                <ChatBot />
                <Sec1_Pricing />
                <ComparePlans />
                <Footer />
            </PageWrapper>
        </>
    );
};

export default Pricing;
