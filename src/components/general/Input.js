import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

export default function Input({ label, type, className, value, setValue, icon, inputAttributes }) {
  return (
    <div className={`input-container ${className}`}>
      <label>
        {icon && (
          <FontAwesomeIcon icon={icon} className="input-icon" />
        )}
        {label}:
        <input
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          {...inputAttributes}
        />
      </label>
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.any.isRequired,
  setValue: PropTypes.func.isRequired,
  icon: PropTypes.object,
  inputAttributes: PropTypes.object,
};
