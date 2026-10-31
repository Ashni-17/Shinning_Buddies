import {api} from './api.js';
export const list=()=>api('/auth');export const get=id=>api('/auth/'+id);
export const create=body=>api('/auth',{method:'POST',body});export const update=(id,body)=>api('/auth/'+id,{method:'PUT',body});
