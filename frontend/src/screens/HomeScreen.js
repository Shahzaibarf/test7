import React, { useEffect, useState } from 'react';
import {Link} from  'react-router-dom';
import axios from 'axios';
import { useDispatch,useSelector} from 'react-redux';
import { listProducts} from '../action/productAction';


function HomeScreen(props)
{
//  const [products,setProduct] = useState([]);
 const productList = useSelector(state => state.productList);
 const {products,loading,error} = productList;
 const dispatch = useDispatch();
 useEffect( () =>{
  dispatch(listProducts());
 },[])

    return(
    loading ? <div>Loading...</div>:
    error ? <div>{error}</div>:
            <div>
              <ul className="filter">
                <li>
                  <form>
                    <input
                      name="searchKeyword"/>
                    <button type="submit">Search</button>
                  </form>
                </li>
                <li>
                  <select name="sortOrder">
                    <option value="">Newest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                  </select>
                </li>
              </ul>
                <ul className="products">
                  {products.map((product) => (
                    <li key={product._id}>
                      <div className="product">
                          <Link to={'product/'+product._id}>
                          <img
                            className="product-image"
                            src={product.image}
                            alt="product"
                          />
                        </Link>
                        <div className="product-name">
                          <Link to={'/product/' + product._id}>{product.name}</Link>
                        </div>
                        <div className="product-brand">{product.brand}</div>
                        <div className="product-price">${product.price}</div>
                        <div className="product-rating">
                            Rating :{product.rating} 
                </div> 
                        <div className="product-review">
                        Reviews:{product.numReviews + ' reviews'}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
            </div>
    );
}
export default HomeScreen;