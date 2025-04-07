import { Box, Typography, Container, Link } from "@mui/material";
import { useState } from "react";
import { tgLink } from "../../../links";
import { FormContainer } from "../RegistrationForm/styles";

// Terms Screen Component
const TermsScreen = ({ onClose }) => (
    <Box sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    }}>
        <FormContainer sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            borderRadius: 2,
            padding: '30px',
            maxWidth: 600,
            height: '60vh',
            width: '90%',
            color: 'white',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
        }}>
            <Typography
                variant="h4"
                gutterBottom
                sx={{
                    color: '#FF7B29',
                    mb: 2,
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                }}
            >
                Terms and Conditions
            </Typography>

            <Typography variant="body1" sx={{ color: 'white', mb: 3 }}>
                Please read and accept the terms before proceeding.
            </Typography>

            <Typography variant="body1" sx={{ color: 'white', mb: 1 }}>
                By registering for the AICM Yacht Party, you agree to abide by the event policies.
            </Typography>

            <Typography
                variant="body2"
                sx={{ mt: 3, color: '#FF7B29', cursor: 'pointer', textAlign: 'right' }}
                onClick={onClose}
            >
                Close
            </Typography>
        </FormContainer>
    </Box>
);

// Footer Component
const FooterForm = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            {show && <TermsScreen onClose={() => setShow(false)} />}

            <Box sx={{
                position: 'absolute',
                bottom: '20px',
                left: 0,
                right: 0,
                zIndex: 10
            }}>
                <Container maxWidth="xl">
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '20px',
                        color: 'white',
                        borderRadius: '12px',
                        backdropFilter: 'blur(10px)',
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    }}>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Link href={tgLink} target="_blank" sx={{ textDecoration: 'none', color: 'white' }}>
                            <Typography variant="body2">Contact Us</Typography>
                            </Link>
                            <Typography
                                variant="body2"
                                sx={{ cursor: 'pointer', textDecoration: 'none' }}
                                onClick={() => setShow(true)}
                            >
                                Terms and Conditions
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body2">Copyright © 2025 AICM</Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default FooterForm;
