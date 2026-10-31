export const notFound=(req,res)=>res.status(404).json({message:`No route for ${req.method} ${req.originalUrl}`});
export const errorHandler=(err,req,res,next)=>{console.error(err);res.status(err.status||500).json({message:err.code==='ER_NO_REFERENCED_ROW_2'?'Linked record does not exist':err.message||'Server error'})};
