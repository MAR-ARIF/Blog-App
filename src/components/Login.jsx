import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import authService from "../appwrite/auth"
import { useForm } from "react-hook-form"
import { login as authLogin } from "../Slices/authSlice"
import Logo from "./Logo"
import Input from "./Input"
import Button from "./Button"

function Login(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState("")
    const {register, handleSubmit} = useForm()

    const login = async(userData) => {
        setError("")
        try {
            const session = await authService.login(userData)
            if(session) {
                const data = await authService.getUserSession()
                if (data){
                    dispatch (authLogin(data))
                }
            }

            
        } catch (error) {
            setError(error.message)
            
        }
    }
    return (
        <div className="flex items-center justify-center w-full">
            <div className="bg-gray-100 rounded-xl p-10 border border-black/10 w-full max-w-lg">
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">
                    Sign in to your account
                </h2>
                <p>
                    Don&apos;t have an account?&nbsp;
                    <Link 
                    to="/signup"
                    className="font-medium text-primary transation-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
                {error && (<p className="text-red-600 mt-8 text-center">{error}</p>)}
                <form className="mt-8" onSubmit={handleSubmit(login)}>
                    <div className="space-y-5">
                        <Input 
                            label="Email"
                            placeholder="Enter your email"
                            type="email"
                            {...register("email",{
                                required: true,
                                validate: {
                                    matchPattern: (value) => 
                                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        'Email must be a valid email address'
                                }
                            })}
                        />
                        <Input 
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                            {...register(password,{
                                required: true
                            })}
                        />
                        <Button type="submit" className="w-full">
                            Sign in
                        </Button>
                    </div>
                </form>
            </div>
        
        </div>
    )
}
export default Login