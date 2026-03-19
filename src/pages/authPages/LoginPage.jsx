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
      setError(error.message);
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
          className="rounded-full bg-initial border border-gray-500" 
          color="default" 
          variant="flat"
        >
          Continue with Google
        </Button>
        <Button className="rounded-full bg-initial border border-gray-500" color="default" variant="flat">
          Continue with Apple
        </Button>
        <p className="text-center mt-4">
          Don't have an account? <Link className="text-green-500 font-bold" to="/auth/signup">Sign up</Link>
        </p>
      </form>
    </div>
  )
}
