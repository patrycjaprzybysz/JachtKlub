import React from 'react';
import czymsie from "../../assets/media/czymsie.jpg";
import kim from "../../assets/media/kim jestesmy2.jpeg";
import niebo from "../../assets/media/niebo.jpg";
import wideo from "../../assets/media/video.mp4";

export default function LandingAbout() {
  return (
    <>
      <div id="landingAbout" style={{backgroundImage:`url(${niebo})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="w-full h-150 flex flex-col justify-between items-center">
          <div className="flex flex-col md:flex-row lg:flex-row">
            <div className="md:w-full lg:w-1/2 text-left md:mb-8 lg:mb-8">
            <h3 className="text-3xl md:text-lg lg:text-3xl sm:text-base 2xl:text-5xl font-josefinsans text-text font-bold ml-10 mt-16">Kim jesteśmy?</h3>
              <p className="md:text-lg lg:text-lg sm:text-base 2xl:text-3xl landingAbout mt-7 ml-10 mr-6 text-justify font-jaldi">
                Jacht Klub Królewskiego Miasta Darłowo To grupa przyjaciół, pasjonatów żeglarstwa, motorowodniaków  i podróżników. Jesteśmy grupą ludzi, którzy wierzą, że dzieląc się pasją można dawać radość, integrować społeczeństwo, eksplorować świat. Tak się złożyło, że wszystkich nas połączyła woda, wiatr i słońce.
              </p>
            </div>
            <div className="md:w-full lg:w-1/2 text-left">
              <p className="md:text-lg lg:text-lg sm:text-base 2xl:text-3xl mt-32 ml-10 mr-6 mb-5 text-justify font-jaldi">
                Jacht Klub zawiązał się w oparciu o spotkanie założycielskie w 2020r. z inicjatywy kilkorga znajomych parających się w życiu najprzeróżniejszymi aktywnościami. JKKMD posiada osobowość prawną. Pragniemy aby nasz Jacht Klubu przynosił chlubę naszemu regionowi.
              </p>
            </div>
          </div>

          <div className="w-full">
            <video
              autoPlay
              muted
              loop
              className="w-full"
              src={wideo}
              type="video/mp4"
            />
          </div>

          <div className="flex flex-col md:flex-row lg:flex-row">
            <div className="md:w-full lg:w-1/2 text-left">
              <h3 className="text-3xl md:text-lg lg:text-3xl sm:text-base 2xl:text-5xl font-josefinsans text-text font-bold ml-10 mt-16">Czym się zajmujemy?</h3>
              <p className="md:text-lg lg:text-lg sm:text-base 2xl:text-3xl landingAbout mt-7 ml-10 mr-6 text-justify font-jaldi">
                Naszym priorytetem jest uprawianie i rozwój sportów wodnych we wszelkich jego formach. Organizujemy rejsy w ramach turystyki wodnej, integrujemy społeczność żeglarską, motorowodną oraz popularyzujemy idę jachtingu i żeglarstwa jako formy racjonalnego i kulturalnego wypoczynku i rekreacji. Skupiamy się na podnoszeniu poziomu umiejętności żeglarskich przez członków Klubu, krzewieniu wiedzy żeglarskiej wśród osób zainteresowanych uprawianiem żeglarstwa i innych sportów wodnych. Aktywnie uczestniczymy w ochronie przyrody, a zwłaszcza naturalnego środowiska wodnego.
              </p>
            </div>
            <div className="md:w-full lg:w-1/2 text-left">
              <p className="md:text-lg lg:text-lg sm:text-base 2xl:text-3xl mt-32 ml-10 mr-6 mb-5 text-justify font-jaldi">
                Ważnym elementem naszej działalności jest organizowanie i przeprowadzanie sportowych regat żeglarskich, w których uczestniczą inne kluby i organizacje żeglarskie, organizacje pożytku publicznego, żeglarze niezrzeszeni oraz uczniowie Zespołu Szkół Morskich w Darłowie. Współpraca z darłowskim ZSM jest ważnym elementem naszej działalności. Staramy się taką politykę szkoleniową, aby poprzez inicjowanie, organizowanie i przeprowadzanie teoretycznych i praktycznych kursów i szkoleń podnosić umiejętności żeglarskie i motorowodne członków Klubu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
