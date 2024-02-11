import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {addToCart, selectCartItems} from '../redux/cartSlice';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

function Product(props) {
    console.log(props);
    const [items,setItems] = useState(props.items)
    useEffect(()=>{
        setItems(props.items)
    })
    const dispatch = useDispatch()
    const handleAddToCart = (item)=>{
        dispatch(addToCart(item))
        toast.success('Item added to cart', {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                   
                });
    }

    const cartItem = useSelector(selectCartItems)

  
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div className="container my-5">
                <div className="row">
                    {
                        items.map((product) => {
                            return (

                                <div key={product.id} className="col-lg-4 col-md-6 my-3">
                                    <div className="card" style={{ width: '18rem' }}>
                                        <Link to={`/product/${product.id}`}
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}
                                        >
                                            <img className="card-img-top" src={product.imgSrc} alt="Card image cap" />
                                        </Link>
                                        <div className="card-body">
                                            <h5 className="card-title">{product.title}</h5>
                                            <p className="card-text">{product.description}</p>
                                            <button className="btn btn-primary mx-3">{product.price}{"₹"}</button>
                                            <button className="btn btn-warning"
                                                onClick={() => handleAddToCart(product)}
                                            >Add To Cart</button>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Product