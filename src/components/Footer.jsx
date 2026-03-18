import { Button, Input } from "@heroui/react";

export default function Footer(){
  return (
    <div className="mt-12 md:mt-[92px] px-6 md:px-[48px] py-10 md:py-[60px] flex flex-col md:flex-row justify-between gap-10 bg-white border-t border-gray-100">
      <div className="md:w-[30%] text-[#757575]">
        <img src="/logo.png" className="h-12 mb-4 object-contain" alt="FarmFresh Logo" />
        <div className="text-sm md:text-base leading-relaxed">
          Connecting you directly with the freshest
          produce from local farms. Eat healthy,
          support local farmers, and build a better community.
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 flex-1">
        <div>
          <div className="font-bold mb-4 text-gray-800">Quick Links</div>
          <ul className="flex flex-col gap-2 text-[#757575] text-sm md:text-base">
            <li className="hover:text-green-600 cursor-pointer transition-colors">About Us</li> 
            <li className="hover:text-green-600 cursor-pointer transition-colors">Farms</li> 
            <li className="hover:text-green-600 cursor-pointer transition-colors">Delivery Areas</li> 
            <li className="hover:text-green-600 cursor-pointer transition-colors">Sustainability</li> 
          </ul>
        </div>
        <div>
          <div className="font-bold mb-4 text-gray-800">Support</div>
          <ul className="flex flex-col gap-2 text-[#757575] text-sm md:text-base">
            <li className="hover:text-green-600 cursor-pointer transition-colors">Help Center</li> 
            <li className="hover:text-green-600 cursor-pointer transition-colors">Contact Us</li> 
            <li className="hover:text-green-600 cursor-pointer transition-colors">Refund Policy</li> 
            <li className="hover:text-green-600 cursor-pointer transition-colors">Privacy Policy</li> 
          </ul>
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="font-bold mb-4 text-gray-800">Subscribe</div>
          <p className="text-sm text-[#757575] mb-4">Get updates on seasonal produce and local farm news.</p>
          <div className="flex flex-col gap-3">
            <Input 
              placeholder="Email address" 
              size="sm" 
              type="email" 
              variant="bordered"
              className="w-full"
            />
            <Button className="text-white font-bold w-full" color="success" shadow>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
