const BASE=import.meta.env.VITE_API_URL;
export async function api(path,opts={}){const r=await fetch(BASE+path,{headers:{'Content-Type':'application/json',Authorization:`Bearer ${localStorage.getItem('sb_token')||''}`},...opts,body:opts.body&&JSON.stringify(opts.body)});
  if(!r.ok)throw new Error((await r.json().catch(()=>({}))).message||'Request failed');return r.json()}
