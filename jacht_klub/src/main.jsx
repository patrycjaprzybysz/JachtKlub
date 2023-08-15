import React from 'react';
import ReactDOM from 'react-dom/client';
import BackgroundLanding from './react_elements/BackgroundLanding';
import './styles/index.css';
import Article from './react_elements/Article';
import News from './react_elements/News';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BackgroundLanding />
    </React.StrictMode>
);
