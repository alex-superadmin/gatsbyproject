import React from 'react';
import PropTypes from 'prop-types';

import { HamburgerButton } from './styles/HamburgerStyles';
import HamburgerHeart from '../images/mob_menu.svg';

const Hamburger = ({ handleOverlayMenu }) => (
  <HamburgerButton onClick={handleOverlayMenu} tabIndex="0">
    <img src={HamburgerHeart} alt="mobile menu" />
  </HamburgerButton>
);

Hamburger.propTypes = {
  handleOverlayMenu: PropTypes.func,
};

export default Hamburger;
