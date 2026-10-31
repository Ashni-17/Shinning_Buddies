export function calcTotals(bom=[],gstPercent=8.9){
  const subtotal=bom.reduce((s,i)=>s+Number(i.qty||0)*Number(i.unit_price||0),0);
  const gst=+(subtotal*gstPercent/100).toFixed(2);return {subtotal,gst,total:+(subtotal+gst).toFixed(2)};}
