import "../components/ProductDetails.css";
import { useState, useEffect, } from 'react';
import { useParams } from "react-router-dom";

//we should take a look at this function
function ProductDetails() {
    const [productData, setProductData] = useState(null);
    const [error, setError] = useState(null);
    const params = useParams()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Someone done fucked up');
                }
                return response.json();
        })
        .then(data => setProductData(data))
        .catch(error => setError(error));
    }, []);



    // we should create a loading component and import it for conditional rendering everytime we need it 
    // e.g productData ? // do something.. : show <Loading/> I'll show you more about ternary operators and && in React next time
    // but this is good! 

    if (error) {
        return <div>{error}</div>;
    } else if (!productData) {
        return <div>Loading...</div>
    } else {
        console.log(productData);
        return (
            <div className="product-details">
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
            </div>
        );
    }
}

export default ProductDetails;