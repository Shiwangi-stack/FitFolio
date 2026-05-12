import { useState } from "react";
import { useAuth } from "./AuthProvider";

export default function Login() {

    const [formdata, setformdata]=useState({
        username:"",
        password:""
    })
    const handleChange=(e)=> {
        const {name, value}=e.target
        setformdata({
            ...formdata,
            [name]:value
        })
    }
    const auth = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formdata)
        auth.loginAction(formdata);
        return;
    }

  return (
    <>
    <div class="container-fluid" id="main">
        <div class="row vh-100">
            <div class="col-lg-6 bg-dark-subtle text-black d-flex flex-column justify-content-center p-5 ">
                <form id="form" class="" onSubmit={handleSubmit}>
                    <h1>Login to Colorlib</h1>
                    <p>Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
                    <label for="" class="m-1">Username</label>
                    <div class="input-group">
                        <span class="input-group-text"><i class="bi bi-person-fill"></i></span>
                        <input type="text" name="username" value={formdata.username} class="form-control" onChange={handleChange} placeholder="Your-email@gmail.com"/>
                    </div>
                    <label for="" class="mt-2 m-1">Password</label>
                    <div class="input-group mb-3">
                        <span class="input-group-text"><i class="bi bi-lock-fill"></i></span>
                        <input type="password" name="password" value={formdata.password} class="form-control" onChange={handleChange} placeholder="Your Password"/>
                    </div>
                    <div class="row mt-2">
                        <div class="col-lg-6">
                            <input type="checkbox"/>
                            <label for="">Remember me</label>
                        </div>
                        <div class="col-lg-6 text-end">
                            <a href="">Forgot Password</a>
                        </div>
                    </div>
                    <div class="d-grid gap-2 mt-4">
                        <button class="btn btn-primary">Log In</button>
                    </div>
                </form>
            </div>
            <div class="col-lg-6 p-0">
                <img src="images/admin.jpg" height="800px" width="100%" alt="" className="object-fit-cover"/>
            </div>
        </div>
    </div>
    </>
  )
}




