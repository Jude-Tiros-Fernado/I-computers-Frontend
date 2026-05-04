import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import toast from "react-hot-toast"
export default function LoginPage(){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navaigate=useNavigate();

    // function login(){
    //     console.log(email)
    //     console.log(password)

    //     axios.post("http://localhost:3000/users/loging",
    //         {
    //             email:email,
    //             password:password
    //         }

    //     ).then(
    //         ()=>{
    //             console.log("login successfull")
    //         }
    //     ).catch(
    //         (err)=>{
    //             console.log(error);
                
    //         }
    //     )
    // }

    async function login() { 

        try{

            const response= await axios.post(import.meta.env.VITE_API_URL+"/users/loging",
                {
                email:email,
                password:password
            }
        ) 
        console.log(response)
        const role = response.data.role
        console.log("user role :"+ role)

        toast.success("login successful")

        if (role == "admin") {
            console.log("Redirect to the admin page")
            //window.location.href="/admin"
            navaigate("/admin")
            
        }else{
            // window.location.href="/"
            navaigate("/")
        }

        }
        catch(error){

            console.log(error);
            toast.error("loging failed")
            console.log("loging faild")

        }
        
    }


    return(
        <div className="w-full h-full bg-[url('/backg1.jpg')] bg-cover bg-no-repeat bg-center flex">
            <h2>Login Page</h2>
            <div className="w-1/2 h-full flex justify-center items-center">
            <img src="/logo.png" alt="logo" className=" w-[300px] rounded-2xl object-fill"  />
            </div>

            <div className="w-1/2 h-full  flex justify-center items-center" >
                            <div className="w-[450px] h-[600px] backdrop-blur-2xl rounded-2xl shadow-lg flex flex-col justify-center items-center" >
                                <h1>Login</h1>
                                <input 
                                type="Email" 
                                placeholder="Email"
                                onChange={
                                    (e)=>{
                                        setEmail(e.target.value)
                                        //console.log(email)
                                    }
                                } 
                                className=" border-secondary border-2 w-[90%] h-[50px] m-5 p-3 rounded-2xl outline-none">
                                </input>
                                <input 
                                type="password"
                                placeholder="Enter your password" 
                                onChange={
                                    (e)=>{
                                        setPassword(e.target.value)
                                        //console.log(password)
                                    }
                                }
                                className="m-5 p-3 w-[90%] h-[50px] border-secondary border-2rounded-2xl outline-none " />
                                <p className="w-full text-right pr-5">Forgot Password ?<Link to="/forgot-password" className=" text-accent"> Rest</Link></p>
                                <button className="m-5 p-3 w-[90%] h-[50px] bg-accent rounded-2xl text-amber-50 font-bold"onClick={login}>Login</button>
                                <button className="m-5 p-3 w-[90%] h-[50px] border-2 border-secondary text-amber-50 rounded-2xl">Login with Googal</button>
                                <p className="w-full text-right pr-5">Do not have an account?<Link to="/Register" className="text-accent " > Register</Link></p>

                </div>
            </div>

        </div> 
    )
}