import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FeedbackForm } from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-4">We're here to answer any questions you may have about our truck loans, leasing options, or available inventory. Fill out the form, and we'll get back to you as soon as possible.</p>
          <div className="mb-4">
            <h3 className="font-semibold">Address:</h3>
            <p>7895 Tranmere Dr, Mississauga, ON L5S 1V9, Canada</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Phone:</h3>
            <p>(905) 874-8822</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Email:</h3>
            <p>info.bestchoicetruckloan@gmail.com</p>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Our Location</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2685163659733!2d-79.65650812346747!3d43.65136905219067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3d3b0e6d6f1d%3A0x4e7c8c5c3c1a8d1a!2s7895%20Tranmere%20Dr%2C%20Mississauga%2C%20ON%20L5S%201V9%2C%20Canada!5e0!3m2!1sen!2sus!4v1682431291584!5m2!1sen!2sus" 
                width="100%" 
                height="300" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div>
          <FeedbackForm />
        </div>
      </div>
    </div>
  );
}