import CheckCircle from '@mui/icons-material/Check';
import { Box, Typography, Grid, Tooltip, Button, MenuItem, Select, useMediaQuery } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useEffect, useState } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
const plans = [
    { name: "Essential", price: "Free", buttonText: "Try For Free", highlight: false, features: [true, true, true, true, true, true, true, false, false, false, false, false, false, false, false, false] },
    { name: "Elevate", price: "0.5 ETH", buttonText: "Buy Now", highlight: true, features: [true, true, true, true, true, true, true, true, true, true, true, false, false, false, false, false] },
    { name: "Elite", price: "1 ETH", buttonText: "Buy Now", highlight: false, features: Array(16).fill(true) }
];

const features = [
    { name: "AI Conversion Pro", tooltip: "Advanced AI-driven conversion optimization." },
    { name: "AI Smart Search Optimization (Coming Soon)", tooltip: "Enhances search results" },
    { name: "Product/Service Detail Page", tooltip: "Provides in-depth product and " },
    { name: "Real Reviews & Ratings", tooltip: "Authentic customer feedback for transparency" },
    { name: "Secure Payment Gateway", tooltip: "Protects transactions with encrypted security." },
    { name: "Basic Analytics Dashboard", tooltip: "Provides insights into user behavior." },
    { name: "AI-Driven FAQs", tooltip: "Automated FAQs powered by AI responses" },
    { name: "Verified Seller Badge", tooltip: "Exclusive badge for verified sellers." },
    { name: "AI Vendor Copilot", tooltip: "AI assistance for vendors to optimize " },
    { name: "Reduced Transaction Fees", tooltip: "Lower fees for each transaction." },
    { name: "Sponsored Ad Discounts", tooltip: "Exclusive discounts on ad placements." },
    { name: "Custom Token Integration", tooltip: "Allows integration with custom tokens." },
    { name: "Multi-Language AI Support", tooltip: "Supports multiple languages via AI" },
    { name: "Dedicated Account Manager", tooltip: "Access to a personal support representative" },
    { name: "Exclusive Beta Feature Access", tooltip: "Early access to upcoming platform" },
    { name: "Project Awareness Campaign", tooltip: "Marketing boost for projects on the " },
];

