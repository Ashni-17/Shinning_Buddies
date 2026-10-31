export default function Footer(){
  return (
    <footer className="foot">
      <div className="foot-content">
        <span>© {new Date().getFullYear()} <strong>SolarCare 360</strong> · Intelligent Solar Asset & Installation Management</span>
        <span className="foot-badge">Enterprise v2.4</span>
      </div>
    </footer>
  );
}
