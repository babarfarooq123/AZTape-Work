import React from 'react'
import Navbar from "./../homepage/navbar"
import Footer from "./../homepage/footer"
import "./../catalog/catalog.css"

export default function register() {
    return (
        <div>
            <Navbar />
            <div className="container catalog-main">
                <div className="inside-catalog">
                    <h1>Registration</h1>
                    <div className="acc-type">
                        <p>Account Type: </p>
                        
                       
                        <label htmlFor="company" className="color-blue">
                        <input type="radio" id="company"  name="account"/>
                            Business/Company</label>
                        
                        
                        <label htmlFor="personal" className="color-blue">
                        <input type="radio" id="personal" name="account"/>
                            Personal</label>

                        
                        <label htmlFor="government" className="color-blue">
                        <input type="radio" id="government" name="account"/>
                            Government</label>
                    </div>

                    <div className="row padding-top">
                            <div className="col-lg-5 col-md-5 col-sm-12 person-information">
                                <form>
                                <input type="text" className="form-control" placeholder="Full name" required/>
                                <input type="text" className="form-control" placeholder="Company" required/>
                                {/* <input type="text" className="form-control" placeholder=""/> */}
                                <select name="title" id="title" className="form-control" required>
                                    <option value="Manager shipping dept">Manager shipping dept</option>
                                    <option value="Purchasing">Purchasing</option>
                                    <option value="Owner">Owner</option>
                                    <option value="President">President</option>
                                    <option value="Office Manager">Office Manager</option>
                                    <option value="Administrative Assistant">Administrative Assistant</option>
                                    <option value="Ceo">Ceo</option>
                                    <option value="Marketing">Marketing</option>
                                    <option value="Sales">Sales</option>
                                    <option value="Vice President">Vice President</option>
                                    <option value="Secretary">Secretary</option>
                                    <option value="Warehouse">Warehouse</option>
                                    <option value="Production">Production</option>
                                    
                                </select>

                                <input type="text" className="form-control" placeholder="Address line 1" required/>
                                {/* <input type="text" className="form-control" placeholder="Suite,Apt,Bldg,etc."/> */}
                                <select name="suite" id="suite" className="form-control">
                                    <option value="None">None</option>
                                    <option value="STE">STE</option>
                                    <option value="APT">APT</option>
                                    <option value="RM">RM</option>
                                    <option value="BLDG">BLDG</option>
                                    <option value="FL">FL</option>
                                    <option value="DEPT">DEPT</option>
                                    <option value="UNIT">UNIT</option>
                                </select>
                                <input type="text" className="form-control" placeholder="Address line 2 (optional)"/>
                                <input type="text" className="form-control" placeholder="Zip code" required/>
                                <input type="text" className="form-control" placeholder="City" required/>
                                <input type="text" className="form-control" placeholder="State" required/>
                                {/* <input type="text" className="form-control" placeholder="Country" required/> */}
                                <select name="country" id="country" className="form-control">
                                    <option value="United states">United states</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Mexico">Mexico</option>
                                </select>
                                <input type="text" className="form-control" placeholder="Phone Number" required/>
                                <input type="text" className="form-control" placeholder="Employees at Location"/>
                                <input type="text" className="form-control" placeholder="Email"/>
                                <input type="text" className="form-control" placeholder="Confrim Email"/>
                                <input type="text" className="form-control" placeholder="Password (optional)"/>
                                <input type="submit" value="submit" className="send-button"/>
                                </form>
                            </div>
                            
                    </div>

                </div>
            </div>
            <Footer />


        </div>
    )
}
