import {api} from './api.js';
export const list=()=>api('/inventory');export const get=id=>api('/inventory/'+id);
export const create=body=>api('/inventory',{method:'POST',body});export const update=(id,body)=>api('/inventory/'+id,{method:'PUT',body});
