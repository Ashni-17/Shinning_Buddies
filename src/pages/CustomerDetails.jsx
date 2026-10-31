import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { DATA, getStatusTone } from '../data/mock.js';

export default function CustomerDetails() {
  const { id } = useParams();
  const customerName = id ? decodeURIComponent(id) : 'Meena Iyer';

  // Find customer in DATA.customers
  const customerRows = DATA.customers?.rows || [];
  const found = customerRows.find((r) => r[0] === customerName);
  const row = found || customerRows[0] || [customerName, 'Chennai', '5 kW', 'Quotation sent'];

  const customerStage = row[3] || 'Quotation sent';
  const surveyStatus = 'Done';
  const installStatus = 'Installing';
  const warrantyStatus = 'Active';
  const passportStatus = 'Active';

  return (
    <div className="customer-details-view">
      <div className="details-header-bar">
        <Link to="/customers" className="back-link">
          ← Back to Customers
        </Link>
      </div>

      <div className="panel customer-hero-card">
        <div className="customer-hero-main">
          <div className="avatar-circle">
            {customerName.charAt(0)}
          </div>
          <div>
            <h2>{customerName}</h2>
            <p className="customer-meta">
              <span>📍 {row[1] || 'Site'}</span>
              <span className="dot-sep">•</span>
              <span>⚡ {row[2] || '5 kW'} Rooftop Solar</span>
            </p>
          </div>
        </div>

        <div className="customer-hero-status">
          <span className="field-caption">Overall Stage:</span>
          <span className={`pill ${getStatusTone(customerStage)}`}>{customerStage}</span>
        </div>
      </div>

      <div className="grid2" style={{ marginTop: 24 }}>
        <div className="panel" style={{ padding: 24 }}>
          <div className="card-top-row">
            <h3>Site Survey</h3>
            <span className={`pill ${getStatusTone(surveyStatus)}`}>{surveyStatus}</span>
          </div>
          <p style={{ color: 'var(--mute)', fontSize: 13.5, marginTop: 8 }}>
            RCC flat roof • 42 m² shadow-free area • 135° Azimuth orientation verified.
          </p>
        </div>

        <div className="panel" style={{ padding: 24 }}>
          <div className="card-top-row">
            <h3>Installation & Crew</h3>
            <span className={`pill ${getStatusTone(installStatus)}`}>{installStatus}</span>
          </div>
          <p style={{ color: 'var(--mute)', fontSize: 13.5, marginTop: 8 }}>
            Crew A assigned • Structure mounted • Inverter wiring in progress.
          </p>
        </div>

        <div className="panel" style={{ padding: 24 }}>
          <div className="card-top-row">
            <h3>Warranty & Protection</h3>
            <span className={`pill ${getStatusTone(warrantyStatus)}`}>{warrantyStatus}</span>
          </div>
          <p style={{ color: 'var(--mute)', fontSize: 13.5, marginTop: 8 }}>
            25-Year Performance Guarantee • Card ID: W-2201 • Active registration.
          </p>
        </div>

        <div className="panel" style={{ padding: 24 }}>
          <div className="card-top-row">
            <h3>Solar Passport</h3>
            <span className={`pill ${getStatusTone(passportStatus)}`}>{passportStatus}</span>
          </div>
          <p style={{ color: 'var(--mute)', fontSize: 13.5, marginTop: 8 }}>
            Pass ID: SP-8801 • Grid sync certificate verified • Bi-directional meter connected.
          </p>
        </div>
      </div>
    </div>
  );
}
