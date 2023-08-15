export default function News(photo, title, text) {
    return (
        <>
            <div>
                <img src={photo} alt="" />
                <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <button>Czytaj więcej</button>
                </div>
            </div>
        </>
    );
}
