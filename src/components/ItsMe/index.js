import React from 'react';
import {Container, Rectangle} from './styles';
import eu from '../../assets/eu.jpg';

const ItsMe = () => {
    return (
        <Container>
            <Rectangle />

            <div className="container">

                <div className="perfil">
                    <div className="foto">
                        <img src={eu} alt="sou eu" />
                    </div>

                    <span className="name">Gabriel Xavier</span>
                </div>

                <div className="content">
                    <span className="bio">
                        Desenvolvedor fullstack e graduando em Engenharia de computação
                        pela Universidade de Brasília
                    </span>

                    <button>Meu Linkedin</button>
                </div>
            </div>
        </Container>
    )
}

export default ItsMe;
