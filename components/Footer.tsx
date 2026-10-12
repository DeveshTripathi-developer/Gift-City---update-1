import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

export function Footer() {
  const footerLinks = [
    { label: 'GIFT City', href: '#gift-city' },
    { label: 'Our Philosophy', href: '#philosophy' },
    { label: 'Our Experience', href: '#experience' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Connect', href: '#connect' },
    { label: 'Disclosures', href: '#regulatory' },
  ];

  return (
    <footer className="bg-[#120e09] text-[#dfd7ca] py-12 border-t border-[#2a2014]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-[#2a2014]">
          {/* Logo & Tagline */}
          <div className="space-y-2">
            <Link href="#home" className="inline-block" aria-label="Anand Rathi Wealth IFSC Home">
              <div className="h-10 sm:h-12 w-auto max-w-[260px] sm:max-w-[300px]">
                <Logo className="h-full w-auto" theme="dark" />
              </div>
            </Link>
            <p className="text-xs text-[#c5baa8] font-medium tracking-wide">
              Private Wealth. uncomplicated
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-[#c5baa8]">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[#d4ad6b] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom credits & disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#8c7a65]">
          <p>
            © {new Date().getFullYear()} Anand Rathi FME (IFSC) Private Limited. All rights reserved.
          </p>
          <p>
            Regulated by International Financial Services Centres Authority (IFSCA), GIFT City.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
