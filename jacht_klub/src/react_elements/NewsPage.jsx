import Header from './Header';
import News from './News';

export default function NewsPage({newsArray}) {
    console.log(newsArray);
    return (
        <>
            <Header />
            <div className="bg-grey flex flex-col gap-20">
                {newsArray.map(article => {
                    return <News photo={article.photo} title={article.title} text={article.text} />;
                })}
            </div>
        </>
    );
}
