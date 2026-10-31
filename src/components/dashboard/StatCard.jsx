import {useEffect,useState} from 'react';import {animate} from 'framer-motion';
export default function StatCard({label,value,prefix='',suffix='',tone}){
  const [n,setN]=useState(0);useEffect(()=>{const a=animate(0,value,{duration:1.4,ease:'easeOut',onUpdate:v=>setN(Math.round(v))});return()=>a.stop()},[value]);
  return <div className={`panel stat ${tone}`}><span>{label}</span><b>{prefix}{n.toLocaleString('en-IN')}{suffix}</b></div>}
