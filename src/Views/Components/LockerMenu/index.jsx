import React, { useState } from 'react';
import { Container, Box, Button, Typography } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';
import StoreIcon from '@mui/icons-material/Store';
import CampaignIcon from '@mui/icons-material/Campaign';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import InfoIcon from '@mui/icons-material/Info';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import logo from '../../../assets/logo.png';
import shop from '../../../assets/shop.png';
import MobileMenu from './component/MobileMenu';
import { Advertise, AffiliateProgramLink, CreateaStore, whitepaperLink } from '../../../links';

const LockerMenu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const menuList = [
    { title: 'Create a Store', link: CreateaStore, icon: <StoreIcon />, target: '_blank' },
    { title: 'Advertise', link: Advertise, icon: <CampaignIcon />, target: '_blank' },
    { title: 'Affiliate Program', link: AffiliateProgramLink, icon: <GroupAddIcon />, target: '_blank' },
    { title: 'About', link: '#', icon: <InfoIcon />, hasDropdown: true },
    { title: 'Shop Now', link: 'https://app.aicm.store', isButton: true, target: '_blank' },
  ];

  const fadeInStyle = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    config: { tension: 150, friction: 20 },
  });


  const aboutDropdownContent = [
    { text: 'What is AICM', link: '/#what' },
    { text: 'Token Utility', link: '/#token' },
    { text: 'Roadmap', link: '/#roadmap' },
    { text: 'Whitepaper', link: whitepaperLink, target: '_blank' },
  ];

  return (
    <animated.div
      style={{
        ...fadeInStyle,
        background: '#0000004a',
        backdropFilter: 'blur(10px)',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 70,
        zIndex: 1000,
        padding: '20px 0',
      }}
    >
      <Container maxWidth="xl" sx={{ padding: '0 20px' }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ color: '#fff', gap: '20px' }}>
          <Box component="a" href="/" sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <img src={logo} alt="Logo" style={{ height: '40px', width: 'auto', marginRight: '20px' }} />
          </Box>

          <Box component="a" href="/" sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', }}>
            <img src={logo} alt="Logo" style={{ height: '30px', width: 'auto' }} />
          </Box>

          <Box className="desktop-menu" display="flex" alignItems="center" flexWrap="wrap" gap="20px"
            sx={{
              display: { xs: 'none', md: 'flex' },
              '@media (max-width: 1024px)': {
                justifyContent: 'space-between',
                gap: '10px',
              },
            }}>

            {menuList.map((menu, index) => (
              <Box
                key={index}
                position="relative"
                onMouseEnter={() => {
                  if (menu.title !== 'Create a Store' && menu.title !== 'Advertise' && menu.title !== 'Affiliate Program') {
                    setHoveredItem(menu.title);
                  }
                  menu.hasDropdown && setDropdownOpen(menu.title);
                }}
                onMouseLeave={() => {
                  if (menu.title !== 'Create a Store' && menu.title !== 'Advertise' && menu.title !== 'Affiliate Program') {
                    setHoveredItem(null);
                  }
                  menu.hasDropdown && setDropdownOpen(null);
                }}>
                {menu.isButton ? (
                  <Button
                    href={menu.link}
                    target={menu.target || '_self'}
                    variant="contained"
                    color="warning"
                    sx={{
                      background: "linear-gradient(290deg, #FF7B29, #FF7B29, #FF7B29, #FCBD49)",
                      color: '#fff',
                      borderRadius: '20px',
                      textTransform: 'none',
                      padding: '8px 20px',
                      transition: 'all 0.3s ease',
                      minWidth: '140px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '1px',
                      position: 'relative',
                    }} startIcon={menu.icon}>

                    {menu.title}
                  </Button>

                ) : (
                  <Box
                    display="flex"
                    alignItems="center"
                    component="a"
                    href={menu.link}
                    target={menu.target || '_self'}
                    sx={{
                      textDecoration: 'none',
                      color: '#fff',
                      fontSize: '14px',
                      fontWeight: '500',
                      gap: '5px',
                      '&:hover': { opacity: 0.8 },
                    }}>
                    {menu.isImage ? (
                      <img src={shop} alt="Shop Now" style={{ height: '24px', width: '24px', marginRight: '5px' }} />
                    ) : (
                      menu.icon
                    )}
                    <Typography variant="body1">{menu.title}</Typography>
                    {menu.hasDropdown && <KeyboardArrowDownIcon sx={{ fontSize: '18px', marginLeft: '4px' }} />}
                  </Box>
                )}
                {dropdownOpen === menu.title && (
                  <Box
                    sx={{
                      position: 'absolute', top: '110%', left: 0, background: ' rgba(0, 0, 0, 0.9)', backdropFilter: 'blur(6px)', color: '#fff', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', borderRadius: '8px',
                      minWidth: '150px',
                      padding: '10px 0',
                      border: '1px solid #1C1C1C',
                      zIndex: 1001,
                    }}>

                    {(menu.title === 'About' && aboutDropdownContent).map((item, idx) => (
                      <Box
                        key={idx}
                        component="a"
                        href={item.link}
                        target={item.target || '_self'}
                        sx={{
                          display: 'block', padding: '8px 16px', fontSize: '14px', textDecoration: 'none', color: '#fff',
                          '&:hover': {
                            backgroundColor: '#ff7b29', cursor: 'pointer',
                          },
                        }}>
                        {item.text}
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>
            ))}
          </Box>

          <Box
            className="mobile-menu"
            sx={{
              display: { xs: 'block', md: 'none' },
            }}>
            <MobileMenu menuList={menuList} />
          </Box>
        </Box>
      </Container>
    </animated.div>
  );
};

export default LockerMenu;
