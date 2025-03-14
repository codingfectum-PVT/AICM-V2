import React from "react";
import styled from "@emotion/styled";
import { Box, Container, Grid, Typography, TextField, Button } from "@mui/material";
import fieldimg from "../../../assets/fieldimg.png";
import searchimg from "../../../assets/searchimg.png";
import LockerMenu from "../../Components/LockerMenu";
import { Markee } from "../Markee";

const Wrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
padding-top: 100px;
  height: 100vh;
  position: relative;
  z-index:222;
`;

const HighlightTypography = styled(Typography)`
  margin-bottom: 10px;
  background: linear-gradient(131deg, #ffffff 30%, #FF7B29 65%, #fd9c39 76%, #FCBD49 80%);
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 700;
`;

const SearchBox = styled(Box)`
  display: flex;
  align-items: center;
  background: #000;
  border-radius: 30px;
  border: 1px solid #ff7b29;
  padding: 0px 20px;
  margin: 20px auto 0;
  box-shadow: 0px 4px 15px rgba(252, 189, 73, 0.5);
  max-width: 650px;
  @media (max-width: 768px) {
    max-width: 90%;
  }
  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const FieldImage = styled("img")`
  max-width: 50px;
  width: 100%;
  @media (max-width: 600px) {
    max-width: 40px;
  }
`;

const SearchImage = styled("img")`
  max-width: 20px;
  width: 100%;
  cursor: pointer;
`;

const SearchInput = styled(TextField)`
  flex-grow: 1;
  input {
    color: #fff;
    padding-left: 10px;
    cursor: pointer;
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border: none;
    }
  }
`;

const ReadButton = styled(Button)`
  padding: 8px 35px;
  background-color: #ffffff;
  border-radius: 25px;
  color: #000000;
  text-transform: capitalize;
  margin-bottom: 50px;
  :hover {
    background-color: #ffffff;
  }
    @media (max-width: 375px) {
padding: 8px 15px;
    }
:hover{
 box-shadow: 0 0 10px 0 #fff inset, 0 0 10px 2px #fff;
  
}
`;
const ShopButton = styled(Button)`
  padding: 8px 35px;
  border-radius: 25px;
  color: #fff;
  text-transform: capitalize;
  margin-bottom: 50px;  
  background: linear-gradient(290deg, #FF7B29, #FF7B29, #FF7B29, #FCBD49);
    @media (max-width: 375px) {
padding: 8px 15px;
    }
:hover{
 box-shadow: 0 0 10px 0 #FF7B29 inset, 0 0 10px 2px #FF7B29;
  
}
  `;
const WrapButton = styled(Box)`
  display: flex; 
  justify-content: center;
  gap: 20px;
  margin-top: 20px; 

  `
const Header = () => {
  return (
    <Wrapper>
      <Markee />
      <LockerMenu />
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} justifyContent="center" textAlign={"center"}>
            <HighlightTypography variant="h2" sx={{ fontSize: { xs: "40px", sm: "50px", md: "60px", lg: "80px" } }}>
              The Smarter, <br /> AI Powered Decentralized <br /> Marketplace
            </HighlightTypography>
            <Typography variant="body1" color="#FFFFFF" sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }} >
              Harness the power of decentralized AI marketplace with AICM.
            </Typography>
            <WrapButton>
              <ShopButton target="blank" href="https://app.aicm.store">Shop Now</ShopButton>
              <ReadButton target="blank" href="/pricing">Become Vendor</ReadButton>
            </WrapButton>

            {/* <SearchBox>
              <FieldImage src={fieldimg} alt="Field Image" />
              <SearchInput placeholder="Search with AICM" variant="outlined" autoComplete="off" InputProps={{ style: { color: "#FFFFFF" } }} />
              <SearchImage src={searchimg} alt="Search Icon" />
            </SearchBox> */}
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Header;
