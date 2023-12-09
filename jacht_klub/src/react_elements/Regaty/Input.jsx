// Input.jsx

import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const InputComponent = ({ id, type, placeholder, label, customClass, onEnterPress }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onEnterPress();
    }
  };

  return (
    <div className={`input__wrapper ${customClass}`}>
      <input
        id={id}
        type={type}
        className={`input__field ${customClass}`}
        placeholder={placeholder}
        style={{ width: '100%', boxSizing: 'border-box' }}
        onKeyDown={handleKeyDown}
      />
      <label htmlFor={id} className={`input__label ${customClass}`}>
        {label}
      </label>
    </div>
  );
};

InputComponent.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  customClass: PropTypes.string,
  onEnterPress: PropTypes.func.isRequired,
};

export default InputComponent;
