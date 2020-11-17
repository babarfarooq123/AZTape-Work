import './../../App.css';
import './../homepage/homepage.css';
import logo from '../../assets/whitelogo.png';
import search from '../../assets/search.png';
import profile from '../../assets/profile.png';
import trolley from '../../assets/store.png';

function Navbar() {
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
      }
      
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.body.style.backgroundColor = "white";
    }
    
    return ( 
        <div>
            <div className = "contStyle">

                <nav className="navbar navbar-expand-lg navbar-light">
                   
                    <button onClick={()=>openNav()} className="navbar-toggler" type="button" aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <img className="logog" src={logo} alt="logo"/>

                    <div className="main-icon">
                        

                        <div className="btn-group">
                        <img src={search} alt="search" className="btn dropdown-toggle" data-toggle="dropdown" />
                            <div className="dropdown-menu dropdown-menu-right searchInline">
                                <div className="searchInline-1">
                                <input className="searchInline-inp" type="search"/>
                                <button className="searchInline-btn">Go</button>
                                </div>
                            </div>
                        </div>

                        <div className="btn-group">
                            <img className="btn dropdown-toggle" data-toggle="dropdown"  src={profile} alt="profile"/>
                            <div class="dropdown-menu dropdown-menu-right searchInline1 ppp1">
                                <input className="searchInline-inp1" type="text"/>
                                <input className="searchInline-inp1" type="password"/>
                                <button className="searchInline-btn1">Login</button>
                                <p className="ppp">or</p>
                                <button className="searchInline-btn1">Create an account</button>
                            </div>
                        </div>
                        
                        <img className="btn" src={trolley} alt="trolley" />
                            
                    
                    </div>
                    <h4 className="number">(123)456-7890</h4>
                </nav>

            </div>


        <div className="secNav">
            <nav className="navbar navbar-expand-lg navbar-dark secNav-1">
        
                
                <div className="collapse navbar-collapse" id="main_nav">
                    <ul className="navbar-nav">

                        <li className="nav-item dropdown secNav-li">
                            <p className="p-link dropdown-toggle log" data-toggle="dropdown">  Products  </p>
                            <ul className="dropdown-menu dropdown-menu-left">
                                <li><p className="dropdown-item"> Submenu item 1</p></li>
                                <li><p className="dropdown-item"> Submenu item 2 </p></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown secNav-li">
                            <p className="p-link dropdown-toggle log" data-toggle="dropdown">  AZ Products  </p>
                            <ul className="dropdown-menu dropdown-menu-left">
                                <li><p className="dropdown-item"> Submenu item 1</p></li>
                                <li><p className="dropdown-item"> Submenu item 2 </p></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown secNav-li">
                        <p className="p-link dropdown-toggle log" data-toggle="dropdown">  Quick Order  </p>
                            <ul className="dropdown-menu dropdown-menu-left">
                                <li><p className="dropdown-item"> Submenu item 1</p></li>
                                <li><p className="dropdown-item"> Submenu item 2 </p></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown secNav-li">
                        <p className="p-link dropdown-toggle log" data-toggle="dropdown">  Catalog Request  </p>
                            <ul className="dropdown-menu">
                                <li><p className="dropdown-item"> Submenu item 1</p></li>
                                <li><p className="dropdown-item"> Submenu item 2 </p></li>
                            </ul>
                        </li>
                        
                        <li className="nav-item dropdown secNav-li">
                        <p className="p-link dropdown-toggle log" data-toggle="dropdown">  Special Offers  </p>
                            <ul className="dropdown-menu dropdown-menu-left">
                                <li><p className="dropdown-item"> Submenu item 1</p></li>
                                <li><p className="dropdown-item"> Submenu item 2 </p></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown secNav-li">
                        <p className="p-link dropdown-toggle log" data-toggle="dropdown">  About Us  </p>
                            <ul className="dropdown-menu dropdown-menu-left">
                                <li><p className="dropdown-item"> Submenu item 1</p></li>
                                <li><p className="dropdown-item"> Submenu item 2 </p></li>
                            </ul>
                        </li>
                        
                        <li class="nav-item dropdown secNav-li p-link1">
                            <p class="p-link dropdown-toggle log" data-toggle="dropdown"> Dropdown right </p>
                            <ul class="dropdown-menu dropdown-menu-right">
                            <li><p class="dropdown-item"> Submenu item 1</p></li>
                            <li><p class="dropdown-item"> Submenu item 2 </p></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>


        <div id="mySidenav" class="sidenav">
            <p class="closebtn" onClick={()=>closeNav()}>&times;</p>
                {/* this is 1st one. */}
                <p className="list-sidebar-bold">Sign in / Register</p>
                <p className="list-sidebar">All product</p>
                <p className="list-sidebar">Special Offers</p>
                <p className="list-sidebar">My Account</p>
                <p className="list-sidebar">Catalog Request</p>
                <p className="list-sidebar">Quick Order</p>
                <p className="list-sidebar">Contact Us</p>
                <p className="list-sidebar">About Us</p>
                <p className="list-sidebar">Careers</p>
                <p className="list-sidebar">Help</p>
        </div>



                
          
        </div>
    );
}

export default Navbar;