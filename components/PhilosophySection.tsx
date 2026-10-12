import React from 'react';

export function PhilosophySection() {
  const values = [
    {
      num: '01',
      title: 'Fearless Approach',
      desc: 'Showing information that you need to see, without fear',
    },
    {
      num: '02',
      title: 'Uncomplicated',
      desc: 'Uncomplicating financial concepts to enable full understanding before your decision making',
    },
    {
      num: '03',
      title: 'Backed by Data',
      desc: 'Data at scale will help you take a considered decision',
    },
    {
      num: '04',
      title: 'Transparency',
      desc: 'Transparency = Trust = Implementation. Trust created with transparency. Value created by Implementation',
    },
  ];

  return (
    <section id="philosophy" className="py-20 lg:py-24 bg-[#18130d] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#d4ad6b] mb-3">
              02 / OUR PHILOSOPHY
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#fbf9f4] font-normal tracking-tight leading-tight">
              Our philosophy.<br />
              In a new financial ecosystem.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-3">
            <p className="font-serif text-xl sm:text-2xl text-[#dfd7ca] leading-relaxed font-normal">
              For more than two decades, Anand Rathi Wealth has built its investment approach around a fundamental principle:
            </p>
            <p className="font-serif text-xl sm:text-2xl text-[#d4ad6b] italic leading-relaxed font-normal">
              Investment outcomes should be driven by process, not prediction.
            </p>
          </div>
        </div>

        {/* 4 Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-b border-[#382b1d] divide-y sm:divide-y-0 sm:divide-x divide-[#382b1d]">
          {values.map((v) => (
            <article key={v.num} className="p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <span className="font-serif text-3xl text-[#d4ad6b] block mb-5">
                  {v.num}
                </span>
                <h3 className="text-base font-semibold uppercase tracking-wider text-[#fbf9f4] mb-3">
                  {v.title}
                </h3>
              </div>
              <p className="text-sm text-[#dfd7ca] leading-relaxed">
                {v.desc}
              </p>
            </article>
          ))}
        </div>

        {/* Summary sentence */}
        <p className="text-[#c5baa8] text-sm sm:text-base leading-relaxed mt-10 max-w-3xl">
          The objective at GIFT City is to bring this thinking together within a unified investment platform, enabling investors to experience the Anand Rathi Wealth proposition through the IFSC ecosystem.
        </p>
      </div>
    </section>
  );
}

export default PhilosophySection;
