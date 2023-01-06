import styled from 'styled-components';

export const Container = styled.div`
    background-color: #fff;
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

    .container {
        padding: 1rem 5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .container-blocos {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-top: 4rem;

            .bloco {
                display: flex;
                flex-direction: column;
                background-color: rgba(196, 196, 196, 0.2);
                border-radius: 5px;
                padding: 10px;
                width: 7rem;
                align-items: center;
            }
        }

        .span1 {
            font-size: 2.5em;
            line-height: 70px;
            font-weight: bold;
            text-align: center;
            margin: 0;
        }

        .span2 {
            font-size: 3em;
            font-weight: 700;
            text-align: center;
        }

        .novo-ano {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 2rem;

            .gif {
                width: auto;
                height: 100%;
                border-radius: 5px;
    
                img {
                    border-radius: 5px;
                    object-fit: cover;
                    width: 100%;
                }
            }

            .message {
                font-size: 1.8em;
                font-weight: bold;
                text-align: center;
                line-height: 40px;
            }
        }

    }

    @media (max-width: 414px) {
        .container {
            padding: 1.5rem;

            .container-blocos {
                gap: 1rem;
                margin-top: 1rem;

                .bloco {
                    width: min-content;
                }
            }

            .span1 {
                font-size: 1.5em;
                line-height: 35px;
                font-weight: bold;
            }

            .span2 {
                font-size: 1.5em;
                font-weight: 400;
                text-align: center;
            }

            .novo-ano {
                display: flex;
                flex-direction: column;

                .message {
                    text-align: center;
                    font-size: 1.6em;
                }
            }
        }
    }

    @media (max-width: 375px) {
        .container {
            padding: .6rem;

            .container-blocos {
                gap: .5rem;
            }

            .span1 {
                font-size: 1.35em;
                line-height: 30px;
                font-weight: bold;
            }
        }
    }

    @media (max-width: 320px) {
        .container {
            padding: .5rem;

            .container-blocos {
                gap: .3rem;

                .bloco {
                    width: 18%;
                    padding: .7rem;
                }
            }

            .span1 {
                font-size: 1.35em;
                line-height: 30px;
                font-weight: bold;
            }

            .span2 {
                font-size: 1.17em;
                font-weight: 100;
            }
        }
    }
    
`;
