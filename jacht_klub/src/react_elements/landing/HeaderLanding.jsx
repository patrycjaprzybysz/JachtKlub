import React, { useState } from 'react';

import WeatherWidget from './WeatherWidget';
import NavigationButton from '../general/NavigationButton';
import Dropdown from 'react-dropdown-select'; 

export default function HeaderLanding() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleMouseEnter = () => {
        setDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setDropdownOpen(false);
    };

    const options = [
        { value: 'document1', label: 'Document 1', link: '../../assets/media/Lab1_Git.pdf' },
        { value: 'document2', label: 'Document 2', link: '../../assets/media/Lab1_Git.pdf' },
        // Dodaj więcej dokumentów według potrzeb
    ];

    const handleChange = (selectedOptions) => {
        const selectedOption = selectedOptions[0];
        if (selectedOption) {
            window.open(selectedOption.link, '_blank');
        }
    };

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
                        
                        <Dropdown
    options={options}
    onChange={handleChange}
    placeholder="DOKUMENTY"
    dropdownHandle={true}
    style={{ width: '150px', zIndex: isDropdownOpen ? 1000 : 1, border: 'none' }}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    className={`dropdown_menu dropdown_menu-1 ${isDropdownOpen ? 'dropdown_menu--animated' : ''}`}
>
  {/* Dodaj elementy dropdown_menu-1 tutaj */}
  <li className="dropdown_item-1">Item 1</li>
  <li className="dropdown_item-2">Item 2</li>
  <li className="dropdown_item-3">Item 3</li>
  <li className="dropdown_item-4">Item 4</li>
  <li className="dropdown_item-5">Item 5</li>
</Dropdown>

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