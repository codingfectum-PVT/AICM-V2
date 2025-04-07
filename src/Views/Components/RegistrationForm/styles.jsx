// File: /components/RegistrationForm/styles.jsx
import { Box, Button, styled } from "@mui/material";

export const NextButton = styled(Button)`
  padding: 8px 35px;
  border-radius: 25px;
  color: #fff;
  text-transform: capitalize;
  transition-duration: 0.5s;
  background: linear-gradient(290deg, #FF7B29, #FF7B29, #FF7B29, #FCBD49);
  :hover {
    box-shadow: 0 0 10px 0 #FF7B29 inset, 0 0 10px 2px #FF7B29;
  }
  @media (max-width: 455px) {
    padding: 8px 15px;
  }
  @media (max-width: 400px) {
    padding: 4px 10px;
    font-size: 12px;    
  }
`;

export const TextFields = styled('input')`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 40px;
  padding: 10px 20px;
  margin: 10px 0px;
  border-radius: 122px;
  border: none;
  color: white;
  :focus-visible {
    outline: none;
  }
  @media (max-width: 500px) {
  
  }
`;

export const FormContainer = styled(Box)`
  background-color: rgba(0,0,0,0.7);
  border-radius: 12px;
  padding: 30px;
  width: 600px;
  min-height: 600px;
  color: white;
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.6);
  @media (max-width: 1200px) {
    min-height: 40vh;
    width: 100%;
    padding: 20px;
  }
    @media (max-height: 750px) {
   min-height: 40vh; /* Adjust this based on your needs */
}
  @media (max-width: 500px) {
    min-height: 500px;
    padding: 15px;
  }
`;