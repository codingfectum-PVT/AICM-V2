import { Box, Button, styled, Typography, useMediaQuery } from "@mui/material";
import Divider from '@mui/material/Divider';
import React, { useState } from "react";

import EastIcon from '@mui/icons-material/East';
import useContractInteraction from "../../../../hooks/useContractInteraction";
const Cardauto = ({ tagline, title, price, features, buttonText, highlight1, highlight2, highlight3, highlight, onBookNow }) => {
    const isMobile = useMediaQuery('(max-width:799px)');
    const [btnText, setBtnText] = useState(buttonText);
    const { maxSlots,soldSlots, SaleStatus } = useContractInteraction();

    const HighlightTypography = styled(Typography)`
    margin-bottom: 10px;
    background-clip: text;
    color: #FF7B29;
    font-weight: 700;
  `;

    const HoverButton = styled(Button)`
    align-items: center;
    text-transform: none;
    padding: 15px;
    display: flex;
    cursor: pointer;
    justify-content: space-between;
    background: linear-gradient(290deg, #FF7B29, #FF7B29, #FF7B29, #FCBD49);
    color: #fff;
    border-radius: 40px;
    margin-top: 1rem;
    &:hover {
    background: linear-gradient(290deg, #FF9B50, #FF7B29);
    }
    `;

    return (
        <Box sx={{
            position: "relative",
            // maxWidth: 360,
            textAlign: "center",
            marginTop: isMobile ? '70px' : '', // Change background color based on condition


        }}>
            {highlight && (
                <>
                    <Box sx={{
                        position: "absolute",
                        zIndex: "0",  // Ensure it's behind the card\
                        height: "60px",
                        background: "#FF7B29",
                        color: "#fff",
                        padding: '10px 20px',
                        textAlign: "left",
                        borderRadius: "15px 15px 0 0",
                        fontSize: "14px",
                        position: "absolute",
                        top: "-40px",
                        left: "50%",
                        width: "99.5%",
                        transform: "translateX(-50%)",
                    }}>
                        For Projects
                    </Box>
                </>
            )}
            {highlight1 && (
                <>
                    <Box sx={{
                        position: "absolute",
                        zIndex: "0",  // Ensure it's behind the card\
                        height: "60px",
                        background: "#FF7B29",
                        color: "#fff",
                        padding: '10px 20px',
                        textAlign: "left",
                        borderRadius: "15px 15px 0 0",
                        fontSize: "14px",
                        position: "absolute",
                        top: "-40px",
                        left: "50%",
                        width: "99.5%",
                        transform: "translateX(-50%)",
                    }}>
                        For Projects
                    </Box>
                </>
            )}
            {highlight2 && (
                <>
                    <Box sx={{
                        position: "absolute",
                        zIndex: "0",  // Ensure it's behind the card\
                        height: "60px",
                        background: "#FF7B29",
                        color: "#fff",
                        padding: '10px 20px',
                        textAlign: "left",
                        borderRadius: "15px 15px 0 0",
                        fontSize: "14px",
                        position: "absolute",
                        top: "-40px",
                        left: "50%",
                        width: "99.5%",
                        transform: "translateX(-50%)",
                    }}>
                        For Projects
                    </Box>
                </>
            )}
            {highlight3 && (
                <>
                    <Box sx={{
                        position: "absolute",
                        zIndex: "0",  // Ensure it's behind the card\
                        height: "60px",
                        background: "#FF7B29",
                        color: "#fff",
                        padding: '10px 20px',
                        textAlign: "left",
                        borderRadius: "15px 15px 0 0",
                        fontSize: "14px",
                        position: "absolute",
                        top: "-40px",
                        left: "50%",
                        width: "99.5%",
                        transform: "translateX(-50%)",
                    }}>
                        For Individual
                    </Box>
                </>
            )}
            <Box sx={{
                position: "relative",
                borderRadius: "15px",
                p: "0.5px",
                background: '#1C1C1C',
            }}>
                <Box sx={{
                    background: "#0B0B0B",
                    borderRadius: "15px",
                    padding: "20px",
                    color: "white",
                    textAlign: "left",
                    minHeight: isMobile ? '' : "950px",
                    display: "flex",
                    flexDirection: 'column',
                    zIndex: "999",
                }}>
                    <HighlightTypography variant="h2" sx={{ zIndex: "999", fontSize: { xs: "30px", sm: "30px", md: "30px", lg: "30px" } }}>
                        {title}
                    </HighlightTypography>
                    <Typography sx={{ zIndex: "999", fontSize: "16px", fontWeight: "bold", mt: 1, mb: 0 }}>Price</Typography>
                    <Typography sx={{ zIndex: "999", fontSize: "40px", color: "#FF7B29", fontWeight: "bold", mt: 0 }}>{price}</Typography>
                    <Typography sx={{ whiteSpace: 'pre-line', zIndex: "999", fontSize: "15px", mb: 2 }}>{tagline}</Typography>
                    {/* <HoverButton  onMouseEnter={() => setBtnText("Coming Soon")}
                        onMouseLeave={() => setBtnText(buttonText)} variant="contained" fullWidth sx={{ alignItems: "center", textTransform: 'none', padding: "15px", display: "flex", justifyContent: "space-between", background: "linear-gradient(290deg, #FF7B29, #FF7B29, #FF7B29, #FCBD49)", color: "#fff", borderRadius: "40px", mt: 1 }}>
                        <span>{btnText}</span>  <span style={{ display: "flex" }}><EastIcon /></span>
                    </HoverButton> */}
                    {SaleStatus === false || soldSlots >= maxSlots ? (
                         <HoverButton
                         variant="contained"
                         fullWidth
                        disabled
                         sx={{ alignItems: "center", textTransform: 'none', padding: "15px", display: "flex", justifyContent: "space-between", background: "linear-gradient(290deg, #FF7B29, #FF7B29, #FF7B29, #FCBD49)", color: "rgba(0, 0, 0, 0.26)", borderRadius: "40px", mt: 1 }}     
                          >
                         <span style={{color:"rgba(0, 0, 0, 0.26)"}}>{btnText}</span> <span style={{ display: "flex" }}><EastIcon style={{fill:"rgba(0, 0, 0, 0.16)"}} /></span>
                     </HoverButton>
                    ):
                    <HoverButton
                        variant="contained"
                        fullWidth
                        onClick={onBookNow}
                        sx={{ alignItems: "center", textTransform: 'none', padding: "15px", display: "flex", justifyContent: "space-between", background: "linear-gradient(290deg, #FF7B29, #FF7B29, #FF7B29, #FCBD49)", color: "#fff", borderRadius: "40px", mt: 1 }}      >
                        <span>{btnText}</span> <span style={{ display: "flex" }}><EastIcon /></span>
                    </HoverButton>
                    }<br />
                    <Divider
                        sx={{
                            height: "1px", 
                            width: "100%",
                            background: '#1C1C1C', 
                            border: "none",
                        }}
                    />

                    <Box sx={{ mt: 2, textAlign: "left" }}>
                        {features.map((feature, index) => (
                            <Typography
                                key={index}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    fontSize: "16px",
                                    mb: 1
                                }}
                            >
                                <span style={{ marginLeft: "8px" }}>{feature}</span>
                            </Typography>
                        ))}
                    </Box>
                </Box>
            </Box>


        </Box >
    );
};
export default Cardauto