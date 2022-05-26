import React from 'react';
import { useHistory } from 'react-router-dom';

function GoForward() {
    const history = useHistory();

    return <button type="reset" onClick={() => {
        console.log(history.goForward);
        return history.goForward()
    }} >GoForward</button>
}

export default GoForward;