import React, {useState, useEffect} from 'react';
import {Container} from './styles';
import gif from '../../assets/gif.gif'


const Default = () => {
    const [days, setDays] = useState(null);
    const [hours, setHours] = useState(null);
    const [minutes, setMinutes] = useState(null);
    const [seconds, setSeconds] = useState(null);
    const [verify, setVerify] = useState(false);
    
    const date = new Date();
    const currentYear = date.getFullYear();
    
    useEffect(() => {
        
        let countdowmn = new Date("Jan 01, 2026 00:00:00").getTime();

        let aux = setInterval(() => {

            let nowDate = new Date().getTime();
            let daysRemaining = countdowmn - nowDate;

            const DAYS = Math.floor(daysRemaining / (1000 * 60 * 60 * 24));
            const HOURS = Math.floor((daysRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const MINUTES = Math.floor((daysRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const SECONDS = Math.floor((daysRemaining % (1000 * 60)) / (1000));

            setDays(DAYS); setHours(HOURS); setMinutes(MINUTES); setSeconds(SECONDS);
            
            if (daysRemaining < 0) {
                clearInterval(aux);
                setVerify(true);
            }

        }, 1000);

    }, [])

    return (
        <Container>
            <div className="container">
                {!verify ? (
                    <>
                        <h1 className="span1">Contagem regressiva para o próximo ano</h1>

                        <div className="container-blocos">
                            <div className="bloco">
                                <span className="span2">{days}</span>
                                {days === 1 ? (
                                    <span>dia</span>
                                ) : (
                                    <span>dias</span>
                                )}
                            </div>

                            <div className="bloco">
                                <span className="span2">{hours}</span>
                                {hours === 1 ? (
                                    <span>hora</span>
                                ) : (
                                    <span>horas</span>
                                )}
                            </div>

                            <div className="bloco">
                                <span className="span2">{minutes}</span>
                                {minutes === 1 ? (
                                    <span>minuto</span>
                                ) : (
                                    <span>minutos</span>
                                )}
                            </div>

                            <div className="bloco">
                                <span className="span2">{seconds}</span>
                                <span>segundos</span>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="novo-ano">
                        <div className="gif">
                            <img src={gif} alt="Reproduzindo um gif, o conteúdo é a queima dos fogos de artificios comemorando o ano novo" />
                        </div>

                        <span className="message">Feliz ano novo!<br/> Seja bem vindo 2024 🎉</span>
                    </div>
                )}
            </div>
        </Container>
    )
}

export default Default;
