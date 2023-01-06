import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #f8f8f8;
        font-family: 'Recursive', sans-serif;
        background-image: url('https://media.discordapp.net/attachments/847271407124611112/925582039355367475/unknown.png?width=629&height=629');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: 100%;
        background-position-x: center;
        background-position-y: 5%;

        @media (max-width: 700px) {
            background-image: none;
        }
    }

    
`