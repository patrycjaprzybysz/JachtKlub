export default function (photo, name, role) {
    return (
        <>
            <div className="flex flex-row justify-center items-center">
                <img src={photo} alt="" className="rounded-full" />
                <h4>{name}</h4>
                <p>{role}</p>
            </div>
        </>
    );
}
