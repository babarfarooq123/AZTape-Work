import './../../App.css';
import './homepage.css';
import logo from '../../assets/whitelogo.png';
import search from '../../assets/search.png';
import profile from '../../assets/profile.png';
import trolley from '../../assets/store.png';
import call from '../../assets/call.png';
import {useState} from "react";
import {Link} from "react-router-dom";


function Navbar() {
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
      }
      
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.body.style.backgroundColor = "white";
    }
    const upperLink = window.location.toString()
    const split = upperLink.split("/")
    console.log(split)

    let [searchState,setSearchState] = useState(split[3] ? false: true);    
    let [profileState, setProfileState] = useState(false);

 

    return ( 
        <div>
            
            <div className = "contStyle">

                <nav className="navbar navbar-expand-lg navbar-dark indigo darken-2">


                <button onClick={()=>openNav()} className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#main_nav"
                    aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
                    <div class="navbar-toggler-icon"><span></span><span></span><span></span></div>
                </button>
                


                   
                    

                    <Link to="/">
                         <img className="logog" src={logo} alt="logo"/>
                    </Link>
                    <div className="main-icon">
                        <img className="btn setAlign" src={search} alt="search" onClick={()=>{
                            if(searchState){
                                setSearchState(false);
                            }else{
                                setSearchState(true);
                                setProfileState(false);
                            }
                        }}/>
                            <img className="btn setAlign" src={profile} alt="profile" onClick={()=> {
                                if(profileState){
                                    setProfileState(false);
                                }else{
                                    setProfileState(true);
                                    setSearchState(false);
                                    
                                  
                                }
                            }}/>
                        
                                <Link to="/contactus"><img className="btn setAlign" src={call} alt="call icon"/></Link>
                        

                            <Link to="/cart"><img className="btn setAlign" src={trolley} alt="trolley icon"  /></Link>
                        
                    </div>
                    <h4 className="number">(123)456-7890</h4>
                    
                  
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        </ul>
                        <div className="main">
                            <div className="genLinks">
                                <Link to="/" className="specLink log">My Account</Link>
                                <span className="HeadSeparator">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                                <Link to="/contactus" className="specLink log">Contact Us</Link>
                                <span className="HeadSeparator">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                                <Link to="/signin" className="specLink log">Sign In</Link>
                                <span className="HeadSeparator">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                                <Link to="/cart" className="specLink log">Cart $0.0</Link>
                            </div>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2 search-width" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0 gobtn" type="submit">Go</button>
                            </form>
                        </div>
                    </div>
                </nav>

            </div>


        <div className="secNav">
            <nav className="navbar navbar-expand-lg navbar-dark secNav-1">
        
                
                <div className="collapse navbar-collapse" id="main_nav">
                    <ul className="navbar-nav">

                        <li className="nav-item dropdown secNav-li">
                            <p className="p-link dropdown-toggle log" data-toggle="dropdown">  Products  </p>
                            <ul className="dropdown-menu dropdown-menu-left">
                                <li><Link to='/' className="dropdown-item"> Products </Link></li>
                                {/* <li><p className="dropdown-item"> Submenu item 2 </p></li> */}
                            </ul>
                        </li>

                        <li className="nav-item dropdown secNav-li">
                            <p className="p-link dropdown-toggle log" data-toggle="dropdown">  AZ Products  </p>
                            <ul className="dropdown-menu dropdown-menu-left">
                                <li><Link to='/' className="dropdown-item"> AZ Products </Link></li>
                                {/* <li><p className="dropdown-item"> Submenu item 2 </p></li> */}
                            </ul>
                        </li>

                        <li className="nav-item dropdown secNav-li">
                        <p className="p-link dropdown-toggle log" data-toggle="dropdown">  Quick Order  </p>
                            <ul className="dropdown-menu dropdown-menu-left">
                                <li><Link to='/quickorder' className="dropdown-item"> Quick Order </Link></li>
                                {/* <li><p className="dropdown-item"> Submenu item 2 </p></li> */}
                            </ul>
                        </li>

                        <li className="nav-item dropdown secNav-li">
                        <p className="p-link dropdown-toggle log" data-toggle="dropdown">  Catalog Request  </p>
                            <ul className="dropdown-menu">
                                <li><Link to='/catalogrequest' className="dropdown-item"> Catalog Request</Link></li>
                                {/* <li><p className="dropdown-item"> Submenu item 2 </p></li> */}
                            </ul>
                        </li>
                        
                        <li className="nav-item dropdown secNav-li">
                        <p className="p-link log" data-toggle="dropdown"><Link className="white-color" to="/special"> Special Offers </Link>  </p>   
                            {/* <ul className="dropdown-menu dropdown-menu-left">     up class => dropdown-toggle
                                <li><p className="dropdown-item"> Submenu item 1</p></li>
                                <li><p className="dropdown-item"> Submenu item 2 </p></li>
                            </ul> */}
                        </li>

                        <li className="nav-item dropdown secNav-li">
                        <p className="p-link log" data-toggle="dropdown">  About Us  </p>
                            {/* <ul className="dropdown-menu dropdown-menu-left">
                                <li><p className="dropdown-item"> Submenu item 1</p></li>
                                <li><p className="dropdown-item"> Submenu item 2 </p></li>
                            </ul> */}
                        </li>
                        
                        <li className="nav-item dropdown secNav-li p-link1">
                            <p className="p-link p-link1 log" data-toggle="dropdown"> Carrers </p>
                            {/* <ul className="dropdown-menu dropdown-menu-right">
                            <li><p className="dropdown-item"> Submenu item 1</p></li>
                            <li><p className="dropdown-item"> Submenu item 2 </p></li>
                            </ul> */}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>


        <div id="mySidenav" className="sidenav">
            <p className="closebtn" onClick={()=>closeNav()}>&times;</p>
                <p onClick={()=>{
                    closeNav()
                    setProfileState(true)
                    setSearchState(false)

                    }} className="list-sidebar-bold">Sign in / Register</p>
                <Link to="/products" className="list-sidebar">All product</Link>
                <Link to="/special" className="list-sidebar">Special Offers</Link>
                <Link to="/" className="list-sidebar">My Account</Link>
                <Link to="/catalogrequest" className="list-sidebar">Catalog Request</Link>
                <Link to="/quickorder" className="list-sidebar">Quick Order</Link>
                <Link to="/contactus" className="list-sidebar">Contact Us</Link>
                <Link to="/aboutus" className="list-sidebar">About Us</Link>  
        </div>
                
        {
            searchState ? (
                <div className="input-group input-group-sm mb-3 search-resp">
                        <input type="text" class="form-control border-blue bad" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                        <div className="input-group-prepend">
                            <span className="border-blue btn-blue" id="inputGroup-sizing-sm"><img src={search} alt="search"/></span>
                        </div>
                        
                    </div>
            ):(
            <div>
            </div>)
        }

        {
    
            profileState ? (

                <div className="search-responsive">
                    <p>Existing Customer</p>
                    <input type="text" placeholder="Email" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                    <input type="text" placeholder="Password" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                    <button type="button" class="btn btn-primary btn-md btn-block">Sign in</button>
                    <p>Forget password</p>
                    <p>or</p>
                    <Link to="/register">Create an Account</Link>
                    <br/>
                    <input type="text" placeholder="Email" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                    <button type="button" class="btn btn-primary btn-md btn-block">Continue</button>
                </div>
            ):(<div></div>)

        }
           
        </div>
    );
}

export default Navbar;