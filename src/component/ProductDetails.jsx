import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { items } from './Data';
import Product from './Product';

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState({})
    const [relatedProducts, setRelatedProducts] = useState({})
    useEffect(() => {
        const filterProduct = items.filter((product) => product.id == id)
        //console.log(filterProduct)
        setProduct(filterProduct[0])

        const relatedProducts = items.filter((categories) => categories.category === product.category)
        console.log(relatedProducts)
        setRelatedProducts(relatedProducts)

    }, [id,product.category])
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
            {/* <Product cart={cart} setCart={setCart} items={relatedProducts}/> */}
        </>
    )
}

export default ProductDetails;
