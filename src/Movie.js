import React, { Component } from 'react'
import PropTypes from 'prop-types' // 속성 라이브러리
import "./Movie.css"


function Movie({ id, year, title, summary, poster, genres }) {
    return (
        <div className="movie">
            <img src={poster} />
            <div>
                <h3 className="movie__title">{title.slice(0, 150)}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {genres.map((genre, index) => (
                        <li key={index}>
                            {genre}
                        </li>
                    ))}
                </ul>
                <p>{summary.slice(0, 180)} ...</p>
            </div>
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