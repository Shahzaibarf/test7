import axios from "axios";
import { PRODUCT_FAIL, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "../constants/productConstants"

const listProducts = () => async(dispatch) =>{
    try{
            dispatch({type:PRODUCT_LIST_REQUEST});
            const {data} = await axios.get("http://localhost:5000/api/products");
            dispatch({type:PRODUCT_LIST_SUCCESS,payload:data});
    }catch(error)
    {
            dispatch({type:PRODUCT_LIST_FAIL,payload:error.message});
    }
}



const get_data = (id) => async(dispatch) =>{
        try{
                dispatch({type:PRODUCT_REQUEST})
                const {data} = await axios.get("http://localhost:5000/api/get_product/"+id);
                dispatch({type:PRODUCT_SUCCESS,payload:data})
        }catch(error)
        {
                dispatch({type:PRODUCT_FAIL,payload:error.message})
        }
}
export { listProducts,get_data };