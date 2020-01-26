import React, { Component } from 'react'
import PropTypes from 'prop-types' // 속성 라이브러리


function Movie({ id, year, title, summary, poster }) {
    return (
        <div>
            <h4>{title}</h4>
            <h6>{year}</h6>
            <h5>{summary}</h5>
        </div>
    );
}


Movie.prototype = {
    id: PropTypes.number.isRequired, // 필수
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;