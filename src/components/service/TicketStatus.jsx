import React, { useState } from 'react';
import StatusDropdown from '../common/StatusDropdown.jsx';
import { STATUS_OPTIONS } from '../../data/mock.js';

export default function TicketStatus({ status = 'Open', onStatusChange }) {
  const [current, setCurrent] = useState(status);

  const handleChange = (newStatus) => {
    setCurrent(newStatus);
    if (onStatusChange) onStatusChange(newStatus);
  };

  return (
    <div className="ticket-status-component">
      <span className="field-caption" style={{ marginRight: 8 }}>Ticket Status:</span>
      <StatusDropdown
        value={current}
        options={STATUS_OPTIONS.tickets}
        onChange={handleChange}
      />
    </div>
  );
}
