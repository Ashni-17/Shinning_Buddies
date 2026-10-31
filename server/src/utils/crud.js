import {Router} from 'express';import pool from '../config/db.js';import {protect} from '../middleware/authMiddleware.js';
export const wrap=fn=>(req,res,next)=>Promise.resolve(fn(req,res,next)).catch(next);
// Builds list/get/create/update/remove handlers for one table. Only whitelisted fields are ever written.
export function crud(table,fields,{after={}}={}){
  const pick=b=>Object.fromEntries(fields.filter(f=>b[f]!==undefined).map(f=>[f,typeof b[f]==='object'&&b[f]!==null?JSON.stringify(b[f]):b[f]]));
  const bad=(res,m)=>res.status(400).json({message:m});
  return {
    list:wrap(async(req,res)=>{const [r]=await pool.query('SELECT * FROM ?? ORDER BY id DESC',[table]);res.json(r)}),
    get:wrap(async(req,res)=>{const [r]=await pool.query('SELECT * FROM ?? WHERE id=?',[table,req.params.id]);r[0]?res.json(r[0]):res.status(404).json({message:'Not found'})}),
    create:wrap(async(req,res)=>{const d=pick(req.body);if(!Object.keys(d).length)return bad(res,'No valid fields supplied');
      const [x]=await pool.query('INSERT INTO ?? SET ?',[table,d]);const [r]=await pool.query('SELECT * FROM ?? WHERE id=?',[table,x.insertId]);
      if(after.create)await after.create(r[0]);res.status(201).json(r[0])}),
    update:wrap(async(req,res)=>{const d=pick(req.body);if(!Object.keys(d).length)return bad(res,'No valid fields supplied');
      const [x]=await pool.query('UPDATE ?? SET ? WHERE id=?',[table,d,req.params.id]);if(!x.affectedRows)return res.status(404).json({message:'Not found'});
      const [r]=await pool.query('SELECT * FROM ?? WHERE id=?',[table,req.params.id]);if(after.update)await after.update(r[0]);res.json(r[0])}),
    remove:wrap(async(req,res)=>{const [x]=await pool.query('DELETE FROM ?? WHERE id=?',[table,req.params.id]);x.affectedRows?res.json({deleted:true}):res.status(404).json({message:'Not found'})})
  };
}
export function crudRouter(c,extra){const r=Router();r.use(protect);if(extra)extra(r);
  r.route('/').get(c.list).post(c.create);r.route('/:id').get(c.get).put(c.update).delete(c.remove);return r}
