import React, { useCallback, useRef, useState } from 'react';
import { Box, Typography } from "@mui/material";
import { toast } from 'react-toastify';
import { FormContainer, NextButton, TextFields } from '../RegistrationForm/styles';
const PersonalDetailsScreen = ({ initialDetails, onNext }) => {
    const [personalDetails, setPersonalDetails] = useState(initialDetails || {
        fullName: '',
        email: '',
        phoneNumber: ''
    });

    const fullNameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneNumberRef = useRef(null);

    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;
        setPersonalDetails(prev => ({
            ...prev,
            [name]: value
        }));
    }, []);

    const handlePersonalDetailsNext = () => {
        // Validation logic
        const nameRegex = /^[A-Za-z\s]{2,50}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\+?[1-9]\d{1,14}$/;

        if (!personalDetails.fullName.trim()) {
            toast.error('Full Name is required');
            return;
        }

        if (!nameRegex.test(personalDetails.fullName)) {
            toast.error('Please enter a valid name (2-50 characters, letters only)');
            return;
        }

        if (!personalDetails.email.trim()) {
            toast.error('Email is required');
            return;
        }

        if (!emailRegex.test(personalDetails.email)) {
            toast.error('Please enter a valid email address');
            return;
        }

        if (!personalDetails.phoneNumber.trim()) {
            toast.error('Phone Number is required');
            return;
        }

        if (!phoneRegex.test(personalDetails.phoneNumber)) {
            toast.error('Please enter a valid phone number');
            return;
        }

        // Proceed to next step
        onNext(personalDetails);
    };

    return (
        <FormContainer >
            <Typography variant="h5" gutterBottom sx={{ color: '#FF7B29', mb: 2, fontWeight: 'bold' }}>
                Personal Details
            </Typography>

            <Typography variant="body2" sx={{ color: '#fff', pb: 0, mb: 0 }}>
                Full Name
            </Typography>
            <TextFields
                ref={fullNameRef}
                name="fullName"
                placeholder="e.g. John Doe"
                value={personalDetails.fullName}
                onChange={handleInputChange}
                type="text"
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        emailRef.current?.focus();
                    }
                }}
            />

            <Typography variant="body2" sx={{ color: '#fff', mt: 1, pb: 0, mb: 0 }}>
                Email Address
            </Typography>
            <TextFields
                ref={emailRef}
                name="email"
                placeholder="e.g. abc@mail.com"
                value={personalDetails.email}
                onChange={handleInputChange}
                type="email"
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        phoneNumberRef.current?.focus();
                    }
                }}
            />

            <Typography variant="body2" sx={{ color: '#fff', mt: 1, pb: 0, mb: 0 }}>
                Phone Number
            </Typography>
            <TextFields
                ref={phoneNumberRef}
                name="phoneNumber"
                placeholder="e.g. +971000000000"
                value={personalDetails.phoneNumber}
                onChange={handleInputChange}
                type="tel"
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handlePersonalDetailsNext();
                    }
                }}
            />

            <Typography
                variant="subtitle1"
                color="warning.main"
                sx={{ color: '#FF7B29', mt: 2, display: 'block' }}
            >
                Note: <br />Bring your Passport/Emirates ID with you (mandatory).
            </Typography>

            <NextButton
                variant="contained"
                fullWidth
                sx={{ mt: 3 }}
                onClick={handlePersonalDetailsNext}
            >
                Next
            </NextButton>
        </FormContainer>
    );
};

export default PersonalDetailsScreen;