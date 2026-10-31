import pool from '../config/db.js';import {wrap} from '../utils/crud.js';
const n=async(sql)=>(await pool.query(sql))[0][0].c;
export const summary=wrap(async(req,res)=>res.json({
  customers:await n('SELECT COUNT(*) c FROM customers'),
  installed:await n("SELECT COUNT(*) c FROM installations WHERE status='Completed'"),
  pendingQuotations:await n("SELECT COUNT(*) c FROM quotations WHERE status IN ('Draft','Sent')"),
  openTickets:await n("SELECT COUNT(*) c FROM service_tickets WHERE status IN ('Open','In progress')"),
  revenueByMonth:(await pool.query("SELECT DATE_FORMAT(paid_on,'%b') month,SUM(amount) total FROM payments WHERE status='Paid' GROUP BY YEAR(paid_on),MONTH(paid_on),month ORDER BY YEAR(paid_on),MONTH(paid_on) LIMIT 6"))[0]}));
