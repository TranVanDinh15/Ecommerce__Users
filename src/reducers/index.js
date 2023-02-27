import { combineReducers } from 'redux';
import { loginReducer } from './auth.reducer';
import { category } from './category.reducer';
import { productReducer } from './product.reducer';
const rootReducer = combineReducers({
    auth: loginReducer,
    category: category,
    product: productReducer,
});
export default rootReducer;
