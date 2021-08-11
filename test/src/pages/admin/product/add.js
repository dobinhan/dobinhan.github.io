import { useForm } from "react-hook-form"
import data from "../../../data";
import React from "react";
import AddProductForm from "../../../components/form";
import { useHistory } from "react-router-dom";

const AddProductForm2 = (props) => {
    const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm();
    const history = useHistory();
    const onSubmit = (data) => {
      const product = {
        id: Math.random().toString(5).substring(2),
        ...data
      };
      props.onAdd(product);
      history.push("/product");
    };
    return(<>
        <h1 className="h2">Thêm sản phẩm</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label className="form-lable">Tên sản phẩm</label>
                <input type="text" className="form-control" {...register("name",{required:true})} />
            {Error.name &&(
                <span className="d-block mt-2 text-danger">Field is requited</span>
            )}
            </div>
            <div className="mb-3">
                <label className="form-lable">Gia san pham</label>
                <input type="number" className="form-control"{...register("price")} ></input>
            </div>
            <div className="mb-3" >
                <label className="form-lable">Danh muc</label>
                <select className="form-control"{...register("category")}>
                <option value="danh muc A" >Danh muc A</option>
                <option value="danh muc B" >Danh muc B</option>
                </select>
            </div>
            <button className="btn btn-primary" type="submit" >Thêm sản phẩm</button>
        </form>
    </>
    )
    
}
export default AddProductForm2;