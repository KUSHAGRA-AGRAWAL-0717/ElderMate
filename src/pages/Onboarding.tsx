
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';

// Multi-step onboarding form
const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  // Patient information
  const [patientName, setPatientName] = useState('');
  const [patientAge, setPatientAge] = useState('');
  const [patientGender, setPatientGender] = useState('');
  
  // Health information
  const [conditions, setConditions] = useState('');
  const [medications, setMedications] = useState('');
  
  // Emergency contacts
  const [contactName, setContactName] = useState('');
  const [contactRelation, setContactRelation] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  const nextStep = () => {
    if (step === 1 && (!patientName || !patientAge || !patientGender)) {
      toast.error('Please fill all patient information');
      return;
    }
    
    if (step === 2 && (!conditions || !medications)) {
      toast.error('Please fill all health information');
      return;
    }
    
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Submit all data
      finishOnboarding();
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  
  const finishOnboarding = () => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast.success('Setup completed successfully');
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center bg-eldermate-navy">
      <div className="absolute inset-0 bg-[url('/assets/onboarding-bg.jpg')] bg-cover bg-center opacity-10" />
      
      <div className="container max-w-lg mx-auto px-4 py-8 relative z-10">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-eldermate-highlight rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl font-bold">E</span>
          </div>
          <h1 className="text-3xl font-bold text-white">Setup Your Account</h1>
          <p className="text-gray-400 mt-2">
            {step === 1 && "Let's start with some basic information"}
            {step === 2 && "Now tell us about health conditions"}
            {step === 3 && "Finally, add emergency contacts"}
          </p>
        </div>
        
        {/* Progress indicators */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center w-64">
            <div className={`w-1/3 h-1 ${step >= 1 ? 'bg-eldermate-highlight' : 'bg-eldermate-darkBlue'} rounded-l-full`}></div>
            <div className={`w-1/3 h-1 ${step >= 2 ? 'bg-eldermate-highlight' : 'bg-eldermate-darkBlue'}`}></div>
            <div className={`w-1/3 h-1 ${step >= 3 ? 'bg-eldermate-highlight' : 'bg-eldermate-darkBlue'} rounded-r-full`}></div>
          </div>
        </div>
        
        <div className="glass-card p-6">
          {/* Step 1: Patient Information */}
          {step === 1 && (
            <div className="space-y-5">
              <div>
                <label htmlFor="patientName" className="block text-sm font-medium text-gray-300 mb-1">
                  Patient Name
                </label>
                <Input
                  id="patientName"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="Full name"
                  className="auth-input"
                />
              </div>
              
              <div>
                <label htmlFor="patientAge" className="block text-sm font-medium text-gray-300 mb-1">
                  Age
                </label>
                <Input
                  id="patientAge"
                  type="number"
                  value={patientAge}
                  onChange={(e) => setPatientAge(e.target.value)}
                  placeholder="Age"
                  className="auth-input"
                />
              </div>
              
              <div>
                <label htmlFor="patientGender" className="block text-sm font-medium text-gray-300 mb-1">
                  Gender
                </label>
                <Select value={patientGender} onValueChange={setPatientGender}>
                  <SelectTrigger className="auth-input">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent className="bg-eldermate-dark border-eldermate-darkBlue">
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          
          {/* Step 2: Health Information */}
          {step === 2 && (
            <div className="space-y-5">
              <div>
                <label htmlFor="conditions" className="block text-sm font-medium text-gray-300 mb-1">
                  Health Conditions
                </label>
                <Input
                  id="conditions"
                  value={conditions}
                  onChange={(e) => setConditions(e.target.value)}
                  placeholder="e.g., Diabetes, Hypertension"
                  className="auth-input"
                />
              </div>
              
              <div>
                <label htmlFor="medications" className="block text-sm font-medium text-gray-300 mb-1">
                  Current Medications
                </label>
                <Input
                  id="medications"
                  value={medications}
                  onChange={(e) => setMedications(e.target.value)}
                  placeholder="List all current medications"
                  className="auth-input"
                />
              </div>
            </div>
          )}
          
          {/* Step 3: Emergency Contacts */}
          {step === 3 && (
            <div className="space-y-5">
              <div>
                <label htmlFor="contactName" className="block text-sm font-medium text-gray-300 mb-1">
                  Emergency Contact Name
                </label>
                <Input
                  id="contactName"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="Full name"
                  className="auth-input"
                />
              </div>
              
              <div>
                <label htmlFor="contactRelation" className="block text-sm font-medium text-gray-300 mb-1">
                  Relationship
                </label>
                <Input
                  id="contactRelation"
                  value={contactRelation}
                  onChange={(e) => setContactRelation(e.target.value)}
                  placeholder="e.g., Son, Daughter, Spouse"
                  className="auth-input"
                />
              </div>
              
              <div>
                <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-300 mb-1">
                  Phone Number
                </label>
                <Input
                  id="contactPhone"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  placeholder="Phone number"
                  className="auth-input"
                />
              </div>
            </div>
          )}
          
          <div className="flex justify-between mt-8">
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              disabled={step === 1}
              className="px-5 border-eldermate-darkBlue text-white hover:bg-eldermate-darkBlue/30"
            >
              Back
            </Button>
            
            <Button
              type="button"
              onClick={nextStep}
              disabled={loading}
              className="px-5 bg-eldermate-highlight hover:bg-eldermate-highlight/90"
            >
              {loading ? 'Processing...' : step === 3 ? 'Complete Setup' : 'Continue'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
