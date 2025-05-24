import React from 'react';
import './payment-cash.css';

const CashPaymentSelector = () => {
  return (
    <div className="cash-container">
      <h2 className="cash-title">Cajero</h2>
      <div className="cash-options">
        <div className="cash-option">Efectivo $</div>
        <div className="cash-option">Datafono</div>
      </div>
    </div>
  );
};

export default CashPaymentSelector;
