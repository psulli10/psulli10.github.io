import List from '../components/List';
import { useState } from 'react';
import aboutData from '../data/aboutData';

const AboutContainer = () => {

    const [about, setAbout] = useState(aboutData)

    return (
        <div id='main-image'>
        <h1>About</h1>
        <List array={about} id={'about'}></List>
        </div>
    )
}

export default AboutContainer