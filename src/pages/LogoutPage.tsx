
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import { LogOut } from 'lucide-react';

const LogoutPage = () => {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  useEffect(() => {
    const performLogout = async () => {
      try {
        await signOut();
        toast.success('Logged out successfully');
        navigate('/login', { replace: true });
      } catch (error) {
        console.error('Logout error:', error);
        toast.error('Error logging out. Please try again.');
        navigate('/dashboard');
      }
    };

    performLogout();
  }, [navigate, signOut]);

  return (
    <div className="min-h-screen bg-eldermate-darkGrey flex flex-col items-center justify-center">
      <div className="highlight-card p-12 text-center max-w-md">
        <div className="w-16 h-16 bg-eldermate-slate/50 rounded-full flex items-center justify-center mx-auto mb-6">
          <LogOut className="h-8 w-8 text-eldermate-softYellow" />
        </div>
        <h1 className="text-2xl font-bold text-eldermate-softYellow mb-2">Logging Out</h1>
        <p className="text-gray-400 mb-4">Please wait while we log you out of your account...</p>
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-eldermate-softYellow"></div>
        </div>
      </div>
    </div>
  );
};

export default LogoutPage;
