import React from 'react'; 

const char = ( props ) => {
    return(
        <div style={ props.style } onClick={ props.click }>
            <p>{ props.char }</p>
        </div>
    )
}

export default char;