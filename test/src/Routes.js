import { BrowserRouter, Route, Switch } from "react-router-dom"
import Header from "./components/Header";
import Nav from "./components/nav";
import Notfound from "./pages/404";
import Dashbroad from "./pages/admin/dashbroad";
import AddProductForm2 from "./pages/admin/product/add";
import Edit from "./pages/admin/product/edit";
import Product from "./pages/admin/product/product";
import Login from "./pages/person/login";
import Regis from "./pages/person/regis";
import regis from "./pages/person/regis";
import Signin from "./pages/website/signin";
import Signup from "./pages/website/signup";

const Router=(props)=>{
    return(
        <BrowserRouter>
      <div className="App">
        <div>
          <Header />
          <div className="container-fluid">
            <div className="row">
              <Nav />
              <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <Switch>
                  <Route exact path="/admin">
                      <Dashbroad/>
                  </Route>
                  <Route exact path="/product" >
                    <Product {...props}  />
                  </Route>
                  <Route exact path="/product/add">
                    <AddProductForm2  {...props}  />
                  </Route>
                  <Route exact path="/signup" >
                     <Signup/>
                    </Route> 
                  <Route exact path="/signin">
                    <Signin/>

                  </Route>
                  <Route exact path="/product/:id/edit">
                    <Edit  {...props}  />
                  </Route>

                  <Route path="*">
                      <Notfound />
                  </Route>
                </Switch>
              </main>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
    )
};
export default Router;