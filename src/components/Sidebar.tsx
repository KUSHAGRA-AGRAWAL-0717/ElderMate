
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Calendar, 
  HeartPulse, 
  Home, 
  AlertTriangle, 
  Users, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  User,
  Bell,
  LifeBuoy,
  LogOut
} from 'lucide-react';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  
  // Don't show sidebar on auth pages
  if (location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/onboarding') {
    return null;
  }

  const mainMenu = [
    { name: 'Dashboard', path: '/dashboard', icon: <Home className="w-5 h-5" /> },
    { name: 'Schedule', path: '/schedule', icon: <Calendar className="w-5 h-5" /> },
    { name: 'Health Vitals', path: '/health-vitals', icon: <HeartPulse className="w-5 h-5" /> },
    { name: 'Social Connect', path: '/social-connect', icon: <Users className="w-5 h-5" /> },
    { name: 'Emergency Logs', path: '/emergency-logs', icon: <AlertTriangle className="w-5 h-5" /> },
  ];

  const userMenu = [
    { name: 'Profile', path: '/profile', icon: <User className="w-5 h-5" /> },
    { name: 'Notifications', path: '/notifications', icon: <Bell className="w-5 h-5" /> },
    { name: 'Settings', path: '/settings', icon: <Settings className="w-5 h-5" /> },
    { name: 'Support', path: '/support', icon: <LifeBuoy className="w-5 h-5" /> },
    { name: 'Logout', path: '/logout', icon: <LogOut className="w-5 h-5" /> },
  ];

  return (
    <aside className={`bg-eldermate-dark border-r border-eldermate-softYellow/20 h-screen flex flex-col transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'} sticky left-0 top-0`}>
      <div className="flex-1 py-5 flex flex-col gap-1">
        {/* Main Navigation */}
        <div className="mb-1">
          {!collapsed && <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase">Main Navigation</div>}
          {mainMenu.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-4 py-3 mx-2 rounded-lg ${
                location.pathname === item.path 
                  ? 'bg-eldermate-softYellow text-eldermate-dark font-medium' 
                  : 'text-gray-400 hover:bg-eldermate-slate hover:text-white'
              } transition-colors`}
            >
              <span className="flex items-center justify-center">{item.icon}</span>
              {!collapsed && <span className="ml-3">{item.name}</span>}
            </Link>
          ))}
        </div>
        
        {/* User Menu */}
        {!collapsed && <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase mt-4">User</div>}
        <div className="mb-1">
          {userMenu.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-4 py-3 mx-2 rounded-lg ${
                location.pathname === item.path 
                  ? 'bg-eldermate-softYellow text-eldermate-dark font-medium' 
                  : 'text-gray-400 hover:bg-eldermate-slate hover:text-white'
              } transition-colors`}
            >
              <span className="flex items-center justify-center">{item.icon}</span>
              {!collapsed && <span className="ml-3">{item.name}</span>}
            </Link>
          ))}
        </div>
      </div>
      
      <div className="p-4 border-t border-eldermate-softYellow/20">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center justify-center p-2 rounded-lg bg-eldermate-slate hover:bg-eldermate-softYellow/20 text-gray-400 hover:text-white transition-colors"
        >
          {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          {!collapsed && <span className="ml-2">Collapse</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
