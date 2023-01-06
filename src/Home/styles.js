import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin: 0 auto;
    padding: 3.2rem 1rem;
    z-index: 1000;
    flex-direction: column;
    gap: 2rem;
    width: 55%;
    align-items: center;

    @media (max-width: 1024px) {
        width: 90%;
        padding: 1rem;
    }

    @media (max-width: 720px) {
        width: 90%;
    }

    @media (max-width: 375px) {
        width: 95%;
    }
`;
