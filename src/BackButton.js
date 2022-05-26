import React from 'react';
import { useHistory } from 'react-router-dom';

function BackButton() {
    const history = useHistory();
    
    return <button type="button" onClick={() => {
        console.log(history);
        return history.goBack();
    }}>Go Back</button>    
}

export default BackButton;