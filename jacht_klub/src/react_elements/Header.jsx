import WeatherWidget from './WeatherWidget';
export default function Header() {
    return (
        <>
            <header className="bg-blue_header/40 w-screen box-border fixed z-10">
                <WeatherWidget />
                <img className="absolute left-1/2 -translate-x-1/2 -translate-y-12 h-36 bg-text rounded-full p-2" src="src/assets/media/logo.png"></img>
                <nav className="flex justify-around">
                    <div className="flex items-end">
                        <ul className="font-jaldi mx-9 gap-16 flex ">
                            <li className="text-white text-xl">Aktualności</li>
                            <li className="text-white text-xl">Galeria</li>
                            <li className="text-white text-xl">Regaty</li>
                        </ul>
                    </div>
                    <div className="flex items-end">
                        <ul className="font-jaldi mx-9 gap-16 flex">
                            <li className="text-white text-xl">O nas</li>
                            <li className="text-white text-xl">Kontakt</li>
                            <li className="text-white text-xl">Dokumenty</li>
                        </ul>
                    </div>
                </nav>
                <script src="../js/logic.js"></script>
            </header>
        </>
    );
}
