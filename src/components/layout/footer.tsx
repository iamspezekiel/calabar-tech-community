import Link from 'next/link';
import { Facebook, Linkedin } from 'lucide-react';
import { Logo } from '@/components/logo';

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="100px"
      height="100px"
      {...props}
    >
      <path d="M 1 4.5 L 21.5 25 L 1 45.5 L 4.5 49 L 25 28.5 L 45.5 49 L 49 45.5 L 28.5 25 L 49 4.5 L 45.5 1 L 25 21.5 L 4.5 1 L 1 4.5 z" />
    </svg>
  );

export function Footer() {
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/techCalabar' },
    { name: 'Twitter', icon: XIcon, href: 'https://twitter.com/tech_calabar' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/calabar-tech-community/' },
  ];

  const footerLinks = {
    Community: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact us', href: '/contact' },
      { name: 'Our Events', href: '/events' },
      { name: 'Our Gallery', href: '/gallery' },
    ],
    Contribute: [
      { name: 'Donate', href: '/donate' },
      { name: 'Projects', href: '/projects' },
      { name: 'Sponsor', href: '/donate' },
      { name: 'Volunteer', href: '/volunteer' },
    ],
    Resources: [
      { name: 'Our Blog', href: '/blog' },
      { name: 'Terms of Use', href: '/terms-of-use' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Code of Conduct', href: '/code-of-conduct' },
    ],
  };

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <Logo className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-headline">Calabar Tech Hub</span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-sm">
              Fostering creativity, innovation, and a forward-thinking tech culture in Calabar, Nigeria.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-accent"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-6 w-6 fill-current" />
                </a>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold font-headline text-foreground">{title}</h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-muted-foreground hover:text-accent transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>Copyright &copy; {new Date().getFullYear()} Calabar Tech Community. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}