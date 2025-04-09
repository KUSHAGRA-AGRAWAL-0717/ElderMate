
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Bell, LifeBuoy, LogOut, Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signOut } = useAuth();
  
  // Don't show navbar on auth pages
  if (location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/onboarding') {
    return null;
  }

  const handleLogout = async () => {
    try {
      await signOut();
      toast.success('Logged out successfully');
      navigate('/login');
    } catch (error) {
      toast.error('Error logging out');
    }
  };

  return (
    <header className="bg-eldermate-dark border-b border-eldermate-softYellow/20 py-3 px-4 sticky top-0 z-50 shadow-sm">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-eldermate-softYellow rounded-lg flex items-center justify-center">
              <span className="text-eldermate-dark font-semibold">E</span>
            </div>
            <h1 className="text-xl font-bold text-white">ElderMate</h1>
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <Link to="/notifications">
            <Button variant="outline" size="icon" className="border-eldermate-softYellow/30 bg-transparent text-gray-300 hover:bg-eldermate-softYellow/20 hover:text-white relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-eldermate-alert rounded-full text-white text-xs flex items-center justify-center">3</span>
            </Button>
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="border-eldermate-softYellow/30 bg-transparent text-gray-300 hover:bg-eldermate-softYellow/20 hover:text-white">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-eldermate-dark border border-eldermate-softYellow/30 w-56">
              <DropdownMenuItem className="text-gray-300 hover:bg-eldermate-slate focus:bg-eldermate-slate cursor-pointer" onClick={() => navigate('/profile')}>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gray-300 hover:bg-eldermate-slate focus:bg-eldermate-slate cursor-pointer" onClick={() => navigate('/settings')}>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gray-300 hover:bg-eldermate-slate focus:bg-eldermate-slate cursor-pointer" onClick={() => navigate('/support')}>
                <LifeBuoy className="mr-2 h-4 w-4" />
                <span>Support</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-eldermate-softYellow/20" />
              <DropdownMenuItem 
                className="text-eldermate-alert hover:bg-eldermate-slate focus:bg-eldermate-slate cursor-pointer"
                onClick={() => navigate('/logout')}
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
