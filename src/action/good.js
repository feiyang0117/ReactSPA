// const getGoods = goods => {
//     return {
//         type: 'GET_GOODS',
//         payload: goods
//     };
// }
import {createAction} from 'redux-actions';
export const getGoods = createAction('GET_GOODS'); 