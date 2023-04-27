import "../styles/ProductView.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetails() {
  const [productData, setProductData] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://api.unsplash.com/photos/${params.id}?client_id=${process.env.REACT_APP_API_KEY}`)
      .then((response, error) => {
        error ? console.log(error) : setProductData(response.data);
      });
  }, []);

  return (
    <>
      {productData.id ? (
        <div className="product-view">
          <div className="product-image-container">
            <img
              className="product-image"
              src={productData.urls.regular}
              alt="This is a product."
            />
          </div>
          <div className="product-information">
            <h2 className="product-title">{productData.title}</h2>
            <p className="product-description">{productData.description}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      ) : (
        <div className="product-view">
          <div className="product-image-container skeleton"></div>
          <div className="product-information-skeleton">
            <div className="product-title-skeleton"></div>
            <div className="product-description-skeleton"></div>
            <button className="add-to-cart skeleton">Add to Cart</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
