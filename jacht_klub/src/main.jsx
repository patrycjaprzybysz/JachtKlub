import React from 'react';
import ReactDOM from 'react-dom/client';
import BackgroundLanding from './react_elements/BackgroundLanding';
import './styles/index.css';
import Article from './react_elements/Article';
import News from './react_elements/News';
import NewsPage from './react_elements/NewsPage';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BackgroundLanding />
        {/* <NewsPage newsArray={[{}, {}, {}]} /> */}
    </React.StrictMode>
);
