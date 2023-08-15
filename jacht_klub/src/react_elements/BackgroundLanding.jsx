import {useEffect} from 'react';
import HeaderLanding from './HeaderLanding';
import LandingNews from './LandingNews';
import LandingAbout from './LandingAbout';
import Crew from './Crew';

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
            <div className="landingPhoto w-full h-screen bg-background bg-cover bg-center relative">
                <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 font-josefinsans text-5xl text-text font-bold">
                    Jacht Klub Królewskiego Miasta Darłowo
                </h1>
            </div>
            <LandingNews />
            <LandingAbout />
        </>
    );
}
