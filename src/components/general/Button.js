import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Button({
  label,
  className,
  onClick,
  icon = null
}) {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {icon && (
        <FontAwesomeIcon icon={icon} className="button-icon" />
      )}
      {label}
    </button>
  );
}
