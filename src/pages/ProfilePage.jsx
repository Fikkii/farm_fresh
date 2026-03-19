import { Button, Card, CardBody, Input, Alert } from "@heroui/react";
import { useUser } from "../contexts/userContext";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const { user, updateProfile } = useUser();
  const [name, setName] = useState(user?.name || "");
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await updateProfile(name);
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Failed to update profile");
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Alert color="warning" title="Please login to view your profile" />
      </div>
    );
  }

  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-8">My Profile</h1>
      <Card>
        <CardBody className="p-6">
          <form onSubmit={handleUpdate} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Email Address</label>
              <Input 
                value={user.email} 
                disabled 
                variant="bordered"
                description="Email cannot be changed"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <Input 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                variant="bordered"
                isRequired
              />
            </div>

            <Button 
              type="submit" 
              color="success" 
              className="text-white font-bold h-12"
              isLoading={isLoading}
            >
              Update Profile
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
