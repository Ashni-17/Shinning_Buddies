import {crudRouter} from '../utils/crud.js';import c from '../controllers/warrantyController.js';
export default crudRouter(c,r=>r.get('/passport/:installationId',c.passport));
