import QuickNews from './QuickNews';
import NavigationButton from '../general/NavigationButton'
export default function LandingNews() {

    return (
        <>
            
            <div id="aktualnosci" >
           
            <h1 className=" md:text-lg lg:text-3xl sm:text-base 2xl:text-6xl font-josefinsans text-text text-4xl font-bold ml-20 mt-10 relative">
  Aktualności
  
</h1>

                   
                
                <div className="bg-white flex flex-col justify-center gap-10">
                    <QuickNews reverse={1} />
                    <QuickNews reverse={0} />
                </div>
                <a href ='../../src/html/news.html' id="przejdzButton" className="text-text mt-2 ml-20  md:text-m lg:text-l sm:text-base 2xl:text-xl">przejdź do starszych artykułów</a>

                </div>
        </>
    );
}