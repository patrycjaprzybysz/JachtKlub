import WeatherWidget from './WeatherWidget';
import '../styles/header.css';
export default function Header() {
    return (
        <>
            <header className="Header">
                <WeatherWidget />
                <div className="">
                    <nav className="nav-flex">
                        <ul className="nav_list">
                            <li className="nav_item">Aktualności</li>
                            <li className="nav_item">Galeria</li>
                            <li className="nav_item">Regaty</li>
                        </ul>
                        <div className="divider"></div>
                        <ul className="nav_list">
                            <li className="nav_item">O nas</li>
                            <li className="nav_item">Kontakt</li>
                            <li className="nav_item">Dokumenty</li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}
