import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import aicmpopup from '../../../assets/aicmpopup.png';
import aicmpopupMobile from '../../../assets/yachtbgmobile.png';

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const PopupContent = styled.div`
  width: 100%;
  max-width: 1192px;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: transparent;

  @media (max-width: 768px) {
    max-width: 95%;
    padding: 10px;
  }
`;

const YachtImage = styled.img`
  width: 100%;
  max-width: 1000px;
  height: auto;
  border-radius: 10px;
  object-fit: cover;

  @media (max-width: 600px) {
    max-width: 100%;
    display: none;
  }
`;
const YachtImageMobile = styled.img`
display:none;
width: 100%;
max-width: 1000px;
height: auto;
border-radius: 10px;
object-fit: cover;

@media (max-width: 600px) {
  display:flex;
  max-width: 100%;
  }
  `;
  
  const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 130px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 20px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
  @media (max-width: 1150px) {
    top: 17px;
    right: 29px;
    width: 30px;
    height: 30px;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    top: 17px;
    right: 29px;
    width: 30px;
    height: 30px;
    font-size: 18px;
  }

  @media (max-width: 480px) {
    top: 14px;
    right: 25px;
    width: 25px;
    height: 25px;
    font-size: 16px;
  }`
;

const ButtonContainer = styled.div`
  width: 80%;
  display: flex;
  margin-top: -10px;

  @media (max-width: 768px) {
    margin-top: -5px;
    justify-content: center;
    }
    @media (max-width: 600px) {
        position: absolute;
    top: 58%;
    left: 7px;
    bottom: 50%;
    }
    
    @media (max-width: 335px) {
      left: 2px;
  
  }
`;

const GoButton = styled.button`
  padding: 14px 20px;
  border: none;
  cursor: pointer;
  border-radius: 25px;
  font-size: 18px;
  font-weight: bold;
  background: linear-gradient(290deg, #FF7B29, #FCBD49);
  color: #fff;
  transition: 0.3s;
  position: absolute;
  bottom: 20px;
  max-width: 322px;
  width: 100%;

  &:hover {
    background: linear-gradient(290deg, #FCBD49, #FF7B29);
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 12px 18px;
  }

  @media (max-width: 600px) {
    font-size: 12px;
    max-width: 205px;
        width: 100%;
        padding: 7px 13px;
        left: 25px;
  }
  @media (max-width: 425px) {
    font-size: 10px;
    max-width: 150px;
        width: 100%;
        padding: 7px 10px;
        left: 25px;
  }
  @media (max-width: 335px) {
    font-size: 8px;
    max-width: 110px;
        width: 100%;
        padding: 7px 5px;
        left: 25px;
  }
`;

const Popup = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Prevent background scrolling when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleGoToYachtParty = () => {
    window.location.href = "yacht-party";
  };

  return (
    <>
      {isOpen && (
        <PopupContainer onClick={handleClose}>
          <PopupContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={handleClose}>&times;</CloseButton>
            <YachtImage src={aicmpopup} alt="Yacht Party" />
            <YachtImageMobile src={aicmpopupMobile} alt="Yacht Party" />
            <ButtonContainer>
              <GoButton onClick={handleGoToYachtParty}>BOOK YOUR SPOT NOW!</GoButton>
            </ButtonContainer>
          </PopupContent>
        </PopupContainer>
      )}
    </>
  );
};

export default Popup;
