import {Outlet,useLocation} from 'react-router-dom';
import {motion} from 'framer-motion';
import Sidebar from '../components/common/Sidebar.jsx';
import Navbar from '../components/common/Navbar.jsx';
import Footer from '../components/common/Footer.jsx';
import {NAV} from '../data/mock.js';

export default function DashboardLayout(){
  const {pathname}=useLocation();
  const t=NAV.find(n=>n[0]===pathname)?.[1]||'SolarCare 360';
  return (
    <div className="shell">
      <Sidebar/>
      <main>
        <Navbar title={t}/>
        <motion.div 
          key={pathname} 
          initial={{opacity:0,y:10}} 
          animate={{opacity:1,y:0}} 
          transition={{duration:0.2,ease:'easeOut'}}
        >
          <Outlet/>
        </motion.div>
        <Footer/>
      </main>
    </div>
  );
}
