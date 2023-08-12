import {useEffect} from 'react';
import Header from './Header';
import LandingNews from './LandingNews';

export default function Background() {
    let header = document.querySelector('header');
    let landingPhoto = document.querySelector('.landingPhoto');
    let headerExpand = false;

    useEffect(() => {
        header = document.querySelector('header');
        landingPhoto = document.querySelector('.landingPhoto');

        // logic of header style change
        window.onscroll = () => {
            console.log(window.scrollY);
            if (window.scrollY > landingPhoto.scrollHeight - header.offsetHeight) {
                //Przejscie headera jest troche problematyczne, moze udaloby sie zeby zmniejszac jego przezroczystoc im nizej zdjecia jest zeby nie trzeba bylo sie martwic przeskokiem ze zdjecia na newsy
                header.classList.add();
                header.querySelector('nav').classList.add('h-36');
                if (!headerExpand) {
                    window.scroll({left: 0, top: landingPhoto.scrollHeight - header.offsetHeight + 0.5, behavior: 'smooth'});
                    headerExpand = true;
                }
            } else {
                header.classList.remove();
                header.querySelector('nav').classList.remove('h-36');
                if (headerExpand) {
                    window.scroll({left: 0, top: landingPhoto.scrollHeight - header.offsetHeight, behavior: 'smooth'});
                    headerExpand = false;
                }
            }
        };
    }, []);

    return (
        <>
            <Header />
            <div className="landingPhoto w-full h-screen bg-background bg-cover bg-center relative">
                <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 font-josefinsans text-5xl text-text font-bold">
                    Jacht Klub Królewskiego Miasta Darłowo
                </h1>
            </div>
            <LandingNews />
        </>
    );
}
