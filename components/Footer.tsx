import { Business } from '@/lib/types';
import { cn } from '@/lib/utils';

interface FooterProps {
  business: Business;
}

export default function Footer({ business }: FooterProps) {
  const year = new Date().getFullYear();
  
  return (
    <footer 
      className="py-12 px-6 text-white"
      style={{ backgroundColor: business.theme.secondary }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">{business.name}</h3>
            <p className="opacity-80 mb-4">{business.description}</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="#">Home</FooterLink>
              <FooterLink href="#services">Services</FooterLink>
              <FooterLink href="#testimonials">Testimonials</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="not-italic">
              <p className="mb-2">{business.contact.address}</p>
              <p className="mb-2">{business.contact.phone}</p>
              <p className="mb-2">{business.contact.email}</p>
            </address>
          </div>
        </div>
        
        <div className="pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="opacity-80 text-sm mb-4 md:mb-0">
            © {year} {business.name}. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <SocialLink href="#" label="Facebook" />
            <SocialLink href="#" label="Twitter" />
            <SocialLink href="#" label="Instagram" />
          </div>
        </div>
      </div>
    </footer>
  );
}

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <li>
      <a 
        href={href}
        className="opacity-80 hover:opacity-100 transition-opacity"
      >
        {children}
      </a>
    </li>
  );
}

interface SocialLinkProps {
  href: string;
  label: string;
}

function SocialLink({ href, label }: SocialLinkProps) {
  return (
    <a 
      href={href}
      className="opacity-80 hover:opacity-100 transition-opacity"
      aria-label={label}
    >
      {label}
    </a>
  );
}