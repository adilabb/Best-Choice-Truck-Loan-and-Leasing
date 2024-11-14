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
            <p>1715 Britannia Rd E, Mississauga, ON L4W 2A3, Canada</p>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.5076066378897!2d-79.61893492346766!3d43.64655605219124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cf6f21e4d503%3A0x5c59b302a5656c11!2s1715%20Britannia%20Rd%20E%2C%20Mississauga%2C%20ON%20L4W%202A3%2C%20Canada!5e0!3m2!1sen!2sus!4v1682431291584!5m2!1sen!2sus&markers=color:red%7Clabel:Best+Choice+Trucks%7C43.64655605219124,-79.61893492346766"
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