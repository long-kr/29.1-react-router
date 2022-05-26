import React from 'react';
import { useHistory } from 'react-router-dom';

function GoJump() {
    const history = useHistory();

    return <button type="reset" onClick={() => {
        console.log(history.goForward);
        return history.go(-2)
    }} >Go Back 2 pages</button>
}

export default GoJump;