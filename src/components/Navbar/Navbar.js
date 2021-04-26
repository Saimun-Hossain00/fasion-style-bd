
import React from 'react'
import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faBars } from '@fortawesome/free-solid-svg-icons'



const Navbar = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
    <a className="navbar-brand" href="#"><img className="logo" src={logo} alt=""/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} style={{ color: "#fff"}}/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">about</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">contacts</a>
        </li>
      </ul>
    </div>
    </div>
</nav>
    );
};

export default Navbar;

// const Navbar = () => {
//     return (
//             <nav class="navbar navbar-expand-lg navbar-light bg-light">
//             <div class="container-fluid"/>
//             {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button> */}
//               <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul class="navbar-nav me-auto ">
//                   <li class="nav-item">
//                     <a class="nav-link mr-5 active" aria-current="page" href="#">Home</a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link mr-5" href="#">Services</a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link mr-5" href="#">Portfolio</a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link mr-5" href="#">About</a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link mr-5" href="#">Contact</a>
//                   </li>
//                  </ul>
//             </div>
//           </nav>
//           );
//         };
        
//         export default Navbar;
