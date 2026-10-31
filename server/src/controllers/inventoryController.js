import {crud,wrap} from '../utils/crud.js';import pool from '../config/db.js';import {serialRange} from '../utils/generateSerial.js';
const base=crud('inventory_items',['item','category','serial_range','quantity','status']);
const PFX={panel:'P',inverter:'I',meter:'M'};
export default {...base,
  create:wrap(async(req,res)=>{const b={...req.body};const q=Number(b.quantity||0);let end=0;
    if(PFX[b.category]&&!b.serial_range){const [[{m}]]=await pool.query('SELECT COALESCE(MAX(serial_seq_end),0) m FROM inventory_items WHERE category=?',[b.category]);
      b.serial_range=serialRange(PFX[b.category],m+1,q||1);end=m+q}
    b.status=b.status||(q>5?'In stock':q>0?'Low':'Out');
    const [x]=await pool.query('INSERT INTO inventory_items SET ?',[{item:b.item,category:b.category,serial_range:b.serial_range,serial_seq_end:end,quantity:q,status:b.status}]);
    res.status(201).json({id:x.insertId,...b,quantity:q})})};
