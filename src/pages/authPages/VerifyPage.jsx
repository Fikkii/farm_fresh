import { Button } from "@heroui/react"
import { Link, useNavigate } from "react-router-dom"
import { useUser } from "../../contexts/userContext";
import { useState } from "react";
import toast from "react-hot-toast";

export default function VerifyPage() {
  const { sendVerificationEmail, logout } = useUser();
  const [isResending, setIsResending] = useState(false);
  const navigate = useNavigate();

  const handleResend = async () => {
    setIsResending(true);
    try {
      await sendVerificationEmail();
      toast.success("Verification email resent!");
    } catch (error) {
      toast.error(error.message || "Failed to resend email");
    } finally {
      setIsResending(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate("/auth/login");
  };
  
  return (
    <div className="bg-[#FAFAFA] p-[24px] w-full md:w-[70%] lg:w-[65%] rounded-[20px] flex flex-col gap-[16px]">
      <h1 className="font-bold text-[24px] text-center">Email Verification</h1>
      <p className="text-sm text-center text-[#757575]">
        We've sent a verification link to your email. Please follow the instructions to verify your account.
      </p>
      
      <div className="flex flex-col gap-3 mt-4">
        <Button 
          color="success" 
          className="text-white font-bold"
          onPress={handleResend}
          isLoading={isResending}
        >
          Resend Verification Email
        </Button>

        <Button 
          variant="flat" 
          color="default"
          onPress={handleLogout}
        >
          Use a different account
        </Button>

        <Link className="w-full" to="/auth/login">
          <Button 
            variant="light" 
            className="w-full" 
            color="success"
            startContent={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
              </svg>
            }
          >
            Back to Login
          </Button>
        </Link>
      </div>
    </div>
  )
}
