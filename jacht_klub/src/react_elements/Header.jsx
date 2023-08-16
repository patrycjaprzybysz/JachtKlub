export default function Header() {
    return (
        <>
            <div className="bg-blue_background/40 flex justify-between sticky w-full z-10">
                <img src="src/assets/media/logo.png" alt="" className="bg-text rounded-full p-1 mx-6 my-2 w-24" />
                <nav className="self-end mx-20 my-6">
                    <ul className="flex gap-20">
                        <li>Aktualności</li>
                        <li>Galeria</li>
                        <li>Regaty</li>
                        <li>O nas</li>
                        <li>Kontakt</li>
                        <li>Dokumenty</li>
                    </ul>
                </nav>
            </div>
        </>
    );
}
