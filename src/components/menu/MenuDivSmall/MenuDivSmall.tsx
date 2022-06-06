import React, { Dispatch, SetStateAction } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuDivSmallWrapper } from './style';
import Button from '../../Button/';

export type MenuDivSmallProps = {
  showSmallMenu?: boolean | any,
  setShowSmallMenu: Dispatch<SetStateAction<boolean>>,
  click?: boolean | any,
  setClick: Dispatch<SetStateAction<boolean>>,
};

const MenuDivSmall: React.FC<MenuDivSmallProps> = ({ showSmallMenu, setShowSmallMenu, click, setClick }) => {

  const handleClose = () => {
    setShowSmallMenu(!showSmallMenu);
    setClick(!click);
}
  return (
    <MenuDivSmallWrapper showSmallMenu={showSmallMenu}>
      <ul>
        <li onClick={handleClose}>
          <NavLink to="/" className='navlink'>
            O nas
          </NavLink>
        </li>
        <li onClick={handleClose}>
          <NavLink to="/blog" className='navlink'>
            Blog
          </NavLink>
        </li>
        <li onClick={handleClose}>
          <NavLink to="/kontakt" className='navlink'>
            Kontakt
          </NavLink>
        </li>
      </ul>
      <Button btnText='Porozmawiajmy' btnLink='/' />
    </MenuDivSmallWrapper>
  )
}

export default MenuDivSmall;