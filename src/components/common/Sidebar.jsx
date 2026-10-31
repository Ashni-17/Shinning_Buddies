import {NavLink} from 'react-router-dom';import {motion} from 'framer-motion';import {NAV} from '../../data/mock.js';
export default function Sidebar(){
  return (
    <aside className="side">
      <div className="brand">
        <div className="brand-icon-box">
          <span className="sun" />
          <span className="sun-ring" />
        </div>
        <div className="brand-meta">
          <span className="brand-name">SolarCare <span className="brand-tag">360</span></span>
          <span className="brand-sub">Enterprise Solar Ops</span>
        </div>
      </div>
      <nav className="nav-menu">
        {NAV.map(([to, l, ic]) => (
          <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => (isActive ? 'nl active' : 'nl')}>
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.span
                    layoutId="pill"
                    className="pillbg"
                    transition={{ type: 'spring', damping: 26, stiffness: 320 }}
                  />
                )}
                <span className="ic">{ic}</span>
                <span className="tx">{l}</span>
                {isActive && <span className="active-glow-dot" />}
              </>
            )}
          </NavLink>
        ))}
      </nav>
      <div className="side-footer">
        <div className="side-status-card">
          <div className="side-status-header">
            <span className="status-live-dot" />
            <span className="side-status-label">Grid Operations</span>
            <span className="side-status-pill">Active</span>
          </div>
          <div className="side-status-stat">
            <small>Live Generation</small>
            <b>142.8 kW</b>
          </div>
        </div>
      </div>
    </aside>
  );
}
