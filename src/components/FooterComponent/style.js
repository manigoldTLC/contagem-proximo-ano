import styled from 'styled-components';

export const Footer = styled.footer`
    background-color: #000000;
    position: absolute;
    width: 100%;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    bottom: 0;

    .span {
        color: white;
    }

    .link {
        color: #1AA7EC;
        margin-left: 1.5rem;

        &:hover {
            color: white;
        }
    }
`;



