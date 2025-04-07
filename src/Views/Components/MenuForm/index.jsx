import { Box, Button, Container, Link, styled } from '@mui/material';
import React from 'react';
import logo from '../../../assets/logo.png';
import { useAppKit } from '@reown/appkit/react';
import { useAccount,useSwitchChain } from 'wagmi';
const ButtonConnect = styled(Button)`
 padding: 8px 35px;
  border-radius: 25px;
  color: #fff;
  text-transform: capitalize;
//   margin-bottom: 50px;  
  transition-duration: 0.5s;

  background: linear-gradient(290deg, #FF7B29, #FF7B29, #FF7B29, #FCBD49);
  :hover{
    box-shadow: 0 0 10px 0 #FF7B29 inset, 0 0 10px 2px #FF7B29;
    
    }
    @media (max-width: 455px) {
padding: 8px 15px;
    }
    @media (max-width: 400px) {
padding: 4px 10px;
FONT-SIZE: 12px;    
    }
`
const ImgLogo = styled('img')`
    height: 35px;   
    @media (max-width: 455px) {
        height: 20px;
    }
    `
const MenuForm = () => {

    const { address, isConnected, chain } = useAccount();
    const { open, close } = useAppKit();
    const { chains, switchChain } = useSwitchChain();

    return (
        <Box sx={{
            position: 'absolute',
            top: '20px',
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
                    borderRadius: '12px',
                    backdropFilter: 'blur(10px)',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                       <Link href="/yacht-party-form" sx={{ textDecoration: 'none' }}>
                        <ImgLogo src={logo} alt="AICM Logo" />
                       
                       </Link>
                    </Box>
                    <Box>
                    <Link href="/" sx={{ textDecoration:'none', color: 'white', textTransform: 'capitalize', marginRight: '15px', fontSize: '16px' }}>Home</Link>

                        {!isConnected ? (
                            <ButtonConnect onClick={() => open()}>
                                Connect Wallet
                            </ButtonConnect>
                        ) : chain?.id !== chains[0]?.id ? (
                            <>
                                {chains.map((chain) => (
                                    <ButtonConnect key={chain.id} onClick={() => switchChain({ chainId: chain.id })}>
                                        Switch to  {chain.name}
                                    </ButtonConnect>
                                ))}
                            </>
                        ) : (
                            <ButtonConnect>
                                {address.slice(0, 5) + '...' + address.slice(-4)}
                            </ButtonConnect>

                        )}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default MenuForm;