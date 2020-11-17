import React, {useState, useEffect} from 'react';
import Navbar from "./../../homepage/navbar";
import Footer from "./../../homepage/footer";
import {Link, useParams} from 'react-router-dom';
import "./sub.css";
import db from '../../../config/dbconfig';


export default function Boxcategory() {
    let {productName, category} = useParams();
    console.log(productName, category);

    let [prod, setProd] = useState([])

    useEffect(()=>{
        db.collection('Home').doc(productName).onSnapshot((res)=>((Object.keys(res.data()).map((val)=>val===category?Object.keys(res.data()[category]).map((val1)=>val1!=='imageURL'?setProd(prod => [...prod, {id: val1, img:res.data()[category][val1].imageURL}]):''):''))))

    },[])
    console.log(prod)
    return ( 
        <div>
            <Navbar />
            <div className = "container" id = "box">
                <div className="container box-diver">
                    <div className = "row"  >

                        {
                            prod.length?prod.map((val2)=><div className = "col-lg-3 col-md-4 col-6" >
                            <Link to={`${category}/${val2.id}`}>
                                <img className="img-sub" src = {val2.img}
                                alt = "pic1" />
                            </Link>
                            <p className="cg-caption"> {val2.id} </p> 
                        </div>):""
                        }

                    </div> 
                </div>
            </div>
            <Footer/>
        </div>
    )
}