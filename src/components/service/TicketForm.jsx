import React, { useState } from 'react';
import { STATUS_OPTIONS } from '../../data/mock.js';

export default function TicketForm({ onSubmit, onCancel }) {
  const [status, setStatus] = useState('Open');

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    if (onSubmit) onSubmit(data);
  };

  return (
    <form className="ticket-form" onSubmit={handleSubmit}>
      <label>
        <span>Customer Name</span>
        <input name="Customer" required placeholder="Customer name" />
      </label>
      <label>
        <span>Issue Description</span>
        <input name="Issue" required placeholder="e.g. Low generation, inverter error" />
      </label>
      <label>
        <span>Status</span>
        <div className="modal-select-wrap">
          <select
            name="Status"
            className="modal-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            {STATUS_OPTIONS.tickets.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <span className="modal-select-arrow">▾</span>
        </div>
      </label>
      <div className="row">
        {onCancel && (
          <button type="button" className="ghost" onClick={onCancel}>
            Cancel
          </button>
        )}
        <button type="submit" className="cta">
          Submit Ticket
        </button>
      </div>
    </form>
  );
}
