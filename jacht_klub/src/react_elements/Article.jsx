export default function Article({
    photo = 'src/assets/media/plakat.png',
    title = 'Rejs dookoła Bałtyku',
    date = 'Poniedziałek, 8 Sierpnia 2022',
    text = 'Opisanie całego rejsu dookoła Bałtyku, jaki w te wakacje odbył SY Sekstant, a zorganizował Jacht Klub Królewskiego Miasta Darłowo nie jest łatwe. Niełatwe, bo rejs trwał ponad półtora miesiąca, załogi wymieniały się sześć razy, było pięciu kapitanów i trzydziestu jeden uczestników. Cała historia rozpoczęła się kilka lat temu, kiedy w mojej głowie zrodził się pomysł, że skoro byliśmy już w różnych portach i w różnych krajach i opływaliśmy różne wyspy, to czas byłoby opłynąć nasz Bałtyk. Bo wbrew opiniom, że Bałtyk to kapryśne i trudne morze, my je bardzo lubimy. Dwa lata zajęły nam prace nad przygotowaniem jachtu, który wynajęliśmy z Zespołu Szkół Morskich w Darłowie. Kapitanowie i członkowie załóg również się przygotowywali, pływając na różne rejsy, zarówno na Bałtyku, jak i na ciepłych morzach i biorąc udział w regatach. W końcu nadszedł dzień, kiedy wszystko zostało zapięte na ostatni guzik i pierwsza załoga złożona z uczniów Zespołu Szkół Morskich pod dowództwem Zenona Lesnera i z pomocą Grzegorza i Karola wyruszyła w pierwszy etap. Dla młodych ludzi była to pierwsza taka przygoda w życiu. Emocje były różne- od strachu, przez zadowolenie aż do zachwytu. Popłynęli oni z Darłowa przez Ustkę, Władysławowo do Helu. Tutaj pod słynnym helskim „jajem”, czyli Bosmanatem portu, dokonano zmiany załóg.',
}) {
    return (
        <>
            <div className="flex flex-col justify-center items-center m-20">
                <div className={`bg-[url('${photo}')] bg-center bg-opacity-0 h-[40rem] flex justify-center`}>
                    <div className="backdrop-blur-2xl w-full flex justify-center">
                        <img src={photo} alt="" className="h-full" />
                    </div>
                </div>
                <h2 className="font-jaldi text-text text-6xl font-bold my-6">{title}</h2>
                <div className="w-full flex flex-col gap-3">
                    <p className="font-jaldi text-grey2 font-bold text-xl">{date}</p>
                    <p className="font-jaldi text-black text-lg">{text}</p>
                </div>
            </div>
        </>
    );
}
