import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handlesubmit, formState: { errors } } = useForm();
    const onSubmit=(user)=>{
        console.log(user);
    }
    return (
        <form className="" onSubmit={handlesubmit(onSubmit)} >
            <div className="mb-3" >
                <label htmlFor="" className="form-lable" >Name</label>
                <input type="text" className="form-control" {...register('name')} />
            </div>
            <div className="mb-3" >
                <label htmlFor="" className="form-lable" >Email</label>
                <input type="email" className="form-control"{...register('email', { required: true })} />
                {errors.email && <span>nhập email</span>}
            </div>
            <div className="mb-3" >
                <label htmlFor="" className="form-lable" >Password</label>
                <input type="password" className="form-control"{...register('pass', { required: true })} />
                {errors.email && <span>nhập pass</span>}
            </div>
            <button className="btn btn-primary">Đăng nhập</button>
        </form>
    );
}
export default Login;