import { Alert, Button } from "@heroui/react"
import { Input, Checkbox } from "@heroui/react"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { useUser } from "../../contexts/userContext";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(null);

  const { user, login, loginWithGoogle } = useUser();

  function handleLogin(e) {
    e.preventDefault();
    login(email, password).catch(error => {
      setError(error.message);
      console.error("Login failed:", error);
    });
  }

  return (
    <div className="bg-[#FAFAFA] p-[24px] w-full md:w-[70%] lg:w-[65%] rounded-[20px] w-full md:flex flex-col gap-[16px]">
      <h1 className="font-bold text-[42px] text-center">Welcome Back</h1>
      <p>
        {!!user ? `Logged in as ${user?.email}` : 'Not logged in'}
      </p>
      <Alert color="danger" isVisible={error} title={error} />
      <form onSubmit={handleLogin} className="flex flex-col gap-[16px]">
        <Input label="Email" placeholder="Enter your email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <Input label="password" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} type="password" />
        <Checkbox defaultSelected size="md">
        Remember Me
        </Checkbox>
        <Button color="success"
          type="submit"
          >Login</Button>
        <div className="border border-gray-300 my-2"></div>
        <Button onClick={loginWithGoogle} className="rounded-full bg-initial border border-gray-500" color="default" variant="flat" startContent="<img src={{Logo}} />">Continue with Google</Button>
        <Button className="rounded-full bg-initial border border-gray-500" color="default" variant="flat">Continue with Apple</Button>
        <p className="text-center">Don't have an account? <Link className="text-green-500" to="/auth/signup">Sign up</Link></p>

      </form>
    </div>
  )
}
