import NavigationButton from '../general/NavigationButton';

export default function Header() {
    return (
        <>
            <div className="bg-blue_background/50 flex justify-between sticky w-full z-10">
                <a href="../../index.html">
                    <img src="../../src/assets/media/logo.png" alt="Logo Jacht Klubu" className="bg-text rounded-full p-1 mx-6 my-2 w-24" />
                </a>
                <nav className="self-end mx-20 my-6">
                    <ul className="flex gap-20">
                        {/* <NavigationButton name={'aktualności'} htmlPageName={'news'} /> */}
                        <li>O nas</li>
                        <li>Aktualności</li>
                        <li>Regaty</li>
                        <li>Galeria</li>
                        <li>Kontakt</li>
                        <li>Dokumenty</li>
                    </ul>
                </nav>
            </div>
        </>
    );
}
