import { LogInIcon } from "lucide-react";
import Button from "../components/Button";
import { Input } from "../components/Input";
import { useRef } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
 

  const signup = async () => {
    const name = nameRef.current?.value;
    const password = passwordRef.current?.value;
   

    if (!name || !password) {
      alert("Please enter both username and password.");
      return;
    }

    try {
      await axios.post(`${BACKEND_URL}/user/register`, {
        name,
        password,
      });
      navigate("/signin"); 
      alert("You have successfully registered");
    } catch (error) {
      alert("Registration failed. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-gray-100 to-gray-200 flex justify-center items-center p-4">
      <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 w-full max-w-md">
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Create an account</h1>
            <p className="mt-2 text-gray-600">Create Your Second Brain Today!</p>
          </div>

          <div className="space-y-4">
            <Input reference={nameRef} placeholder="Username" />
            <Input reference={passwordRef} password placeholder="Password" />
          </div>

          <Button
            variant="primary"
            text="Register"
            fullWidth
            onClick={signup}
            startIcon={<LogInIcon className="w-5 h-5" />}
          />

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
