import React from 'react';
import { NavLink } from 'react-router-dom';
import { TextFooter } from '../../textDivComponents';
import { Container, FooterInfoDiv, DockDiv, SMMenuUl } from './style';
import fb from '../../../assets/images/SocialButton.png';
import tweet from '../../../assets/images/SocialButton-1.png';
import ln from '../../../assets/images/SocialButton-2.png';

const FooterInfo = () => {
  return (
    <Container>
      <FooterInfoDiv>
        <DockDiv>
          <TextFooter text='© Copyrights 2021 Sungroup' />
          <TextFooter text='Polityka prywatności' />
          <TextFooter text='Regulamin' />
        </DockDiv>
        <SMMenuUl>
          <li>
            <NavLink to="/" className='navlink'>
              <div>
                <img src={fb} alt="facebook" />
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className='navlink'>
              <div>
                <img src={tweet} alt="tweet" />
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="kontakt" className='navlink'>
              <div>
                <img src={ln} alt="linkedin" />
              </div>
            </NavLink>
          </li>
        </SMMenuUl>
      </FooterInfoDiv>
    </Container>
  )
}

export default FooterInfo;