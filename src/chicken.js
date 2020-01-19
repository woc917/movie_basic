import React from 'react'

function Chicken({favourite, imgsrc}) {
    return (
        <div>
            <h3>{favourite}</h3>
            <img src={imgsrc} />
        </div>
    );
}

export default Chicken;