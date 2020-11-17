import React, {useState, useEffect} from 'react'
import "./subcategory.css"
import Navbar from '../../../homepage/navbar';
import {useParams} from 'react-router-dom';
import db from '../../../../config/dbconfig';

function Subcategorypage() {
    const {productName, category, subcategory} = useParams()
    const [img, setImg] = useState('')
    const [tabu, setTabu] = useState({})

    useEffect(()=>{
        db.collection('Home').doc(productName).onSnapshot((res)=>((Object.keys(res.data()).map((val)=>val===category?Object.keys(res.data()[category]).map((val1)=>val1==subcategory?setImg(res.data()[category][subcategory].imageURL):''):''))))

    },[])

    useEffect(()=>{
        db.collection('Tables').doc(subcategory).onSnapshot((res)=>(setTabu(res.data())))

    },[])

    return (
        <div className="sub">
            {
                Object.keys(tabu)?Object.keys(tabu).map((v)=>console.log(v)):''
            }
            <Navbar />
            <div className="container subMain">
                <div className="row subMain-div1">
                    <div className="container subMain-div2">
                        <h2 className="subMain-h2-1">{subcategory}</h2>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-12">
                                <img src={img} width="85%" alt="Page-sub"/>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12 subMain-div3">
                                <h2>{subcategory}</h2>
                                <p>Provide layers to separate and protect items.</p>
                                <li>
                                    <span className="bold-text">275 lb. Test - Industrial duty.</span>Offers extra strength to separate product layers on skids or in boxes.
                                </li>
                                <li>
                                    <span className="bold-text">275 lb. Test Double Wall - Heavy duty.</span>For stacking heavy items and keeping flat items from bending.
                                </li>
                                <li>
                                    <span className="bold-text">1,100 lb. Test Triple Wall - Extra heavy duty.</span>Place between layers of heavy machinery and appliances.
                                </li>
                            </div>
                        </div>

                        {Object.keys(tabu).length?Object.keys(tabu).map((res)=>
                            <div>
                                <p className="tabUp-p">{res}</p>
                            <table className="table11" border="1">
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        {
                                            tabu[res].length?tabu[res].map((val, index)=>typeof(val)=='string'?<th className="thh" rowSpan={2} key={index}>{val}</th>:<th className="thh" colSpan={Object.keys(val[Object.keys(val)]).length}>{Object.keys(val)[0]}</th>):''
                                        }
                                    </tr>
                                    <tr>
                                        {
                                            tabu[res].length?tabu[res].map((val, index)=>typeof(val)!=='string'?Object.keys(val[Object.keys(val)]).map((v, ind)=><th className="thh">{val[Object.keys(val)[0]][v]}</th>):''):''
                                        }
                                    </tr>
                                </tbody>
                            </table>
                            </div>):''
                        }



                        {/* {
                            (tabu).length?(tabu).map((val)=><div>
                                <p className="tabUp-p">{val}</p>
                                <table border='1'>
                                        
                                    <tbody>
                                    <thead>
                                        <tr>
                                            
                                            {
                                                Object.keys(tabu[val]['header']).map((v,index)=>{
                                        
                                                return (typeof(tabu[val]['header'][v]) == "string") ? (<td rowSpan={2} key={index}>{tabu[val]['header'][v]}</td>):(
                                                    <td colSpan={tabu[val]['header'][v].length} key={index}>{v}</td>
                                                    )
                                                })                    
                                            }
                                        </tr>
                                        <tr>
                                            {
                                            Object.keys(tabu[val]['header']).map((v, index)=>{
                                            return (typeof(tabu[val]['header'][v]) !== 'string') ? (tabu[val]['header'][v].map((att, ind)=> <td key={ind}>{att}</td> )):''
                                            })
                                            }
                                        </tr>
                                        </thead>
                                    </tbody>
                                </table>
                            </div>):(<div></div>)
                        } */}





                        {/* <p className="tabUp-p">275 LB. TEST CORRUGATED PADS – SINGLE WALL</p>
                        
                        <table className="table11" border="1">
                            <tr>
                                <th className="thh" rowSpan="2">Model<br />No.</th>
                                <th className="thh" rowSpan="2">SIZE<br />W X L</th>
                                <th className="thh" colSpan="4">PRICE PER PAD</th>
                                
                                <th className="thh" rowSpan="2">BUNDLE/<br />BALE QTY.</th>
                                <th className="thh" rowSpan="2">LBS./<br />BNDL.</th>
                                <th className="thh" rowSpan="2" colSpan="2">ADD TO<br />CART</th>

                            </tr>
                            <tr>
                                <th className="thh">10-25</th>
                                <th className="thh">100</th>
                                <th className="thh">250</th>
                                <th className="thh">500+</th>
                            </tr>
                            <tr>
                                <td className="model tdd">S-12647</td>
                                <td className="tdd">30 X 40''</td>
                                <td className="tdd">$1.97</td>
                                <td className="tdd">35</td>
                                <td className="tdd">$1.83</td>
                                <td className="tdd">1.75</td>
                                <td className="tdd">1.58</td>
                                <td className="tdd">25/<br />250</td>
                                <td className="tabTd tdd">
                                    <input className="input-group tabInp" type="text" value="25" />
                                </td>
                                <td className="tdd">
                                    <button className="tabBtn">ADD</button>
                                </td>
                            </tr>
                        </table> */}


                        <div className="prodMob">
                            <button className="btn-block prodMob-btn">Products</button>
                            <button className="btn-block prodMob-btn">Description</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Subcategorypage;