import WeatherWidget from './WeatherWidget';
import NavigationButton from '../general/NavigationButton';
export default function HeaderLanding() {
    return (
        <>
            <header className="bg-blue_header/70 w-screen box-border fixed z-10">
                <WeatherWidget />
                <img className="logo absolute left-1/2 -translate-x-1/2 -translate-y-12 h-36 bg-text rounded-full p-2" src="src/assets/media/logo.png"></img>
                <nav className="flex justify-around">
                    <div className="flex items-end">
                        <ul className="font-jaldi mx-9 gap-16 flex  ">
                        <li className="text-white text-xl">O NAS</li>
                            <NavigationButton name={'aktualności'} htmlPageName={'news'} />
                            <li className="text-white text-xl">REGATY</li>
                             
                        
                        </ul>
                    </div>
                    <div className="flex items-end">
                        <ul className="font-jaldi mx-9 gap-16 flex">
                        <li className="text-white text-xl">GALERIA</li>
                            <li className="text-white text-xl">KONTKAT</li>
                            <li className="text-white text-xl">DOKUMENTY</li>
                        </ul>
                    </div>
                </nav>
                <script src="../js/logic.js"></script>
            </header>
        </>
    );
}
