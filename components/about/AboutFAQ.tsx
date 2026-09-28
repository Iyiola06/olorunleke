import { SectionReveal } from '../SectionReveal';
import { FAQS } from '@/lib/profile';

// Native <details> keeps every answer in the server HTML, so search engines and AI crawlers can read it.
export function AboutFAQ() {
  return (
    <section aria-labelledby="faq-heading" className="relative py-32 px-6 bg-cream overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col">

        <SectionReveal className="mb-16 text-center flex flex-col items-center">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="uppercase tracking-[0.2em] text-xs font-semibold text-gold">Quick Answers</span>
            <div className="w-8 h-[1px] bg-gold" />
          </div>
          <h2 id="faq-heading" className="font-serif text-4xl md:text-5xl text-dark">
            Frequently Asked Questions
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="bg-white/70 backdrop-blur-[30px] border border-white rounded-[32px] shadow-[0_20px_60px_rgba(24,24,24,0.04)] divide-y divide-ivory">
            {FAQS.map((faq, idx) => (
              <details key={faq.question} className="group px-8 md:px-12" open={idx === 0}>
                <summary className="flex items-center justify-between gap-6 py-7 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="font-serif text-xl md:text-2xl text-dark group-hover:text-gold transition-colors">
                    {faq.question}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="flex-shrink-0 w-9 h-9 rounded-full border border-dark/10 flex items-center justify-center text-gold text-xl leading-none transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="font-sans text-base md:text-lg text-muted font-light leading-relaxed pb-8 max-w-3xl">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </SectionReveal>

      </div>
    </section>
  );
}
