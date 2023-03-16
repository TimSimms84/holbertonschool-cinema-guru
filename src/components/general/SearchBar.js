import './general.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

export default function SearchBar({ title, setTitle, className }) {
  return (
    <div className="search-bar">
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
      <input
        type="text"
        placeholder={title}
        value={setTitle}
        onChange={(e) => setTitle(e.target.value)}
        className={`search-input ${className}`}
      />
    </div>
  );
}

SearchBar.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  className: PropTypes.string,
};
