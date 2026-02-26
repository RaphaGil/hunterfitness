'use client';

import { useState } from 'react';
import Image from 'next/image';
import AnimateIn from './AnimateIn';

const icons = {
  email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),  
  address: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const contact = [
    {
      label: 'Email',
      value: 'matt@hunterfitness.co.uk',
      href: 'mailto:matt@hunterfitness.co.uk',
      icon: icons.email,
    },
    {
      label: 'Phone',
      value: '+44 20 1234 5678 / +44 7789 991 975',
      href: 'tel:+442012345678',
      icon: icons.phone,
    },
    {
      label: 'Address',
      value: 'The Andaz Hotel Health Club, 40 Liverpool Street, London EC2M 7QN',
      href: 'https://www.google.com/maps?q=Hunter+Fitness+The+Andaz+Hotel+Health+Club+40+Liverpool+Street+London+EC2M+7QN',
      icon: icons.address,
    },
    {
      label: 'Work time',
      value: 'Mon–Fri 7:00 – 19:30 ',
      href: null,
      icon: icons.clock,
    },
  
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  const inputClass =
    'w-full bg-stone-900 border border-stone-600 rounded-sm px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-[#facc15] focus:border-[#facc15] transition-shadow';

  return (
    <AnimateIn>
      <section id="contact" className="py-24 md:py-32 px-6 bg-[#1a1a1a]" aria-labelledby="contact-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 animate-on-scroll">
            Contact
          </h2>
          <p className="text-stone-300 mb-12 md:mb-16 max-w-xl font-thin md:text-lg animate-on-scroll animate-on-scroll-delay-1">
            Get in touch to start your fitness journey. We&apos;ll respond as soon as we can.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            <div className="animate-on-scroll animate-on-scroll-delay-2">
              <h3 className="text-xl font-semibold text-white mb-6">Send a message</h3>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-stone-200 mb-1.5">
                  Name <span className="text-[#facc15]">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Your name"
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-stone-200 mb-1.5">
                  Email <span className="text-[#facc15]">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>
              <div>
<label htmlFor="phone" className="block text-sm font-semibold text-stone-200 mb-1.5">
                Phone <span className="text-stone-500">(optional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="+44 ..."
                  autoComplete="tel"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-stone-200 mb-1.5">
                  Message <span className="text-[#facc15]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-y min-h-[120px]`}
                  placeholder="How can we help?"
                />
              </div>
              {submitted && (
                <p className="text-[#facc15] text-sm font-medium flex items-center gap-2" role="status">
                  <span className="inline-block w-2 h-2 rounded-sm bg-[#facc15] animate-pulse" aria-hidden />
                  Thanks! We&apos;ll get back to you soon.
                </p>
              )}
              <button
                type="submit"
                className="inline-block border-b border-white pb-1 text-white font-medium transition-colors duration-200 hover:border-[#facc15] hover:text-[#facc15] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#facc15] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1a1a]"
              >
                Send message
              </button>
            </form>
            </div>

            <div className="animate-on-scroll animate-on-scroll-delay-3">
              <h3 className="text-xl font-semibold text-white mb-6">Find us</h3>
            <ul className="space-y-0 divide-y divide-stone-700">
              {contact.filter((item) => item.label !== 'Address').map((item) => {
                const content = (
                  <>
                    <span className="text-[#facc15] shrink-0 mt-0.5" aria-hidden>
                      {item.icon}
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold tracking-wider text-stone-400 uppercase">
                        {item.label}
                      </p>
                      <p className="mt-0.5 text-stone-100 break-all font-medium">
                        {item.value}
                      </p>
                    </div>
                  </>
                );

                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-start gap-4 py-5 text-left text-stone-100 hover:text-[#facc15] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#facc15] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1a1a] rounded-sm"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 py-5">
                        {content}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 border-t border-stone-700 pt-4">
              <a
                href="https://www.google.com/maps?q=Hunter+Fitness+The+Andaz+Hotel+Health+Club+40+Liverpool+Street+London+EC2M+7QN"
                target="_blank"
                rel="noopener noreferrer"
                className="block group rounded-sm overflow-hidden  hover:border-[#facc15]/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#facc15] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1a1a]"
                aria-label="View Hunter Fitness on Google Maps"
              >
                <div className="flex items-start gap-4 py-3 pb-4">
                  <span className="text-[#facc15] shrink-0 mt-0.5" aria-hidden>
                    {icons.address}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold tracking-wider text-stone-400 uppercase">Address</p>
                    <p className="mt-0.5 text-stone-100 font-medium">The Andaz Hotel Health Club, 40 Liverpool Street, London EC2M 7QN</p>
                  </div>
                </div>
                <Image
                  src="/images/map.png"
                  alt="Map showing Hunter Fitness location at The Andaz Hotel Health Club, 40 Liverpool Street, London EC2M 7QN"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </a>
            </div>
            </div>
          </div>
        </div>
      </section>
    </AnimateIn>
  );
}
