import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';

export default function Input({ label, type, className, value, setValue, icon, inputAttributes }) {
  
  return (
    <div className={`input-container ${className}`}>
    <label>
    {icon &&
      <FontAwesomeIcon
        icon={icon}
        className="input-icon"
      />
    }
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
