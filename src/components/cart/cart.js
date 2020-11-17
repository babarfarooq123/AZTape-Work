import React from 'react';
import Navbar from '../homepage/navbar';
import Footer from '../homepage/footer';
import './cart.css';



export default function cart() {

    

    return (
        <div className="cart">
            <Navbar />
            <div className="container main1">

                <div className="main-div1">
                    <p className="main-p">Continue Shopping</p>
                </div>

                <div className="main-div2">
                    <div className="container main-div21">
                        <h3 className="main-div2-h3">Shopping Cart</h3>
                        <hr />
                        <table>
                            <tr className="border_bottom">
                                <th>Model#</th>
                                <th>Description</th>
                                <th>Qty</th>
                                <th>Price</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                        </table>

                            <p className="main-p1">Your cart is currently empty.</p>
                            <hr className="light" />
                    </div>

                    {/* Mobile Responses */}
                    <div className="resCart">
                        <h4 className="resCart-h4">Shopping Cart</h4>
                    </div>

                    {/* <div>
                        <div className="cartFlex">
                            <img className="cartFlex-img" src="https://aztape.net/wp-content/uploads/2019/10/c_g27_39848cba389bd82bc7238b95060afab6.jpg" alt="pic" width={100} height={100} />
                            <div className="cartFlex-div">
                                <p>Title</p>
                                <p>Size</p>
                                <p>Description</p>
                            </div>
                            <button className="cartFlex-btn">X</button>
                        </div>
                        <br />
                        <div className="cartEnd">
                            <p className="cartEnd-p">Model</p>
                            <p className="cartEnd-p">Total: <span>$4444</span></p>
                            <div className="cartEnd-div1">
                                <button className="btn-primary btn cartEnd-btn1">-</button>
                                <input className="cartEnd-inp1" type="number" placeholder="Qty" />
                                <button className="btn-dark btn cartEnd-btn1">+</button>
                            </div>
                        </div>
                    </div>





                    <div>
                        <div className="cartFlex">
                            <img className="cartFlex-img" src="https://aztape.net/wp-content/uploads/2019/10/c_g27_39848cba389bd82bc7238b95060afab6.jpg" alt="pic" width={100} height={100} />
                            <div className="cartFlex-div">
                                <p>Title</p>
                                <p>Size</p>
                                <p>Description</p>
                            </div>
                            <button className="cartFlex-btn">X</button>
                        </div>
                        <br />
                        <div className="cartEnd">
                            <p className="cartEnd-p">Model</p>
                            <p className="cartEnd-p">Total: <span>$4444</span></p>
                            <div className="cartEnd-div1">
                                <button className="btn-primary btn cartEnd-btn1">-</button>
                                <input className="cartEnd-inp1" type="number" placeholder="Qty" />
                                <button className="btn-dark btn cartEnd-btn1">+</button>
                            </div>
                        </div>
                    </div> */}



                    <div className="subTotal">
                        <p className="subTotal-p">Subtotal: <span className="subTotal-span">$3000</span></p>
                        <button className="btn btn-primary">Checkout</button>
                    </div>









                    {/* <div className="cartFlex">
                        <img className="cartFlex-img" src="https://aztape.net/wp-content/uploads/2019/10/c_g27_39848cba389bd82bc7238b95060afab6.jpg" alt="pic" width={100} height={100} />
                        <div className="cartFlex-div">
                            <p>Title</p>
                            <p>Size</p>
                            <p>Description</p>
                        </div>
                        <button className="cartFlex-btn">X</button>
                        <br/>
                        <div className="cartEnd">
                            <h4>Model</h4>
                            <h4>Total: <span>$4444</span></h4>
                            <div className="cartEnd-div1">
                                <button className="btn-primary btn">-</button>
                                <input type="number" placeholder="Qty" />
                                <button className="btn-dark btn">+</button>
                            </div>
                        </div>
                    </div> */}
                  
                </div>

            </div>
            <Footer />
        </div>
    );
}
