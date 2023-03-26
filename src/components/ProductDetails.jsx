import "./ProductDetails.css";
import { useState, useEffect } from 'react';

function ProductDetails({ productId: id }) {
    const [productData, setProductData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Someone done fucked up');
                }
                return response.json();
        })
        .then(data => setProductData(data))
        .catch(error => setError(error));
    }, []);




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