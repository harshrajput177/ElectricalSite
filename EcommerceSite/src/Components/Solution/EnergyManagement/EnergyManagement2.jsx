import React from 'react';
import AcademicC71 from '../../../image/drafting-layout-lv-switchgear-equipment-inside-installations-experience.webp';
import AcademicC72 from '../../../image/drafting-layout-lv-switchgear-equipment-inside-installations-experience.webp';
import AcademicC73 from '../../../image/drafting-layout-lv-switchgear-equipment-inside-installations-experience.webp';

const AcademicsC7 = () => {
  return (
    <div className="AcademicsC7-events">
      <h2><strong>Energy Management System</strong></h2>
      <h3 className="AcademicsC7-event-title">Optimizing Power Usage in Industrial Environments</h3>
      <p className="AcademicsC7-event-description">
        An Energy Management System (EMS) is a powerful tool designed to monitor, control, and optimize the energy consumption of industrial and commercial facilities. It plays a crucial role in enhancing energy efficiency, reducing operational costs, and promoting sustainability.
      </p>
      <p>
        By integrating advanced sensors, data analytics, and automation, EMS helps organizations identify energy-saving opportunities, track real-time consumption, and make informed decisions for energy optimization. It provides detailed insights into the performance of various equipment and systems, enabling proactive maintenance and load balancing.
      </p>
      <p>
        The implementation of EMS is especially vital in large-scale operations where even minor inefficiencies can lead to significant energy waste. With the ability to set consumption targets, detect anomalies, and generate reports, EMS ensures compliance with energy regulations and supports environmental goals.
      </p>
      <p>
        Investing in a robust Energy Management System not only enhances operational efficiency but also contributes to long-term sustainability and resilience by reducing the carbon footprint and promoting smarter energy usage.
      </p>

      <div className="AcademicsC7-event-images">
        <img
          src={AcademicC71}
          loading="lazy"
          alt="Energy monitoring and control layout"
          className="AcademicsC7-event-img"
        />
      </div>
      <div className="AcademicsC7-lower-image-C7">
        <img
          src={AcademicC72}
          loading="lazy"
          alt="Digital layout of energy equipment"
          className="AcademicsC7-event-img-lower AcademicsC7-small-img-C7"
        />
        <img
          src={AcademicC73}
          loading="lazy"
          alt="Systematic layout for energy distribution"
          className="AcademicsC7-event-img-lower AcademicsC7-large-img-C7"
        />
      </div>
    </div>
  );
};

export default AcademicsC7;
