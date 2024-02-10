import React from "react"
import { Link } from "react-router-dom";
import { clearCart,selectCartItems,selectCartTotalPrice } from "../redux/cartSlice";
import { useDispatch,useSelector } from "react-redux";
function Cart({ cart, setCart }) {
    const dispatch = useDispatch()
    const cartItem = useSelector(selectCartItems)
    const totalPrice = useSelector(selectCartTotalPrice)
    return (
        <>
            <div className="container my-5" style={{width:'54%'}}>
                {
                    cartItem.length==0 ? (
                        <>
                            <div className="container my-5" style={{width:"54%"}}>
                                <h1>Your cart is empty</h1>
                                <Link to={"/"} className="btn btn-warning">Continue shopping.......</Link>
                            </div>
                        </>
                    ):
                    cartItem.map((product)=>{
                        return(
                            <div key={product.id} className="card mb-3" style={{ width: '700px' }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={product.imgSrc} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">{product.description}</p>
                                        <button className="btn btn-primary mx-3">{product.price}{"₹"}</button>
                                        <button className="btn btn-warning"
                                                onClick={() => addToCart(product.id, product.price, product.description, product.imgSrc)}
                                        >Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
            <div>
                TotalPrice : {totalPrice}
            </div>
            </div>
            {
                cartItem.length!=0 && (
                    <div className="container text-center my-5 mx-5" style={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }} >
                        <button className="btn btn-warning mx-5">Checkout</button>
                        <button onClick={()=>dispatch(clearCart())} className="btn btn-danger">Clear Cart</button>
                    </div>
                )
            }
          
        </>
    )
}

export default Cart;