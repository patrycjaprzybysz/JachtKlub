import {useEffect} from 'react';
import Header from './Header';
import News from './News';

export default function Background() {
    // logic of header style change
    useEffect(() => {
        const header = document.querySelector('header');
        const topSection = document.querySelector('.topSection');
        const headerScrolled = 'h-36';

        window.onscroll = () => {
            console.log(window.scrollY);
            if (window.scrollY >= topSection.scrollHeight - header.offsetHeight) {
                header.querySelector('nav').classList.add(headerScrolled);
                //
            } else {
                header.querySelector('nav').classList.remove(headerScrolled);
            }
        };
    }, []);

    return (
        <>
            <Header />
            <div className="topSection w-full h-screen bg-background bg-cover bg-center relative">
                <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 font-josefinsans text-5xl text-text font-bold">
                    Jacht Klub Królewskiego Miasta Darłowo
                </h1>
            </div>
            <News reverse={0} />
        </>
    );
}
