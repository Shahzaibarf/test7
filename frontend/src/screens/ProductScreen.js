import React, { useEffect } from 'react';
import data from '../data';
import {Link} from 'react-router-dom';
import {useSelector,useDispatch } from 'react-redux';
import { get_data } from '../action/productAction';
function ProductScreen(props)
{ 
  const productdata = useSelector(state => state.get_product);
  const {loading,error,product} = productdata;
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(get_data(props.match.params.id))
  },[])
    return (
      loading ? <div>Loading...</div>:
      error ? <div>{error}</div>:
        <div>
          <div className="back-to-result">
            <Link to="/">Back to result</Link>
          </div>
            <>
            <div className="details">
            <div className="details-image">
              <img src={product.image} alt="product"></img>
            </div>
            <div className="details-info">
              <ul>
                <li>
                  <h4>{product.name}</h4>
                </li>
                <li>
                Rating: <b>{product.rating}</b>
                </li>
                <li>
                Reviews: <b>{product.numReviews}</b>
                </li>
                <li>
                  Price: <b>${product.price}</b>
                </li>
                <li>
                  Description:
                  <div>{product.description}</div>
                </li>
              </ul>
            </div>
            <div className="details-action">
              <ul>
                <li>Price: {product.price}</li>
                <li>
                  Status:{' '}
                  {product.countInStock > 0 ? 'In Stock' : 'Unavailable.'}
                </li>
                <li>
                  Qty:{' '}
                  <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                  </select>
                </li>
                <li>
                
                    <button
                      className="button primary"
                    >
                      Add to Cart
                    </button>
                  
                </li>
              </ul>
            </div>
          </div>
         
            </>
          
        </div>
      );
}

export default ProductScreen;