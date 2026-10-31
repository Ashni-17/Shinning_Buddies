import {useAuth} from '../../context/AuthContext.jsx';

export default function Navbar({title}){
  const {user,logout}=useAuth();
  return (
    <header className="top">
      <div className="top-title-area">
        <h1>{title}</h1>
        <div className="top-badge">
          <span className="live-pulse" />
          <span>Rooftop Telemetry Live</span>
        </div>
      </div>
      <div className="who">
        <div className="weather-pill">
          <span className="weather-icon">☀️</span>
          <span className="weather-val">Peak Sun Hours · 4.8 kWh/kWp</span>
        </div>
        <div className="user-profile">
          <span className="av">{user?.name?.[0]?.toUpperCase()||'U'}</span>
          <div className="user-info">
            <span className="user-name">{user?.name||'Solar Admin'}</span>
            <span className="user-role">Operations Lead</span>
          </div>
        </div>
        <button className="ghost signout-btn" onClick={logout} title="Sign out">
          Sign out
        </button>
      </div>
    </header>
  );
}
