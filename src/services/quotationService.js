import {api} from './api.js';
export const list=()=>api('/quotations');export const get=id=>api('/quotations/'+id);
export const create=body=>api('/quotations',{method:'POST',body});export const update=(id,body)=>api('/quotations/'+id,{method:'PUT',body});
