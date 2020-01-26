import React, { Component } from 'react'
import PropTypes from 'prop-types' // 속성 라이브러리


function Movie({ id, year, title, summary, poster, genres }) {
    return (
        <div>
            <h3>{title}</h3>
            <h5>{year}</h5>
            <ul>
                {genres.map((genre, index) => (
                    <li key={index}>
                        {genre}
                    </li>
                ))}
            </ul>
            <p>{summary}</p>
        </div>
    );
}


Movie.prototype = {
    id: PropTypes.number.isRequired, // 필수
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;