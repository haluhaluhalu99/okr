import React from 'react';

const Button = ({ onClick, icon, style, type, borderRadius, innerText, disabled }) => {
  return (
    <button
      onClick={onClick}
      style={style}
      disabled={disabled}
      className={`button-root button-${type} ${borderRadius ? 'button-radius' : ''}`}
    >
      {icon && <div className="button-icon">{icon}</div>}
      <div className="button-text">{innerText}</div>
    </button>
  );
};

export default Button;
