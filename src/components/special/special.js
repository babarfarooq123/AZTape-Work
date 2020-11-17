import React from 'react'
import "./special.css"
import Navbar from "./../homepage/navbar"

export default function special() {
    return (
        <div>
            <Navbar /> 
            <div className="container main-special">
                <div className="special-1">
                <h6>SPECIAL OFFER</h6> 
                <br />
                <br /> 
                    <h6 className="head-title">ON SALE</h6>     
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-6">
                            <div>
                                <img width="50%" src="https://images.uline.com/is/image/content/dam/images/promo/landingpages/sales/sp581_specialtybubble/SP581_ENUS_btn_2col.jpg?&qlt=75&wid=880&hei=296&iccEmbed=1&icc=AdobeRGB" alt="product-1"/>
                                <p>Economy Air bubble Scale</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-6">
                            <div>
                                <img width="50%" src="https://images.uline.com/is/image/content/dam/images/promo/landingpages/sales/sp581_specialtybubble/SP581_ENUS_btn_2col.jpg?&qlt=75&wid=880&hei=296&iccEmbed=1&icc=AdobeRGB" alt="product-1"/>
                                <p>Economy Air bubble Scale</p>
                            </div>
                        </div>       
                    </div>

                    {/* special offer */}
                    <h6 className="head-title">Special offer</h6>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-6">
                            <div>
                                <img width="50%" src="https://images.uline.com/is/image/content/dam/images/promo/landingpages/sales/sp581_specialtybubble/SP581_ENUS_btn_2col.jpg?&qlt=75&wid=880&hei=296&iccEmbed=1&icc=AdobeRGB" alt="product-1"/>
                                <p>Best Selling Boxes</p>
                            </div>
                        </div>     
                    </div>


                    {/* exclusive */}

                    <h6 className="head-title">Exclusive</h6>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-6">
                            <div>
                                <img width="30%" src="https://images.uline.com/is/image/content/dam/images/promo/specialspage/sp_np_4col.jpg?&qlt=80&wid=410&hei=410&iccEmbed=1&icc=AdobeRGB" alt="product-2"/>
                                <p>New products</p>
                            </div>
                        </div>     
                    </div>

                </div>
            </div>
        </div>
    )
}
