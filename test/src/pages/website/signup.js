import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { authenticate } from '../../auth/setget';
import { signup } from '../../API/authapi';

const Signup = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setErros] = useState("");
    const [success,setSucces]=useState(false);
    const onSubmit = async (user) => {
        try {
            const {data} = await signup(user);
            // localStorage.setItem('user',JSON.stringify(response.data))
            authenticate(data);
            console.log(data);
            setSucces(true);
            setErros("");
        } catch (error) {
            setErros(error.response.data);
        }

    }

    return (
        <form className="" onSubmit={handleSubmit(onSubmit)}>
            <h1>Đăng ký</h1>
            {error &&<div className="alert alert-danger" >{error}</div> }
            {success &&<div className="alert alert-success" >Bạn đã đăng ký thành công. Click<Link to="signin"> vào đây để đăng nhập</Link> để đăng nhập </div>}
            <div className="" >
                <label htmlFor="" className="form-label">Name</label>
                <input type="text" className="form-control" {...register("name")} ></input>
            </div>
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
            <button className="btn btn-primary">Đăng ký</button>
        </form>
    )
}

export default Signup;
