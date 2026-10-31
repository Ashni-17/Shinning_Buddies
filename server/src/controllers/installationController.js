import {crud,wrap} from '../utils/crud.js';import pool from '../config/db.js';import {issueFor} from '../services/warrantyService.js';import {notify} from '../services/notificationService.js';
const c=crud('installations',['customer_id','technician_id','crew','start_date','status','photos','signature'],{
  after:{update:async i=>{if(i.status==='Completed'){await issueFor(i);await notify(`customer:${i.customer_id}`,'Your solar system is live. Warranty cards are ready.')}}}});
export default {...c,
  addFile:field=>wrap(async(req,res)=>{if(!req.file)return res.status(400).json({message:'Attach an image file'});
    const path=`/uploads/${req.file.destination.split('/').pop()}/${req.file.filename}`;
    if(field==='photos')await pool.query("UPDATE installations SET photos=JSON_ARRAY_APPEND(COALESCE(photos,JSON_ARRAY()),'$',?) WHERE id=?",[path,req.params.id]);
    else await pool.query('UPDATE installations SET signature=? WHERE id=?',[path,req.params.id]);res.json({path})})};
