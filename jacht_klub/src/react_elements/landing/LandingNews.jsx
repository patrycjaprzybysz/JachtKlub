import QuickNews from './QuickNews';
import NavigationButton from '../general/NavigationButton'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; 
export default function LandingNews() {

    return (
        <>
            
            <div id="aktualnosci"  >
           <h1 id ="aktualnosci" className='mt-1 mb-20 text-4xl text-white'>.</h1>
            <h1 className=" text-3xl md:text-lg lg:text-3xl sm:text-base 2xl:text-5xl font-josefinsans text-text font-bold ml-10 mt-20 ">
  Aktualności
  
</h1>

                   
                
                <div className="bg-white flex flex-col justify-center gap-10">
                    <QuickNews reverse={1} />
                    <QuickNews reverse={0} />
                </div>
                <div className="flex items-center ml-20 hover:scale-105 transition-transform">
                  
          <a
            href="../../src/html/news.html"
            id="przejdzButton"
            className="text-text mt-2 ml-2 md:text-m lg:text-l sm:text-base 2xl:text-xl font-jaldi font-bold "
          >
            przejdź do starszych artykułów
          </a>
          <FaArrowRight className="ml-1 mt-2 text-text " />
          </div>

                </div>
        </>
    );
}