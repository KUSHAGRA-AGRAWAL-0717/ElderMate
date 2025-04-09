import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bell, 
  Calendar, 
  Heart, 
  Users, 
  Clock, 
  Activity, 
  Brain, 
  Shield, 
  Pill, 
  Phone,
  Video,
  LineChart,
  ArrowRight,
  TrendingUp,
  TrendingDown,
  Droplets,
  Moon,
  Thermometer
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useElder } from '@/contexts/ElderContext';
import AlertBanner from '@/components/AlertBanner';
import {
  LineChart as RechartsLineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  TooltipProps
} from 'recharts';

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

const Dashboard = () => {
  const { patient, healthData, medications } = useElder();
  const [activeTab, setActiveTab] = useState('health');
  
  const heartRateData = [
    { time: '6am', value: 68 },
    { time: '8am', value: 72 },
    { time: '10am', value: 76 },
    { time: '12pm', value: 80 },
    { time: '2pm', value: 74 },
    { time: '4pm', value: 72 },
    { time: '6pm', value: 70 },
  ];
  
  const bloodPressureData = [
    { time: '6am', systolic: 120, diastolic: 80 },
    { time: '8am', systolic: 122, diastolic: 82 },
    { time: '10am', systolic: 125, diastolic: 83 },
    { time: '12pm', systolic: 128, diastolic: 85 },
    { time: '2pm', systolic: 126, diastolic: 84 },
    { time: '4pm', systolic: 124, diastolic: 83 },
    { time: '6pm', systolic: 121, diastolic: 81 },
  ];
  
  const activityData = [
    { day: 'Mon', steps: 4500 },
    { day: 'Tue', steps: 3800 },
    { day: 'Wed', steps: 5200 },
    { day: 'Thu', steps: 4100 },
    { day: 'Fri', steps: 6300 },
    { day: 'Sat', steps: 4800 },
    { day: 'Sun', steps: 3500 },
  ];
  
  const wellnessData = [
    { name: 'Physical', value: 75 },
    { name: 'Mental', value: 85 },
    { name: 'Social', value: 65 },
    { name: 'Sleep', value: 80 },
  ];
  
  const COLORS = ['#F5DC00', '#82C3A9', '#5C96D4', '#9B87F5'];
  
  const getVitalTrend = (vitalName: string) => {
    const random = Math.random();
    if (random > 0.7) return 'up';
    if (random > 0.4) return 'steady';
    return 'down';
  };
  
  const renderTrendIcon = (trend: string) => {
    if (trend === 'up') return <TrendingUp className="h-4 w-4 text-green-500" />;
    if (trend === 'down') return <TrendingDown className="h-4 w-4 text-red-500" />;
    return null;
  };
  
  const getTrendText = (trend: string) => {
    if (trend === 'up') return 'Improving';
    if (trend === 'down') return 'Declining';
    return 'Stable';
  };
  
  const getTrendColor = (trend: string) => {
    if (trend === 'up') return 'text-green-500';
    if (trend === 'down') return 'text-red-500';
    return 'text-gray-400';
  };
  
  const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-eldermate-dark p-3 border border-eldermate-softYellow/30 rounded-lg shadow-lg">
          <p className="text-eldermate-softYellow">{`${label}`}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-white">
              {`${entry.name}: ${entry.value}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };
  
  const statsCards = [
    {
      title: "Heart Rate",
      value: "72",
      unit: "BPM",
      icon: <Heart className="h-5 w-5 text-eldermate-softYellow" />,
      trend: getVitalTrend("Heart Rate")
    },
    {
      title: "Blood Pressure",
      value: "120/80",
      unit: "mmHg",
      icon: <Activity className="h-5 w-5 text-eldermate-softYellow" />,
      trend: getVitalTrend("Blood Pressure")
    },
    {
      title: "Temperature",
      value: "98.6",
      unit: "°F",
      icon: <Thermometer className="h-5 w-5 text-eldermate-softYellow" />,
      trend: getVitalTrend("Temperature")
    },
    {
      title: "Hydration",
      value: "85",
      unit: "%",
      icon: <Droplets className="h-5 w-5 text-eldermate-softYellow" />,
      trend: getVitalTrend("Hydration")
    },
    {
      title: "Sleep Quality",
      value: "76",
      unit: "%",
      icon: <Moon className="h-5 w-5 text-eldermate-softYellow" />,
      trend: getVitalTrend("Sleep")
    },
    {
      title: "Cognitive",
      value: "92",
      unit: "%",
      icon: <Brain className="h-5 w-5 text-eldermate-softYellow" />,
      trend: getVitalTrend("Cognitive")
    }
  ];
  
  return (
    <div className="min-h-screen bg-eldermate-darkGrey">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 fadeIn-effect">
          <h1 className="text-3xl font-bold text-eldermate-softYellow mb-2 flex items-center">
            Welcome back, {patient.name}
            <div className="ml-3 w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          </h1>
          <p className="text-gray-400">Your health dashboard • {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
        
        <AlertBanner />
        
        <div className="mb-6 flex items-center space-x-2 border-b border-eldermate-softYellow/20 pb-2 fadeIn-effect">
          {['health', 'activity', 'medication', 'social'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-t-lg font-medium transition-all ${
                activeTab === tab 
                  ? 'text-eldermate-softYellow border-b-2 border-eldermate-softYellow' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        
        {activeTab === 'health' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 fadeIn-effect">
              {statsCards.map((stat, index) => (
                <div key={index} className="highlight-card p-4 interactive-card">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      {stat.icon}
                      <h3 className="ml-2 text-white font-medium">{stat.title}</h3>
                    </div>
                    <div className={`flex items-center ${getTrendColor(stat.trend)}`}>
                      <span className="text-xs mr-1">{getTrendText(stat.trend)}</span>
                      {renderTrendIcon(stat.trend)}
                    </div>
                  </div>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-eldermate-softYellow">{stat.value}</span>
                    <span className="ml-1 text-gray-400">{stat.unit}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div className="highlight-card p-5">
                <h3 className="text-white font-medium mb-2">Heart Rate (24 Hours)</h3>
                <div className="h-64 chart-container">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={heartRateData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#444444" />
                      <XAxis dataKey="time" stroke="#888888" />
                      <YAxis stroke="#888888" />
                      <Tooltip content={<CustomTooltip />} />
                      <Area 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#F5DC00" 
                        fill="rgba(245, 220, 0, 0.2)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="highlight-card p-5">
                <h3 className="text-white font-medium mb-2">Blood Pressure (24 Hours)</h3>
                <div className="h-64 chart-container">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsLineChart data={bloodPressureData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#444444" />
                      <XAxis dataKey="time" stroke="#888888" />
                      <YAxis stroke="#888888" />
                      <Tooltip content={<CustomTooltip />} />
                      <Line 
                        type="monotone" 
                        dataKey="systolic" 
                        stroke="#F5DC00" 
                        strokeWidth={2}
                        dot={{ r: 3, fill: '#F5DC00' }}
                        activeDot={{ r: 5 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="diastolic" 
                        stroke="#5C96D4" 
                        strokeWidth={2}
                        dot={{ r: 3, fill: '#5C96D4' }}
                        activeDot={{ r: 5 }}
                      />
                    </RechartsLineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            
            <div className="highlight-card p-5 mb-8">
              <h3 className="text-white font-medium mb-4">Wellness Overview</h3>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                <div className="lg:col-span-3">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {wellnessData.map((item, index) => (
                      <div key={index} className="dashboard-stat">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-400">{item.name}</span>
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
                        </div>
                        <div className="flex items-baseline">
                          <span className="text-2xl font-bold text-eldermate-softYellow">{item.value}</span>
                          <span className="ml-1 text-gray-400">%</span>
                        </div>
                        <div className="w-full bg-eldermate-slate rounded-full h-1 mt-2">
                          <div 
                            className="rounded-full h-1" 
                            style={{ width: `${item.value}%`, backgroundColor: COLORS[index] }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="h-64 flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={wellnessData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {wellnessData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </>
        )}
        
        {activeTab === 'activity' && (
          <div className="fadeIn-effect">
            <div className="highlight-card p-5 mb-8">
              <h3 className="text-white font-medium mb-4">Weekly Activity</h3>
              <div className="h-80 chart-container">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={activityData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#444444" />
                    <XAxis dataKey="day" stroke="#888888" />
                    <YAxis stroke="#888888" />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="steps" fill="#F5DC00" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <span className="text-sm text-gray-400">Weekly Average</span>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-eldermate-softYellow">4,600</span>
                    <span className="ml-1 text-gray-400">steps</span>
                  </div>
                </div>
                <div>
                  <span className="text-sm text-gray-400">Weekly Goal</span>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-eldermate-softYellow">35,000</span>
                    <span className="ml-1 text-gray-400">steps</span>
                  </div>
                </div>
                <div>
                  <span className="text-sm text-gray-400">Progress</span>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-eldermate-softYellow">92%</span>
                    <span className="ml-1 text-gray-400">of goal</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="highlight-card p-5 col-span-2">
                <h3 className="text-white font-medium mb-2">Recent Activities</h3>
                <div className="space-y-4">
                  {[
                    { time: '8:30 AM', activity: 'Morning Walk', duration: '25 min', steps: 2450 },
                    { time: '10:15 AM', activity: 'Stretching Exercises', duration: '15 min', steps: 300 },
                    { time: '12:00 PM', activity: 'Lunch Preparation', duration: '30 min', steps: 850 },
                    { time: '3:30 PM', activity: 'Gardening', duration: '45 min', steps: 1200 },
                  ].map((item, index) => (
                    <div key={index} className="dashboard-stat p-3 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-gray-500">{item.time}</span>
                        <p className="text-white font-medium">{item.activity}</p>
                        <span className="text-xs text-gray-400">{item.duration}</span>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-eldermate-softYellow">{item.steps}</p>
                        <span className="text-xs text-gray-400">steps</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="highlight-card p-5">
                <h3 className="text-white font-medium mb-2">Activity Suggestions</h3>
                <div className="space-y-3">
                  {[
                    { activity: 'Afternoon Walk', benefit: 'Cardiovascular health' },
                    { activity: 'Chair Yoga', benefit: 'Flexibility and balance' },
                    { activity: 'Brain Games', benefit: 'Cognitive function' },
                    { activity: 'Light Gardening', benefit: 'Dexterity and outdoor time' },
                  ].map((item, index) => (
                    <div key={index} className="dashboard-stat p-3">
                      <p className="text-white font-medium">{item.activity}</p>
                      <span className="text-xs text-gray-400">{item.benefit}</span>
                      <Button variant="outline" size="sm" className="w-full mt-2 border-eldermate-softYellow/30 text-eldermate-softYellow hover:bg-eldermate-softYellow/10">
                        Schedule
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'medication' && (
          <div className="fadeIn-effect">
            <div className="highlight-card p-5 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-medium">Today's Medications</h3>
                <Button variant="outline" className="border-eldermate-softYellow/30 text-eldermate-softYellow hover:bg-eldermate-softYellow/10">
                  View All
                </Button>
              </div>
              <div className="space-y-4">
                {medications.map((med) => (
                  <div key={med.id} className="dashboard-stat p-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-eldermate-slate flex items-center justify-center mr-4">
                        <Pill className="h-5 w-5 text-eldermate-softYellow" />
                      </div>
                      <div>
                        <p className="text-white font-medium">{med.name}</p>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 text-gray-400 mr-1" />
                          <span className="text-xs text-gray-400">{med.nextDose}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className={`px-3 py-1 rounded-full text-xs ${
                        med.taken ? 'bg-green-900/30 text-green-400' : 'bg-eldermate-softYellow/20 text-eldermate-softYellow'
                      }`}>
                        {med.taken ? 'Taken' : 'Due'}
                      </div>
                      <p className="text-xs text-right text-gray-400 mt-1">{med.dosage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="highlight-card p-5">
                <h3 className="text-white font-medium mb-3">Medication Adherence</h3>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-4xl font-bold text-eldermate-softYellow">92%</span>
                    <span className="text-gray-400 ml-2">this month</span>
                  </div>
                  <div className="h-16 w-16">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={[
                            { name: 'Taken', value: 92 },
                            { name: 'Missed', value: 8 },
                          ]}
                          cx="50%"
                          cy="50%"
                          innerRadius={15}
                          outerRadius={30}
                          paddingAngle={0}
                          dataKey="value"
                        >
                          <Cell fill="#F5DC00" />
                          <Cell fill="#444444" />
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="dashboard-stat p-3">
                    <span className="text-white text-lg font-bold">24</span>
                    <p className="text-xs text-gray-400">taken</p>
                  </div>
                  <div className="dashboard-stat p-3">
                    <span className="text-white text-lg font-bold">2</span>
                    <p className="text-xs text-gray-400">missed</p>
                  </div>
                  <div className="dashboard-stat p-3">
                    <span className="text-white text-lg font-bold">8</span>
                    <p className="text-xs text-gray-400">remaining</p>
                  </div>
                </div>
              </div>
              
              <div className="highlight-card p-5">
                <h3 className="text-white font-medium mb-3">Refills Needed</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Metoprolol', remaining: '4 days', urgent: true },
                    { name: 'Atorvastatin', remaining: '10 days', urgent: false },
                  ].map((item, index) => (
                    <div key={index} className={`dashboard-stat p-3 ${item.urgent ? 'border-red-500/30' : ''}`}>
                      <div className="flex items-center justify-between">
                        <p className="text-white font-medium">{item.name}</p>
                        {item.urgent && <div className="px-2 py-0.5 bg-red-900/30 text-red-400 text-xs rounded-full">Urgent</div>}
                      </div>
                      <div className="flex items-center mt-1">
                        <span className="text-xs text-gray-400 mr-3">Remaining: {item.remaining}</span>
                        <Button variant="outline" size="sm" className="text-xs border-eldermate-softYellow/30 text-eldermate-softYellow hover:bg-eldermate-softYellow/10">
                          Refill
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'social' && (
          <div className="fadeIn-effect">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="highlight-card p-5 md:col-span-2">
                <h3 className="text-white font-medium mb-4">Upcoming Connections</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Family Video Call', time: 'Today, 4:00 PM', participants: 'Sarah, John, Emily', type: 'video' },
                    { name: 'Doctor Appointment', time: 'Tomorrow, 10:30 AM', participants: 'Dr. Williams', type: 'video' },
                    { name: 'Neighbor Visit', time: 'Wed, 2:00 PM', participants: 'Mrs. Thompson', type: 'person' },
                  ].map((item, index) => (
                    <div key={index} className="dashboard-stat p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-medium">{item.name}</p>
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 text-gray-400 mr-1" />
                            <span className="text-xs text-gray-400">{item.time}</span>
                          </div>
                          <div className="flex items-center mt-1">
                            <Users className="h-3 w-3 text-gray-400 mr-1" />
                            <span className="text-xs text-gray-400">{item.participants}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          {item.type === 'video' ? (
                            <Button size="sm" className="bg-eldermate-softYellow hover:bg-eldermate-softYellow/90 text-eldermate-darkGrey">
                              <Video className="h-4 w-4 mr-1" />
                              Join
                            </Button>
                          ) : (
                            <Button size="sm" variant="outline" className="border-eldermate-softYellow/30 text-eldermate-softYellow hover:bg-eldermate-softYellow/10">
                              Confirm
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="highlight-card p-5">
                <h3 className="text-white font-medium mb-4">Social Interactions</h3>
                <div className="h-64 chart-container">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={[
                        { day: 'Mon', interactions: 2 },
                        { day: 'Tue', interactions: 1 },
                        { day: 'Wed', interactions: 3 },
                        { day: 'Thu', interactions: 0 },
                        { day: 'Fri', interactions: 2 },
                        { day: 'Sat', interactions: 4 },
                        { day: 'Sun', interactions: 1 },
                      ]}
                      margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#444444" />
                      <XAxis dataKey="day" stroke="#888888" />
                      <YAxis stroke="#888888" />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar dataKey="interactions" fill="#F5DC00" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4">
                  <span className="text-sm text-gray-400">Weekly Total</span>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-eldermate-softYellow">13</span>
                    <span className="ml-1 text-gray-400">interactions</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="highlight-card p-5 mb-8">
              <h3 className="text-white font-medium mb-4">Suggested Contacts</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: 'Sarah (Daughter)', lastContact: '2 days ago', image: 'https://i.pravatar.cc/100?img=5' },
                  { name: 'Dr. Williams', lastContact: '2 weeks ago', image: 'https://i.pravatar.cc/100?img=8' },
                  { name: 'Book Club', lastContact: '1 week ago', image: 'https://i.pravatar.cc/100?img=3' },
                  { name: 'John (Son)', lastContact: '5 days ago', image: 'https://i.pravatar.cc/100?img=9' },
                ].map((contact, index) => (
                  <div key={index} className="dashboard-stat p-4 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-eldermate-softYellow/50">
                      <img src={contact.image} alt={contact.name} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-white font-medium">{contact.name}</p>
                    <span className="text-xs text-gray-400 mb-3">{contact.lastContact}</span>
                    <div className="flex space-x-2 mt-auto">
                      <Button size="sm" variant="outline" className="border-eldermate-softYellow/30 text-eldermate-softYellow hover:bg-eldermate-softYellow/10">
                        <Phone className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="border-eldermate-softYellow/30 text-eldermate-softYellow hover:bg-eldermate-softYellow/10">
                        <Video className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        <h3 className="text-xl font-semibold text-eldermate-softYellow mb-4 fadeIn-effect">Quick Access</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-8 fadeIn-effect">
          <Link to="/health-vitals" className="highlight-card hover:bg-eldermate-dark p-4 rounded-xl flex flex-col items-center justify-center text-center transition-colors interactive-card">
            <div className="bg-eldermate-softYellow/10 p-3 rounded-full mb-3">
              <Heart className="h-6 w-6 text-eldermate-softYellow" />
            </div>
            <span className="text-sm font-medium text-white">Health Vitals</span>
          </Link>
          
          <Link to="/schedule" className="highlight-card hover:bg-eldermate-dark p-4 rounded-xl flex flex-col items-center justify-center text-center transition-colors interactive-card">
            <div className="bg-eldermate-softYellow/10 p-3 rounded-full mb-3">
              <Calendar className="h-6 w-6 text-eldermate-softYellow" />
            </div>
            <span className="text-sm font-medium text-white">Schedule</span>
          </Link>
          
          <Link to="/social-connect" className="highlight-card hover:bg-eldermate-dark p-4 rounded-xl flex flex-col items-center justify-center text-center transition-colors interactive-card">
            <div className="bg-eldermate-softYellow/10 p-3 rounded-full mb-3">
              <Users className="h-6 w-6 text-eldermate-softYellow" />
            </div>
            <span className="text-sm font-medium text-white">Social</span>
          </Link>
          
          <Link to="/emergency-logs" className="highlight-card hover:bg-eldermate-dark p-4 rounded-xl flex flex-col items-center justify-center text-center transition-colors interactive-card">
            <div className="bg-eldermate-softYellow/10 p-3 rounded-full mb-3">
              <Bell className="h-6 w-6 text-eldermate-softYellow" />
            </div>
            <span className="text-sm font-medium text-white">Alerts</span>
          </Link>
          
          <div className="highlight-card hover:bg-eldermate-dark p-4 rounded-xl flex flex-col items-center justify-center text-center transition-colors interactive-card">
            <div className="bg-eldermate-softYellow/10 p-3 rounded-full mb-3">
              <Brain className="h-6 w-6 text-eldermate-softYellow" />
            </div>
            <span className="text-sm font-medium text-white">Cognitive</span>
          </div>
          
          <div className="highlight-card hover:bg-eldermate-dark p-4 rounded-xl flex flex-col items-center justify-center text-center transition-colors interactive-card">
            <div className="bg-eldermate-softYellow/10 p-3 rounded-full mb-3">
              <LineChart className="h-6 w-6 text-eldermate-softYellow" />
            </div>
            <span className="text-sm font-medium text-white">Analytics</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
