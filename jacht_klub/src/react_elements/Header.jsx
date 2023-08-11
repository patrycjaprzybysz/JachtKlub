import WeatherWidget from './WeatherWidget';
export default function Header() {
    Onmount;

    return (
        <>
            <header className="header bg-blue_header/40 w-screen box-border fixed z-10">
                <WeatherWidget />
                {/* <div className=" w-2/12 h-full bg-logo bg-text bg-contain bg-no-repeat bg-center absolute top-1/2 left-1/2 -translate-x-1/2"></div> */}
                <img className="absolute top-1/2 left-1/2 -translate-x-1/2 h-36 bg-text rounded-full p-2" src="src/assets/media/logo.png"></img>
                <div className="flex justify-around">
                    <div className="">
                        <ul className="font-jaldi mx-9 gap-16 flex ">
                            <li className="text-white text-xl">Aktualności</li>
                            <li className="text-white text-xl">Galeria</li>
                            <li className="text-white text-xl">Regaty</li>
                        </ul>
                    </div>
                    <div className="">
                        <ul className="font-jaldi mx-9 gap-16 flex">
                            <li className="text-white text-xl">O nas</li>
                            <li className="text-white text-xl">Kontakt</li>
                            <li className="text-white text-xl">Dokumenty</li>
                        </ul>
                    </div>
                </div>
                <script src="../js/logic.js"></script>
            </header>
        </>
    );
}
