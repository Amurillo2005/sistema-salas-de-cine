import React from 'react';
import './payment.css';

const PaymentMethodSelector = () => {
  return (
    <div className="payment-container">
      <div className="payment-header">
        <button>←</button>
        <h2 className="payment-title">ESCOGER MEDIO DE PAGO</h2>
        <span className="payment-step">1 de 3</span>
      </div>

      <div className="payment-grid-3">
        <div className="payment-box">
          <img src="/img/tarjeta-cineco.png" alt="Tarjeta Cineco" className="payment-img" />
          <p className="title">Tarjeta Cineco</p>
          <p>Paga con tu Tarjeta Cineco y obtén un <strong>Precio Especial</strong></p>
        </div>

        <div className="payment-box">
          <img src="/img/tarjeta-platino.png" alt="Tarjeta Platino" className="payment-img" />
          <p className="title">Tarjeta Platino</p>
          <p>Completa <strong>30 visitas</strong> para ser Cliente Platino el próximo año</p>
        </div>

        <div className="payment-box">
          <img src="/img/puntos-cineco.png" alt="Puntos Cineco" className="payment-img" />
          <p className="title">Puntos Cineco</p>
          <p>Para este tipo de sala o función no está disponible la redención de puntos por portal</p>
        </div>
      </div>

      <div className="payment-grid-2">
        <div className="payment-box">
          <p className="title">Tarjeta débito</p>
          <img src="/img/pse.png" alt="PSE" className="payment-img-small" />
        </div>

        <div className="payment-box">
          <p className="title">Tarjeta crédito</p>
          <div className="payment-icons">
            <img src="/img/visa.png" alt="VISA" className="payment-img-small" />
            <img src="/img/amex.png" alt="AMEX" className="payment-img-small" />
            <img src="/img/diners.png" alt="Diners" className="payment-img-small" />
            <img src="/img/mastercard.png" alt="MC" className="payment-img-small" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodSelector;
