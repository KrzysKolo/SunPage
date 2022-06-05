import React from 'react';
import { Container } from '../../assets/styles/styles';
import { NavWrapper, LogoDiv, MenuDiv, MenuWrapper } from './style';
import { Button } from '../../components'
import sunPage from '../../assets/svgs/SunPage.svg';
import burger from '../../assets/images/burger.png';
import { Link, NavLink } from 'react-router-dom';
import { Close, HamburgerButton } from '../Hemburger';

const NavMenu = () => {
  return (
    <Container>
      <NavWrapper>
        <LogoDiv>
          <Link to="/">
            <img src={sunPage} alt="logo SunPage" />
          </Link>
        </LogoDiv>
        <MenuWrapper>
          <div className='hamburger'>
            <HamburgerButton />
          </div>
          <MenuDiv>
            <ul>
              <div className="closed">
                <Close />
              </div>
              <li>
                <NavLink to="#" className='navlink'>
                  O nas
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className='navlink'>
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className='navlink'>
                  Kontakt
                </NavLink>
              </li>
            </ul>
            <Button btnText='Porozmawiajmy' btnLink='#' />
          </MenuDiv>
        </MenuWrapper>
      </NavWrapper>
    </Container>
  )
}

export default NavMenu;