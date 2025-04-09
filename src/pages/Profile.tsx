
import React from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Edit2,
  Save
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const Profile = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = React.useState(false);

  // Sample profile data - in a real app, this would come from the database
  const defaultValues = {
    name: "John Smith",
    email: user?.email || "john.smith@example.com",
    phone: "(555) 123-4567",
    address: "123 Main St, Anytown, CA 92101",
    birthdate: "1950-05-15",
    emergencyContact: "Sarah Smith (Daughter) - (555) 987-6543",
    medicalInfo: "Type 2 Diabetes, High Blood Pressure"
  };

  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues });

  const onSubmit = (data) => {
    // In a real app, this would update the user's profile in the database
    console.log("Profile data to update:", data);
    toast.success("Profile updated successfully");
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-eldermate-darkGrey">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-eldermate-softYellow mb-6">Your Profile</h1>
        
        <div className="highlight-card p-6 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
            <div className="w-24 h-24 bg-eldermate-slate rounded-full flex items-center justify-center">
              <User className="w-12 h-12 text-eldermate-softYellow" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white">{defaultValues.name}</h2>
              <p className="text-gray-400">Account ID: {user?.id?.substring(0, 8) || 'USR12345'}</p>
            </div>
            
            <Button 
              variant="outline" 
              className="md:ml-auto border-eldermate-softYellow/30 text-eldermate-softYellow hover:bg-eldermate-softYellow/10"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Cancel Edit
                </>
              ) : (
                <>
                  <Edit2 className="mr-2 h-4 w-4" />
                  Edit Profile
                </>
              )}
            </Button>
          </div>
          
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-gray-400">Full Name</Label>
                  <div className="flex items-center gap-3 mt-1">
                    <User className="h-5 w-5 text-eldermate-softYellow" />
                    {isEditing ? (
                      <Input 
                        id="name" 
                        {...register("name", { required: "Name is required" })}
                        className="bg-eldermate-slate border-eldermate-softYellow/30 text-white" 
                      />
                    ) : (
                      <span className="text-white">{defaultValues.name}</span>
                    )}
                  </div>
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-gray-400">Email Address</Label>
                  <div className="flex items-center gap-3 mt-1">
                    <Mail className="h-5 w-5 text-eldermate-softYellow" />
                    {isEditing ? (
                      <Input 
                        id="email" 
                        type="email"
                        {...register("email", { 
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                        className="bg-eldermate-slate border-eldermate-softYellow/30 text-white" 
                      />
                    ) : (
                      <span className="text-white">{defaultValues.email}</span>
                    )}
                  </div>
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-gray-400">Phone Number</Label>
                  <div className="flex items-center gap-3 mt-1">
                    <Phone className="h-5 w-5 text-eldermate-softYellow" />
                    {isEditing ? (
                      <Input 
                        id="phone" 
                        {...register("phone", { required: "Phone is required" })}
                        className="bg-eldermate-slate border-eldermate-softYellow/30 text-white" 
                      />
                    ) : (
                      <span className="text-white">{defaultValues.phone}</span>
                    )}
                  </div>
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                </div>
                
                <div>
                  <Label htmlFor="address" className="text-gray-400">Address</Label>
                  <div className="flex items-center gap-3 mt-1">
                    <MapPin className="h-5 w-5 text-eldermate-softYellow" />
                    {isEditing ? (
                      <Input 
                        id="address" 
                        {...register("address", { required: "Address is required" })}
                        className="bg-eldermate-slate border-eldermate-softYellow/30 text-white" 
                      />
                    ) : (
                      <span className="text-white">{defaultValues.address}</span>
                    )}
                  </div>
                  {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="birthdate" className="text-gray-400">Date of Birth</Label>
                  <div className="flex items-center gap-3 mt-1">
                    <Calendar className="h-5 w-5 text-eldermate-softYellow" />
                    {isEditing ? (
                      <Input 
                        id="birthdate" 
                        type="date"
                        {...register("birthdate", { required: "Birth date is required" })}
                        className="bg-eldermate-slate border-eldermate-softYellow/30 text-white" 
                      />
                    ) : (
                      <span className="text-white">{defaultValues.birthdate}</span>
                    )}
                  </div>
                  {errors.birthdate && <p className="text-red-500 text-sm mt-1">{errors.birthdate.message}</p>}
                </div>
                
                <div>
                  <Label htmlFor="emergencyContact" className="text-gray-400">Emergency Contact</Label>
                  <div className="flex items-center gap-3 mt-1">
                    <Phone className="h-5 w-5 text-eldermate-softYellow" />
                    {isEditing ? (
                      <Input 
                        id="emergencyContact" 
                        {...register("emergencyContact", { required: "Emergency contact is required" })}
                        className="bg-eldermate-slate border-eldermate-softYellow/30 text-white" 
                      />
                    ) : (
                      <span className="text-white">{defaultValues.emergencyContact}</span>
                    )}
                  </div>
                  {errors.emergencyContact && <p className="text-red-500 text-sm mt-1">{errors.emergencyContact.message}</p>}
                </div>
                
                <div>
                  <Label htmlFor="medicalInfo" className="text-gray-400">Medical Information</Label>
                  <div className="flex items-center gap-3 mt-1">
                    <User className="h-5 w-5 text-eldermate-softYellow" />
                    {isEditing ? (
                      <Input 
                        id="medicalInfo" 
                        {...register("medicalInfo")}
                        className="bg-eldermate-slate border-eldermate-softYellow/30 text-white" 
                      />
                    ) : (
                      <span className="text-white">{defaultValues.medicalInfo}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {isEditing && (
              <div className="mt-6 flex justify-end">
                <Button 
                  type="submit" 
                  className="bg-eldermate-softYellow hover:bg-eldermate-softYellow/90 text-eldermate-dark"
                >
                  Save Changes
                </Button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
