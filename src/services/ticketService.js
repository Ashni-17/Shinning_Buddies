import {api} from './api.js';
export const list=()=>api('/tickets');export const get=id=>api('/tickets/'+id);
export const create=body=>api('/tickets',{method:'POST',body});export const update=(id,body)=>api('/tickets/'+id,{method:'PUT',body});
