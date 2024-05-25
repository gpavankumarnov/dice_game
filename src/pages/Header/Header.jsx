import React from "react";
import styled from "styled-components";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import profile from '../../assets/profile.jpg';
const Header = () => {
  const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
top:0;
    position: sticky;
    height:5rem;
    z-index: 1;
  `;
  

  const Logo = styled.h2`
    color: darkblue;
    font-weight: bold;
    font-size: 1.75rem;
    cursor: pointer;
  `;

  const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap:1rem
  `

  const Image = styled.img`
  border-radius:50%;
  height: 2.5rem;
  width: 2.5rem;
  cursor: pointer
  `

  return (
    <HeaderWrapper>
      <Logo>LamdaAdmin</Logo>
      <IconsContainer className="iconContainer"> 
        <NotificationsNoneIcon />
       <LanguageIcon/>
       <SettingsIcon/>
        <Image src={profile} alt="profile"/>
      </IconsContainer>
    </HeaderWrapper>
  );
};

export default Header;
