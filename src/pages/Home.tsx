
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Clock, 
  Heart, 
  Shield, 
  BrainCircuit, 
  Handshake,
  ArrowRight,
  CheckCircle,
  Sparkles,
  LineChart
} from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-eldermate-darkGrey text-white">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[url('/assets/hero-bg.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-eldermate-darkGrey via-eldermate-darkGrey/95 to-eldermate-darkGrey" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-eldermate-softYellow rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-eldermate-softYellow/20 animate-float">
              <span className="text-eldermate-darkGrey text-4xl font-bold">E</span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              AI-Powered <span className="text-eldermate-softYellow">Care</span> for Your Loved Ones
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              ElderMate monitors, manages, and enhances the quality of life for elderly 
              individuals living alone with a comprehensive AI care system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="px-8 py-6 text-lg bg-eldermate-softYellow hover:bg-eldermate-softYellow/90 text-eldermate-darkGrey">
                <Link to="/signup" className="flex items-center">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="px-8 py-6 text-lg border-eldermate-softYellow/30 hover:bg-eldermate-softYellow/10 text-eldermate-softYellow">
                <Link to="/login">Sign In</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-12 bg-eldermate-darkGrey border-y border-eldermate-softYellow/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-eldermate-softYellow mb-2 flex justify-center">
                <span>95</span>
                <span className="text-lg text-eldermate-softYellow/70 ml-1">%</span>
              </div>
              <p className="text-gray-400">User Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-eldermate-softYellow mb-2">24/7</div>
              <p className="text-gray-400">Continuous Monitoring</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-eldermate-softYellow mb-2 flex justify-center">
                <span>65</span>
                <span className="text-lg text-eldermate-softYellow/70 ml-1">K+</span>
              </div>
              <p className="text-gray-400">Active Users</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-eldermate-softYellow mb-2 flex justify-center">
                <span>9.2</span>
                <span className="text-lg text-eldermate-softYellow/70 ml-1">/10</span>
              </div>
              <p className="text-gray-400">Provider Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-eldermate-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-eldermate-softYellow">Key Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our AI-powered system provides comprehensive care and monitoring through multiple specialized agents
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 interactive-card">
              <div className="w-12 h-12 rounded-full bg-eldermate-softYellow/20 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-eldermate-softYellow" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Health Monitoring</h3>
              <p className="text-gray-400">
                Real-time tracking of vital signs and health metrics to detect any concerning changes early.
              </p>
              <ul className="mt-4 space-y-2">
                {['Heart rate monitoring', 'Blood pressure tracking', 'Sleep analysis'].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-eldermate-softYellow mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass-card p-6 interactive-card">
              <div className="w-12 h-12 rounded-full bg-eldermate-alert/20 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-eldermate-alert" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Emergency Alerts</h3>
              <p className="text-gray-400">
                Immediate detection of falls, prolonged inactivity, or other emergency situations.
              </p>
              <ul className="mt-4 space-y-2">
                {['Fall detection', 'Location tracking', 'Immediate response'].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-eldermate-softYellow mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass-card p-6 interactive-card">
              <div className="w-12 h-12 rounded-full bg-eldermate-green/20 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-eldermate-green" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Routine Management</h3>
              <p className="text-gray-400">
                Medication reminders, hydration tracking, and appointment scheduling to maintain healthy routines.
              </p>
              <ul className="mt-4 space-y-2">
                {['Medication reminders', 'Appointment scheduling', 'Daily routine tracking'].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-eldermate-softYellow mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="glass-card p-6 interactive-card">
              <div className="w-12 h-12 rounded-full bg-eldermate-teal/20 flex items-center justify-center mb-4">
                <Handshake className="w-6 h-6 text-eldermate-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Social Connection</h3>
              <p className="text-gray-400">
                Promote regular connection with family and friends to reduce isolation and improve emotional wellbeing.
              </p>
              <ul className="mt-4 space-y-2">
                {['Video call integration', 'Family updates', 'Social activity tracking'].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-eldermate-softYellow mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass-card p-6 interactive-card">
              <div className="w-12 h-12 rounded-full bg-eldermate-purple/20 flex items-center justify-center mb-4">
                <BrainCircuit className="w-6 h-6 text-eldermate-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Cognitive Engagement</h3>
              <p className="text-gray-400">
                Mental stimulation through personalized activities and conversations to maintain cognitive health.
              </p>
              <ul className="mt-4 space-y-2">
                {['Brain games', 'Memory exercises', 'Conversation companion'].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-eldermate-softYellow mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-20 bg-eldermate-darkGrey">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-eldermate-softYellow">How ElderMate Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our comprehensive system integrates seamlessly into daily life, providing peace of mind for both seniors and caregivers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-eldermate-softYellow flex items-center justify-center mx-auto mb-4 text-eldermate-darkGrey font-bold text-2xl">1</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Smart Installation</h3>
              <p className="text-gray-400">
                Our team installs non-intrusive sensors and devices throughout the home, designed to blend into the environment.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-eldermate-softYellow flex items-center justify-center mx-auto mb-4 text-eldermate-darkGrey font-bold text-2xl">2</div>
              <h3 className="text-xl font-semibold mb-3 text-white">AI Monitoring</h3>
              <p className="text-gray-400">
                Our AI system continuously monitors health, activity, and safety, learning normal patterns and detecting anomalies.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-eldermate-softYellow flex items-center justify-center mx-auto mb-4 text-eldermate-darkGrey font-bold text-2xl">3</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Connected Care</h3>
              <p className="text-gray-400">
                Family members and caregivers receive updates, alerts, and insights through our intuitive mobile app.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild className="px-8 py-6 text-lg bg-eldermate-softYellow hover:bg-eldermate-softYellow/90 text-eldermate-darkGrey">
              <Link to="/signup" className="flex items-center">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-eldermate-dark border-t border-eldermate-softYellow/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <Sparkles className="w-8 h-8 text-eldermate-softYellow" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-eldermate-softYellow">What Users Say</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Hear from families who have experienced the peace of mind that ElderMate provides
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "ElderMate has completely transformed how I care for my mother. I can check in on her health and safety anytime, from anywhere.",
                name: "Sarah J.",
                role: "Daughter & Caregiver",
                avatar: "https://i.pravatar.cc/100?img=5"
              },
              {
                quote: "As a physician, I recommend ElderMate to all my elderly patients who live alone. The health monitoring is detailed and accurate.",
                name: "Dr. Michael Williams",
                role: "Geriatric Specialist",
                avatar: "https://i.pravatar.cc/100?img=8"
              },
              {
                quote: "The peace of mind is incredible. I love how the system is non-intrusive but still comprehensive in monitoring my dad's wellbeing.",
                name: "Robert T.",
                role: "Son & Remote Caregiver",
                avatar: "https://i.pravatar.cc/100?img=9"
              }
            ].map((testimonial, index) => (
              <div key={index} className="glass-card p-6 interactive-card">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-eldermate-softYellow">★</span>
                  ))}
                </div>
                <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-eldermate-softYellow/30">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-medium text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-eldermate-darkGrey relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-64 h-64 rounded-full bg-eldermate-softYellow blur-3xl -top-20 -left-20"></div>
          <div className="absolute w-64 h-64 rounded-full bg-eldermate-softYellow blur-3xl -bottom-20 -right-20"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-eldermate-softYellow">Ready to Experience ElderMate?</h2>
            <p className="text-gray-300 text-lg mb-8">
              Join thousands of families who trust ElderMate for their elderly care needs.
              Our system is easy to set up, non-intrusive, and provides immediate peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="px-8 py-6 text-lg bg-eldermate-softYellow hover:bg-eldermate-softYellow/90 text-eldermate-darkGrey">
                <Link to="/signup">Start Free Trial</Link>
              </Button>
              <Button asChild variant="outline" className="px-8 py-6 text-lg border-eldermate-softYellow/30 hover:bg-eldermate-softYellow/10 text-eldermate-softYellow">
                <Link to="/dashboard">View Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-eldermate-dark border-t border-eldermate-softYellow/10 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-eldermate-softYellow rounded-lg flex items-center justify-center">
                  <span className="text-eldermate-darkGrey font-semibold">E</span>
                </div>
                <span className="text-xl font-bold text-white">ElderMate</span>
              </div>
              <p className="text-gray-400 mb-4">
                Comprehensive AI care system for the elderly, providing peace of mind for families.
              </p>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <a key={social} href="#" className="text-gray-400 hover:text-eldermate-softYellow transition-colors">
                    <div className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center">
                      <span className="sr-only">{social}</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Features</h4>
              <ul className="space-y-2">
                {['Health Monitoring', 'Emergency Alerts', 'Routine Management', 'Social Connection', 'Cognitive Support'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-eldermate-softYellow transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Resources</h4>
              <ul className="space-y-2">
                {['Documentation', 'Support Center', 'Pricing', 'Installation Guide', 'API Documentation'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-eldermate-softYellow transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                {['About Us', 'Careers', 'Press', 'Privacy Policy', 'Terms of Service'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-eldermate-softYellow transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-eldermate-softYellow/10 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 ElderMate. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
