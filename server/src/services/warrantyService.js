import pool from '../config/db.js';
const TERMS=[['Solar panels',25],['Inverter',10],['Mounting structure',10],['Workmanship',5]];
export async function issueFor(installation){
  const [ex]=await pool.query('SELECT id FROM warranties WHERE installation_id=?',[installation.id]);if(ex.length)return;
  const from=new Date();for(const [item,y] of TERMS){const to=new Date(from);to.setFullYear(to.getFullYear()+y);
    await pool.query('INSERT INTO warranties SET ?',{installation_id:installation.id,customer_id:installation.customer_id,item,valid_from:from,valid_until:to,status:'Active'})}}
