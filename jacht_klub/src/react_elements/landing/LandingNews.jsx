import QuickNews from './QuickNews';
export default function LandingNews() {
    return (
        <>
            <div className="my-16">
                <h2 className="mx-14 font-jaldi text-3xl text-text font-bold">Aktualności</h2>
                <div className="flex flex-col justify-center gap-10">
                    <QuickNews reverse={0} />
                    <QuickNews reverse={1} />
                </div>
            </div>
        </>
    );
}
