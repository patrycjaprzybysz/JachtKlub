import QuickNews from './QuickNews';
export default function LandingNews() {
    return (
        <>
            
            <div className="flex justify-center items-center">
            <span style={{ borderBottom: "2px solid #E5CE00", flex: "1", margin: "20px 40px", marginTop:"40px" }}></span>
                    <h1 className="text-yellow text-center text-4xl font-bold mt-3">AKTUALNOŚCI</h1>
                    <span style={{ borderBottom: "2px solid #E5CE00", flex: "1", margin: "20px 40px", marginTop:"40px" }}></span>
                    
                </div>
                <div className="flex flex-col justify-center gap-10">
                    <QuickNews reverse={0} />
                    <QuickNews reverse={1} />
                </div>
                <div className="flex justify-center items-center">
                <span style={{ borderBottom: "1px solid #E5CE00", flex: "1", margin: "40px 10px", marginTop:"10px" }}></span>
                    <button className="text-yellow text-center text-xl font-bold ">archiwum aktualności</button>
                    <span style={{ borderBottom: "1px solid #E5CE00", flex: "1", margin: "40px 10px", marginTop:"10px" }}></span>
                    </div>
        </>
    );
}

//archiwum aktulanosci ma przenosic do strony z nimi wszystkimi tam gdzie teraz przenosi przycisk aktualnosci