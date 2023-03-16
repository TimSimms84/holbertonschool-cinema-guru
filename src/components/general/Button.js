import PropTypes from 'prop-types'; // Import PropTypes library
import './general.css'; // Import general CSS styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon from Font Awesome
import React from 'react'; // Import React library

export default function Button({
  label, // Required string prop for button label
  className = '', // Optional string prop for button custom classes, with default value of empty string
  onClick, // Required function prop for onClick handler
  icon // Optional prop of type object for FontAwesome icon
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

Button.propTypes = {
  label: PropTypes.string.isRequired, // PropType for required string prop for button label
  className: PropTypes.string.isRequired, // PropType for optional string prop for button custom classes, with isRequired flag added
  onClick: PropTypes.func.isRequired, // PropType for required function prop for onClick handler
  icon: PropTypes.object, // PropType for optional prop of type object for FontAwesome icon
};
