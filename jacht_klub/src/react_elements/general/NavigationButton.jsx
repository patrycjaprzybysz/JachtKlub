import Header from './Header';
import NewsPage from '../news/NewsPage';

export default function NavigationButton({name, htmlPageName}) {
    return (
        <>
            <li className="text-white text-xl">
                <a href={'../../src/html/' + htmlPageName + '.html'}>{name.toUpperCase()}</a>
            </li>
        </>
    );
}
