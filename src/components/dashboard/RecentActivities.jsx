import {motion} from 'framer-motion';
const A=[['Arun Traders crew reached the site','10 min ago'],['Quotation Q-1043 approved','1 h ago'],['Karthik R reported low generation','3 h ago'],['Inverter stock fell below 5 units','Yesterday']];
export default function RecentActivities(){return <div className="panel acts"><h3>Recent activity</h3>
  {A.map(([t,w],i)=><motion.div key={t} className="act" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:.5+i*.1}}><i/><p>{t}</p><small>{w}</small></motion.div>)}</div>}
