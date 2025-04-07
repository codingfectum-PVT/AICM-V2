import React from 'react';
import { 
  Box, 
  Container, 
} from '@mui/material';

// Background Image
import BackgroundImage from '../../../assets/yachtpartyfrombg.png';
import FooterForm from '../../Components/FooterForm';
import MenuForm from '../../Components/MenuForm';
import RegistrationForm from '../../Components/RegistrationForm';
import { useLocation } from 'react-router-dom';



// Main Page Component
const YachtPartyRegistration = () => {
  const location = useLocation();
  const initialPackage = location.state?.selectedPackage || '';
  
  return (
    <Box sx={{
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      color: 'white'
    }}>
      <MenuForm />
      <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'center' }}>
      <RegistrationForm initialPackage={initialPackage} />
      </Container>
      <FooterForm />
    </Box>
  );
};

export default YachtPartyRegistration;