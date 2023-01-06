import styled from 'styled-components';

export const Container = styled.div`
    background-color: #fff;
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    
    
    .container {
        max-width: 100%;
        padding: 2rem 3rem;

        h2 {
            margin: 0 0 1rem;
        }

        .input {
            width: 100%;
            display: flex;
            align-items: center;
            margin: 1rem 0;
            gap: 1rem;
            height: 3.5rem;
        }
    }

    .btn-1 {
        padding: 0.8rem;
        font-size: 1.3em;
        background-color: #2ea2fa;
        border: none;
        color: #fff;
        font-weight: bold;
        border: 1px solid transparent;
        border-radius: 0 0 10px 10px;
        width: 100%;

        :hover {
            background-color: #fff;
            color: #2ea2fa;
            cursor: pointer;
            border: 1px solid #2ea2fa;
        }
    }

    .p-message {
        color: #272727;
        font-size: 1.1em;
        margin: 2rem 0;
    }

    @media (max-width: 736px) {
        .container {
            padding: 1.5rem;

            h2 {
                font-size: 1.3em;
                line-height: 28px;
            }

            .input {
                height: 2.5rem;
                margin: .85rem 0;
            }
        }
    }

    @media (max-width: 375px) {
        .container {
            padding: .7rem;

            .input {
                gap: .6rem;
            }

            h2 {
                font-size: 1.1em;
                line-height: 25px;
            }
        }
    }
`;

export const Box = styled.div`
    width: 5rem;
    height: 100%;
    background-color: ${props => props.bgColor};
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;

    @media (max-width: 736px) {
        height: 100%;
    }
    
`;

export const Span = styled.span`
    font-size: 1.4em;
    color: ${props => props.color};

    @media (max-width: 736px) {
        font-size: 1.2em;
    }
`;

export const Input = styled.input`
    width: 100%;
    border-radius: 5px;
    border: 1px solid #c4c4c4;
    height: 100%;
    font-size: 1.2em;
    padding: 0 1rem;
    border-left: 5px solid ${props => props.borderLeft};

    @media (max-width: 736px) {
        height: 100%;
        font-size: .95em;
    }
`;

// export const Button = styled.button`
//     padding: 1.5rem;
//     font-size: 1.3em;
//     background-color: #2ea2fa;
//     border: none;
//     color: #fff;
//     font-weight: bold;
//     border: 1px solid transparent;
//     border-radius: 0 0 10px 10px;
//     width: 100%;

//     :hover {
//         background-color: #fff;
//         color: #2ea2fa;
//         cursor: pointer;
//         border: 1px solid #2ea2fa;
//     }
// `;
