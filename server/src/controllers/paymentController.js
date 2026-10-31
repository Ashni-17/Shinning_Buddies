import {crud} from '../utils/crud.js';
export default crud('payments',['customer_id','quotation_id','amount','method','status','paid_on']);
