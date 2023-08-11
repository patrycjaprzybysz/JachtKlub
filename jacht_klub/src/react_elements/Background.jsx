import Header from './Header';
import News from './News';

export default function Background() {
    return (
        <>
            <div className="w-full h-screen bg-background bg-cover bg-center relative">
                <Header />
                <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 font-josefinsans text-5xl text-text font-bold">
                    Jacht Klub Królewskiego Miasta Darłowo
                </h1>
            </div>
            <News reverse={0} />
        </>
    );
}
