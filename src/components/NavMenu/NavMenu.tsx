import React from 'react';
import { Container } from '../../assets/styles/styles';
import { NavWrapper, LogoDiv, MenuDiv, MenuWrapper } from './style';
import sunPage from '../../assets/svgs/SunPage.svg';
import burger from '../../assets/images/burger.png';

const NavMenu = () => {
  return (
    <Container>
      <NavWrapper>
        <LogoDiv>
          <img src={sunPage} alt="logo SunPage" />
        </LogoDiv>
        <MenuWrapper>
          <img src={burger} alt="ico burger" />
          <MenuDiv>
            <ul>
              <li>O nas</li>
              <li>Blog</li>
              <li>Blog</li>
              <li>Kontakt</li>
              <li>Porozmawiajmy</li>
            </ul>
          </MenuDiv>
        </MenuWrapper>
      </NavWrapper>
    </Container>
  )
}

export default NavMenu;