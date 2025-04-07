// File: /components/RegistrationForm/index.jsx
import React, { useEffect, useState } from 'react';
import { Box } from "@mui/material";
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PackageSelectionScreen from '../PackageSelectionScreen';
import PersonalDetailsScreen from '../PersonalDetailsScreen';
import PaymentInformationScreen from '../PaymentInformationScreen';
import SuccessScreen from '../SuccessScreen';



const RegistrationForm = ({ initialPackage = '' }) => {
    const [selectedPackage, setSelectedPackage] = useState(initialPackage);
    const [currentStep, setCurrentStep] = useState('package');
    const [personalDetails, setPersonalDetails] = useState({
        fullName: '',
        email: '',
        phoneNumber: ''
    });

    const handlePackageNext = (packageType) => {
        setSelectedPackage(packageType);
        setCurrentStep('personalDetails');
    };

    const handlePersonalDetailsNext = (details) => {
        setPersonalDetails(details);
        setCurrentStep('payment');
    };

    const handlePaymentSuccess = () => {
        setCurrentStep('success');
    };

    const handleNewRegistration = () => {
        // Reset all states and go back to package selection
        setSelectedPackage('');
        setPersonalDetails({
            fullName: '',
            email: '',
            phoneNumber: ''
        });
        setCurrentStep('package');
    };

    // Render different screens based on current step
    const renderCurrentScreen = () => {
        switch (currentStep) {
            case 'package':
                return <PackageSelectionScreen 
                    selectedPackage={selectedPackage}
                    onNext={handlePackageNext} 
                />;
            case 'personalDetails':
                return <PersonalDetailsScreen 
                    initialDetails={personalDetails}
                    onNext={handlePersonalDetailsNext} 
                />;
            case 'payment':
                return <PaymentInformationScreen 
                    selectedPackage={selectedPackage}
                    personalDetails={personalDetails}
                    onSuccess={handlePaymentSuccess} 
                />;
            case 'success':
                return <SuccessScreen
                    onNewRegistration={handleNewRegistration} 
                />;
            default:
                return <PackageSelectionScreen 
                    selectedPackage={selectedPackage}
                    onNext={handlePackageNext} 
                />;
        }
    };
    useEffect(() => {
        if (initialPackage && currentStep === 'package') {
            setSelectedPackage(initialPackage);
            // Optionally auto-advance to next step if package is pre-selected
            // if (initialPackage !== '') {
            //     setCurrentStep('personalDetails');
            // }
        }
    }, [initialPackage]);
    return (
        <Box>
            <ToastContainer
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />
            {renderCurrentScreen()}
        </Box>
    );
};

export default RegistrationForm;