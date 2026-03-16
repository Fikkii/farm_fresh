import { Button, InputOtp } from "@heroui/react"
import { Input, Checkbox } from "@heroui/react"
import { Link } from "react-router-dom"
import { useUser } from "../../contexts/userContext";
import { useEffect } from "react";

export default function VerifyPage() {
  const { sendVerificationEmail } = useUser();

  useEffect(() => {
    sendVerificationEmail();
  }, [])
  
  return (
    <div className="bg-[#FAFAFA] p-[24px] w-full md:w-[70%] lg:w-[65%] rounded-[20px] flex flex-col gap-[16px]">
      <h1 className="font-bold text-[24px] text-center">Email Verification</h1>
      <p className="text-sm text-center text-[#757575]">We've sent a mail to you, please follow the instructions to verify your account</p>
      <form className="flex flex-col items-center gap-[16px]">
        <Link className="w-full" to="/auth/login"><Button startContent={
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" /> </svg>
        } variant="light" className="w-full" color="success">Go Home</Button></Link>
      </form>
    </div>
  )
}
