import QRCode from 'qrcode';
export const qrFor=(text)=>QRCode.toDataURL(text,{margin:1,width:240});
