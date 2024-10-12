import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

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
            <p>7895 Tranmere Dr, Mississauga, ON, Canada, Ontario</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Phone:</h3>
            <p>(905) 874-8822</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Email:</h3>
            <p>info.bestchoicetruckloan@gmail.com</p>
          </div>
        </div>
        <div>
          <form>
            <div className="mb-4">
              <Input type="text" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <Input type="email" placeholder="Your Email" />
            </div>
            <div className="mb-4">
              <Input type="tel" placeholder="Your Phone" />
            </div>
            <div className="mb-4">
              <Textarea placeholder="Your Message" rows={4} />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  );
}