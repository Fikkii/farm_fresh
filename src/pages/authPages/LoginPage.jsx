import { Alert, Button } from "@heroui/react"
import { Input, Checkbox } from "@heroui/react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { useEffect, useState } from "react";
import { useUser } from "../../contexts/userContext";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { user, login, loginWithGoogle } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/";

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  async function handleLogin(e) {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    try {
      await login(email, password);
      // Navigation is handled by useEffect
    } catch (error) {
      if (error.name === "VerificationRequired") {
        navigate("/auth/verify");
      } else {
        setError(error.message);
      }
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="bg-[#FAFAFA] p-[24px] w-full md:w-[70%] lg:w-[65%] rounded-[20px] w-full md:flex flex-col gap-[16px]">
      <h1 className="font-bold text-[42px] text-center">Welcome Back</h1>
      <p className="text-center text-gray-500">
        {!!user ? `Logged in as ${user?.email}` : 'Please login to your account'}
      </p>
      {error && <Alert color="danger" title={error} className="mb-4" />}
      <form onSubmit={handleLogin} className="flex flex-col gap-[16px]">
        <Input 
          label="Email" 
          placeholder="Enter your email" 
          type="email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          isRequired
        />
        <Input 
          label="Password" 
          placeholder="Enter your password" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          type="password" 
          isRequired
        />
        <Checkbox defaultSelected size="md">
          Remember Me
        </Checkbox>
        <Button 
          color="success"
          type="submit"
          isLoading={isLoading}
          className="text-white font-bold"
        >
          Login
        </Button>
        <div className="border-t border-gray-300 my-2"></div>
        <Button 
          onClick={loginWithGoogle} 
          className="rounded-full bg-initial border border-gray-300" 
          color="default" 
          variant="flat"
          startContent={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6"><path d="M3.06364 7.50914C4.70909 4.24092 8.09084 2 12 2C14.6954 2 16.959 2.99095 18.6909 4.60455L15.8227 7.47274C14.7864 6.48185 13.4681 5.97727 12 5.97727C9.39542 5.97727 7.19084 7.73637 6.40455 10.1C6.2045 10.7 6.09086 11.3409 6.09086 12C6.09086 12.6591 6.2045 13.3 6.40455 13.9C7.19084 16.2636 9.39542 18.0227 12 18.0227C13.3454 18.0227 14.4909 17.6682 15.3864 17.0682C16.4454 16.3591 17.15 15.3 17.3818 14.05H12V10.1818H21.4181C21.5364 10.8363 21.6 11.5182 21.6 12.2273C21.6 15.2727 20.5091 17.8363 18.6181 19.5773C16.9636 21.1046 14.7 22 12 22C8.09084 22 4.70909 19.7591 3.06364 16.4909C2.38638 15.1409 2 13.6136 2 12C2 10.3864 2.38638 8.85911 3.06364 7.50914Z"></path></svg>}
        >
          Continue with Google
        </Button>
        <p className="text-center mt-4">
          Don't have an account? <Link className="text-green-500 font-bold" to="/auth/signup">Sign up</Link>
        </p>
      </form>
    </div>
  )
}
