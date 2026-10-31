import {crud,wrap} from '../utils/crud.js';import {calcTotals} from '../services/quotationService.js';
const base=crud('quotations',['customer_id','package_id','bom','subtotal','gst','total','status']);
const withTotals=b=>({...b,...(b.bom?calcTotals(b.bom):{})});
export default {...base,
  create:wrap(async(req,res,next)=>{req.body=withTotals(req.body);return base.create(req,res,next)}),
  update:wrap(async(req,res,next)=>{req.body=withTotals(req.body);return base.update(req,res,next)})};
