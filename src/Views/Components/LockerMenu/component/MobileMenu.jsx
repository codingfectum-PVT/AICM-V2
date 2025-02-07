import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import StoreIcon from '@mui/icons-material/Store';
import CampaignIcon from '@mui/icons-material/Campaign';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import InfoIcon from '@mui/icons-material/Info';
import PersonIcon from '@mui/icons-material/Person';
import shop from '../../../../assets/shop.png';
import { useDispatch, useSelector } from "react-redux";
import logo from "../../../../assets/logo.png";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { MaterialUISwitch, MenuLink, MobileMainMenu, SiteLogo, DrawerBox, DrawerDivider, Humburgger, HumburggerClose, MenuButton } from "../styles";
import { whitepaperLink } from "../../../../links";

const MobileMenu = (props) => {
  const currentTheme = useSelector((state) => state.LDTheme.value);
  const dispatch = useDispatch();
  const [state, setState] = useState({ left: false });
  const [menuItems, setMenuItems] = useState(props.menuList); // Manage menu items
  const [openDropdown, setOpenDropdown] = useState(null); // State to manage which dropdown is open

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  // Handle menu item click to navigate or scroll
  const handleMenuClick = (menuTitle, index, event) => {
    // Prevent the default link behavior (navigation)
    event.preventDefault(); // Prevent the link from opening

    // If the clicked item is "Shop Now" or "About", toggle dropdown visibility
    if (menuTitle === "Shop Now" || menuTitle === "About") {
      handleDropdownToggle(index); // Toggle dropdown visibility
    } else {
      // If the clicked item is "Physical Products" or "Digital Goods", scroll to the section
      if (menuTitle === "Physical Products" || menuTitle === "Digital Goods") {
        const sectionId = menuTitle.toLowerCase().replace(" ", "-"); // Convert to ID format (e.g. 'physical-products')
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
        }
      } else {
        window.location.href = props.menuList[index].link; // Navigate to the menu link
      }
    }
  };

 
  const getIcon = (title) => {
    switch (title) {
      case "Shop Now":
        return <img src={shop} alt="Shop" style={{ width: 20, height: 20 }} />;
      case "Create a Store":
        return <StoreIcon />;
      case "Advertise":
        return <CampaignIcon />;
      case "Affiliate Program":
        return <GroupAddIcon />;
      case "About Us":
        return <InfoIcon />;
      case "Get Started":
        return <PersonIcon />;
      case "About":
        return <InfoIcon />;
      default:
        return null;
    }
  };

  // Toggle dropdown visibility
  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index); 
  };

  return (
    <MobileMainMenu>
      <MenuLink href="/" p="15px 0 15px">
        {/* <SiteLogo src={logo} width="150" height="50" /> */}
      </MenuLink>
      <MenuButton
        onClick={toggleDrawer("left", true)}
        style={{
          backgroundColor: "black", 
        }}
      >
        {state["left"] ? (
          <HumburggerClose>Close</HumburggerClose>
        ) : (
          <Humburgger></Humburgger>
        )}
      </MenuButton>
      <Drawer anchor="left" open={state["left"]} onClose={toggleDrawer("left", false)} PaperProps={{ style: { backdropFilter:'blur(10px)' ,backgroundColor:'rgba(0, 0, 0, 0.26)'} }}>
        <DrawerBox role="presentation" style={{ backdropFilter:'blur(10px)',backgroundColor:'rgba(0, 0, 0, 0.20)'}}>
          <DrawerDivider>
            <MenuLink href="/" style={{ display: 'flex', alignItems: 'center', paddingLeft: '50px' }}>
              <SiteLogo src={logo} width="150" height="50" />
            </MenuLink>
            <Divider style={{ margin: '10px 0' }} />
            <List>
              {menuItems.map((value, i) => (
                <div key={i}>
                  <MenuLink href={value.link} target={value.target}  className={value.customClass + " d-block"}
                    onClick={(e) => { handleMenuClick(value.title, i, e);  }}
                    style={{ display: 'flex', alignItems: 'center',padding: '10px 10px',textDecoration: 'none', 
                      backgroundColor: value.title === "Get Started" ? '#ff7b23' : 'transparent',}}>

                    {getIcon(value.title)} 
                    <span style={{ marginLeft: '10px' }}>{value.title}</span> 
                    {(value.title === "Shop Now" || value.title === "About") && (
                      <KeyboardArrowDownIcon style={{marginLeft: '10px',transform: openDropdown === i ? 'rotate(180deg)' : 'rotate(0deg)', // Rotate icon if dropdown is open
                          transition: 'transform 0.3s', }} />)}
                  </MenuLink>

                  {/* Dropdown Menu for "Shop Now" */}
                  {value.title === "Shop Now" && openDropdown === i && (
                    <div style={{ paddingLeft: '20px', paddingTop: '10px', display: 'flex', flexDirection: 'column' }}>
                     <MenuLink href="/#physicalproducts"
                        style={{ padding: '5px 30px', color: '#ffffff', }}>
                        Physical products
                      </MenuLink>
                      <MenuLink href="/#DigitalGoods"
                        style={{ padding: '10px 30px',  color: 'white', marginRight: '45px',}} >
                       Digital Goods
                      </MenuLink>
                      <MenuLink
                        href="/#Services"
                        style={{marginTop:'-8px',   paddingRight: '190px',color: '#ffffff', }}>
                        Services
                      </MenuLink>
                    </div>
                  )}

                  {/* Dropdown Menu for "About" */}
                  {value.title === "About" && openDropdown === i && (
                    <div style={{ display: 'flex',   flexDirection: 'column',alignItems:'center',}}>
                      <MenuLink
                        href="/#what"
                        style={{padding: '10px 30px',  color: '#ffffff', marginRight: '45px',}}>
                        What Is AICM
                      </MenuLink>

                      <MenuLink
                        href="/#token"
                        style={{padding: '10px 30px',color: '#ffffff',marginRight: '45px',}}>
                        Token Utility
                      </MenuLink>

                      <MenuLink
                        href="/#roadmap"
                        style={{padding: '10px 40px', color: '#ffffff',marginRight: '45px',}}>
                        Roadmap
                      </MenuLink>
                      <MenuLink
                        href={whitepaperLink}
                        target="blank"
                        style={{padding: '10px 30px', marginTop:"-1px",color: '#ffffff', marginRight: '45px',}} >
                        Whitepaper
                      </MenuLink>
                    </div>
                  )}
                </div>
              ))}
            </List>
          </DrawerDivider>
        </DrawerBox>
      </Drawer>
    </MobileMainMenu>
  );
};

export default MobileMenu;
