export const generateSerial=(prefix,n)=>`SB-${prefix}-${String(n).padStart(4,'0')}`;
export const serialRange=(prefix,start,qty)=>qty>1?`${generateSerial(prefix,start)}…${String(start+qty-1).padStart(4,'0')}`:generateSerial(prefix,start);
