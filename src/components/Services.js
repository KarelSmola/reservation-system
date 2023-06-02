import React from "react";

const Services = () => {
  return (
    <div className="services">
      <h2 className="services__title">Select a service</h2>
      <div className="services__list-wrap">
        <ul className="services__list">
          <li className="services__list-item">
            <input className="services__radio-btn" type="radio" />
            <p className="services__service-name">Men's cut</p>
            <p className="services__service-duration">60 minutes</p>
            <p className="services__service-price">610 CZK</p>
          </li>
          <li className="services__list-item">
            <input className="services__radio-btn" type="radio" />
            <p className="services__service-name">Hot Towel Cut and shaving</p>
            <p className="services__service-duration">60 minutes</p>
            <p className="services__service-price">940 CZK</p>
          </li>
          <li className="services__list-item">
            <input className="services__radio-btn" type="radio" />
            <p className="services__service-name">Machine men's cut</p>
            <p className="services__service-duration">60 minutes</p>
            <p className="services__service-price">400 CZK</p>
          </li>
          <li className="services__list-item">
            <input className="services__radio-btn" type="radio" />
            <p className="services__service-name">Children's cut</p>
            <p className="services__service-duration">30 minutes</p>
            <p className="services__service-price">500 CZK</p>
          </li>
          <li className="services__list-item">
            <input className="services__radio-btn" type="radio" />
            <p className="services__service-name">Beard treatment</p>
            <p className="services__service-duration">30 minutes</p>
            <p className="services__service-price">450 CZK</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
