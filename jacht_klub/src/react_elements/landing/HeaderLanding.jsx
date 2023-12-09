import React, { useState } from 'react';

import WeatherWidget from './WeatherWidget';
import NavigationButton from '../general/NavigationButton';
import Dropdown from 'react-dropdown-select'; 

export default function HeaderLanding() {


    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    return (
        <>
            <header className="bg-blue_header/70 w-screen box-border fixed z-10 ">
                <WeatherWidget />
                <img className="logo absolute left-1/2 -translate-x-1/2 -translate-y-12 h-36 bg-text rounded-full p-2" src="src/assets/media/logo.png"></img>
                <nav className="flex justify-around">
                    <div className="flex items-end">
                        <ul className="font-jaldi mx-9 gap-16 flex">
                        <li className="text-white text-xl font-jaldi" onClick={() => scrollToSection('landingAbout')}>O NAS</li>
                    <li className="text-white text-xl font-jaldi" onClick={() => scrollToSection('aktualnosci')}>AKTUALNOŚCI</li>
                   
                    <li className="text-white text-xl font-jaldi" onClick={() => scrollToSection('galeria')}>GALERIA</li>
                        </ul>
                    </div>
                    <div className="flex items-end relative">
                    <ul className="font-jaldi mx-9 gap-16 flex">
                    <li className="text-white text-xl font-jaldi" onClick={() => scrollToSection('regaty')}>REGATY</li>
                            <li className="text-white text-xl font-jaldi" onClick={() => scrollToSection('kontakt')}>KONTAKT</li>
                        
                        </ul>
                        
                        <ul className="menu">
  <li>
    <a href="#" className='font-jaldi'>DOKUMENTY</a>
    
    <ul>
      <li><a href="#">Dokument 1</a></li>
      <li><a href="#">Dokument 2</a></li>
      <li><a href="#">Dokument 3</a></li>
      <li><a href="#">Dokument 4</a></li>
    </ul>
  </li>
</ul>

                    </div>
                </nav>
                <script src="../js/logic.js"></script>
            </header>
        </>
    );
}

