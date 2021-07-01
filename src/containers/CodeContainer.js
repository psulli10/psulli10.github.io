import List from '../components/List';
import { useState } from 'react';
import codeData from '../data/codeData';

const CodeContainer = () => {

    const [code, setCodde] = useState(codeData);

    return (
        <div id='main-image'>
        <h1>Code</h1>
        <List array={code} id={'code'}></List>
        </div>
    )
}

export default CodeContainer;