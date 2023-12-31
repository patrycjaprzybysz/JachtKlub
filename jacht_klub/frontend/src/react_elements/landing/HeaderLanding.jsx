import React, { useState } from 'react';

import WeatherWidget from './WeatherWidget';
import NavigationButton from '../general/NavigationButton';
import Dropdown from 'react-dropdown-select'; 
import '../../styles/SecondHeader.css'


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
            <header className="bg-blue_header/70 w-full box-border fixed z-10 font-jaldi">
                <WeatherWidget />
                <img className="logo absolute left-1/2 -translate-x-1/2 -translate-y-12 h-36 bg-text rounded-full p-2" src="src/assets/media/logo.png"></img>
                <nav className="flex justify-around">
                    <div className="flex items-end">
                        <ul className=" navigation font-jaldi mx-9 gap-16 flex">
                        <li>
              <a onClick={() => scrollToSection('landingAbout')} className='font-jaldi' title="O nas">
                O NAS
              </a>
            </li>
            <li>
              <a onClick={() => scrollToSection('aktualnosci')} className='font-jaldi' title="Aktualności">
              AKTUALNOŚCI
              </a>
            </li>
                   
            <li>
              <a onClick={() => scrollToSection('galeria')} className='font-jaldi' title="Galeria">
                GALERIA
              </a>
            </li>
                        </ul>
                    </div>
                    <div className="flex items-end relative">
                    <ul className=" navigation font-jaldi mx-9 gap-16 flex">
                    <li>
              <a onClick={() => scrollToSection('regaty')} className='font-jaldi 'title="Regaty">
                REGATY
              </a>
            </li>
            <li>
            <a onClick={() => scrollToSection('kontakt')} className='font-jaldi' title="Kontakt">
                KONTAKT
              </a>
            </li>
                        
                        </ul>
                        
                        <ul className="menu">
  <li>
    <a href="#" className='font-jaldi'>DOKUMENTY</a>
    
    <ul>
    <li><a href="../../documents/regulamin.docx" target="_blank" rel="noopener noreferrer" download>Regulamin regat</a></li>
              <li><a href="../../documents/info.docx" target="_blank" rel="noopener noreferrer" download>Informacje dla kapitanów 2</a></li>
              <li><a href="../../documents/zgloszenie.doc" target="_blank" rel="noopener noreferrer" download>Zgłoszenie do regat</a></li>
              <li><a href="../../documents/STATUT.docx"target="_blank" rel="noopener noreferrer" download>Statut</a></li>
              <li><a href="../../documents/Deklaracja.docx"target="_blank" rel="noopener noreferrer" download>Deklaracja członkostwa</a></li>
              <li><a href="../../documents/Decyzja.jpg"target="_blank" rel="noopener noreferrer" download>Decyzja</a></li>
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

