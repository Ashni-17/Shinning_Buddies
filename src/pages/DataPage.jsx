import { useState, useMemo, useEffect } from 'react';
import { DATA, STATUS_OPTIONS, getStatusTone } from '../data/mock.js';
import Modal from '../components/common/Modal.jsx';

export default function DataPage({ k }) {
  const d = DATA[k] || { title: '', add: 'Add item', cols: [], rows: [] };
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState(d.rows || []);

  // Status/Stage column index
  const statusColIdx = useMemo(() => {
    return d.cols.findIndex((c) => {
      const lower = c.toLowerCase();
      return lower === 'status' || lower === 'stage';
    });
  }, [d.cols]);

  // Menu-specific status options for creating new items
  const statusOptions = useMemo(() => {
    return STATUS_OPTIONS[k] || STATUS_OPTIONS.default;
  }, [k]);

  useEffect(() => {
    setRows(DATA[k]?.rows || []);
    setQ('');
    setOpen(false);
  }, [k]);

  const shown = useMemo(() => {
    return rows.filter((r) => r.join(' ').toLowerCase().includes(q.toLowerCase()));
  }, [rows, q]);

  const save = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const newRow = d.cols.map((c) => f.get(c) || '—');
    const updated = [newRow, ...rows];
    setRows(updated);
    if (DATA[k]) {
      DATA[k].rows = updated;
    }
    setOpen(false);
  };

  return (
    <section>
      <div className="bar">
        <input
          className="search"
          placeholder={`Search ${d.title.toLowerCase()}`}
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <button className="cta" onClick={() => setOpen(true)}>
          {d.add}
        </button>
      </div>

      <div className="panel tbl">
        <table>
          <thead>
            <tr>
              {d.cols.map((c) => (
                <th key={c}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {shown.map((r, i) => (
              <tr key={`${r[0] || 'row'}-${i}`}>
                {r.map((v, j) => {
                  const isStatus =
                    j === statusColIdx ||
                    (j === r.length - 1 && (statusColIdx !== -1 || getStatusTone(v)));
                  if (isStatus) {
                    const tone = getStatusTone(v);
                    return (
                      <td key={j}>
                        <span className={`pill ${tone}`}>{v}</span>
                      </td>
                    );
                  }
                  return <td key={j}>{v}</td>;
                })}
              </tr>
            ))}
            {!shown.length && (
              <tr>
                <td colSpan={d.cols.length || 1} className="empty">
                  Nothing matches “{q}”. Clear the search or add a new record.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title={d.add}>
        <form onSubmit={save}>
          {d.cols.map((c, colIdx) => {
            const isStatus = colIdx === statusColIdx;
            return (
              <label key={c}>
                <span>{c}</span>
                {isStatus ? (
                  <div className="modal-select-wrap">
                    <select
                      name={c}
                      className="modal-select"
                      required
                      defaultValue={statusOptions[0] || 'Active'}
                    >
                      {statusOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <span className="modal-select-arrow" aria-hidden="true">▾</span>
                  </div>
                ) : (
                  <input
                    name={c}
                    required
                    placeholder={`Enter ${c.toLowerCase()}`}
                  />
                )}
              </label>
            );
          })}
          <div className="row">
            <button
              type="button"
              className="ghost"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
            <button type="submit" className="cta">
              Save
            </button>
          </div>
        </form>
      </Modal>
    </section>
  );
}
