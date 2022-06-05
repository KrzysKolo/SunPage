import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuDivSmallWrapper } from './style';
import Button from '../../Button/';

export type MenuDivSmallProps = {
  showSmallMenu?: boolean | any,
}
const MenuDivSmall: React.FC<MenuDivSmallProps> = ({ showSmallMenu }) => {

  return (
    <MenuDivSmallWrapper showSmallMenu={showSmallMenu}>
      <ul>
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
    </MenuDivSmallWrapper>
  )
}

export default MenuDivSmall;