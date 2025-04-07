
import React, { useState } from 'react';
import {
    Box,
    CircularProgress,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    Typography,
} from "@mui/material";
import { toast } from 'react-toastify';
import { FormContainer, NextButton } from '../RegistrationForm/styles';
import useContractInteraction from '../../../hooks/useContractInteraction';

const PackageSelectionScreen = ({ selectedPackage: propSelectedPackage, onNext }) => {
    const [selectedPackage, setSelectedPackage] = useState(propSelectedPackage || '');
  const { prices ,priceLoadingStates} = useContractInteraction();

    const handlePackageChange = (event) => {
        setSelectedPackage(event.target.value);
    };

    const handlePackageNext = () => {
        if (!selectedPackage) {
            toast.error('Please select a package', {
                position: "top-right",
                autoClose: 3000,
            });
            return;
        }
        onNext(selectedPackage);
    };

    return (
        <FormContainer >
            <Typography variant="h5" gutterBottom  sx={{ color: '#FF7B29', fontWeight: 'bold',    fontSize: { xs: '1.1rem' , sm:"1.9rem" },}}>
                AICM Yacht Party Registration Form
            </Typography>
            <Typography variant="body1" gutterBottom sx={{
    mt: { xs: 1, sm: 2 },
    mb: { xs: 1, sm: 7 },
    fontSize: { xs: '0.9rem' ,sm:'1.1rem' }
  }}>
                Please fill in the details below to register for the AICM Yacht Party and secure your tickets. Choose your package and complete your registration!
            </Typography>

            <Typography variant="h5" sx={{ color: '#FF7B29', fontWeight: 'bold',
                  mt: { xs: 1, sm: 3 },
                  mb: { xs: 1, sm: 2 },
                  
    fontSize: { xs: '1.1rem' ,sm:'1.9rem'}
                }}>
                Select Your Package
            </Typography>

            <FormControl component="fieldset" fullWidth>
                <RadioGroup
                    value={selectedPackage}
                    onChange={handlePackageChange}
                >
                    <FormControlLabel
                        value="standard"
                        control={<Radio />}
                        label = {(
                            priceLoadingStates?.standard
                              ? <>
                                  Standard Package – <CircularProgress size={12} />
                                </>
                              : `Standard Package – ${prices?.standard ?? '<N/A>'} ETH (For Projects)`
                          )}
                        />
                    <FormControlLabel
                        value="premium"
                        control={<Radio />}
                        label = {(
                            priceLoadingStates?.standard
                              ? <>
                                  Premium Package – <CircularProgress size={12} />
                                </>
                              : `Premium Package – ${prices?.premium ?? '<N/A>'} ETH (For Projects)`
                          )}

                    />
                    <FormControlLabel
                        value="degen"
                        control={<Radio />}
                        label = {(
                            priceLoadingStates?.standard
                              ? <>
                                  Degen Package – <CircularProgress size={12} />
                                </>
                              : `Degen Package – ${prices?.degen ?? '<N/A>'} ETH (For Individuals)`
                          )}
                    />
                </RadioGroup>
            </FormControl>

            <Typography
                variant="subtitle1"
                color="warning.main"
                sx={{ color: '#FF7B29', mt: 2, display: 'block' ,
                    fontSize: { xs: '0.9rem' , sm:'1.1rem'} }}
            >
                Note: <br />Bring your Passport/Emirates ID with you (mandatory).
            </Typography>

            <NextButton
                variant="contained"
                fullWidth
                sx={{ mt: 3 }}
                onClick={handlePackageNext}
            >
                Next
            </NextButton>
        </FormContainer>
    );
};

export default PackageSelectionScreen;