// import React, { useState } from 'react';
// import '

// function SecondHeader() {
//   const [isMobile, setMobile] = useState(false);

//   const toggleMenu = () => {
//     // Your existing toggleMenu logic here
//     setMobile((prevMobile) => !prevMobile);
//   };

//   return (
//         <div className={isMobile ? 'menu__bar mobile' : 'menu__bar'}>
//           <img className="logo absolute left-1/2 transform -translate-x-1/2 -translate-y-12 h-12 bg-text rounded-full p-2"
//             src="src/assets/media/logo.png" alt="Logo"
//           />
//           <img className="menu-icon" src={isMobile ? 'assets/close.svg' : 'assets/burger-menu.svg'} 
//             title={isMobile ? 'Close Menu' : 'Burger Menu'} alt={isMobile ? 'Close Menu' : 'Burger Menu'}
//             onClick={toggleMenu}
//           />
//       <img className="menu-icon" src={isMobile ? 'assets/close.svg' : 'assets/burger-menu.svg'} 
//         title={isMobile ? 'Close Menu' : 'Burger Menu'} alt={isMobile ? 'Close Menu' : 'Burger Menu'}
//         onClick={toggleMenu}
//       />
//       {!isMobile && (
//         <ul className="navigation">
//           <li>
//             <a href="#services" title="O NAS">
//               Services
//             </a>
//           </li>
//           <li>
//             <a href="#blog" title="AKTUALNOŚCI">
//               Blog
//             </a>
//           </li>
//           <li>
//             <a href="#about" title="GALERIA">
//               About
//             </a>
//           </li>
//           <li>
//             <a href="#contact-us" title="REGATY">
//               Contact Us
//             </a>
//           </li>
//           <li>
//             <a href="#contact-us" title="KONTAKT">
//               Contact Us
//             </a>
//           </li>
//           <li>
//             <a href="#contact-us" title="DOKUMENTY">
//               Contact Us
//             </a>
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// }

// export default SecondHeader;
