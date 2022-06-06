import React, { useContext, useEffect, useState } from 'react';
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
    click,
    setClick,
  } = useContext(MenuContext) as SmallMenuType;

  const [show, setShow] = useState<boolean>(showSmallMenu);

  useEffect(() => {
    setShow(showSmallMenu);
  }, [showSmallMenu, setShowSmallMenu])

  const handleChangeShowSmallMenu = () => {
    setClick(!click);
    setShowSmallMenu(!showSmallMenu);
  };

  return (
    <header>
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
              ? (<MenuDivSmall
                showSmallMenu={show}
                setShowSmallMenu={setShowSmallMenu}
                click={click}
                setClick={setClick}
              />)
              : (<MenuDiv />)
            }
          </MenuWrapper>
        </NavWrapper>
      </Container>
    </header>
  )
}

export default NavMenu;