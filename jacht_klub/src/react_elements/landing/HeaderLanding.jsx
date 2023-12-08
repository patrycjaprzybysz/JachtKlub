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
            <header className="bg-blue_header/70 w-screen box-border fixed z-10">
                <WeatherWidget />
                <img className="logo absolute left-1/2 -translate-x-1/2 -translate-y-12 h-36 bg-text rounded-full p-2" src="src/assets/media/logo.png"></img>
                <nav className="flex justify-around">
                    <div className="flex items-end">
                        <ul className="font-jaldi mx-9 gap-16 flex">
                        <li className="text-white text-xl" onClick={() => scrollToSection('landingAbout')}>O NAS</li>
                    <li className="text-white text-xl" onClick={() => scrollToSection('aktualnosci')}>AKTUALNOŚCI</li>
                   
                    <li className="text-white text-xl" onClick={() => scrollToSection('galeria')}>GALERIA</li>
                        </ul>
                    </div>
                    <div className="flex items-end relative">
                    <ul className="font-jaldi mx-9 gap-16 flex">
                    <li className="text-white text-xl" onClick={() => scrollToSection('regaty')}>REGATY</li>
                            <li className="text-white text-xl" onClick={() => scrollToSection('kontakt')}>KONTAKT</li>
                        
                        </ul>
                        
                        <ul className="menu">
  <li>
    <a href="#">DOKUMENTY</a>
    
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

// dokumenty jeszcze nie działa chce zeby ładniej sie rozwijaly i zeby napis był normalny i zeby odnosiło mnie do nich bo teraz jest zła sciezka :))))
//scrollowanie działa ale musze zrobic zeby było bardziej smooth i zeby było dokąłdniejsze bo teraz w miejcach w ktoych nie chce sie przewija i dodac zmiane kursora
//ddoac tez zeby sie podkreslało jak przewijam 
//zmienic styl header zeby tylko na pocztaku była pogoda a jak sie scrolluje zeby pomniejszał sie bardzo i było widac tylko napisy i malutkie logo 


//ogolnie dodac responsywnosc zeby na tel dobrze wyglądało i zmienic koniecznie czciocnki i nagłówki ładniejsze bo te to zart ddoac tez animacje do pojawiajacych sie tekstów i zdjec 