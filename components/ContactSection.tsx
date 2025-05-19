'use client';

import { Business } from '@/lib/types';
import { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

interface ContactSectionProps {
  business: Business;
}

export default function ContactSection({ business }: ContactSectionProps) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or ready to schedule an appointment? Contact us today!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div 
                  className="mr-4 p-3 rounded-full"
                  style={{ 
                    backgroundColor: `${business.theme.primary}15`,
                    color: business.theme.primary
                  }}
                >
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Address</h4>
                  <p className="text-gray-600">{business.contact.address}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div 
                  className="mr-4 p-3 rounded-full"
                  style={{ 
                    backgroundColor: `${business.theme.primary}15`,
                    color: business.theme.primary
                  }}
                >
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-gray-600">{business.contact.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div 
                  className="mr-4 p-3 rounded-full"
                  style={{ 
                    backgroundColor: `${business.theme.primary}15`,
                    color: business.theme.primary
                  }}
                >
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-gray-600">{business.contact.email}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 rounded-lg" style={{ backgroundColor: `${business.theme.secondary}15` }}>
              <h4 className="font-semibold mb-2">Business Hours</h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            
            {isSubmitted ? (
              <div 
                className="p-6 rounded-lg mb-4 text-center"
                style={{ 
                  backgroundColor: `${business.theme.primary}15`,
                  color: business.theme.primary
                }}
              >
                <h4 className="text-xl font-semibold mb-2">Thank You!</h4>
                <p>Your message has been sent successfully. We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                    style={{ focusRing: business.theme.primary }}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                    style={{ focusRing: business.theme.primary }}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                    style={{ focusRing: business.theme.primary }}
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 rounded-md font-medium text-white transition-transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{ backgroundColor: business.theme.primary }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}