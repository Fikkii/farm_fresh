import { Button, InputOtp } from "@heroui/react"
import { Input, Checkbox } from "@heroui/react"
import { Link } from "react-router-dom"

export default function VerifyPage() {
  return (
    <div className="bg-[#FAFAFA] p-[24px] w-full md:w-[70%] lg:w-[65%] rounded-[20px] flex flex-col gap-[16px]">
      <h1 className="font-bold text-[24px] text-center">Verify your account</h1>
      <p className="text-sm text-center text-[#757575]">We've sent a 4-digit code to your email. Please enter it
below to complete your registration.</p>
      <form className="flex flex-col items-center gap-[16px]">
        <InputOtp length={4} size="lg" />
        <Button className="w-full text-white" color="success">Verify</Button>
        <p className="small">Didn't recieve a code? <Link className="text-red-500" to="/auth/signup">Resend</Link></p>

      </form>
    </div>
  )
}