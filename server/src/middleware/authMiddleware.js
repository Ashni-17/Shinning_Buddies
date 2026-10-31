import jwt from 'jsonwebtoken';
export function protect(req,res,next){const t=(req.headers.authorization||'').replace('Bearer ','');
  try{req.user=jwt.verify(t,process.env.JWT_SECRET);next()}catch{res.status(401).json({message:'Please sign in again'})}}
export const allow=(...roles)=>(req,res,next)=>roles.includes(req.user?.role)?next():res.status(403).json({message:'You do not have access to this action'});
