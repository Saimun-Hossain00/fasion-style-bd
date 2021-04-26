import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain.js';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';


const Header = () => {
    return (
        <div>
          <Navbar></Navbar>
          <HeaderMain></HeaderMain>
          <Services></Services>
        </div>
    );
};

export default Header;