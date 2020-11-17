
import React from 'react'
import Navbar from "./homepage/navbar"
import Footer from "./homepage/footer"
import Product from "./homepage/product"

export default function home() {
    return (
        <div>
            <Navbar />
            <Product />
            <Footer />
        </div>
    )
}
