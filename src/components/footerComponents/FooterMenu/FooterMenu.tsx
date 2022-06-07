import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, FooterMenuDiv, ImageDiv, MenuUl } from './style';
import sunPage from '../../../assets/svgs/SunPage.svg';

const FooterMenu = () => {
  return (
    <Container>
      <FooterMenuDiv>
        <ImageDiv>
          <Link to="/" className='link'>
            <img src={sunPage} alt="logo SunPage" />
          </Link>
        </ImageDiv>
        <MenuUl>
          <li>
            <NavLink to="/" className='navlink'>
               O nas
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className='navlink'>
               Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="kontakt" className='navlink'>
              Kontakt
            </NavLink>
          </li>
        </MenuUl>
      </FooterMenuDiv>
    </Container>
  )
}

export default FooterMenu;