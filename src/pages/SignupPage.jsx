import { Button } from "@heroui/react"
import { Input, Checkbox } from "@heroui/react"
import { Link } from "react-router-dom"

export default function SignupPage() {
  return (
    <div className="bg-[#FAFAFA] p-[24px] w-full md:w-[70%] lg:w-[65%] rounded-[20px] flex flex-col gap-[16px]">
      <h1 className="font-bold text-[42px] text-center">Join FarmFresh</h1>
      <form className="flex flex-col gap-[16px]">
        <div className="flex flex-col md:flex-row gap-3">
          <Input label="firstname" placeholder="Enter your firstname" type="text" />
          <Input label="lastname" placeholder="Enter your lastname" type="text" />
        </div>
        <Input label="email" placeholder="Enter your email" type="email" />
        <Input label="password" placeholder="Enter your password" type="password" />
        <Input label="confirm-password" placeholder="Confirm Password" type="password" />

        <Checkbox defaultSelected size="md">
          I agree to the <a className="text-green-500">Terms of Service</a> and <a className="text-green-500" href="#">Privacy Policy</a>
        </Checkbox>
        <Link to="/auth/verify"><Button className="text-white w-full" color="success">Sign Up</Button></Link>
        <div className="border relative border-gray-300 my-2">
          <span className="absolute left-[50%] translate-y-[-50%] bg-white px-2 translate-x-[-50%]">or sign up with</span>
        </div>
        <Button className="rounded-full bg-initial border border-gray-500" color="default" variant="flat" startContent="<img src={{Logo}} />">Continue with Google</Button>
        <Button className="rounded-full bg-initial border border-gray-500" color="default" variant="flat">Continue with Apple</Button>
        <p className="text-center">Already have an account? <Link className="text-green-500" to="/auth/login">Login</Link></p>

      </form>
    </div>
  )
}
