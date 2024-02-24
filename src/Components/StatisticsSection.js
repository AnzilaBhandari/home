// StatisticsSection.js

import React from 'react';

const StatisticsSection = () => {
  return (
    <section className="statistics-section">
      <h2>Our Impact in Numbers</h2>

      <div className="statistics-grid">
        <div className="statistic-item">
          <h3>Patients Served</h3>
          <p>5000+</p>
        </div>

        <div className="statistic-item">
          <h3>Therapy Sessions Conducted</h3>
          <p>15,000+</p>
        </div>

        <div className="statistic-item">
          <h3>Positive Testimonials</h3>
          <p>95%</p>
        </div>

        <div className="statistic-item">
          <h3>Support Groups Organized</h3>
          <p>50+</p>
        </div>

        <div className="statistic-item">
          <h3>Specialized Workshops Conducted</h3>
          <p>30+</p>
        </div>

        <div className="statistic-item">
          <h3>Online Users Engaged</h3>
          <p>10,000+</p>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
