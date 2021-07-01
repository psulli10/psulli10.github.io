import List from '../components/List';
import { useState } from 'react';
import homeData from '../data/homeData';

const HomeContainer = () => {

    const [home, setHome] = useState(homeData);

    return (
        <div id='main-image'>
        <h1>Hello!</h1>
        <List array={home} id={'home'}></List>
        </div>
    )
}

export default HomeContainer