import { useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import "./PickMe.scss";

const PickMe = () => {
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [result, setResult] = useState("");
    const [showConfetti, setShowConfetti] = useState(false);
    const { width, height } = useWindowSize();

    const checkPickMe = () => {
        const normalizedLastName = lastName.trim().toLowerCase();
        const normalizedFirstName = firstName.trim().toLowerCase();

        let message = "ТЫ НЕ ПИКМИ!!!";
        let shouldShowConfetti = false;

        if (normalizedLastName === "доброва" && normalizedFirstName === "екатерина" && birthDate === "2003-03-07") {
            message = "ПОЗДРАВЛЯЮ ТЫ ПИКМИ";
            shouldShowConfetti = true;
        } else if (normalizedLastName === "ширант" && normalizedFirstName === "софия" && birthDate === "2003-04-10") {
            message = "ТЫ ЛУЧШАЯ ПОДРУГА ПИКМИ";
            shouldShowConfetti = true;
        } else if (normalizedLastName === "ширант" && normalizedFirstName === "максим" && birthDate === "1999-04-13") {
            message = "ТЫ ЛУЧШИЙ ДРУГ ПИКМИ";
            shouldShowConfetti = true;
        }

        setResult(message);
        setShowConfetti(shouldShowConfetti);


        if (shouldShowConfetti) {
            setTimeout(() => setShowConfetti(false), 5000);
        }
    };

    return (
        <div className="pick-me">

            {showConfetti && (
                <Confetti
                    width={width}
                    height={height}
                    numberOfPieces={500}
                    recycle={false}
                    gravity={0.3}
                    colors={["#ff69b4", "#ff1493", "#ffb6c1", "#ffc0cb", "#ff85a2"]}
                />
            )}

            <h2 className="pick-me__title">ТЫ ПИКМИ?</h2>
            <div className="pick-me__field">
                <label htmlFor="lastName">Фамилия</label>
                <input id="lastName" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Введите фамилию" />
            </div>
            <div className="pick-me__field">
                <label htmlFor="firstName">Имя</label>
                <input id="firstName" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Введите имя" />
            </div>
            <div className="pick-me__field">
                <label htmlFor="birthDate">Дата рождения</label>
                <input id="birthDate" type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
            </div>
            <button className="pick-me__button" onClick={checkPickMe}>Узнать</button>
            {result && <p className="pick-me__result">{result}</p>}
        </div>
    );
};

export default PickMe;




