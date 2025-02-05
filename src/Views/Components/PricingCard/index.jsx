import { Box, Button, styled, Typography, useMediaQuery } from "@mui/material";
import Divider from '@mui/material/Divider';

import EastIcon from '@mui/icons-material/East';
const PricingCard = ({ tagline, title, price, features, buttonText, highlight }) => {
    const isMobile = useMediaQuery('(max-width:799px)');

    const HighlightTypography = styled(Typography)`
    margin-bottom: 10px;
    background-clip: text;
    color: #FF7B29;
    font-weight: 700;
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
                        Best Value
                    </Box>

                    <Box sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "220px",
                        zIndex: "1",
                        background: 'linear-gradient(150deg,rgba(255, 123, 41, 0.46), rgba(0,0,255,0) 50.71%)',

                    }} />
                </>
            )}
            <Box sx={{
                position: "relative",
                borderRadius: "15px",
                p: "1.5px",
                background: highlight ? 'linear-gradient(170deg, #000000, #000000, #000000, #ff7b296e, #ff7b296e)' : 'transparent', // Change background color based on condition
            }}>
                <Box sx={{
                    background: "#0B0B0B",
                    borderRadius: "15px",
                    padding: "20px",
                    color: "white",
                    textAlign: "left",
                    minHeight: isMobile ? '':"840px",
                    display: "flex",
                    flexDirection: 'column',
                    zIndex: "999",
                }}>
                    <HighlightTypography variant="h2" sx={{ zIndex: "999", fontSize: { xs: "30px", sm: "30px", md: "30px", lg: "30px" } }}>
                        {title}
                    </HighlightTypography>
                    <Typography sx={{ zIndex: "999", fontSize: "16px", fontWeight: "bold", mt: 1, mb: 0 }}>Prize</Typography>
                    <Typography sx={{ zIndex: "999", fontSize: "40px", color: "#FF7B29", fontWeight: "bold", mt: 0 }}>{price}</Typography>
                    <Typography sx={{ whiteSpace: 'pre-line', zIndex: "999", fontSize: "14px", mb: 2 }}>{tagline}</Typography>
                    <Button variant="contained" fullWidth sx={{ alignItems: "center", textTransform: 'none', padding: "15px", display: "flex", justifyContent: "space-between", background: "linear-gradient(290deg, #FF7B29, #FF7B29, #FF7B29, #FCBD49)", color: "#fff", borderRadius: "40px", mt: 1 }}>
                        <span>{buttonText}</span> <span style={{ display: "flex" }}><EastIcon /></span>
                    </Button>
                    <br />
                    <Divider
                        sx={{
                            height: "1px", // Adjust thickness
                            width: "100%",
                            background: highlight ? "linear-gradient(170deg, #000000, #ff7b296e, #ff7b296e, #000000)":"#1C1C1C", // Gradient effect
                            border: "none", // Remove default border
                        }}
                    />

                    <Box sx={{ mt: 2, textAlign: "left" }}>
                        {features.map((feature, index) => (
                            <Typography key={index} sx={{ display:"flex",fontSize: "14px", mb: 1 }}><span>✔ </span> <span> &nbsp;{feature}</span></Typography>
                        ))}
                    </Box>

                    {/* View All Features Button */}
                    <a href="#plans" variant="text" style={{ padding: isMobile ? '10px 0':"", zIndex: "1", marginBlockStart: "auto", textDecoration: "underline", cursor: "pointer", marginTop: 'auto', color: "#fff", textAlign: "left", mt: 2 }}>
                        View all features
                    </a>
                </Box>
            </Box>

            {/* Bottom Linear Gradient for Elevate Card */}
            {
                highlight && (
                    <Box sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "220px",
                        background: 'linear-gradient(330deg,rgba(255, 123, 41, 0.46), rgba(0,0,255,0) 50.71%)',
                        borderRadius: "0 0 20px 20px",
                    }} />
                )
            }
        </Box >
    );
};
export default PricingCard