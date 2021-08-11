import { useState } from "react";
import { useForm } from "react-hook-form"
import React from "react";
import { useHistory } from "react-router-dom";

const Addproduct = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const history = useHistory();

const onSubmit = (data) =>{
  const product ={
    id:Math.random().toString(5).substring(2),
    ...data
  }
  props.onAdd(product);
  history.push("/product");
  alert("Đã thêm sản phẩm");
}
  return(<>
      <h1 className="h2">Thêm sản phẩm</h1>
      <form onSubmit={handleSubmit(onSubmit)} >
          <div className="mb-3">
              <label className="form-lable" >Tên sản phẩm</label>
              <input type="text"  className="form-control"{...register("title",{required:true})} />
          </div>
          <div className="mb-3">
              <label className="form-lable">Gia san pham</label>
              <input type="number"  className="form-control"{...register("price",{required:true})}  ></input>
          </div>
          <div className="mb-3" >
              <label className="form-lable">Ảnh</label>
              <input type="number"  id="productimg" className="form-control" {...register("image",{required:true})}   ></input>
          </div>
          <button   className="btn btn-primary btn-sm" type="submit" >Thêm sản phẩm</button>
      </form>
  </>
  );
};
export default Addproduct;


// onSubmit={handleSubmit(onSubmit)}