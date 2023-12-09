import Header from '../general/Header';
import Article from '../news/Article';

export default function QuickNews({ title, description, photo = '/src/assets/media/background.webp', reverse }) {
  function GoToArticle() {
    document.querySelector('.root').innerHTML = '';
    return (
      <>
        <Header />
        <Article title={title} text={text} />
      </>
    );
  }

  return (
    <>
      <div className="px-10 flex justify-center items-center">
        <div className="flex justify-around py-12">
          <div className={reverse == 0 ? 'flex flex-col md:flex-row mx-10 gap-20' : 'flex flex-col md:flex-row mx-10 gap-20 flex-row-reverse'}>
            <div className="md:w-1/2">
              <img src={photo} alt="" className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-full 2xl:w-full shadow-left md:shadow-right" />
            </div>
            <div className="flex flex-col justify-evenly items-start md:w-1/2">
              <h3 className="md:text-l lg:text-2xl sm:text-base 2xl:text-5xl font-jaldi text-text font-bold text-2xl mb-5">Rejs dookoła Bałtyku</h3>
              <p className="md:text-lg lg:text-lg sm:text-base 2xl:text-4xl font-jaldi w-full text-lg whitespace-normal mb-8 ">
                Opisanie całego rejsu dookoła Bałtyku, jaki w te wakacje odbył SY Sekstant, a zorganizował Jacht Klub Królewskiego Miasta Darłowo nie jest łatwe. Niełatwe, bo rejs trwał ponad półtora miesiąca, załogi wymieniały się sześć razy, było pięciu kapitanów i trzydziestu jeden uczestników. Cała historia rozpoczęła się kilka lat temu, kiedy w mojej głowie zrodził się pomysł, ...
              </p>
              <a
            href="../../src/html/article.html"
            className="font-jaldi text-white bg-text rounded-r-lg rounded-l-lg w-32 text-center lg:text-lg xl:text-xl 2xl:text-2xl hover:bg-opacity-80 transition-all"
          >
            Czytaj dalej
          </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
