import {Router} from 'express';import {summary} from '../controllers/dashboardController.js';import {protect} from '../middleware/authMiddleware.js';
const r=Router();r.get('/',protect,summary);export default r;
