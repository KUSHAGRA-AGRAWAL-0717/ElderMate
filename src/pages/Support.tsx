
import React, { useState } from 'react';
import { 
  LifeBuoy, 
  MessageSquare, 
  PhoneCall, 
  BookOpen, 
  HelpCircle, 
  Video,
  ChevronDown,
  Search,
  Send,
  FileText
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';

const Support = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  
  const handleContactSubmit = (e) => {
    e.preventDefault();
    toast.success("Support message sent successfully");
    setContactMessage('');
  };
  
  // FAQ data
  const faqs = [
    {
      question: "How do I set up medication reminders?",
      answer: "You can set up medication reminders by going to the Schedule page and clicking on 'Add Medication Reminder'. Fill in the details of your medication, dosage, and schedule, and the app will remind you when it's time to take your medication."
    },
    {
      question: "How do I connect with my caregiver?",
      answer: "To connect with a caregiver, go to the Social Connect page and click on 'Add Caregiver'. Enter their email address and they will receive an invitation to connect with you. Once connected, they can view your health data and help manage your care."
    },
    {
      question: "How do I update my health information?",
      answer: "You can update your health information by going to your Profile page and clicking on the 'Health Information' section. Click the 'Edit' button to update your medical conditions, allergies, medications, and other health information."
    },
    {
      question: "What should I do if I miss a medication dose?",
      answer: "If you miss a medication dose, follow these steps: 1) Check your medication instructions for guidance on missed doses. 2) Do not double up on medication unless specifically instructed by your doctor. 3) Record the missed dose in the app so your caregiver is aware. 4) Contact your healthcare provider if you're uncertain about what to do."
    },
    {
      question: "How do I use the emergency alert feature?",
      answer: "The emergency alert feature can be activated by pressing the red emergency button on your home screen. This will send an alert to your designated emergency contacts. You can customize your emergency contacts and message in the Settings page under 'Emergency Settings'."
    },
    {
      question: "Can I use ElderMate on multiple devices?",
      answer: "Yes, ElderMate can be used on multiple devices. Simply download the app on your other devices and log in with your same account information. Your data will sync across all devices automatically."
    }
  ];
  
  // Filter FAQs based on search query
  const filteredFaqs = searchQuery 
    ? faqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqs;
  
  return (
    <div className="min-h-screen bg-eldermate-darkGrey">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-eldermate-softYellow mb-6">Help & Support</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <div className="highlight-card p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <HelpCircle className="h-6 w-6 text-eldermate-softYellow" />
                <h2 className="text-xl font-semibold text-white">Frequently Asked Questions</h2>
              </div>
              
              <div className="relative mb-6">
                <Input
                  className="bg-eldermate-slate border-eldermate-softYellow/30 text-white pl-10"
                  placeholder="Search for help topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              
              {filteredFaqs.length > 0 ? (
                <Accordion type="single" collapsible className="w-full">
                  {filteredFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-eldermate-softYellow/20">
                      <AccordionTrigger className="text-white hover:text-eldermate-softYellow py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-400 pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <div className="text-center py-6">
                  <HelpCircle className="h-12 w-12 text-eldermate-softYellow/50 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-white mb-1">No results found</h3>
                  <p className="text-gray-400">
                    We couldn't find any FAQs matching your search. Try different keywords or contact support directly.
                  </p>
                </div>
              )}
            </div>
            
            <div className="highlight-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="h-6 w-6 text-eldermate-softYellow" />
                <h2 className="text-xl font-semibold text-white">Contact Support</h2>
              </div>
              
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label htmlFor="subject" className="block text-gray-400 mb-1">Subject</label>
                  <Input 
                    id="subject" 
                    className="bg-eldermate-slate border-eldermate-softYellow/30 text-white" 
                    placeholder="What can we help you with?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-400 mb-1">Message</label>
                  <textarea
                    id="message"
                    className="w-full h-32 bg-eldermate-slate border border-eldermate-softYellow/30 rounded-md text-white p-3 resize-none"
                    placeholder="Please describe your issue in detail..."
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                  ></textarea>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="border-eldermate-softYellow/30 text-eldermate-softYellow hover:bg-eldermate-softYellow/10"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Attach File
                  </Button>
                  
                  <Button 
                    type="submit" 
                    className="bg-eldermate-softYellow hover:bg-eldermate-softYellow/90 text-eldermate-dark ml-auto"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="highlight-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <LifeBuoy className="h-6 w-6 text-eldermate-softYellow" />
                <h2 className="text-xl font-semibold text-white">Support Options</h2>
              </div>
              
              <div className="space-y-4">
                <div className="dashboard-stat p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <PhoneCall className="h-5 w-5 text-eldermate-softYellow" />
                    <h3 className="text-white font-medium">Phone Support</h3>
                  </div>
                  <p className="text-gray-400 mb-3">Speak directly with our care team</p>
                  <div className="text-center">
                    <p className="text-white font-semibold mb-1">(800) 123-4567</p>
                    <p className="text-gray-400 text-sm">Available 24/7</p>
                  </div>
                </div>
                
                <div className="dashboard-stat p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Video className="h-5 w-5 text-eldermate-softYellow" />
                    <h3 className="text-white font-medium">Video Chat</h3>
                  </div>
                  <p className="text-gray-400 mb-3">Face-to-face support session</p>
                  <Button className="w-full bg-eldermate-softYellow hover:bg-eldermate-softYellow/90 text-eldermate-dark">
                    Schedule Session
                  </Button>
                </div>
                
                <div className="dashboard-stat p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <BookOpen className="h-5 w-5 text-eldermate-softYellow" />
                    <h3 className="text-white font-medium">User Guides</h3>
                  </div>
                  <p className="text-gray-400 mb-3">Detailed tutorials and documentation</p>
                  <Button variant="outline" className="w-full border-eldermate-softYellow/30 text-eldermate-softYellow hover:bg-eldermate-softYellow/10">
                    View Guides
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="highlight-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="h-6 w-6 text-eldermate-softYellow" />
                <h2 className="text-xl font-semibold text-white">Community Help</h2>
              </div>
              
              <p className="text-gray-400 mb-4">Join our community forums to get help from other ElderMate users and share your experiences.</p>
              
              <Button className="w-full bg-eldermate-dark hover:bg-eldermate-slate text-white border border-eldermate-softYellow/30">
                Join Community Forum
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
