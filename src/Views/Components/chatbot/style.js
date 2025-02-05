import emotionStyled from "@emotion/styled";
import { Paper } from "@mui/material";

const TypographyChat = emotionStyled.div`
  color: #ffffff;
  font-size: 18px;
  max-width: 400px;
  width: 100%;
  
  &.user{
    background: #000000;
    margin-left: auto;
    border-radius: 10px;
    border: 1px solid rgba(145, 158, 171, 0.32);
    border-right-width: 0;
    padding: 10px 25px;
    margin-bottom: 5px;
    margin-top: 10px;
  }

  &.agent{
    margin-right: auto;
    
    .predefinedButton{
      background: unset;
      border: 1px solid rgb(254, 139, 0);
      color: ${({ theme }) => theme.palette.grey[0]};
      border-radius: 15px;
      padding: 15px 25px;
      margin-bottom: 10px;
      margin-right: 10px;
      font-size: 17px;

      &:hover{
        color: rgb(254, 139, 0) !important;
        cursor: pointer;
      }
    }
  }

  *{ color: #ffffff !important; text-align: left !important;}
  p{ 
    margin-bottom: 15px;
    font-size: 18px;
    
    &:last-child{
      margin-bottom: 0px;
    }
  }
  br{ margin-bottom: 10px; }
  ul{ padding-left: 25px; }
  h1{ font-size: 19px; margin-bottom: 8px;}
  h2{ font-size: 17px; margin-bottom: 8px;}
  h3{ font-size: 16px; margin-bottom: 8px;}
  h4{ font-size: 15px; margin-bottom: 8px;}
  h5{ font-size: 14px; margin-bottom: 8px;}
  h6{ font-size: 13px; margin-bottom: 8px;}

  a{
    margin: 0 5px;
    text-decoration: underline;

    &:hover{
      color: rgb(254, 139, 0) !important;
      b,strong{color: rgb(254, 139, 0) !important;}
    }
  }
`

const PaperEx = emotionStyled(Paper)`
  box-shadow: unset;
  flex: 1;
  padding: 20px 35px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  background:#000000ba;
   p{
   margin:0;
   padding:0;
   }
  /* width */
  &::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #0b1316;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const Wrapper = emotionStyled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: calc( 100% - 10px );
  max-width: 500px;
  height: 100vh;
  max-height: 600px;
  background-color: ${({ theme }) => theme.palette.grey[800]};
  color: #FFF;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  z-index: 9999;
  border-radius: 15px;
  border: 1px solid rgba(134, 146, 158, 0.5);

  @media(max-width: 600px){
    right: 0px;
    left: 0;
    margin: auto;
    bottom: 60px;
  }

  .MuiOutlinedInput-notchedOutline, .MUI-focused{
    border-color: unset !important;
    border-width: 0 !important;
  }
`; 

const ChatButton = emotionStyled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: linear-gradient(133deg, #FF7B29, #FCBD49);
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  box-shadow: #ff7b299c 0px 0px 9px 0px;
  cursor: pointer;
  z-index: 999;
  
  @media(max-width: 600px){
    bottom: 70px;
  }
`

const SendButton = emotionStyled.button`
  background-color: transparent;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
`
export { TypographyChat, PaperEx, Wrapper, ChatButton, SendButton }