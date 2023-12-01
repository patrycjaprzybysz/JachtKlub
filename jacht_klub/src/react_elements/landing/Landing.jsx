import {useEffect} from 'react';
import HeaderLanding from './HeaderLanding';
import LandingNews from './LandingNews';
import LandingAbout from './LandingAbout';
import Crew from './Crew';
import Regaty from './Regaty';
import Galeria from './Galeria';
import Kontakt from './Kontakt';


export default function BackgroundLanding() {
    let header;
    let landingPhoto;
    let logo;
    let headerExpand = false;

    useEffect(() => {
        header = document.querySelector('header');
        landingPhoto = document.querySelector('.landingPhoto');
        logo = document.querySelector('.logo');

        // logic of header style change
        window.onscroll = () => {
            if (window.scrollY > landingPhoto.scrollHeight - header.offsetHeight) {
                logo.classList.add('h-24', 'top-0', 'translate-y-2');
                logo.classList.remove('-translate-y-12', 'h-36');
            } else {
                logo.classList.remove('h-24', 'top-0', 'translate-y-2');
                logo.classList.add('-translate-y-12', 'h-36');
            }
        };
    }, []);

    return (
        <>
        <HeaderLanding />
      <div className="landingPhoto w-full h-screen bg-background bg-cover bg-center relative mb-0 mt-0">
        <div className="landing-title absolute top-1/2 left-1/2 font-josefinsans text-text animate__animated animate__slideInLeft">
          <h1>Jacht Klub</h1>
          <h1>Królewskiego Miasta Darłowo</h1>
        </div>
      </div>
            <LandingAbout />
            <Crew/>
            <LandingNews />
            <Regaty/>
            <Galeria/>
            <Kontakt/>
            
            
            
            
        </>
    );
}
