// src/Views/Pages/Pricing.js
import React from 'react';
import YachtPartyFormSec from '../../Sections/YachtPartyFormSec';
import { PageWrapper } from '../../Styles/style';
import WagmiWrapper from '../../Components/wagmiWrapper';

const YachtPartyForm = () => {
    return (
        <>
        <WagmiWrapper>

            <PageWrapper>
                <YachtPartyFormSec />
                
            </PageWrapper>
        </WagmiWrapper>
        </>
    );
};

export default YachtPartyForm;
