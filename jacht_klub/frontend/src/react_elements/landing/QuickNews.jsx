import Header from '../general/Header';
import Article from '../news/Article';

export default function QuickNews({index, title, description, photo = '/src/assets/media/background.webp', reverse}) {
    return (
        <>
            <div className="px-10 flex justify-center items-center">
                <div className="flex justify-around py-12">
                    <div className={reverse == 0 ? 'flex flex-col md:flex-row mx-10 gap-20' : 'flex flex-col md:flex-row mx-10 gap-20 flex-row-reverse'}>
                        <div className="md:w-1/2">
                            <img src={photo} alt="" className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-full 2xl:w-full shadow-left md:shadow-right" />
                        </div>
                        <div className="flex flex-col justify-evenly items-start md:w-1/2">
                            <h3 className="md:text-l lg:text-2xl sm:text-base 2xl:text-5xl font-jaldi text-text font-bold text-2xl mb-5">{title}</h3>
                            <p className="md:text-lg lg:text-lg sm:text-base 2xl:text-4xl font-jaldi w-full text-lg whitespace-normal mb-8 ">{description}</p>
                            <a
                                href={`../../src/html/article.html?id=${index}`}
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
