// File: /components/RegistrationForm/SuccessScreen.jsx
import React from 'react';
import { Typography } from "@mui/material";
import { FormContainer, NextButton } from '../RegistrationForm/styles';

const SuccessScreen = ({ onNewRegistration }) => (
    <FormContainer >
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
            Congratulation, your slot has been successfully registered.
        </Typography>

        <Typography
            variant="body1"
            sx={{
                color: 'white',
                mb: 3
            }}
        >
            Your confirmation details have been sent to your email. Please check your inbox (and spam folder) for further instructions.
        </Typography>
        <Typography
            variant="body1"
            sx={{
                color: 'white',
                mb: 1
            }}
        >
            See you at the AICM yacht party!
        </Typography>

        <NextButton
            variant="contained"
            fullWidth
            sx={{ mt: 3 }}
            onClick={onNewRegistration}
        >
            Make New Registration
        </NextButton>
    </FormContainer>
);

export default SuccessScreen;