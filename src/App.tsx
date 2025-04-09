
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import Schedule from "./pages/Schedule";
import HealthVitals from "./pages/HealthVitals";
import SocialConnect from "./pages/SocialConnect";
import EmergencyLogs from "./pages/EmergencyLogs";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import VoiceAssistantWidget from "./components/VoiceAssistantWidget";
import { ElderProvider } from "./contexts/ElderContext";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import NotificationsPage from "./pages/NotificationsPage";
import Support from "./pages/Support";
import LogoutPage from "./pages/LogoutPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <ElderProvider>
            <div className="flex bg-gray-50">
              <Sidebar />
              <div className="flex-1">
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/onboarding" element={<Onboarding />} />
                  <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                  <Route path="/schedule" element={<ProtectedRoute><Schedule /></ProtectedRoute>} />
                  <Route path="/health-vitals" element={<ProtectedRoute><HealthVitals /></ProtectedRoute>} />
                  <Route path="/social-connect" element={<ProtectedRoute><SocialConnect /></ProtectedRoute>} />
                  <Route path="/emergency-logs" element={<ProtectedRoute><EmergencyLogs /></ProtectedRoute>} />
                  <Route path="/elder" element={<ProtectedRoute><Index /></ProtectedRoute>} />
                  <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
                  <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                  <Route path="/notifications" element={<ProtectedRoute><NotificationsPage /></ProtectedRoute>} />
                  <Route path="/support" element={<ProtectedRoute><Support /></ProtectedRoute>} />
                  <Route path="/logout" element={<ProtectedRoute><LogoutPage /></ProtectedRoute>} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </div>
            <VoiceAssistantWidget />
          </ElderProvider>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
