import Header from '../general/Header';
import SecondHeader from '../landing/SecondHeader';
import News from './News';

export default function NewsPage({newsArray}) {
    return (
        <>
            <SecondHeader/>
            <div className="bg-grey flex flex-col gap-20 mt-32">
                {newsArray.map(article => {
                    return <News photo={article.photo} title={article.title} text={article.text} />;
                })}
            </div>
        </>
    );
}
