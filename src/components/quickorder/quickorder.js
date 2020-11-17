import React from 'react';
import Navbar from '../homepage/navbar';
import './quickorder.css';
import Footer from '../homepage/footer';


function Quickorder() {
    return ( 
        <div className = "quickMain">
            <Navbar />

            <div className="container quickMain-div1">
                <div className="container">
                    <h2 className="quickMain-h2">CATALOG QUICK ORDER</h2>
                    <hr />

                    <p className="quickMain-p">Enter AZTape Model Numbers and unit quantities below.</p>

                    <div className="container quickMain-div2">
                        <table class="table table-borderless">
                            <thead>
                                <tr>
                                    <th scope="col">Model#</th>
                                    <th scope="col">Quantity</th>
                                    <th className="quickMain-inp-bless" scope="col">Description will appear here after entering Model # and Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {/* <th scope="row">1</th> */}
                                    <td><input className="input-group" type="text"/></td>
                                    <td><input className="input-group" type="text"/></td>
                                    <td><input className="input-group quickMain-inp-bless" type="text"/></td>
                                </tr>
                                <tr>
                                    {/* <th scope="row">2</th> */}
                                    <td><input className="input-group" type="text"/></td>
                                    <td><input className="input-group" type="text"/></td>
                                    <td><input className="input-group quickMain-inp-bless" type="text"/></td>
                                </tr>
                                <tr>
                                    {/* <th scope="row">3</th> */}
                                    <td><input className="input-group" type="text"/></td>
                                    <td><input className="input-group" type="text"/></td>
                                    <td><input className="input-group quickMain-inp-bless" type="text"/></td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="quickMain-last">
                            <div>
                                <button className="btn quick-btn1 input-group">Add Row</button>
                            </div>
                            <div className="quickMain-last1">
                                <button className="btn quick-last-btn input-group">Clear All</button>
                                <button className="btn quick-btn3 input-group">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>

            <Footer />
        </div>
    )
}


export default Quickorder;