import axiosInstance from '../helper/axios';
import { productConstant } from './action.constant';
import { toastSucess, toastError } from '../UI/toast/toast';
export const getProductAction = (_id) => {
    return async (dispatch) => {
        dispatch({
            type: productConstant.GET_PRODUCT_REQUEST,
            payLoad: {
                loading: true,
            },
        });
        const res = await axiosInstance().get(`/api/product/${_id}`);
        console.log(res);
        if (res.status == 200) {
            dispatch({
                type: productConstant.GET_PRODUCT_SUCCESS,
                payLoad: {
                    loading: false,
                    product: res.data.product,
                    productByPrice: res.data.productByPrice,
                },
            });
        }
    };
};
export const updateProductAction = (currentProduct) => {
    return async (dispatch) => {
        // dispatch({
        //     type: productConstant.UPDATE__PRODUCT__REQUEST,
        //     payLoad: {
        //         loading: true,
        //     },
        // });
        dispatch({
            type: productConstant.UPDATE__PRODUCT__SUCCESS,
            payLoad: {
                loading: false,
                product: currentProduct,
            },
        });
        console.log(currentProduct);
    };
};
