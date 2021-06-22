import React from 'react';
import PropTypes from 'prop-types';
import { album01 } from './date';

function Albuns({ album }) {
  const {
    title, image, releaseDate, others,
  } = album;
  const { year, day, month } = releaseDate;
  const { recordCompany, formats } = others;
  return (
    <section>
      <img src={image} alt={title} />
      <h2>{ title }</h2>
      <p>{ year }</p>
      <p>Lançamento: { `${day}/${month}/${year}` }</p>
      <p>Gravadora: { recordCompany }</p>
      <p>Formatos: { formats }</p>
    </section>
  );
}

Albuns.propTypes = {
  album: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    month: PropTypes.string.isRequired,
    others: PropTypes.shape({
      recordCompany: PropTypes.string.isRequired,
      formats: PropTypes.string.isRequired,
    }),
  }),
};

Albuns.defaultProps = {
  album: album01,
};

export default Albuns;
