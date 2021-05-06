import { PRODUCT_FAIL, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_REQUEST, PRODUCT_SUCCESS} from "../constants/productConstants";

function productlistReducer (state={products:[]},action)
{
    switch(action.type)
    {
        case PRODUCT_LIST_REQUEST:
            return {loading:true};
        case PRODUCT_LIST_SUCCESS:
            return {loading:false,products:action.payload};
        case PRODUCT_LIST_FAIL:
            return {loading:false,error:action.payload}
        default:
        return state;
    }
}

function getDataProduct(state={product:[]},action)
{
    switch(action.type)
    {
        case PRODUCT_REQUEST :
            return {loading:true}
        case PRODUCT_SUCCESS :
            return {loading:false,product:action.payload}
        case PRODUCT_FAIL :
            return {loading:false,error:action.payload}
        default :
        return state;
    }
}
export{ productlistReducer,getDataProduct }