import React from 'react';

const text = ( props ) => {
    const length= props.length;
    let msgText = 'Text too short';
    if(length >= 5){
        msgText = "Text long enough"
    }

    return(
        <div>
            <p>{ msgText }</p>
        </div>
    )
}

export default text;