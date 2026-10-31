import {motion} from 'framer-motion';
const M=[['May',6.2],['Jun',8.4],['Jul',7.1],['Aug',11.3],['Sep',13.8],['Oct',16.5]];
export default function RevenueChart(){const mx=18;
  return <div className="panel chart"><h3>Revenue by month (₹ lakh)</h3><div className="bars">
    {M.map(([m,v],i)=><div key={m} className="col"><em>{v}</em><motion.div className="bar-fill" initial={{height:0}} animate={{height:`${v/mx*100}%`}} transition={{delay:.3+i*.12,type:'spring',damping:16}}/><span>{m}</span></div>)}</div></div>}
