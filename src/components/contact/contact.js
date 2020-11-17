import React from 'react'
import "./contact.css"
import "./../homepage/navbar"
import Navbar from './../homepage/navbar'
import Footer from "./../homepage/footer"

export default function contact() {
    return (
        <div>
            <Navbar />
            <div className="container contact-main">
                <div className="contact-main-1">
                    <p>contact us</p>
                    <h4>(123) 456-789</h4>
                    <p className="present">Live Representatives 24/7/365, no waiting.</p>
                    <br />
                    <div className="contact-details">
                        <div>
                            <p>Fax</p>
                            <ul>
                                <li>(123)456-7890</li>
                            </ul>
                        </div>

                        <div>
                            <p>Email</p>
                            <ul>
                                <li>24 hours a day</li>
                                <li>example@example.com</li>
                            </ul>
                        </div>
                    </div>

                    <br />

                    <div className="contact-details">
                        <div>
                            <p>Help center</p>
                            <ul>
                                <li>(123)456-7890</li>
                            </ul>
                        </div>

                        <div>
                            <p>Address</p>
                            <ul>
                                <li>AZ tape usa</li>
                                <li>example@example.com</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>


                {/* this is mobile */}

                 <div className="container-fluid contMain">
            <p className="contMain-p1">CONTACT US</p>
            <h3 className="contMain-h3-1">1-800-295-5510</h3>
            <p className="contMain-p1">Live Representatives 24/7/365, no waiting.</p>
            <br />
            <h6>Fax</h6>
                <li className="contMain-li-1">1-800-295-5571</li>
            <br />
            <h6>Email</h6>
                <li className="contMain-li-1">24 hours a day</li>
                <li className="contMain-li-2">customer.service@uline.com</li>
            <br />
            <h6>Address</h6>
            <p className="contMain-li-1">Uline<br />12575 Uline Drive<br />Pleasant Prairie
                <br /> <span className="contMain-li-2">Location & Directions</span>
            </p>
            <br />
            <h6>Chat</h6>
            <p className="contMain-li-1">Service not Available</p>
        </div>                


            <Footer />
        </div>
    )
}
