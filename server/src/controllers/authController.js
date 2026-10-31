import bcrypt from 'bcryptjs';import jwt from 'jsonwebtoken';import pool from '../config/db.js';import {wrap} from '../utils/crud.js';
const sign=u=>jwt.sign({id:u.id,role:u.role,name:u.name},process.env.JWT_SECRET,{expiresIn:'8h'});
export const login=wrap(async(req,res)=>{const {email,password}=req.body;
  const [r]=await pool.query('SELECT * FROM users WHERE email=?',[email]);const u=r[0];
  if(!u||!(await bcrypt.compare(password||'',u.password_hash)))return res.status(401).json({message:'Email or password is incorrect'});
  res.json({token:sign(u),user:{id:u.id,name:u.name,email:u.email,role:u.role}})});
export const me=(req,res)=>res.json(req.user);
