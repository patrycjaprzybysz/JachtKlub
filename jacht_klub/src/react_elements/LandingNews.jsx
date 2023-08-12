import News from './News';
export default function LandingNews() {
    return (
        <>
            <div className="">
                <h2 className="mx-14 font-jaldi text-3xl text-text font-bold">Aktualności</h2>
                <div className="flex flex-col justify-center gap-10">
                    <News reverse={0} />
                    <News reverse={1} />
                </div>
            </div>
        </>
    );
}
