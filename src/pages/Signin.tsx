import { LogInIcon } from "lucide-react"
import Button from "../components/Button"
import { Input } from "../components/Input"
import { useRef } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const signin = async () => {
    const name = nameRef.current?.value;
    const password = passwordRef.current?.value;
    

    if (!name || !password) {
      alert("Please enter both username and password.");
      return;
    }

    try {
      const response = await axios.post(`${BACKEND_URL}/user/login`, {
        name,
        password,
      });
      const token =response.data.token;
      localStorage.setItem("token", token);
      navigate("/dashboard");
    } catch (error) {
      alert("Login failed. Please try again.");
      console.error(error);
    }
  };
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-gray-100 to-gray-200 flex justify-center items-center p-4">
      <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 w-full max-w-md">
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Login</h1>
            <p className="mt-2 text-gray-600">Enter Your Second Brain!</p>
          </div>
          
          <div className="space-y-4">
            <Input reference={nameRef} placeholder="Username"/>
            <Input reference={passwordRef} password placeholder="Password"/>
          </div>

          <Button 
          onClick={signin}
            variant="primary" 
            text="Login"
            fullWidth 
            startIcon={<LogInIcon className="w-5 h-5"/>}
          />

          <p className="text-center text-sm text-gray-600">
            Dont have an account?{" "}
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signin