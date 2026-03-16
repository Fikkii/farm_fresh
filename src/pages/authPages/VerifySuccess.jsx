import { Button, InputOtp } from "@heroui/react"
import { Input, Checkbox } from "@heroui/react"
import { Link } from "react-router-dom"
import { useUser } from "../../contexts/userContext";

export default function VerifyPage() {
  const { verifyEmail } = useUser();

  useEffect(() => {
    verifyEmail();
  }, [])

  return (
    <div className="bg-[#FAFAFA] p-[24px] w-full md:w-[70%] lg:w-[65%] rounded-[20px] flex flex-col gap-[16px]">
      <h1 className="font-bold text-[24px] text-center">Verification Success</h1>
      <p className="text-sm text-center text-[#757575]">You account has been verified successfully, you can now proceed</p>
      <form className="flex flex-col items-center gap-[16px]">
        <Link className="w-full" to="/auth/login"><Button className="w-full text-white" color="success">Login</Button></Link>
      </form>
    </div>
  )
}
