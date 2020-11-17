import React from 'react'
import "./homepage.css"
import {Link} from "react-router-dom"

export default function footer() {
    return ( 
        <div className="footer">
                <div>
                    <Link to="/" >
                        <p className="link">Home</p>
                    </Link>
                    <Link to="/contactus" >
                        <p className="link">contact us</p>
                    </Link>
                    <Link to="/">
                        <p className="link">help</p>
                    </Link>
                </div>
                <div>
                <Link to="/products" >
                    <p className="link">All product</p>
                    </Link>
                    <p className="link">Site Map</p>
                <Link to="/products" >
                    <p className="link">Shipping boxes</p>
                </Link>
                </div>
                <div>
                    <p>career</p>
                    <p>plastic bags</p>
                    <p>Privacy/Terms</p>
                </div>
                <div>
                    <Link to="/catalogrequest">
                        <p className="link">catalog Request</p>
                    </Link>
                    <p>Az</p>
                    <p>accessibilty</p>
                </div>  
        </div>
    )
}