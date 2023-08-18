import Header from '../general/Header';
import Article from '../news/Article';

export default function QuickNews({title, description, photo = '/src/assets/media/background.webp', reverse}) {
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
                    <div className={reverse == 0 ? 'flex mx-10 gap-20' : 'flex mx-10 gap-20 flex-row-reverse'}>
                        <img src={photo} alt="" className={reverse == 0 ? 'w-1/2 shadow-left' : 'w-1/2 shadow-right'} />
                        <div className="flex flex-col justify-evenly items-start">
                            <h3 className="font-jaldi text-text text-3xl font-bold">Rejs dookoła Bałtyku</h3>
                            <p className="font-jaldi w-9/10 text-lg whitespace-normal">
                                Opisanie całego rejsu dookoła Bałtyku, jaki w te wakacje odbył SY Sekstant, a zorganizował Jacht Klub Królewskiego Miasta
                                Darłowo nie jest łatwe. Niełatwe, bo rejs trwał ponad półtora miesiąca, załogi wymieniały się sześć razy, było pięciu kapitanów
                                i trzydziestu jeden uczestników. Cała historia rozpoczęła się kilka lat temu, kiedy w mojej głowie zrodził się pomysł, ...
                            </p>
                            <button className="font-jaldi text-white bg-text text-lg rounded-r-lg rounded-l-lg w-32 ">Czytaj dalej</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
