import React from 'react';

export function InvestmentLeadershipSection() {
  const leaders = [
    {
      index: 'INVESTMENT LEADERSHIP / 01',
      name: 'Dipal Patel',
      designation: '[Approved Designation]',
      desc: 'Leading investment structuring and client portfolio solutions within the GIFT City International Financial Services Centre.',
      bio: "Dipal's BIO",
    },
    {
      index: 'INVESTMENT LEADERSHIP / 02',
      name: 'Sarfaraj Rathod',
      designation: '[Approved Designation]',
      desc: "Sarfaraj brings expertise across financial and regulatory disciplines, supporting the platform's investment, operating and governance framework.",
      bio: "Sarfaraj's BIO",
    },
  ];

  return (
    <section id="leadership" className="py-20 lg:py-24 bg-[#18130d] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#d4ad6b] mb-3">
            04 / INVESTMENT LEADERSHIP
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#fbf9f4] font-normal tracking-tight leading-tight">
            Investment thinking backed by experience
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {leaders.map((leader, idx) => (
            <article
              key={idx}
              className="p-8 border border-[#382b1d] bg-[#221a11]/60 hover:border-[#b17a2b]/50 transition-all backdrop-blur-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold tracking-wider text-[#d4ad6b] block mb-4">
                  {leader.index}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#fbf9f4] font-normal mb-1">
                  {leader.name}
                </h3>
                <p className="text-xs text-[#d4ad6b] uppercase tracking-wider font-semibold mb-4">
                  {leader.designation}
                </p>
                <p className="text-sm text-[#dfd7ca] leading-relaxed mb-6">
                  {leader.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-[#382b1d] flex items-center justify-between text-xs text-[#d4ad6b]">
                <span className="italic">{leader.bio}</span>
                <span className="text-[#8c7a65]">·</span>
                <span className="text-[#c5baa8]">Anand Rathi Wealth IFSC</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InvestmentLeadershipSection;
