import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import niebo from "../../assets/media/niebo.jpg";
import wideo from "../../assets/media/video.mp4";
import { isMobile } from 'react-device-detect';

export default function LandingAbout() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleCzym, setIsVisibleCzym] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const landingAbout = document.getElementById('landingAbout');
      const czymsieSection = document.getElementById('czymsie');
      const rect = landingAbout.getBoundingClientRect();
      const czymsieRect = czymsieSection.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      // Ustawiamy isVisible na true, gdy sekcja jest widoczna w oknie przeglądarki
      if(!isMobile){
      setIsVisible(rect.top <= windowHeight && rect.bottom >= 0);
      }else{
        setIsVisible(true)
      }
      if (!isMobile) {
        setIsVisibleCzym(czymsieRect.top <= windowHeight && czymsieRect.bottom >= 0);
      } else {
        setIsVisibleCzym(true); // Wstrzymaj animację na telefonach
      }

    };

    // Dodajmy nasłuchiwanie na zdarzenie scroll
    window.addEventListener('scroll', handleScroll);

    // Sprawdzamy, czy sekcja jest widoczna po załadowaniu strony
    handleScroll();

    // Warto również usunąć nasłuchiwanie zdarzeń po odmontowaniu komponentu
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div id="landingAbout" className="landing-about" style={{backgroundImage:`url(${niebo})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <Link to="landingAbout" smooth={true} offset={-50} duration={500} className={`scroll-link ${isVisible ? 'visible' : ''}`}>
          Scroll
        </Link>
        <div className={`w-full h-150 flex flex-col justify-between items-center `}>
          <div className="flex flex-col md:flex-row lg:flex-row">
            <div className="md:w-full lg:w-1/2 text-left md:mb-8 lg:mb-8">
            <h3 className={`text-3xl md:text-lg lg:text-3xl sm:text-base 2xl:text-5xl font-josefinsans text-text font-bold ml-10 mt-16 animated-section ${isVisible ? 'visible' : ''}`} >Kim jesteśmy?</h3>
              <p className={`md:text-lg lg:text-lg sm:text-base 2xl:text-3xl landingAbout mt-7 ml-10 mr-6 text-justify font-jaldi animated-section ${isVisible ? 'visible' : ''}`}>
                Jacht Klub Królewskiego Miasta Darłowo To grupa przyjaciół, pasjonatów żeglarstwa, motorowodniaków  i podróżników. Jesteśmy grupą ludzi, którzy wierzą, że dzieląc się pasją można dawać radość, integrować społeczeństwo, eksplorować świat. Tak się złożyło, że wszystkich nas połączyła woda, wiatr i słońce.
              </p>
            </div>
            <div className="md:w-full lg:w-1/2 text-left">
              <p className={`md:text-lg lg:text-lg sm:text-base 2xl:text-3xl mt-32 ml-10 mr-6 mb-5 text-justify font-jaldi animated-sectionright ${isVisible ? 'visible' : ''}`}>
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
          <div id="czymsie">
          <Link to="czymsieSection" smooth={true} offset={-50} duration={500} className={`scroll-link ${isVisibleCzym ? 'visible' : ''}`}>
          Scroll
        </Link>
          <div  className="flex flex-col md:flex-row lg:flex-row">
            <div className="md:w-full lg:w-1/2 text-left">
              <h3  className={`text-3xl md:text-lg lg:text-3xl sm:text-base 2xl:text-5xl font-josefinsans text-text font-bold ml-10 mt-16 animated-section ${isVisibleCzym ? 'visible' : ''}`}>Czym się zajmujemy?</h3>
              <p className={`md:text-lg lg:text-lg sm:text-base 2xl:text-3xl landingAbout mt-7 ml-10 mr-6 text-justify font-jaldi animated-section ${isVisibleCzym ? 'visible' : ''}`}>
                Naszym priorytetem jest uprawianie i rozwój sportów wodnych we wszelkich jego formach. Organizujemy rejsy w ramach turystyki wodnej, integrujemy społeczność żeglarską, motorowodną oraz popularyzujemy idę jachtingu i żeglarstwa jako formy racjonalnego i kulturalnego wypoczynku i rekreacji. Skupiamy się na podnoszeniu poziomu umiejętności żeglarskich przez członków Klubu, krzewieniu wiedzy żeglarskiej wśród osób zainteresowanych uprawianiem żeglarstwa i innych sportów wodnych. Aktywnie uczestniczymy w ochronie przyrody, a zwłaszcza naturalnego środowiska wodnego.
              </p>
            </div>
            <div className="md:w-full lg:w-1/2 text-left">
              <p className={`md:text-lg lg:text-lg sm:text-base 2xl:text-3xl mt-32 ml-10 mr-6 mb-5 text-justify font-jaldi animated-sectionright ${isVisibleCzym ? 'visible' : ''}`}>
                Ważnym elementem naszej działalności jest organizowanie i przeprowadzanie sportowych regat żeglarskich, w których uczestniczą inne kluby i organizacje żeglarskie, organizacje pożytku publicznego, żeglarze niezrzeszeni oraz uczniowie Zespołu Szkół Morskich w Darłowie. Współpraca z darłowskim ZSM jest ważnym elementem naszej działalności. Staramy się taką politykę szkoleniową, aby poprzez inicjowanie, organizowanie i przeprowadzanie teoretycznych i praktycznych kursów i szkoleń podnosić umiejętności żeglarskie i motorowodne członków Klubu.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
