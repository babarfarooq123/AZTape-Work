import React, {useState, useEffect} from 'react';
import "./homepage.css";
import { Link } from "react-router-dom"
import db from '../../config/dbconfig';



export default function Categories() {
    let [prod, setProd] = useState([])

    useEffect(()=>{
        
        db.collection("Home").onSnapshot((res)=>res.docs.map((snap)=>setProd(prod => [...prod, {'id': snap.id, 'img': snap.data().imageURL}])));

        },[])

    return (
        
        <div className="container pic3">
            
            <div className="row pic3-row">
                <div className="col-lg-8 col-md-8 col-8">
                    <div className="img-fluid">
                        <img className="imgfluid-1" src="https://images.uline.com/is/image/content/dam//images/homepage/nov_2020/us/feature1_US.jpg?&wid=1640&hei=1050&qlt=75&iccEmbed=1&icc=AdobeRGB" alt="ad-1" width="89%"/>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-4" id="ads-2">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12 pic3-1">
                            <img className="pic3-1-img1" src="https://images.uline.com/is/image/content/dam/images/homepage/nov_2020/us/feature2_US.jpg?&wid=840&hei=516&op_usm=1,1,1&qlt=75&iccEmbed=1&icc=AdobeRGB" alt="ad-2" width="95%" />
                        </div>
                    </div>
                    <div className="row" id="ad-sider">
                        <div className="col-lg-6 col-md-12 col-sm-12 ad-sider-div1">
                            <img src="https://images.uline.com/is/image/content/dam/images/homepage/nov_2020/us/feature3_US.jpg?&wid=434&hei=534&op_usm=1,1,1&qlt=75&iccEmbed=1&icc=AdobeRGB" alt="ad-3" id="ad-3" />
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <img src="https://images.uline.com/is/image/content/dam/images/homepage/nov_2020/us/feature4_US.jpg?&wid=406&hei=534&op_usm=1,1,1&qlt=75&iccEmbed=1&icc=AdobeRGB" alt="ad-4" id="ad-4"/>
                        </div>
                    </div>
                </div>
                
            </div>


            <div className="container" id="box">
                <div className="hp-subimages">
                    {
                        prod.map((val, ind)=><Link key={ind} to={`/${val.id}`}>
                            <img className="lazy-image" src={val.img} alt={val.id} />
                            <h3 className="prod-h3">{val.id}</h3>
                        </Link>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
