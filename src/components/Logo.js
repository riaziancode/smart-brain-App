import React from "react";
import { Tilt } from "react-tilt";
import './Logo.css';
import logo from './logo2.png';

const Logo = () => {
  return (
    <div className="ma4 mb0 mt4 ">
      <Tilt className='Tilt br2 shadow-2 pointer logo' options={{max: 25, transition: true}} style={{ height: 160, width: 160 }}>
        <div> <img style={{paddingTop: '30px', height: '100px'}} alt='Logo' src={logo} /> </div>
      </Tilt>
    </div>
  );
};

export default Logo;
