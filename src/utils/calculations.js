export const systemSizeKw=(panels,watt=540)=>+(panels*watt/1000).toFixed(2);
export const monthlyUnits=kw=>Math.round(kw*120);
export const inr=n=>'₹'+Number(n).toLocaleString('en-IN');
