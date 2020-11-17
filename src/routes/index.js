import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";
import Home from '../components/home';
import Signin from '../components/signin';
import Aboutus from "../components/aboutus/aboutus";
import Product from "../components/products";
import Cart from '../components/cart/cart';
import Catalog from "./../components/catalog/catalog"
import Contactus from "./../components/contactus";
import Quickorder from './../components/quickorder/quickorder';
import Category from "./../components/boxes/category";
import Subcategory from './../components/boxes/subCategories/subcategory';
import Registration from "./../components/register/register"
import Special from "./../components/special/special";
import subCategoryItem from '../components/boxes/subCategories/subCategoryItem/subCategoryItem';

            
function Routes() {
  return (
    <Router>
     
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/aboutus" component={Aboutus} />
          <Route exact path="/products" component={Product} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/contactus" component={Contactus} />
          <Route exact path="/quickorder" component={Quickorder} />
          <Route exact path="/catalogrequest" component={Catalog} />
          <Route exact path="/:productName/:category" component={Subcategory} />
          <Route exact path="/:productName" component={Category} />
          
          
          <Route exact path="/register" component={Registration} />
          <Route exact path="/special" component={Special} />
          <Route exact path="/:productName/:category/:subcategory" component={subCategoryItem} />
          <Route exact path="/*">
            <h1>Error 404 page not found</h1>
          </Route>
        </Switch>

    </Router>
  );
}


export default Routes;