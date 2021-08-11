// import logo from './logo.svg'; 
import './App.css';
import "./dashboard.css";
import './css/style2.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React,{Component, useEffect, useState}  from 'react';
import logo2 from './anh/anhchinh.png'
import Header from './compoments/web/header';
import Main from './compoments/web/main';
import Footer from './compoments/web/footer';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Delete from './compoments/product/delete';
import data from './data';
import { add, addbook, getAll, getbook, removebook, update } from './compoments/API/link';
import { remove } from './compoments/API/productapi';
import Deleteproduct from './compoments/product/delete';
import Addproduct from './compoments/product/add';
import Product from './compoments/product/product';
import Signup from './compoments/admin/signup';
import Signin from './compoments/admin/signin';
import Editproduct from './compoments/product/edit';

function App() {
  // const name = "Đỗ Bình An";
  // const age = 23;
  // const human ={
  //   ten:"Đỗ Đức Anh",
  //   tuoi:10,
  // }
//   return(
//     <div>
//   <Header  />
//   <main>
//     <Human name="Đỗ Bình An" age="23" />
//     <Banner/>
//     <div className="album py-5 bg-light">
//       <Contain/>
//     </div>
//   </main>
//   <footer className="text-muted py-5">
//     <Footer/>
//   </footer>
// </div>

//   )
// };

const [product, setproduct] = useState(data);
useEffect(() => {
  const getProducts = async () => {
    try {
      const { data } = await getAll ();
      setproduct(data);
    } catch (error) {
      console.log(error);
    }
  };
  getProducts();
}, []);



const onhandleRemove = (id) => {
  // console.log("app.js",id);
  //   const newProduct=product.filter(item=>item.id !== id);
  //   setproduct(newProduct);
  try {
    removebook(id);
    const newProduct = product.filter((item) => item.id !== id);
    setproduct(newProduct);
  } catch (error) {
    console.log(error);
  }
};

const onhandAdd = async (item) => {
  setproduct([...product,item]);
  try {
    const { data } = await addbook(item);
    setproduct([...product, data]);
  } catch (error) {
    console.log(error);
  }
};
const onHandleEdit = async (item) => {
  try {
    const { data } = await update(item);
    const newProduct = product.map((product) =>
      product.id == data.id ? data : product
    );
    setproduct(newProduct);
    console.log("app.js", data);
  } catch (error) {
    console.log(error);
  }
};
return(

  <BrowserRouter>
  <div className="body">
  <Header />
  <div className="banner">
      <img src={logo2} width="1000px" height="300px" />
      {/* <img src={`./anh/anhchinh.png`}/> */}
  </div>
  <Switch>
    <Route exact path="/trangchu">
       <Main />
    </Route>
    <Route exact path="/product" >
    <Deleteproduct product={product} onRemove={onhandleRemove} />
    </Route>
    <Route exact path="/product/add" >
    <Addproduct onAdd={onhandAdd} /> 
    </Route>
    <Route exact path="/product/:id/edit" >
    <Editproduct onEdit={onHandleEdit} /> 
    </Route>
    <Route exact path="/signup" >
    <Signup /> 
    </Route>
    <Route exact path="/" >
    <Signin /> 
    </Route>
  </Switch>
  <Footer />
</div>
</BrowserRouter>
)}

export default App;
