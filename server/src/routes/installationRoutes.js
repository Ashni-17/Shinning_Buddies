import multer from 'multer';import path from 'path';import {fileURLToPath} from 'url';import {crudRouter} from '../utils/crud.js';import c from '../controllers/installationController.js';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../../../uploads');
const up=dir=>multer({storage:multer.diskStorage({destination:path.join(root,dir),filename:(q,f,cb)=>cb(null,`${Date.now()}${path.extname(f.originalname)}`)}),
  limits:{fileSize:8*1024*1024},fileFilter:(q,f,cb)=>cb(null,/^image\//.test(f.mimetype))});
export default crudRouter(c,r=>{r.post('/:id/photo',up('installation-photos').single('file'),c.addFile('photos'));r.post('/:id/signature',up('signatures').single('file'),c.addFile('signature'))});
