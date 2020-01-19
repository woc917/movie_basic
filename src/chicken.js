import React from 'react'
import PropTypes from 'prop-types'

function Chicken({favourite, imgsrc, rating}) {
    return (
        <div>
            <h3>{favourite}</h3>
            <h5>{rating} / 5</h5>
            <img src={imgsrc} alt={favourite} />
        </div>
    );
}

Chicken.propTypes = {
    favourite: PropTypes.string.isRequired, // 속성값(스트링)지정, 필수값으로
    imgsrc: PropTypes.string.isRequired,
    rating: PropTypes.number // 속성값(번호)지정, 필수값X
}


export default Chicken;