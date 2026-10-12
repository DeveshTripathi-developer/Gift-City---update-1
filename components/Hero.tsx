import React from 'react';
import Link from 'next/link';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative bg-[#18130d] text-white overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Decorative architectural circle lines with warm gold accents */}
      <div 
        className="absolute -top-36 -right-36 w-[560px] h-[560px] rounded-full border border-[#d4ad6b]/25 pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute -top-20 -right-20 w-[420px] h-[420px] rounded-full border border-[#b17a2b]/20 pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-7 xl:col-span-8">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#d4ad6b] mb-4">
              Anand Rathi Wealth IFSC
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] font-normal mb-6 text-[#fbf9f4]">
              Anand Rathi Wealth.<br />
              <span className="text-[#d4ad6b] italic font-serif">Now at GIFT City.</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#dfd7ca] leading-relaxed font-light mb-4 max-w-2xl">
              A structured, data backed approach to investing through India&apos;s International Financial Services Centre.
            </p>
            <p className="text-[#c5baa8] text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
              Anand Rathi FME (IFSC) Private Limited brings the investment philosophy and disciplined processes of Anand Rathi Wealth Limited to GIFT City. Built for investors seeking a structured route to participate in investment opportunities through the IFSC ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                href="#philosophy"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase bg-[#b17a2b] text-white hover:bg-[#95631f] border border-[#b17a2b] transition-all text-center"
              >
                <span>Explore Our Approach</span>
                <ArrowDownRight className="w-4 h-4" />
              </Link>
              <Link
                href="#connect"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase bg-transparent text-[#dfd7ca] hover:text-[#d4ad6b] hover:border-[#d4ad6b] border border-[#524331] transition-all text-center"
              >
                <span>Connect With Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Philosophy Highlight Note */}
          <div className="lg:col-span-5 xl:col-span-4 lg:justify-self-end w-full max-w-md">
            <aside className="border border-[#b17a2b]/40 bg-[#221a11]/60 backdrop-blur-xs p-6 sm:p-8 relative">
              <span className="font-serif text-5xl sm:text-6xl text-[#d4ad6b] leading-none block select-none -mb-3" aria-hidden="true">
                &ldquo;
              </span>
              <p className="font-serif text-xl sm:text-2xl text-[#fbf9f4] leading-snug my-4">
                Investment outcomes should be driven by process, not prediction.
              </p>
              <div className="w-12 h-px bg-[#d4ad6b]/60 my-4" />
              <small className="block text-xs uppercase tracking-widest text-[#d4ad6b]">
                OUR INVESTMENT PHILOSOPHY
              </small>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
