import React from 'react';
import { getStatusTone } from '../../data/mock.js';

export default function StatusDropdown({
  value,
  options = [],
  onChange,
  disabled = false,
  className = '',
  title = 'Click to change status'
}) {
  const currentVal = value || 'Pending';
  const tone = getStatusTone(currentVal);

  // Ensure current value is included in options
  const safeOptions = React.useMemo(() => {
    const list = Array.isArray(options) && options.length > 0
      ? [...options]
      : ['Active', 'Installing', 'Scheduled', 'Scheduling', 'Completed', 'Pending'];
    if (!list.includes(currentVal)) {
      list.unshift(currentVal);
    }
    return list;
  }, [options, currentVal]);

  return (
    <div
      className={`status-pill-wrap tone-${tone} ${className}`}
      title={title}
    >
      <span className="status-dot" aria-hidden="true" />
      <select
        value={currentVal}
        disabled={disabled}
        onChange={(e) => {
          e.stopPropagation();
          if (onChange) onChange(e.target.value);
        }}
        onClick={(e) => e.stopPropagation()}
        className="status-select"
        aria-label="Change status"
      >
        {safeOptions.map((opt) => (
          <option key={opt} value={opt} className="status-option">
            {opt}
          </option>
        ))}
      </select>
      <span className="status-arrow" aria-hidden="true">▾</span>
    </div>
  );
}

