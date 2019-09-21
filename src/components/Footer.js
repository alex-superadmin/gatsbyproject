import React from 'react';

import tangoFB from '../images/tango-facebook-icon.svg';
import tangoIG from '../images/tango-instagram-icon.svg';
import tangoLI from '../images/tango-linkedin-icon.svg';

import { FooterWrapper } from './styles/FooterStyles';

const Footer = () => (
  <FooterWrapper>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="whiteText">Kontakt oss</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <h3>OLAV ESPELAND</h3>
          <p className="tango-contact">
           Styreleder/Daglig leder
          </p>
          <p className="tango-contact">+47 22 98 05 38</p>
          <span className="social">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="#"
            >
              <img className="facebook" src={tangoFB} alt="tango-fb" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="#"
            >
              <img className="instagram" src={tangoIG} alt="tango-ig" />
            </a>
          </span>
        </div>

        <div className="col-md-4">
          <h3>ALEXANDER</h3>
          <p className="tango-contact">
           Web Developer 
          </p>
          <p className="tango-contact">+7 951 654 15 04</p>
          <span className="social">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="#"
            >
              <img className="facebook" src={tangoFB} alt="tango-fb" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="#"
            >
              <img className="instagram" src={tangoIG} alt="tango-ig" />
            </a>
          </span>
        </div>

        <div className="col-md-4">
          <h3>BIOZYMLAB AS</h3>
          <p className="tango-contact">0352 Oslo</p>
          <p className="tango-contact">Hegdehaugsveien 31</p>
          <span className="social">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="#"
            >
              <img className="facebook" src={tangoFB} alt="tango-fb" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="#"
            >
              <img className="instagram" src={tangoIG} alt="tango-ig" />
            </a>
          </span>
        </div>
      </div>
    </div>
  </FooterWrapper>
);

export default Footer;
