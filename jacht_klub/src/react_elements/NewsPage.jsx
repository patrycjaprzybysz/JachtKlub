import Header from './Header';
import News from './News';

export default function NewsPage({newsArray}) {
    return (
        <>
            <Header />
            <div className="bg-grey2">
                {newsArray.map(article => {
                    return <News />;
                })}
            </div>
        </>
    );
}
