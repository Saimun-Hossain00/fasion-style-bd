import React from 'react';
import './HeaderMain.css';
import fasion from '../../images/fasion.jpg'

const HeaderMain = () => {
    return (
    <main>
      <div className="header-img">
      <img src={fasion} alt=""  />
     
      </div>
    </main>
    );
};

export default HeaderMain;