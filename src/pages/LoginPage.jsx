import { Button } from "@heroui/react"
import { Input, Checkbox } from "@heroui/react"
import { Link } from "react-router-dom"

export default function LoginPage() {
  return (
    <div className="bg-[#FAFAFA] p-[24px] w-full md:w-[70%] lg:w-[65%] rounded-[20px] w-full md:flex flex-col gap-[16px]">
      <h1 className="font-bold text-[42px] text-center">Welcome Back</h1>
      <form className="flex flex-col gap-[16px]">
        <Input label="Email" placeholder="Enter your email" type="email" />
        <Input label="password" placeholder="Enter your password" type="password" />
        <Checkbox defaultSelected size="md">
        Remember Me
        </Checkbox>
        <Button color="success">Login</Button>
        <div className="border border-gray-300 my-2"></div>
        <Button className="rounded-full bg-initial border border-gray-500" color="default" variant="flat" startContent="<img src={{Logo}} />">Continue with Google</Button>
        <Button className="rounded-full bg-initial border border-gray-500" color="default" variant="flat">Continue with Apple</Button>
        <p className="text-center">Don't have an account? <Link className="text-green-500" to="/auth/signup">Sign up</Link></p>

      </form>
    </div>
  )
}