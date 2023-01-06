import styled from 'styled-components';

export const Container = styled.div`
    background-color: #fff;
    border-radius: 10px;
    width: 20rem;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    position: absolute;
    right: 0;
    bottom: 0;
    
    .container {
        display: flex;
        flex-direction: column;
        padding: 2rem 1.3rem;
        
        
        .perfil {
            align-items: center;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            gap: 1.5rem;

            .foto {
                border-radius: 50px;
                width: 83px;
                height: 83px;

                img {
                    border-radius: 50px;
                    object-fit: cover;
                    width: 100%;
                    height: 100%;
                    object-position: center 10%;
                }
            }

            .name {
                font-weight: 600;
                font-size: 24px;
            }
        }

        .content {
            display: flex;
            flex-direction: column;
            margin-top: 1rem;
            
            .bio {
                font-weight: normal;
                font-size: 16px;
                line-height: 30px;
                color: rgba(39, 39, 39, 0.75);
            }

            button {
                margin-top: 5rem;
                background: #2EA2FA;
                border-radius: 5px;
                border: none;
                height: 3.2rem;
                color: #fff;
                font-size: 1em;
                font-weight: bold;
            }

            button:hover {
                border: 1px solid #2ea2fa;
                background-color: #fff;
                color: #2ea2fa;
                cursor: pointer;
            }
        }
    }

`;

export const Rectangle = styled.div`
    background-color: #2ea2fa;
    border-radius: 10px 10px 0 0;
    width: 100%;
    height: 1.5rem;
`;
