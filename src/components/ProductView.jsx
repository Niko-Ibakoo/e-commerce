import "../styles/ProductView.css";
import { useState, useEffect, } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetails() {
  const [productData, setProductData] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((response, error) => {
        error ? console.log(error) : setProductData(response.data);
      });
  }, []);

    return (
      <>
        {productData ?
          <div className="product-view">
            <div className="product-image-container">
              <img
                className="product-image"
                src={productData.image}
                alt="This is a product."
              />
            </div>
            <div className="product-information">
              <h2 className="product-title">{productData.title}</h2>
              <p className="product-description">{productData.description}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>

        : <div>loading</div>}
      </>
    );
  }

export default ProductDetails;
