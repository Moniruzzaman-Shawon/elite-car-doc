import React from 'react';
import img from '../../assets/images/login/login.svg';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = event => {
        event.preventDefault();
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-20 w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <input className="btn btn-error" type=" submit" value="Login" />
                            </div>
                            <p className='mt-5'>New to Car Doctor? <Link className='text-orange-300 font-bold' to='/signup'>Sign Up</Link></p>
                        </form>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;