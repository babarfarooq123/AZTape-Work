import React, {useState, useEffect} from 'react';  
// import '../homepage/homepage.css';
import "./box.css"
import Navbar from "./../homepage/navbar";
import Footer from "./../homepage/footer";
import {Link, useParams} from 'react-router-dom';
import db from '../../config/dbconfig';

export default function Boxcategory() {
    const product = useParams();
    
    let [prod, setProd] = useState([])

    useEffect(()=>{
        db.collection('Home').doc(product.productName).onSnapshot((res)=>(Object.keys(res.data()).map((snap)=>snap!=='imageURL'?setProd(prod => [...prod, {'id': snap, 'img': res.data()[snap].imageURL}]):'')))


        },[])
    
    return (
        <div className="mainBox">
            <Navbar />
                <div className="container" id="box">
                    <div className="container box-diver">
                    <h1>{product.productName}</h1>

                    <div className="row" id="boxes-main">
                        {
                            prod.map((val, ind)=><div className="col-lg-3 col-md-4 col-6">
                            <Link to={`${product.productName}/${val.id}`}>
                                <img className="img-section" src={val.img} alt="pic1" width="80%"/>
                                <p className="p-tag">{val.id}</p>
                            </Link>
                        </div>)
                        }
                    </div>
                    
                    </div>
                </div>
            <Footer />
        </div>
    )
}
