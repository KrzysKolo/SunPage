import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuDivWrapper } from './style';
import Button from '../../Button/';

const MenuDiv = () => {
  return (
    <MenuDivWrapper>
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
    </MenuDivWrapper>
  )
}

export default MenuDiv;