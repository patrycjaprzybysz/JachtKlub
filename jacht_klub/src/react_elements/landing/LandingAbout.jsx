import React from 'react';
import czymsie from "../../assets/media/czymsie.jpg";
import kim from "../../assets/media/kim jestesmy2.jpeg";

export default function LandingAbout() {
    return (
        <>
            <div className="bg-grey w-full h-150 flex flex-col justify-between">
            <div className="flex justify-center items-center">
            <span style={{ borderBottom: "2px solid #E5CE00", flex: "1", margin: "20px 40px", marginTop:"40px" }}></span>
                    <h1 className="text-yellow text-center text-4xl font-bold mt-5">O NAS</h1>
                    <span style={{ borderBottom: "2px solid #E5CE00", flex: "1", margin: "20px 40px", marginTop:"40px" }}></span>
                </div>
                <div className="flex justify-between p-8">
                    
                    <div className="flex-1 text-left">
                        <h3 className="font-josefinsans text-text text-3xl font-bold ml-20 mt-4">Kim jesteśmy?</h3>
                        <p className="mt-7 ml-20 text-justify">
    Jacht Klub Królewskiego Miasta Darłowo To grupa przyjaciół,<br/>
    pasjonatów żeglarstwa, motorowodniaków  i podróżników. <br/>
    Jesteśmy grupą ludzi, którzy wierzą, że dzieląc się pasją <br/>
    można dawać
    radość, integrować społeczeństwo, <br/>
    eksplorować świat.
    Tak się złożyło, że wszystkich nas <br/>
    połączyła woda, wiatr i słońce.
</p>
                    </div>
                    <div className="flex-1 text-left">
                        <p className="mt-20 ml-28 text-justify">
                            Jacht Klub zawiązał się w oparciu o spotkanie założycielskie <br/>
                            w 2020r. z inicjatywy kilkorga znajomych parających <br/>
                            się w życiu najprzeróżniejszymi aktywnościami. <br/>
                            JKKMD posiada osobowość prawną.
                            Pragniemy aby nasz <br/>
                            Jacht Klubu przynosił chlubę naszemu regionowi.
                        </p>
                    </div>
                </div>
                <div className="flex justify-between">
                <img src={kim} alt="Jacht Klub" style={{ width: "450px", height: "500px" }} />
                <div style={{ width: "2px" }} />
                    <img src={czymsie} alt="Jacht Klub" style={{ width: "800px", height: "500px" }} />
                    
                </div>
                <div className="flex justify-between p-8">
                    <div className="flex-1 text-left">
                        <h3 className="font-josefinsans text-text text-3xl font-bold ml-20 mt-4">Czym się zajmujemy?</h3>
                        <p className="mt-7 ml-20 text-justify">
                        ​Naszym priorytetem jest uprawianie i rozwój sportów wodnych we wszelkich jego formach. Organizujemy rejsy w ramach turystyki wodnej, integrujemy społeczność żeglarską, motorowodną oraz popularyzujemy idę jachtingu i żeglarstwa jako formy racjonalnego i kulturalnego wypoczynku i rekreacji. Skupiamy sie na podnoszeniu poziomu umiejętności żeglarskich przez członków Klubu, krzewieniu wiedzy żeglarskiej wśród osób zainteresowanych uprawianiem żeglarstwa i innych sportów wodnych. Aktywnie uczestniczymy w ochronie przyrody, a zwłaszcza naturalnego środowiska wodnego.
</p>
                    </div>
                    <div className="flex-1 text-left">
                        <p className="mt-20 ml-20 text-justify">
                        Ważnym elementem naszej działalności jest organizowanie i przeprowadzanie sportowych regat żeglarskich w których uczestniczą inne kluby i organizacje żeglarskie, organizacje pożytku publicznego, żeglarze niezrzeszeni oraz uczniowie Zespołu Szkół Morskich w Darłowie. Współpraca z darłowskim ZSM jest ważnym elementem naszej działalności. Staramy taką politykę szkoleniową aby poprzez inicjowanie, organizowanie i przeprowadzanie teoretycznych i praktycznych kursów i szkoleń podnosić umiejętności żeglarskie i motorowodne członków Klubu zapewnić samodzielność kadrową Klubu.
                        </p>
                    </div>
                </div>

            </div>
        </>
    );
}
