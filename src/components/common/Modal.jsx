import {motion,AnimatePresence} from 'framer-motion';
export default function Modal({open,onClose,title,children}){
  return <AnimatePresence>{open&&<motion.div className="scrim" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={onClose}>
    <motion.div className="modal" initial={{y:40,scale:.96,opacity:0}} animate={{y:0,scale:1,opacity:1}} exit={{y:30,opacity:0}} transition={{type:'spring',damping:22,stiffness:260}} onClick={e=>e.stopPropagation()}>
      <h3>{title}</h3>{children}</motion.div></motion.div>}</AnimatePresence>;
}
