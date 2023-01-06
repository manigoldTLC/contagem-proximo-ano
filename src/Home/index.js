import React from 'react';
import {Container} from './styles';

import Default from '../components/Default';
import ToDo from '../components/ToDo';

const Home = () => {
    return (
        <>
            <Container>
                <Default />
                <ToDo />

            </Container>
        </>
    )
}

export default Home
