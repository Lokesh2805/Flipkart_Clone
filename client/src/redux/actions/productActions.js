
import axios from "axios";

import * as actionType from "../constants/productConstant";
const URL = "https://flipkart-clone2.onrender.com";
export const getProducts = () => async (dispatch) =>{
    try{
        const { data } = await axios.get(`${URL}/products`);
        dispatch({type:actionType.GET_PRODUCTS_SUCCESS, payload: data })
    }catch(error){
        dispatch({type: actionType.GET_PRODUCT_FAIL, payload: error.message })
}
}

export const getProductDetails = (id) => async (dispatch) =>{

    try{
        dispatch({ type: actionType.GET_PRODUCT_DETAILS_REQUEST})
        const { data } = await axios.get(`${URL}/product/${id}`);
        console.log(data);
        dispatch({type:actionType.GET_PRODUCT_DETAILS_SUCCESS, payload: data })

    }catch(error){
        

        dispatch({type: actionType.GET_PRODUCT_DETAILS_FAIL, payload: error.message })


    }

}