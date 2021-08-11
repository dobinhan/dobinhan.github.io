import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { get } from "../API/link";

const Editproduct = (props) => {
    const[product,setProduct]=useState({});
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const {id}= useParams ();
  const history = useHistory();
    useEffect(()=>{
        const getproduct = async () => {
            const { data } = await get(id);
          setProduct(data);
          };
          getproduct();
        },[]);


  const onSubmit = (data) => {
    console.log(data);
    const product={
        id:id,...data 
    };
    console.log(product);
    props.onEdit(product);
    history.push("/product");
    alert("Đã cập nhật sản phẩm");

    // console.log(data);
    // const book = {
    //   id : Math.random().toString(5).substring(2),
    //   ...data
    // };
    // props.onAdd(book);
    
  };
  return(<>
      <h1 className="h2">Sửa sản phẩm</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
              <label className="form-lable" >Tên sản phẩm</label>
              <input type="text" defaultValue={product.title} className="form-control" {...register("title",{required:true})} />
          </div>
          <div className="mb-3">
              <label className="form-lable">Gia san pham</label>
              <input type="number" defaultValue={product.price} className="form-control"{...register("price")} ></input>
          </div>
          <div className="mb-3" >
              <label className="form-lable">Ảnh</label>
              <input type="number" defaultValue={product.image} className="form-control"{...register("image")} ></input>
              
          </div>
          <button className="btn btn-primary btn-sm"   type="submit,text" >Cập nhật</button>
      </form>
  </>
  );
};
export default Editproduct;
