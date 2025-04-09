
import React, { useState } from 'react';
import { 
  Bell, 
  Moon, 
  Shield, 
  Eye, 
  EyeOff, 
  Lock,
  Globe,
  Volume2,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';

const Settings = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  
  // Sample settings states
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      sms: true,
      app: true,
      medicationReminders: true,
      appointmentReminders: true,
      healthAlerts: true
    },
    appearance: {
      darkMode: true,
      fontSize: "medium",
      highContrast: false
    },
    privacy: {
      locationSharing: true,
      dataSharing: false,
      activityTracking: true
    },
    accessibility: {
      voiceCommands: true,
      screenReader: false,
      textToSpeech: true
    },
    language: "english",
    timezone: "America/Los_Angeles"
  });
  
  const handleSettingChange = (category, setting, value) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: value
      }
    }));
    
    toast.success(`Setting updated: ${setting}`);
  };
  
  const handlePasswordChange = (e) => {
    e.preventDefault();
    // In a real app, this would update the user's password
    toast.success("Password updated successfully");
  };
  
  return (
    <div className="min-h-screen bg-eldermate-darkGrey">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-eldermate-softYellow mb-6">Settings</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Categories */}
          <div className="highlight-card p-5">
            <nav className="space-y-2">
              <a href="#notifications" className="flex items-center gap-3 p-3 rounded-lg hover:bg-eldermate-slate text-eldermate-softYellow">
                <Bell className="h-5 w-5" />
                <span>Notification Settings</span>
              </a>
              <a href="#appearance" className="flex items-center gap-3 p-3 rounded-lg hover:bg-eldermate-slate text-white">
                <Moon className="h-5 w-5" />
                <span>Appearance</span>
              </a>
              <a href="#privacy" className="flex items-center gap-3 p-3 rounded-lg hover:bg-eldermate-slate text-white">
                <Shield className="h-5 w-5" />
                <span>Privacy & Security</span>
              </a>
              <a href="#accessibility" className="flex items-center gap-3 p-3 rounded-lg hover:bg-eldermate-slate text-white">
                <Volume2 className="h-5 w-5" />
                <span>Accessibility</span>
              </a>
              <a href="#language" className="flex items-center gap-3 p-3 rounded-lg hover:bg-eldermate-slate text-white">
                <Globe className="h-5 w-5" />
                <span>Language & Region</span>
              </a>
            </nav>
          </div>
          
          {/* Right Column - Settings */}
          <div className="highlight-card p-5 lg:col-span-2">
            <div id="notifications" className="mb-8">
              <h2 className="text-xl font-semibold text-eldermate-softYellow mb-4">Notification Settings</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium">Email Notifications</h3>
                    <p className="text-gray-400 text-sm">Receive notifications via email</p>
                  </div>
                  <Switch 
                    checked={settings.notifications.email} 
                    onCheckedChange={(checked) => handleSettingChange('notifications', 'email', checked)} 
                    className="data-[state=checked]:bg-eldermate-softYellow"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium">SMS Notifications</h3>
                    <p className="text-gray-400 text-sm">Receive notifications via text message</p>
                  </div>
                  <Switch 
                    checked={settings.notifications.sms} 
                    onCheckedChange={(checked) => handleSettingChange('notifications', 'sms', checked)} 
                    className="data-[state=checked]:bg-eldermate-softYellow"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium">App Notifications</h3>
                    <p className="text-gray-400 text-sm">Receive in-app notifications</p>
                  </div>
                  <Switch 
                    checked={settings.notifications.app} 
                    onCheckedChange={(checked) => handleSettingChange('notifications', 'app', checked)} 
                    className="data-[state=checked]:bg-eldermate-softYellow"
                  />
                </div>
                
                <Separator className="bg-eldermate-softYellow/20 my-4" />
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium">Medication Reminders</h3>
                    <p className="text-gray-400 text-sm">Alerts for medication schedules</p>
                  </div>
                  <Switch 
                    checked={settings.notifications.medicationReminders} 
                    onCheckedChange={(checked) => handleSettingChange('notifications', 'medicationReminders', checked)} 
                    className="data-[state=checked]:bg-eldermate-softYellow"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium">Appointment Reminders</h3>
                    <p className="text-gray-400 text-sm">Alerts for upcoming appointments</p>
                  </div>
                  <Switch 
                    checked={settings.notifications.appointmentReminders} 
                    onCheckedChange={(checked) => handleSettingChange('notifications', 'appointmentReminders', checked)} 
                    className="data-[state=checked]:bg-eldermate-softYellow"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium">Health Alerts</h3>
                    <p className="text-gray-400 text-sm">Alerts for important health changes</p>
                  </div>
                  <Switch 
                    checked={settings.notifications.healthAlerts} 
                    onCheckedChange={(checked) => handleSettingChange('notifications', 'healthAlerts', checked)} 
                    className="data-[state=checked]:bg-eldermate-softYellow"
                  />
                </div>
              </div>
            </div>
            
            <Separator className="bg-eldermate-softYellow/20 my-6" />
            
            <div id="appearance" className="mb-8">
              <h2 className="text-xl font-semibold text-eldermate-softYellow mb-4">Appearance</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium">Dark Mode</h3>
                    <p className="text-gray-400 text-sm">Use dark theme for the application</p>
                  </div>
                  <Switch 
                    checked={settings.appearance.darkMode} 
                    onCheckedChange={(checked) => handleSettingChange('appearance', 'darkMode', checked)} 
                    className="data-[state=checked]:bg-eldermate-softYellow"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium">High Contrast</h3>
                    <p className="text-gray-400 text-sm">Increase contrast for better visibility</p>
                  </div>
                  <Switch 
                    checked={settings.appearance.highContrast} 
                    onCheckedChange={(checked) => handleSettingChange('appearance', 'highContrast', checked)} 
                    className="data-[state=checked]:bg-eldermate-softYellow"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="fontSize" className="text-white font-medium">Font Size</Label>
                  <Select 
                    value={settings.appearance.fontSize}
                    onValueChange={(value) => handleSettingChange('appearance', 'fontSize', value)}
                  >
                    <SelectTrigger id="fontSize" className="bg-eldermate-slate border-eldermate-softYellow/30 text-white">
                      <SelectValue placeholder="Select font size" />
                    </SelectTrigger>
                    <SelectContent className="bg-eldermate-dark border-eldermate-softYellow/30">
                      <SelectItem value="small" className="text-white">Small</SelectItem>
                      <SelectItem value="medium" className="text-white">Medium</SelectItem>
                      <SelectItem value="large" className="text-white">Large</SelectItem>
                      <SelectItem value="extra-large" className="text-white">Extra Large</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-gray-400 text-sm">Adjust text size throughout the app</p>
                </div>
              </div>
            </div>
            
            <Separator className="bg-eldermate-softYellow/20 my-6" />
            
            <div id="privacy" className="mb-8">
              <h2 className="text-xl font-semibold text-eldermate-softYellow mb-4">Privacy & Security</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium">Location Sharing</h3>
                    <p className="text-gray-400 text-sm">Share your location with caregivers</p>
                  </div>
                  <Switch 
                    checked={settings.privacy.locationSharing} 
                    onCheckedChange={(checked) => handleSettingChange('privacy', 'locationSharing', checked)} 
                    className="data-[state=checked]:bg-eldermate-softYellow"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium">Data Sharing</h3>
                    <p className="text-gray-400 text-sm">Share health data with healthcare providers</p>
                  </div>
                  <Switch 
                    checked={settings.privacy.dataSharing} 
                    onCheckedChange={(checked) => handleSettingChange('privacy', 'dataSharing', checked)} 
                    className="data-[state=checked]:bg-eldermate-softYellow"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium">Activity Tracking</h3>
                    <p className="text-gray-400 text-sm">Allow app to track your activity</p>
                  </div>
                  <Switch 
                    checked={settings.privacy.activityTracking} 
                    onCheckedChange={(checked) => handleSettingChange('privacy', 'activityTracking', checked)} 
                    className="data-[state=checked]:bg-eldermate-softYellow"
                  />
                </div>
                
                <Separator className="bg-eldermate-softYellow/20 my-4" />
                
                <div>
                  <h3 className="text-white font-medium mb-2">Change Password</h3>
                  <form onSubmit={handlePasswordChange} className="space-y-3">
                    <div>
                      <Label htmlFor="currentPassword" className="text-gray-400">Current Password</Label>
                      <div className="relative">
                        <Input 
                          id="currentPassword" 
                          type={passwordVisible ? "text" : "password"} 
                          className="bg-eldermate-slate border-eldermate-softYellow/30 text-white pr-10" 
                          placeholder="••••••••"
                        />
                        <button 
                          type="button"
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                          onClick={() => setPasswordVisible(!passwordVisible)}
                        >
                          {passwordVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="newPassword" className="text-gray-400">New Password</Label>
                      <Input 
                        id="newPassword" 
                        type={passwordVisible ? "text" : "password"} 
                        className="bg-eldermate-slate border-eldermate-softYellow/30 text-white" 
                        placeholder="••••••••"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="confirmPassword" className="text-gray-400">Confirm New Password</Label>
                      <Input 
                        id="confirmPassword" 
                        type={passwordVisible ? "text" : "password"} 
                        className="bg-eldermate-slate border-eldermate-softYellow/30 text-white" 
                        placeholder="••••••••"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="bg-eldermate-softYellow hover:bg-eldermate-softYellow/90 text-eldermate-dark mt-2"
                    >
                      <Lock className="mr-2 h-4 w-4" />
                      Update Password
                    </Button>
                  </form>
                </div>
              </div>
            </div>
            
            <Separator className="bg-eldermate-softYellow/20 my-6" />
            
            <div id="accessibility" className="mb-8">
              <h2 className="text-xl font-semibold text-eldermate-softYellow mb-4">Accessibility</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium">Voice Commands</h3>
                    <p className="text-gray-400 text-sm">Control app with voice commands</p>
                  </div>
                  <Switch 
                    checked={settings.accessibility.voiceCommands} 
                    onCheckedChange={(checked) => handleSettingChange('accessibility', 'voiceCommands', checked)} 
                    className="data-[state=checked]:bg-eldermate-softYellow"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium">Screen Reader</h3>
                    <p className="text-gray-400 text-sm">Enable screen reader compatibility</p>
                  </div>
                  <Switch 
                    checked={settings.accessibility.screenReader} 
                    onCheckedChange={(checked) => handleSettingChange('accessibility', 'screenReader', checked)} 
                    className="data-[state=checked]:bg-eldermate-softYellow"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium">Text to Speech</h3>
                    <p className="text-gray-400 text-sm">Read notifications aloud</p>
                  </div>
                  <Switch 
                    checked={settings.accessibility.textToSpeech} 
                    onCheckedChange={(checked) => handleSettingChange('accessibility', 'textToSpeech', checked)} 
                    className="data-[state=checked]:bg-eldermate-softYellow"
                  />
                </div>
              </div>
            </div>
            
            <Separator className="bg-eldermate-softYellow/20 my-6" />
            
            <div id="language" className="mb-8">
              <h2 className="text-xl font-semibold text-eldermate-softYellow mb-4">Language & Region</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="language" className="text-white font-medium">Language</Label>
                  <Select 
                    value={settings.language}
                    onValueChange={(value) => setSettings({...settings, language: value})}
                  >
                    <SelectTrigger id="language" className="bg-eldermate-slate border-eldermate-softYellow/30 text-white">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent className="bg-eldermate-dark border-eldermate-softYellow/30">
                      <SelectItem value="english" className="text-white">English</SelectItem>
                      <SelectItem value="spanish" className="text-white">Spanish</SelectItem>
                      <SelectItem value="french" className="text-white">French</SelectItem>
                      <SelectItem value="german" className="text-white">German</SelectItem>
                      <SelectItem value="chinese" className="text-white">Chinese</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="timezone" className="text-white font-medium">Time Zone</Label>
                  <Select 
                    value={settings.timezone}
                    onValueChange={(value) => setSettings({...settings, timezone: value})}
                  >
                    <SelectTrigger id="timezone" className="bg-eldermate-slate border-eldermate-softYellow/30 text-white">
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent className="bg-eldermate-dark border-eldermate-softYellow/30">
                      <SelectItem value="America/Los_Angeles" className="text-white">Pacific Time (PT)</SelectItem>
                      <SelectItem value="America/Denver" className="text-white">Mountain Time (MT)</SelectItem>
                      <SelectItem value="America/Chicago" className="text-white">Central Time (CT)</SelectItem>
                      <SelectItem value="America/New_York" className="text-white">Eastern Time (ET)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8">
              <Button 
                className="bg-eldermate-softYellow hover:bg-eldermate-softYellow/90 text-eldermate-dark"
                onClick={() => toast.success("All settings saved successfully")}
              >
                Save All Settings
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
