import {crud} from '../utils/crud.js';
export default crud('service_tickets',['customer_id','installation_id','issue','priority','status','assigned_to']);
