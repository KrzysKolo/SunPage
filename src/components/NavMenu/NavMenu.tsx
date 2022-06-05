import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { Container } from '../../assets/styles/styles';
import { NavWrapper, LogoDiv, MenuWrapper } from './style';
import sunPage from '../../assets/svgs/SunPage.svg';
import { Link } from 'react-router-dom';
import { HamburgerButton } from '../Hemburger';
import { MenuContext, SmallMenuType } from '../../context/menuContext';
import MenuDiv from '../menu/MenuDiv/MenuDiv';
import { MenuDivSmall } from '../menu';


const NavMenu: React.FC = () => {
  const {
    showSmallMenu,
    setShowSmallMenu,
  } = useContext(MenuContext) as SmallMenuType;

  const [show, setShow] = useState<boolean>(showSmallMenu);
  const [click, setClick] = useState<boolean>(false);

  useEffect(() => {
    setShow(showSmallMenu);
  }, [showSmallMenu, setShowSmallMenu])

  const handleChangeShowSmallMenu = () => {
    setClick(!click);
    setShowSmallMenu(!showSmallMenu);
  };

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
            <HamburgerButton click={click} onClick={handleChangeShowSmallMenu} />
          </div>
          { showSmallMenu
            ? (<MenuDivSmall showSmallMenu={show} />)
            : (<MenuDiv />)
          }
        </MenuWrapper>
      </NavWrapper>
    </Container>
  )
}

export default NavMenu;