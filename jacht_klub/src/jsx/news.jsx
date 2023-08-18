import React from 'react';
import ReactDOM from 'react-dom/client';
import NewsPage from '../react_elements/news/NewsPage';
import '../styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <NewsPage newsArray={[{}, {}, {}]} />
    </React.StrictMode>
);
