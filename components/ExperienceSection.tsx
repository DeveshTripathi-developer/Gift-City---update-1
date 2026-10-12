import React from 'react';

export function ExperienceSection() {
  const metrics = [
    { value: '₹1,06,300 crore+', label: 'AUM as of 30 June 2026' },
    { value: '13,941+', label: 'Client families' },
    { value: '417', label: 'Relationship Managers' },
    { value: '18+', label: 'Cities in India' },
  ];

  const leaders = [
    {
      index: 'LEADERSHIP / 01',
      name: 'Anand Rathi',
      title: 'Founder and Group Chairman',
      note: 'Bio as on ARWL website',
    },
    {
      index: 'LEADERSHIP / 02',
      name: 'Pradeep Gupta',
      title: 'Co Founder and Vice Chairman',
      note: 'Bio as on ARWL UK website',
    },
    {
      index: 'LEADERSHIP / 03',
      name: 'Rakesh Rawal',
      title: 'Chief Executive Officer',
      note: 'Bio as on ARWL website',
    },
    {
      index: 'LEADERSHIP / 04',
      name: 'Feroze Azeez',
      title: 'Joint CEO',
      note: 'Values that create trust',
    },
  ];

  return (
    <section id="experience" className="py-20 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Foundation Head */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#b17a2b] mb-3">
            03 / OUR FOUNDATION
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal tracking-tight leading-tight mb-4">
            Built on more than two decades of experience
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
            Anand Rathi Wealth Limited is an NSE 500 listed company serving HNIs and UHNIs in India and internationally.
          </p>
        </div>

        {/* 4 Quantitative Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 py-8 border-t border-b border-stone-200">
          {metrics.map((m, idx) => (
            <div key={idx} className="space-y-1">
              <strong className="block font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#b17a2b] tabular-nums tracking-tight">
                {m.value}
              </strong>
              <span className="text-xs sm:text-sm text-stone-500 font-medium">
                {m.label}
              </span>
            </div>
          ))}
        </div>

        <p className="text-stone-600 text-sm sm:text-base leading-relaxed mt-8 max-w-3xl">
          Alongside its international footprint, our growth has been shaped by a consistent philosophy: keep investing structured, measurable and uncomplicated.
        </p>

        {/* Leadership section header */}
        <div className="mt-16 sm:mt-20 mb-8 max-w-2xl">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#b17a2b] mb-2">
            LEADERSHIP THAT SHAPED THE ORGANISATION
          </p>
          <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal">
            Experience behind the philosophy
          </h3>
        </div>

        {/* 4 Leadership Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {leaders.map((leader, i) => (
            <article
              key={i}
              className="p-6 bg-[#fbfaf7] border border-stone-200 hover:border-[#b17a2b]/50 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold tracking-wider text-[#b17a2b] block mb-6">
                  {leader.index}
                </span>
                <h4 className="font-serif text-xl sm:text-2xl text-stone-900 mb-1.5 font-normal">
                  {leader.name}
                </h4>
                <p className="text-xs text-stone-600 font-medium leading-relaxed">
                  {leader.title}
                </p>
              </div>
              <span className="mt-6 pt-4 border-t border-stone-200/80 text-xs text-stone-400 italic">
                {leader.note}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
