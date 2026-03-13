import { Button, Input } from "@heroui/react";

export default function Footer(){
  return (
    <div className="mt-[92px] px-[24px] py-[39px] flex justify-between gap-4 bg-white">
      <div className="w-[20%] text-[#757575]">
        <img src="/logo.png" height="53px" />
        <div>
          Connecting you directly with the freshest
          produce from local farms. Eat healthy,
          support local.
        </div>
      </div>
      <div>
        <div className="font-bold">Quick Links</div>
        <ul className="flex flex-col gap-[8px] text-[#757575]">
          <li>About Us</li> 
          <li>Farms</li> 
          <li>Delivery Areas</li> 
          <li>Sustainability</li> 
        </ul>
      </div>
      <div>
        <div className="font-bold">Support</div>
        <ul className="flex flex-col gap-[8px] text-[#757575]">
          <li>Help Center</li> 
          <li>Contact Us</li> 
          <li>Refund Policy</li> 
          <li>Privacy Policy</li> 
        </ul>
      </div>
      <div>
        <div className="font-bold">Subscribe to Newsletter</div>
        <div className="flex gap-[15px]">
          <Input label="Email" size="sm" type="email" />
          <Button className="text-white" color="success">Shop Now</Button>
        </div>
      </div>
    </div>
  )
}
