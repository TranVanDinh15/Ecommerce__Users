import { productConstant } from '../actions/action.constant';

// import
const initialState = {
    loading: false,
    product: [],
    productByPrice: [],
};
export const productReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case productConstant.GET_PRODUCT_REQUEST: {
            return {
                loading: actions.payLoad.loading,
            };
        }
        case productConstant.GET_PRODUCT_SUCCESS: {
            return {
                loading: actions.payLoad.loading,
                product: actions.payLoad.product,
                productByPrice: actions.payLoad.productByPrice,
            };
        }
        // case productConstant.UPDATE__PRODUCT__REQUEST: {
        //     return {
        //         loading: actions.payLoad.loading,
        //     };
        // }
        case productConstant.UPDATE__PRODUCT__SUCCESS: {
            return {
                ...state,
                loading: actions.payLoad.loading,
                product: actions.payLoad.product,
            };
        }
    }
    return state;
};
