import React from 'react'
import "./about.css"
import Navbar from "./../homepage/navbar"
import Footer from "./../homepage/footer"

export default function aboutus() {
    return (
        <div>
            <Navbar />
            <div className="container about-us">
                <div className="inside-about-us">
                    <div className="about-section">
                            <p>ABOUT US</p>

                            <br/>
                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br/><br/>
                                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/><br/>
                                 “Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model search for evolved over sometimes by accident, sometimes on purpose ”</span>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
