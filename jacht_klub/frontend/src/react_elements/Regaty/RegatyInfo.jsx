import React, {useState} from 'react';
import Header from '../general/Header';
import InputComponent from './Input';
import jezioro from '../../assets/media/bukowo.webp';

export default function RegatyInfo() {
    const [wyslano, setWyslano] = useState(false);
    const [formData, setFormData] = useState({
        nazwa: '',
        typ: '',
        oznaczenie: '',
        dlugosc: '',
        sternik: '',
        stopien: '',
        rok: '',
        adres: '',
        nr: '',
        klub: '',
        zaloga: '',
    });

    const handleInputChange = e => {
        const {id, value} = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleWyslij = async e => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/backend/crew', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            console.log('Server response:', response);

            // ... rest of your code
        } catch (error) {
            console.error('Error sending POST request:', error);
        }
    };

    return (
        <form>
            <Header />
            <div
                className="flex flex-col md:flex-row lg:flex-row"
                style={{
                    backgroundImage: `url(${jezioro})`,
                    backgroundSize: 'cover',
                    height: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        margin: 'auto',
                        marginTop: '3%',
                        marginBottom: '3%',
                    }}
                >
                    <div
                        style={{
                            width: '600px',
                            height: '1310px',
                            background: 'white',
                            border: '10px solid transparent',
                            backgroundClip: 'padding-box',
                            borderImage: `linear-gradient(to bottom, #30415D, #566B8C) 1`,
                            boxShadow: '0 4px 4px rgba(0, 0, 0, 0.1)',
                            position: 'relative',
                            zIndex: 1,
                            marginTop: '5%',
                        }}
                    >
                        <div>
                            <h1 style={{textAlign: 'center', color: '#E5CE00', fontSize: '36px', marginTop: '5%', fontFamily: 'jaldi'}}>Regaty 2024</h1>
                            <h2 style={{textAlign: 'center', fontSize: '14px', color: 'grey', fontFamily: 'jaldi'}}>
                                Wypełnij poniższy formularz, aby zapisać
                                <br />
                                swoją załogę do uczestnictwa w regatach 2024
                            </h2>
                            <div className="items-center"></div>
                            <div style={{marginLeft: '10%', marginRight: '10%', marginTop: '8%'}}>
                                <div
                                    style={{
                                        backgroundColor: 'white',
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                        padding: '20px',
                                        borderRadius: '8px',
                                        margin: '10px 0',
                                        marginBottom: '20px',
                                    }}
                                >
                                    <p className="font-jaldi text-2xl font-bold mb-6 text-yellow text-center hover:text-3xl transition-all">
                                        Informacje o jachcie
                                    </p>
                                    <InputComponent id="nazwa" placeholder="input__field" label="Nazwa" customClass="input__field-margin" />
                                    <InputComponent id="typ" placeholder="input__field" label="Typ" customClass="input__field-margin" />
                                    <InputComponent id="oznaczenie" placeholder="input__field" label="Oznaczenie na żaglu" customClass="input__field-margin" />
                                    <InputComponent
                                        id="dlugosc"
                                        placeholder="input__field"
                                        label="Długość całkowita jachtu L (m): "
                                        customClass="input__field-margin"
                                    />
                                </div>
                                <div
                                    style={{
                                        backgroundColor: 'white',
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                        padding: '20px',
                                        borderRadius: '8px',
                                        margin: '10px 0',
                                        marginBottom: '20px',
                                    }}
                                >
                                    <p className="font-jaldi text-2xl font-bold mb-6 text-yellow text-center hover:text-3xl transition-all">
                                        Informacje o załodze
                                    </p>
                                    <InputComponent id="sternik" placeholder="input__field" label="Sternik Jachtu" customClass="input__field-margin" />
                                    <InputComponent id="stopien" placeholder="input__field" label="Stopień" customClass="input__field-margin" />
                                    <InputComponent id="rok" placeholder="input__field" label="Rok urodzenia" customClass="input__field-margin" />
                                    <InputComponent id="adres" placeholder="input__field" label="Adres zamieszkania" customClass="input__field-margin" />
                                    <InputComponent id="nr" placeholder="input__field" label="Numer telefonu" customClass="input__field-margin" />

                                    <InputComponent id="klub" placeholder="input__field" label="Klub" customClass="input__field-margin" />
                                    <InputComponent id="załoga" placeholder="input__field" label="Załoga" customClass="input__field-margin" />
                                </div>

                                <div className="items-center mx-auto">
                                    <button
                                        onClick={handleWyslij}
                                        className={`font-jaldi text-white bg-text focus:outline-none rounded-lg py-2 px-4 lg:text-lg xl:text-xl 2xl:text-2xl transition-all ${
                                            wyslano ? 'bg-green-500' : 'hover:bg-yellow-500'
                                        }`}
                                        style={{width: '200px'}}
                                        disabled={wyslano}
                                    >
                                        {wyslano ? 'Wysłano!' : 'Wyślij zgłoszenie'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
