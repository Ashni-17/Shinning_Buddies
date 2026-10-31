import {api} from './api.js';
export const list=()=>api('/warranty');export const get=id=>api('/warranty/'+id);
export const create=body=>api('/warranty',{method:'POST',body});export const update=(id,body)=>api('/warranty/'+id,{method:'PUT',body});
