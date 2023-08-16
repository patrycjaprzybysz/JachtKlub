import Header from './Header';
import NewsPage from './NewsPage';

export default function NavigationButton({name, reactComponentName}) {
    function navigate() {
        document.querySelector('#root').innerHTML = '';
        console.log('Ebe');
        return (
            <>
                <Header />
                <NewsPage newsArray={[{}, {}, {}]} />
            </>
        );
    }

    return (
        <>
            <li onClick={navigate} className="text-white text-xl">
                {name.toUpperCase()}
            </li>
        </>
    );
}
