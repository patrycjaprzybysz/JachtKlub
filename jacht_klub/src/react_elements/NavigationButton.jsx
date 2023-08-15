import Header from './Header';
//import NewsPage from './NewsPage';

export default function NavigationButton(name, reactElementName) {
    function navigate() {
        document.querySelector('#root').innerHTML = '';
        <Header />;
    }

    return (
        <>
            <li onClick={() => navigate} className="text-white text-xl">
                {name.toUpperCase()}
            </li>
        </>
    );
}
