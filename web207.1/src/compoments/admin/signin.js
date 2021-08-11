import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, NavLink, Redirect } from 'react-router-dom';
import { isAuthenticate } from '../../auth';
import { authenticate } from '../../auth/setget';
import { signin, signup } from '../API/authapi';


const Signin = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setErros] = useState("");
    const [success,setSucces]=useState(false);
    const onSubmit = async (user) => {
        try {
            const {data} = await signin(user);
            authenticate(data);
            console.log(data);
            setSucces(true);
            setErros("");
        } catch (error) {
            setErros(error.response.data);
        };
     

    };
    const redirectUser = ()=>{
        if (success) {
            const id = isAuthenticate().user.id; 
            if (id == 1 ){
                return <Redirect to="/product" />;
            }else{
                return <Redirect to="/trangchu"/>;
            }
        }

    };

    return (
        <form className="" onSubmit={handleSubmit(onSubmit)}>
            {redirectUser()}
            <h1>Đăng Nhap</h1>
            {error &&<div className="alert alert-danger" >{error}</div> }
         
            <div className="" >
                <label htmlFor="" className="form-label">Email</label>
                <input type="email" className="form-control" {...register("email", { required: true })} ></input>
                {errors.email && <span>Vui lòng điền Email</span>}
            </div>
            <div className="" >
                <label htmlFor="" className="form-label">Password</label>
                <input type="password" className="form-control" {...register("password", { required: true })} ></input>
                {errors.pass && <span>Vui lòng điền Password</span>}
            </div>
            <button className="btn btn-primary btn-sm">Đăng nhập</button>
            <NavLink to="/signup" className="btn btn-primary btn-sm"  >Đăng ký tài khoản</NavLink>
        </form>
    )
}

export default Signin;
