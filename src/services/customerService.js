import {api} from './api.js';
export const list=()=>api('/customers');export const get=id=>api('/customers/'+id);
export const create=body=>api('/customers',{method:'POST',body});export const update=(id,body)=>api('/customers/'+id,{method:'PUT',body});
