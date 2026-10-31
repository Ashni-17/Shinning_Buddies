import {useState} from 'react';import {useNavigate} from 'react-router-dom';import {motion} from 'framer-motion';import {useAuth} from '../context/AuthContext.jsx';
export default function Login(){
  const {login}=useAuth();
  const nav=useNavigate();
  const [e,setE]=useState('');
  const [p,setP]=useState('');

  const go=ev=>{ev.preventDefault();login(e||'ops@solarcare360.com');nav('/')};

  return (
    <div className="login">
      <div className="sky">
        <div className="sky-overlay" />
        <div className="sunrise" />
        <div className="roof">
          {Array.from({length:24},(_,i)=><i key={i} style={{animationDelay:`${i*.07}s`}}/>)}
        </div>
        <div className="sky-content">
          <div className="sky-brand-tag">
            <span className="sun-mini" />
            <span>SolarCare 360 Cloud Ops</span>
          </div>
          <motion.h2 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:.6,duration:.8}}>
            Every roof is a power plant<br/>waiting for its first sunrise.
          </motion.h2>
          <p className="sky-desc">Real-time solar installation workflows, telemetry passbooks, and 360° asset monitoring.</p>
        </div>
      </div>

      <div className="login-card-container">
        <motion.form 
          onSubmit={go} 
          className="card" 
          initial={{opacity:0,x:30}} 
          animate={{opacity:1,x:0}} 
          transition={{delay:.3,type:'spring',damping:22}}
        >
          <div className="card-brand-header">
            <div className="brand-icon-box">
              <span className="sun" />
              <span className="sun-ring" />
            </div>
            <div>
              <div className="brand-name">SolarCare <span className="brand-tag">360</span></div>
              <div className="brand-sub">Platform Sign-in</div>
            </div>
          </div>

          <h1>Welcome back</h1>
          <p className="subtext">Manage surveys, installs and warranties in one place.</p>

          <div className="demo-notice">
            <span className="demo-icon">⚡</span>
            <span><strong>Demo Mode Active:</strong> Sign in with any email</span>
          </div>

          <label>
            <span>Email Address</span>
            <input 
              type="email" 
              required 
              value={e} 
              onChange={x=>setE(x.target.value)} 
              placeholder="admin@solarcare360.com"
            />
          </label>
          <label>
            <span>Password</span>
            <input 
              type="password" 
              required 
              value={p} 
              onChange={x=>setP(x.target.value)} 
              placeholder="••••••••••••"
            />
          </label>
          <button type="submit" className="cta wide">Access SolarCare 360</button>
        </motion.form>
      </div>
    </div>
  );
}
