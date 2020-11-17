import React from 'react'
import Navbar from "./../components/homepage/navbar"
import Products from "./../components/products/products"
// import "./../components/products/products.css"
import Footer from "./../components/homepage/footer"

export default function products() {
    return (
        <div className="bg-color-gray">
            <Navbar />
            <Products />
            <Footer />
        </div>
    )
}
