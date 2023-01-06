import React from 'react';
import {Container, Box, Span, Input} from './styles';

const ToDo = () => {
    const printScreen = () => {
        window.print();
    }

    const date = new Date();
    const currentYear = date.getFullYear();

    return (
        <Container>
            <form className="container">
                <h2>Escreva 5 metas que você mais deseja cumprir em {currentYear}</h2>

                <div className="input">
                    <Box bgColor={"#001E3C"}>
                        <Span color={"#E6DB74"}>1</Span>
                    </Box>

                    <Input 
                        borderLeft={"#001E3C"} 
                        type="text"
                        placeholder="Escreva aqui sua meta..."
                        required
                    />
                </div>

                <div className="input">
                    <Box bgColor={"#9c27b0"}>
                        <Span color={"#f3e5f5"}>2</Span>
                    </Box>

                    <Input 
                        borderLeft={"#9c27b0"} 
                        type="text" 
                        required
                    />
                </div>

                <div className="input">
                    <Box bgColor={"#3f51b5"}>
                        <Span color={"#e8eaf6"}>3</Span>
                    </Box>

                    <Input 
                        borderLeft={"#3f51b5"} 
                        type="text" 
                        required
                    />
                </div>

                <div className="input">
                    <Box bgColor={"#2196f3"}>
                        <Span color={"#e3f2fd"}>4</Span>
                    </Box>

                    <Input 
                        borderLeft={"#2196f3"} 
                        type="text" 
                        required
                    />
                </div>

                <div className="input">
                    <Box bgColor={"#009688"}>
                        <Span color={"#e0f2f1"}>5</Span>
                    </Box>

                    <Input 
                        borderLeft={"#009688"} 
                        type="text" 
                        required
                    />
                </div>

                <button className='btn-1' onClick={() => printScreen()} type="submit">Concluir</button>    
            </form>
        </Container>
    )
}

export default ToDo
