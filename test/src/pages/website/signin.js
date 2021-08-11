import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, Redirect } from 'react-router-dom';
import { authenticate, isAuthenticate } from '../../auth/setget';
import { signin } from '../../API/authapi';
import Signup from './signup';

const Signin = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setErros] = useState("");
    const [success,setSucces]=useState(false);
    const onSubmit = async (user) => {
        try {
            const {data} = await signin(user);
            // localStorage.setItem('user',JSON.stringify(response.data))
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
            const id = isAuthenticate().user.id; // lay id trong local
            if (id == 1 ){
                return <Redirect to="/admin" />;
            }else{
                return <Redirect to="/product"/>;
            }
        }

    };

    return (
        <form className="" onSubmit={handleSubmit(onSubmit)}>
            {redirectUser()}
            <h1>Đăng Nhap</h1>
            {error &&<div className="alert alert-danger" >{error}</div> }
            {/* {success &&<div className="alert alert-success" >Bạn đã đăng ký thành công. Click<Link to="signin"> vào đây để đăng nhập</Link> để đăng nhập </div>} */}
            {/* <div className="" >
                <label htmlFor="" className="form-label">Name</label>
                <input type="text" className="form-control" {...register("name")} ></input>
            </div> */}
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
            <button className="btn btn-primary">Đăng Nhap</button>
        </form>
    )
}

export default Signin;
