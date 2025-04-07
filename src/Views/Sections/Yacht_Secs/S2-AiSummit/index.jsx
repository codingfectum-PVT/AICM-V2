import React, { useState, useEffect } from "react";
import styled from '@emotion/styled';
import { Box, Button, CircularProgress, Container, Grid, Link, Typography } from '@mui/material';
import calender from '../../../../assets/calender.svg';
import location from '../../../../assets/location.svg';
import person from '../../../../assets/person.svg';
import { useReadContract } from 'wagmi';
import { contractAddress, contractAbi } from '../../../../utils/contractUtils';
import useContractInteraction from "../../../../hooks/useContractInteraction";

const Wrapper = styled(Box)`
padding: 20px 0px 60px 0px;
`;

const HighlightTypography = styled(Typography)`
  margin-bottom: 15px;
  background: linear-gradient(131deg, #ffffff 30%, #FF7B29 65%, #fd9c39 85%);
  background-clip: text;
  color: transparent;
  font-weight: 700;
  justify-self: anchor-center;
`;

const Limitedslot = styled(Box)`
    margin-bottom: 20px;
    background-color: #FF7B29;
    font-style: italic;
    padding: 2px 18px;
    border-radius: 9px;
    font-size: 18px;
    justify-self: anchor-center;
`;

const Detailsbox = styled(Box)`
    padding: 20px;
    text-align: left;
    background-color: #0B0B0B;
    border: 1px solid #1C1C1C;
    border-radius: 20px;
    max-width: 924px;
    margin-bottom: 15px;
    justify-self: center;
`;

const Detailsbox2 = styled(Box)`
    display: flex;
    padding: 20px;
    text-align: left;
    background-color: #0B0B0B;
    border: 1px solid #1C1C1C;
    border-radius: 18px;
    gap: 12px;
`;

const SlotContainer = styled(Box)`
    display: flex;
    align-items: center;
    gap: 12px;
    justify-content: center; 
    background-color: #121212;
    padding: 15px 20px;
    border-radius: 12px;
    width: 100%;
    max-width: 920px;
    margin: 20px auto;
`;

const SlotBarContainer = styled(Box)`
    width: 100%;
    height: 8px;
    background: #E7E7E7;
    border-radius: 4px;
    overflow: hidden;
    margin-top: 5px;
`;

const SlotBarFill = styled(Box)(({ width }) => ({
    width: `${width}%`,
    height: "100%",
    background: "#FF7B29",
    transition: "width 0.3s ease-in-out",
}));

const Booknow = styled(Button)`
    background: linear-gradient(290deg, rgb(255, 123, 41), rgb(255, 123, 41), rgb(255, 123, 41), rgb(252, 189, 73));
    color: #fff;
    border-radius: 40px;
    max-width: 920px;
    width: 100%;
    text-transform: none;
    padding: 12px;
    &:hover {
    background: linear-gradient(290deg, #FCBD49, #FF7B29);
  }
`;

const SlotBar = ({ soldSlots, maxSlots }) => {
    // Calculate the fill percentage based on sold slots
    const fillPercentage = (soldSlots / maxSlots) * 100;
    return (
        <SlotBarContainer>
            <SlotBarFill width={fillPercentage} />
        </SlotBarContainer>
    );
};

const AiSummit = () => {
    const [buttonText, setButtonText] = useState("Book Now");
    // const [soldSlots, setSoldSlots] = useState(0);
    const { maxSlots,soldSlots, isLoadingTotalTickets, SaleStatus } = useContractInteraction();

    return (
        <Wrapper>
            <Container maxWidth='lg'>
                <Grid container>
                    <Grid item xs={12} justifyContent="center" textAlign={"center"}>
                        <HighlightTypography variant="h2" sx={{ padding: "40px 0 0", maxWidth: '600px', fontSize: { xs: "45px", sm: "50px", lg: "55px" } }}>
                            Token2049 AI Summit
                            Yacht Party by AICM
                        </HighlightTypography>
                        <Limitedslot> limited slots available!</Limitedslot>
                        <Detailsbox>
                            <Typography sx={{ color: '#FF7B29', marginBottom: '20px', fontWeight: '600' }}>Event Details</Typography>
                            <Typography variant='body1' maxWidth='875px' marginBottom='20px'>
                                Join us for the exclusive <strong>$AICM Yacht Party </strong> at <strong>Token2049 Al Summit </strong> in
                                <strong> Dubai</strong>, the ultimate networking experience bridging the worlds of crypto and
                                traditional industries. This high-profile gathering will bring together top KOLs,
                                industry experts, investors, traders, and innovative project reps from both the
                                Web3 and traditional business sectors.
                            </Typography>
                        </Detailsbox>
                        <Grid container justifyContent={'center'} gap={'20px'}>
                            <Grid item xs={12} md={5.4} lg={4.7}>
                                <Detailsbox2>
                                    <img src={calender} alt='calendar' style={{ width: '100%', height: 'auto', maxWidth: '34px' }} />
                                    <Box>
                                        <Typography style={{ color: '#FF7B29', fontWeight: '600' }}>30 April 2025</Typography>
                                        <Typography>20:30 - 23:30</Typography>
                                    </Box>
                                </Detailsbox2>
                            </Grid>
                            <Grid item xs={12} md={5.4} lg={4.7}>
                                <Detailsbox2>
                                    <img src={location} alt='calendar' style={{ width: '100%', height: 'auto', maxWidth: '34px' }} />
                                    <Box>
                                        <Typography style={{ color: '#FF7B29', fontWeight: '600' }}>Yacht 160 (Desert Rose)</Typography>
                                        <Link href="https://maps.app.goo.gl/3xYradfvkwtaYHz1A" target="_blank" style={{ textDecoration: 'underline', color: '#fff' }}>
                                            <Typography>Behind Dubai Marina Mall, Gate N</Typography>
                                        </Link>
                                    </Box>
                                </Detailsbox2>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} textAlign="center" marginTop="20px">
                            <SlotContainer>
                                <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                                        <Typography style={{ color: "#FF7B29", marginLeft: '34px' }}>Slots</Typography>
                                        <Typography style={{ color: "#FF7B29" }}>
                                            {isLoadingTotalTickets ? <CircularProgress size={13} /> : soldSlots}<span style={{ color: "#fff" }}>/{maxSlots}</span>
                                        </Typography>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
                                        <img src={person} alt="slots" style={{ width: "24px", height: "24px", marginRight: "8px" }} />
                                        <SlotBar soldSlots={soldSlots} maxSlots={maxSlots} />
                                    </div>
                                </div>
                            </SlotContainer>
                        </Grid>
                        {SaleStatus === false || soldSlots >= maxSlots ? (
                            <Booknow
                                disabled                 >
                                {buttonText}
                            </Booknow>    
                        ) :
                            <Booknow
                                href="/yacht-party-form"
                            // onMouseEnter={() => setButtonText("Coming Soon")} 
                            // onMouseLeave={() => setButtonText("Book Now")}
                            >
                                {buttonText}
                            </Booknow>
                        }
                    </Grid>
                </Grid>
            </Container>
        </Wrapper>
    );
};

export default AiSummit;