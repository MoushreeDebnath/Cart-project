import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import items from '../data.json';
import Product from './Product';

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState({})
    const [relatedProducts, setRelatedProducts] = useState([])

    useEffect(() => {
        const filterProduct = items.filter((product) => product.id == id)[0]
        setProduct(filterProduct)
        const relatedProd = items.filter((categories) => categories.category === filterProduct.category)
        setRelatedProducts(relatedProd)
    },[id])

    return (
        <>
            <div className="container details">
                <div className="img">
                    <img src={product.imgSrc} alt="product-img" />
                </div>
                <div className="text-center">
                    <h1 className="card-title">{product.title}</h1>
                    <p className="card-text">{product.description}</p>
                    <button className="btn btn-primary mx-3">{product.price}{"₹"}</button>
                    <button className="btn btn-warning">Add To Cart</button>
                </div>
            </div>
            <Product items={relatedProducts}/>
        </>
    )
}

export default ProductDetails;
