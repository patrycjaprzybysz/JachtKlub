// NewsPage.js
import React, {useState, useEffect} from 'react';
import Header from '../general/Header';
import News from './News';

export default function NewsPage() {
    const [newsArray, setNewsArray] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/backend/articles')
            .then(response => response.json())
            .then(data => {
                setNewsArray(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                // Handle errors appropriately
            });
    }, []);

    return (
        <>
            <Header />
            <div className="bg-grey flex flex-col gap-20 mt-32">
                {newsArray.map(article => (
                    <News index={article.id} photo={`../../${article.photo}`} title={article.title} text={article.content.slice(0, 512)} />
                ))}
            </div>
        </>
    );
}
