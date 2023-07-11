import React from 'react';

const ButtonGrid = ({ buttons }) => {
  return (
    <div className="button-grid">
      {buttons.map(button => (
        <button key={button.id} className="grid-button">
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default ButtonGrid;