export default function ComparePlans() {
    const isMobile = useMediaQuery('(max-width:799px)');
    const isMobileSmall = useMediaQuery('(max-width:419px)');
    const [selectedPlans, setSelectedPlans] = useState(["Essential", "Elevate"]);

    const handleChange = (index, value) => {
        const newSelection = [...selectedPlans];
        newSelection[index] = value;
    
        // Ensure both selections are not the same
        if (newSelection[0] === newSelection[1]) {
            const availablePlans = plans
                .map(p => p.name)
                .filter(name => name !== value); // Exclude the selected value
    
            if (availablePlans.length > 0) {
                const randomPlan = availablePlans[Math.floor(Math.random() * availablePlans.length)];
                newSelection[index === 0 ? 1 : 0] = randomPlan; // Change the other dropdown
            }
        }
    
        setSelectedPlans(newSelection);
    };
    
    const filteredPlans = plans.filter(plan => selectedPlans.includes(plan.name));
    useEffect(() => {
        AOS.init({
          duration: 1000,  
          once: false,     
          easing: 'ease-in-out',
        });
        AOS.refresh(); 
      }, []); 
    return (
        <Box  sx={{ backgroundColor: 'black', color: 'white', py: isMobile ? 7 : 16 , px: 3, placeItems: 'center' }} id="plans">
            {isMobile && (
                <>
                    <Typography variant="h4" align="left" sx={{ fontSize: { sm: "40px", md: "50px", lg: "60px" } }}
                        style={{
                            alignContent: "center",
                            background: 'linear-gradient(131deg, #ffffff 30%, #FF7B29 65%, #fd9c39 85%)',
                            backgroundClip: 'text',
                            color: 'transparent',
                            display: "flex", alignSelf: "center", m: 4, fontWeight: "bold",
                            padding:"20px 0"
                        }}>
                        Compare Plans
                    </Typography>
                    <Box display="flex" sx={{width:"100%"}}  justifyContent="end" gap={1} mb={6}>

                        {[0, 1].map(index => (
                            <Select
                                key={index}
                                value={selectedPlans[index]}
                                onChange={(e) => handleChange(index, e.target.value)}
                                sx={{
                                    width:"50%",
                                    color: '#fff',
                                    backgroundColor: '#000',
                                    borderRadius: '8px',
                                    border: '1px solid #FF7B29',
                                    backgroundColor: '#000',
                                    '& .MuiSelect-select': {
                                        
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#FF7B29',
                                    }
                                }}
                                MenuProps={{
                                    PaperProps: {
                                        sx: {
                                            backgroundColor: '#000',
                                        }
                                    }
                                }}
                            >
                                {plans.map(plan => (
                                    <MenuItem
                                        key={plan.name}
                                        value={plan.name}
                                        style={{width:"100%"}}
                                        sx={{
                                            color: '#fff',
                                            backgroundColor: '#000',
                                            '&.Mui-selected': {width:"100%", backgroundColor: '#ff7b298a', color: '#fff' },
                                            '&:hover': { width:"100%",backgroundColor: '#FF7B29', color: '#000' }
                                        }}
                                    >
                                        {plan.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        ))}
                    </Box>
                </>
            )}
            <Grid container spacing={2} maxWidth="lg" placeContent='center'>
                <Grid item xs={12}>
                    {isMobile ? (
                        <>
                            <Box style={{position: 'sticky',top: '-10px',zIndex: '5', backdropFilter: 'blur(7px)'}} display="grid" gridTemplateColumns={isMobile ? "repeat(2, 1fr)" : `2fr repeat(${plans.length}, 1fr)`} gap={isMobile ? 1 : 2} position="relative">
                                {(isMobile ? filteredPlans : plans).map((plan, index) => (
                                    <Box key={index} sx={{ position: "sticky", top: '-10px', paddingBottom: isMobile ? "20px" : "40px", backgroundColor: "black", borderRadius: "11px", }}>
                                        {plan.highlight && (
                                            <Box sx={{
                                                position: "absolute",
                                                top: isMobile ? "-35px" : "-38px",  // Adjust this to move it further behind
                                                left: "50%",
                                                zIndex: "0",  // Ensure it's behind the card
                                                transform: "translateX(-50%)",
                                                background: "#FF7B29",
                                                color: "#fff",
                                                padding: isMobile ? "5px 10px" : '10px 20px',
                                                height: isMobile ? "50px" : '60px',
                                                borderRadius: "13px 13px 0 0",
                                                fontSize: "14px",
                                                fontWeight: "bold",
                                                textAlign: "left",
                                                width: "99.5%",
                                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",

                                            }}>
                                                Best Value
                                            </Box>
                                        )}
                                        <Box
                                            sx={{
                                                position: "relative",
                                                borderRadius: "15px",
                                                p: "1px",
                                                background: "linear-gradient(170deg, #000000, #000000, #000000, #ff7b296e, #ff7b296e)", // Outer Gradient Border
                                            }}
                                        >
                                            {/* Inner Card with Gradient Background */}
                                            <Box
                                                sx={{
                                                    borderRadius: plan.highlight ? '13px' : '13px', // Change background color based on condition
                                                    padding: "13px",
                                                    color: "white",
                                                    textAlign: "left",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "left",
                                                    position: "relative",
                                                    background: "linear-gradient(327deg, #ff7b2921, #000000, #000000, #000000, #ff7b2961, #000000 119.71%)", // Restored Inner Gradient
                                                    boxShadow: "0px 0px 17px 5px #ff7b2921",
                                                }}
                                            >
                                                <Typography variant="h6" sx={{  fontSize: "20px", }} color="#FF7B29" fontWeight="bold">
                                                    {plan.name}
                                                </Typography>
                                                <Typography sx={{
                                                    
                                                    fontSize:  "16px", fontWeight: "bold", mt: 1
                                                }}>Price</Typography>
                                                <Typography sx={{  fontSize: { xs: "16px", sm: "20px", md: "25px", lg: "30px" }, color: "#FF7B29", fontWeight: "bold", mt: 0 }}>
                                                    {plan.price}
                                                </Typography>
                                                <Button
                                                    style={{
                                                        maxWidth: "100%",
                                                        textTransform: "capitalize",
                                                        textAlign: "center",
                                                        fontSize: isMobile ? "11px" : "13px",
                                                        padding: isMobile ? "5px 0px" : "10px 20px",
                                                        marginBottom: isMobile ? "5px" : "",
                                                        borderRadius: isMobile ? "20px" : "40px",
                                                        background: "linear-gradient(290deg, #FF7B29, #FF7B29, #FCBD49)", // Gradient Button
                                                        color: "#fff",
                                                        marginTop: "10px",
                                                    }}
                                                >
                                                    {plan.buttonText}
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </>
                    ) : (<></>)}
                    <Box data-aos="fade-up" display="grid" gridTemplateColumns={`2fr repeat(${isMobile ? filteredPlans.length : plans.length}, 1fr)`} gap={isMobile ? 1 : 2} position="relative">
                        <Box sx={{ display: isMobile ? "none" : "", backgroundColor: "black", position: "sticky", top: '0px' }}>
                            <Typography variant="h4" align="left" sx={{ fontSize: { xs: "20px", sm: "40px", md: "50px", lg: "60px" } }}
                                style={{
                                    alignContent: "center",
                                    background: ' linear-gradient(131deg, #ffffff 0%,#FF7B29 45%, #FF7B29 65%, #fd9c39 85% )',
                                    backgroundClip: 'text',
                                    color: 'transparent',
                                    display: "flex", alignSelf: "center", mb: 4, fontWeight: "bold"
                                }}>
                                Compare<br /> Plans
                            </Typography>
                        </Box>
                        {(isMobile ? filteredPlans : plans).map((plan, index) => (
                            <Box key={index} sx={{ display: isMobile ? "none" : "", position: "sticky", top: '-10px', paddingBottom: isMobile ? "20px" : "20px", backgroundColor: "black", borderRadius: "11px", }}>
                                {plan.highlight && (
                                    <Box sx={{
                                        position: "absolute",
                                        top: isMobile ? "-25px" : "-38px",  // Adjust this to move it further behind
                                        left: "50%",
                                        zIndex: "0",  // Ensure it's behind the card
                                        transform: "translateX(-50%)",
                                        background: "#FF7B29",
                                        color: "#fff",
                                        padding: isMobile ? "5px 10px" : '10px 20px',
                                        height: isMobile ? "40px" : '60px',
                                        borderRadius: "13px 13px 0 0",
                                        fontSize: isMobile ? "10px" : "14px",
                                        fontWeight: "bold",
                                        textAlign: "left",
                                        width: "99.5%",
                                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",

                                    }}>
                                        Best Value
                                    </Box>
                                )}
                                <Box
                                    sx={{
                                        position: "relative",
                                        borderRadius: "15px",
                                        p: "1.4px",
                                        background: "linear-gradient(170deg, #000000, #000000, #000000, #ff7b296e, #ff7b296e)", // Outer Gradient Border
                                    }}
                                >
                                    {/* Inner Card with Gradient Background */}
                                    <Box
                                        sx={{
                                            borderRadius: plan.highlight ? '13px' : '13px', // Change background color based on condition
                                            padding: isMobile ? "5px 5px" : "13px",
                                            color: "white",
                                            textAlign: "left",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "left",
                                            position: "relative",
                                            background: "linear-gradient(327deg, #ff7b2921, #000000, #000000, #000000, #ff7b2961, #000000 119.71%)", // Restored Inner Gradient
                                            boxShadow: "0px 0px 17px 5px #ff7b2921",
                                        }}
                                    >
                                        <Typography variant="h6" sx={{ padding: isMobile ? "0 5px" : "", fontSize: isMobile ? "10px" : "24px", }} color="#FF7B29" fontWeight="bold">
                                            {plan.name}
                                        </Typography>
                                        <Typography sx={{
                                            padding: isMobile ? "0 5px" : "",
                                            fontSize: isMobile ? "10px" : "16px", fontWeight: "bold", mt: 1
                                        }}>Price</Typography>
                                        <Typography sx={{ padding: isMobile ? "0 5px" : "", fontSize: { xs: "10px", sm: "20px", md: "25px", lg: "30px" }, color: "#FF7B29", fontWeight: "bold", mt: 0 }}>
                                            {plan.price}
                                        </Typography>
                                        <Button
                                            style={{
                                                maxWidth: "100%",
                                                textTransform: "capitalize",
                                                textAlign: "center",
                                                fontSize: isMobile ? "10px" : "13px",
                                                padding: isMobile ? "5px 0px" : "10px 20px",
                                                marginBottom: isMobile ? "5px" : "",
                                                borderRadius: isMobile ? "20px" : "40px",
                                                background: "linear-gradient(290deg, #FF7B29, #FF7B29, #FCBD49)", // Gradient Button
                                                color: "#fff",
                                                marginTop: "10px",
                                            }}
                                        >
                                            {plan.buttonText}
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                        {features.map((feature, index) => (
                            <>
                                <Typography key={`feature-${index}`} sx={{ display: "flex", alignItems: "center", fontSize: '14px', borderRadius: "9px", backgroundColor: '#0B0B0B', border: '1px solid #3C3C3C', py: 1, px: 2 }}>
                                    {feature.name}&nbsp;
                                    <Tooltip title={feature.tooltip} key={`tooltip-${index}`}>
                                        <span style={{ display: 'flex' }}>
                                            <InfoOutlinedIcon fontSize='small' />
                                        </span>
                                    </Tooltip>
                                </Typography>
                                {(isMobile ? filteredPlans : plans).map((plan, planIndex) => (
                                    <Box key={`plan-${planIndex}-${index}`} sx={{ height: "40px", borderRadius: "9px", backgroundColor: plan.features[index] ? '#ff7b2933' : 'transparent', border: plan.features[index] ? '1px solid #FF7B29' : 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center', py: 1 }}>
                                        {plan.features[index] ? <CheckCircle sx={{ fill: "#FF7B29" }} fontSize='small' /> : <Typography sx={{ opacity: 0 }}>-</Typography>}
                                    </Box>
                                ))}
                            </>
                        ))}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
