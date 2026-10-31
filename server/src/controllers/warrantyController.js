import {crud,wrap} from '../utils/crud.js';import pool from '../config/db.js';import {qrFor} from '../services/qrService.js';
const c=crud('warranties',['installation_id','customer_id','item','valid_from','valid_until','status']);
// Solar passport: summary for one installation with a QR code that points to it.
export default {...c,passport:wrap(async(req,res)=>{
  const [r]=await pool.query('SELECT i.*,c.name customer_name,c.city FROM installations i JOIN customers c ON c.id=i.customer_id WHERE i.id=?',[req.params.installationId]);
  if(!r[0])return res.status(404).json({message:'Installation not found'});
  const [w]=await pool.query('SELECT item,valid_until,status FROM warranties WHERE installation_id=?',[req.params.installationId]);
  res.json({installation:r[0],warranties:w,qr:await qrFor(`${process.env.CLIENT_URL}/passport/${req.params.installationId}`)})})};
