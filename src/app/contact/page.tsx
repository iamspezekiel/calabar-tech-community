import { ContactForm } from '@/components/contact-form';
import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Get in Touch</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Have a question, a project idea, or just want to say hello? We’d love to hear from you.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold font-headline text-primary mb-6">Send us a message</h2>
            <ContactForm />
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold font-headline">Email</h3>
                <p className="text-muted-foreground">Our inbox is always open. We'll get back to you as soon as we can.</p>
                <a href="mailto:hello@calabartech.community" className="text-accent hover:underline mt-1 block">
                  hello@calabartech.community
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold font-headline">Our Hub</h3>
                <p className="text-muted-foreground">While we often meet online, you can find us at our physical hub for scheduled events.</p>
                <p className="text-muted-foreground mt-1">123 Tech Avenue, Calabar, Nigeria</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold font-headline">Social Media</h3>
                <p className="text-muted-foreground">Follow us on social media to stay updated with our latest news and events.</p>
                <div className="flex space-x-4 mt-2">
                  <a href="https://facebook.com/techCalabar" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent">
                    <Facebook className="h-6 w-6" />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a href="https://twitter.com/tech_calabar" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent">
                    <Twitter className="h-6 w-6" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a href="https://www.linkedin.com/company/calabar-tech-community/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent">
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
