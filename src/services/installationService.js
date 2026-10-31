import {api} from './api.js';
export const list=()=>api('/installations');export const get=id=>api('/installations/'+id);
export const create=body=>api('/installations',{method:'POST',body});export const update=(id,body)=>api('/installations/'+id,{method:'PUT',body});
