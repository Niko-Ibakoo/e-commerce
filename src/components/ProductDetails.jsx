import "../components/ProductDetails.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
//in react we can use a hook called useParams, so we don't need to pass anything in this function as a param. (I'll explain better on Monday)
function ProductDetails() {
  const [productData, setProductData] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((response, err) => {
        err ? console.log(err) : setProductData(response.data);
      });
  }, []);

  // we should create a loading component and import it for conditional rendering everytime we need it
  // e.g productData ? // do something.. : show <Loading/> I'll show you more about ternary operators and && in React next time
  // but this is good!

    return (
      <>
        {productData? <div className="product-details">
          <img
            className="product-image"
            src={productData.image}
            alt="This is a product."
          />
          <div className="product-information">
            <h2 className="product-title">{productData.title}</h2>
            <p className="product-description">{productData.description}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div> : <div>loading</div>}
      </>
    );
  }


export default ProductDetails;
