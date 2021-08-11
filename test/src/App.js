import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import data from './data';
import addProductform from './components/form';
import AddProductForm from './components/form';
import AddProductform2 from './pages/admin/product/add';
import AddProductForm2 from './pages/admin/product/add';
import { add, getAll, remove, update } from './API/productapi';
import { Route, Router } from 'react-router-dom';
import Router1 from './Routes';

const myname = "Đỗ Bình An";
const myage = 18;
const a = 5;
const b = 4;
const x = a + b;


// export default function App() {
//   const [product, setProduct] = useState(data);
//   function onHandlRemove(id){
//   const newProduct = product.filter((item) => item.id !== id);
//   setProduct(newProduct);
// }
//   return (
//     <div className="App">
//       {/* Tên tôi là {myname}<br></br>
//       Tôi năm may {myage} tuổi <br></br>
//       Điểm của tôi là {x} */}
//       <div>
//         <Header />
//         <div className="container-fluid">
//           <div className="row">
//             <Nav />
//             <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
//               <Product product={product} onRemove={onHandlRemove} />
//             </main>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }

export default function App() {
  const [products, setProducts] = useState(data);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await getAll();
        setProducts(data);
      }
      catch {
        console.log(Error);
      }
    };
    getProducts();
  }, []);

  const onHandleRemove = async (id) => {
    try {
      await remove(id);
      const newProduct = products.filter((item) => item.id !== id);
      setProducts(newProduct);
    } catch (error) {
      console.log(Error);
    }
    
  }
  const onHandleEdit = async (item)=>{
    try {
      const { data } = await update(item);
      console.log("app.js", data);
      const newProducts = products.map((product) =>
        product.id == data.id ? data : product
      );
      setProducts(newProducts);
    } catch (error) {
      console.log(error);
    }
  }
  // function onHandleRemove(id) { 
  //   fetch("https://5e79b4b817314d00161333da.mockapi.io/product"+id,{
  //     method:"DELETE" 
  //   })
  //   .then((Response)=>Response.json())
  //   .then((data)=>{
  //   const newProduct = products.filter((item) => item.id !== id);
  //   setProducts(newProduct);
  //   });
  // }
  const onHandleAdd = async (item) => {
    try {
      const { data } = await add(item);
      setProducts([...products, item]);
    } catch (error) {

    }

    // fetch("https://5e79b4b817314d00161333da.mockapi.io/product",{
    //   method:"POST",
    //   headers:{
    //     "Content-Type":"application/json"
    //   },
    //   body:JSON.stringify(item)
    // })
    // .then((Response)=>Response.json())
    // .then((data)=> {setProducts([...products, item]);}
    // )
  };
  return (
    <Router1 products={products}
     onRemove={onHandleRemove}
      onAdd={onHandleAdd} 
      onEdit={onHandleEdit}
      />
  );
}
