import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  Menu, X, ArrowRight, ArrowUpRight, Phone, MapPin, Clock, FlaskConical,
  ShieldCheck, HeartPulse, ClipboardList, CheckCircle2, Search, CalendarDays,
  MessageCircle, Microscope, TestTube2, Activity, Mail, ChevronRight, ChevronDown,
  AlertCircle, Loader2, Check, Stethoscope, Home as HomeIcon, FileText, Send,
  Sparkles, HelpCircle, Building2, Navigation, Award, UserCheck
} from 'lucide-react';
import { tests, packages, gallery, branches, contact, money, timings, homeSampling, faqs, aboutData } from './data';
import './index.css';

const logo = '/images/zeenat-laboratories-logo.jpeg';

function WhatsAppIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

function FloatingWhatsApp() {
  return (
    <aside aria-label="WhatsApp quick contact" className="fixed bottom-5 right-5 z-50">
      <a
        href={contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Zeenat Laboratories on WhatsApp at 03270288889"
        className="flex items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white p-3.5 rounded-full shadow-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#128C7E]"
      >
        <WhatsAppIcon size={24} className="text-white shrink-0" />
      </a>
    </aside>
  );
}

const nav = [
  ['/', 'Home'],
  ['/tests', 'Tests & Prices'],
  ['/packages', 'Health Packages'],
  ['/home-sampling', 'Home Sampling'],
  ['/about', 'About Us'],
  ['/gallery', 'Gallery'],
  ['/contact', 'Contact']
];

function Topbar() {
  return (
    <div className="bg-deep text-white text-xs border-b border-white/10">
      <div className="container-site flex flex-wrap justify-between items-center gap-2 py-2">
        <div className="flex items-center gap-3">
          <Link to="/contact" className="flex items-center gap-1.5 hover:text-blue-200 transition-colors">
            <MapPin size={12} className="text-blue-200 shrink-0" />
            <span className="font-medium">Wahdat Road (Multan Chungi)</span>
          </Link>
        </div>
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <span className="hidden lg:flex items-center gap-1.5 text-blue-200">
            <Clock size={12} className="text-blue-200 shrink-0" />
            <span>Fasting Samples from 7:30 AM</span>
          </span>
          <a href={'tel:' + contact.phoneRaw} className="flex items-center gap-1.5 hover:text-blue-200 transition-colors font-semibold">
            <Phone size={12} className="text-blue-200 shrink-0" />
            <span>{contact.phone}</span>
          </a>

        </div>
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  useEffect(() => setOpen(false), [loc.pathname]);

  return (
    <>
      <Topbar />
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-100 shadow-xs">
        <div className="container-site h-[84px] flex items-center justify-between gap-2 sm:gap-4">
          <Link to="/" className="flex items-center gap-2 sm:gap-3 min-w-0 shrink-0 group">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-xs group-hover:border-navy/40 transition-colors">
              <img src={logo} alt="Zeenat Laboratories logo" className="w-full h-full object-contain" />
            </div>
            <div className="leading-tight">
              <strong className="block text-deep font-display font-extrabold text-[12px] sm:text-[17px] lg:text-[19px] tracking-tight whitespace-nowrap">
                ZEENAT <span className="text-navy">LABORATORIES</span>
              </strong>
              <small className="block text-[8px] sm:text-[11px] text-slate-500 font-bold tracking-wider uppercase">
                THE MEDICAL LABORATORIES
              </small>
            </div>
          </Link>
          <nav aria-label="Main navigation" className="hidden min-[1440px]:flex items-center gap-4 2xl:gap-5 whitespace-nowrap">
            {nav.map(([path, name]) => (
              <NavLink
                key={path}
                to={path}
                end={path === '/'}
                className={({ isActive }) =>
                  `text-sm font-bold hover:text-navy transition-colors ${isActive ? 'text-navy' : 'text-slate-600'}`
                }
              >
                {name}
              </NavLink>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3 shrink-0 ml-auto min-[1440px]:ml-0">

            <Link to="/book" className="btn-primary text-sm shadow-sm whitespace-nowrap">
              <CalendarDays size={17} /> Book a Test
            </Link>
          </div>
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="min-[1440px]:hidden p-2.5 text-deep rounded-lg hover:bg-mist shrink-0"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {open && (
          <nav id="mobile-navigation" aria-label="Mobile navigation" className="min-[1440px]:hidden container-site pb-5 flex flex-col gap-1 border-t border-slate-100 bg-white max-h-[calc(100dvh-144px)] overflow-y-auto overscroll-contain">
            <div className="py-2 px-3 bg-mist rounded-xl my-2 text-xs text-slate-600">
              <strong className="block text-deep font-bold">Wahdat Road Branch:</strong>
              <span>Wahdat Road (Multan Chungi)</span>
            </div>
            {[...nav, ['/book', 'Book a Test']].map(([path, name]) => (
              <Link key={path} to={path} className="px-3 py-2.5 rounded-lg text-sm font-bold text-slate-700 hover:bg-mist">
                {name}
              </Link>
            ))}
            <div className="pt-2 mt-2 border-t border-slate-100 flex flex-col gap-2">
              <a href={'tel:' + contact.phoneRaw} className="px-3 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 text-deep hover:bg-mist">
                <Phone size={16} className="text-navy" /> Call: {contact.phone}
              </a>
              <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="px-3 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 text-[#128C7E] hover:bg-mist">
                <WhatsAppIcon size={16} /> WhatsApp: {contact.phone}
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}

function PrescriptionBanner() {
  return (
    <div className="card p-6 sm:p-7 bg-gradient-to-br from-navy/10 via-white to-blue-50 border-2 border-dashed border-navy/40 mb-8 rounded-2xl shadow-soft">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-navy text-white flex items-center justify-center shrink-0 shadow-md">
            <FileText size={24} />
          </div>
          <div>
            <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-navy bg-navy/10 px-2.5 py-0.5 rounded-md mb-1">
              Skip The Form · Instant WhatsApp Assistance
            </span>
            <h3 className="font-display font-extrabold text-xl text-deep">
              Have a Doctor's Prescription or Slip?
            </h3>
            <p className="text-slate-600 text-sm mt-1 max-w-xl">
              Can't read handwritten test names? Simply snap a photo of your doctor's slip and send it to our WhatsApp. Our lab staff will review required tests, provide pricing, and book your visit at Wahdat Road branch.
            </p>
          </div>
        </div>
        <a
          href={`https://wa.me/923270288889?text=${encodeURIComponent('Hello Zeenat Laboratories, I am attaching my doctor prescription. Please let me know the tests, preparation instructions, and pricing.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary !bg-[#128C7E] hover:!bg-[#075E54] text-white w-full sm:w-auto shadow-lg shrink-0 px-4 sm:px-6 py-3.5 font-bold"
        >
          <WhatsAppIcon size={20} /> Send Slip on WhatsApp
        </a>
      </div>
    </div>
  );
}

function HomeSamplingSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-white border-y border-slate-100">
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-navy/10 text-navy px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider">
              <HomeIcon size={14} /> Doorstep Diagnostic Care
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] leading-tight font-extrabold text-deep mt-4">
              Safe & Certified <span className="text-navy">Home Sample Collection</span> across Lahore
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mt-4">
              Avoid traffic delays and clinic waiting rooms. Our certified phlebotomists collect blood, urine and routine diagnostic samples safely from your home with single-use sterile vacuum tubes.
            </p>
            <div className="mt-6 space-y-3">
              {homeSampling.features.map((f) => (
                <div key={f} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                  <CheckCircle2 size={18} className="text-navy shrink-0 mt-0.5" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Covered Localities Near Wahdat Road:
              </p>
              <div className="flex flex-wrap gap-2">
                {homeSampling.areas.map((area) => (
                  <span key={area} className="bg-mist border border-slate-200 text-slate-700 px-3 py-1 rounded-lg text-xs font-medium">
                    {area}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href={`https://wa.me/923270288889?text=${encodeURIComponent('Hello Zeenat Laboratories, I would like to book a Home Sample Collection. My location is: ')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !bg-[#128C7E] hover:!bg-[#075E54] text-white shadow-lg"
              >
                <WhatsAppIcon size={18} /> Book Home Sampling via WhatsApp
              </a>
              <Link to="/book" className="btn-secondary">
                <CalendarDays size={18} /> Request Online
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-tr from-navy/20 via-blue-100 to-transparent p-4 sm:p-7 rounded-3xl">
              <div className="card p-6 sm:p-8 bg-white/95 backdrop-blur shadow-xl space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-12 h-12 rounded-2xl bg-navy/10 text-navy flex items-center justify-center">
                      <Stethoscope size={24} />
                    </span>
                    <div>
                      <h4 className="font-display font-extrabold text-deep text-lg">Doorstep Sample Process</h4>
                      <p className="text-xs text-slate-400">Convenient 3-step care</p>
                    </div>
                  </div>
                  <span className="bg-navy/10 text-navy text-xs font-bold px-3 py-1 rounded-full">Sterile & Safe</span>
                </div>
                <div className="space-y-4">
                  {[
                    ['1', 'Book via WhatsApp or Online', 'Share your test requirements, preferred morning time window, and home address.'],
                    ['2', 'Phlebotomist Doorstep Visit', 'Certified phlebotomist arrives with sterile vacutainers and draws samples gently.'],
                    ['3', 'Verified PDF Reports on WhatsApp', 'Samples are transported in temperature-controlled kits; reports sent to your WhatsApp.']
                  ].map(([step, title, desc]) => (
                    <div key={step} className="flex items-start gap-4 p-3.5 rounded-xl bg-mist border border-slate-100">
                      <span className="w-8 h-8 rounded-full bg-deep text-white font-extrabold text-sm flex items-center justify-center shrink-0">
                        {step}
                      </span>
                      <div>
                        <strong className="block text-deep text-sm font-bold">{title}</strong>
                        <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center gap-3">
                  <Clock size={20} className="shrink-0 text-amber-700" />
                  <span>
                    <strong>Morning Fasting Slots:</strong> 7:30 AM – 11:00 AM daily. Please book the evening before for early morning priority.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="py-20 bg-mist border-t border-[#E6EDF3]">
      <div className="container-site max-w-4xl mx-auto">
        <Heading
          tag="Patient guidance"
          heading="Frequently Asked Questions"
          description="Everything you need to know about tests, our branch, fasting instructions, home sampling, and reports at Zeenat Laboratories."
          center={true}
        />
        <div className="mt-12 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className={`card transition-all duration-200 overflow-hidden ${
                  isOpen ? 'ring-2 ring-navy/30 shadow-md' : 'hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-display font-bold text-deep text-base sm:text-lg"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-navy/10 text-navy flex items-center justify-center shrink-0 text-xs sm:text-sm font-extrabold">
                      Q{idx + 1}
                    </span>
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-navy' : ''
                    }`}
                    size={20}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed pl-14 sm:pl-17 border-t border-slate-100 whitespace-pre-line">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="mt-10 card p-6 bg-gradient-to-r from-blue-50/50 via-white to-navy/5 border border-navy/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-display font-extrabold text-deep text-lg">Have another question or test inquiry?</h4>
            <p className="text-slate-500 text-sm mt-1">Our laboratory staff is available on WhatsApp daily from 7:30 AM.</p>
          </div>
          <a
            href={contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !bg-[#128C7E] hover:!bg-[#075E54] text-white whitespace-nowrap shadow-md text-sm shrink-0"
          >
            <WhatsAppIcon size={18} /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function HomeSamplingPage() {
  return (
    <>
      <PageHero
        tag="Doorstep Diagnostics"
        title="Home Sample Collection in Lahore"
        description="Professional, gentle, and sterile laboratory sample collection at your home or office. Serving Wahdat Road, Multan Chungi, and surrounding areas."
      />
      <HomeSamplingSection />
      <section className="container-site py-16">
        <PrescriptionBanner />
      </section>
      <FaqSection />
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-deep text-white pt-16">
      <div className="container-site grid md:grid-cols-3 gap-10 pb-12">
        <div>
          <div className="flex gap-3 items-center">
            <div className="bg-white rounded-xl p-1 shrink-0">
              <img src={logo} className="h-14 w-14 object-contain" alt="Zeenat Laboratories logo" />
            </div>
            <div>
              <b className="font-display text-lg text-white">ZEENAT LABORATORIES</b>
              <p className="text-blue-200 text-xs font-semibold tracking-wide">THE MEDICAL LABORATORIES</p>
              <p className="text-blue-300/80 text-[11px] mt-0.5">Wahdat Road · Lahore</p>
            </div>
          </div>
          <p className="text-blue-100/75 mt-5 text-sm leading-6">
            Trusted clinical diagnostics, blood pathology, health checkups, and doorstep home sample collection across Lahore.
          </p>
          <div className="mt-4 pt-4 border-t border-white/10 space-y-1 text-xs text-blue-200">
            <p><a href={'tel:' + contact.phoneRaw} className="hover:text-white"><strong>Call:</strong> {contact.phone}</a></p>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-5 text-sm uppercase tracking-wider text-blue-200">Quick Links</h3>
          <div className="grid gap-2.5">
            {nav.map(([path, name]) => (
              <Link className="text-blue-100/75 hover:text-white text-sm" to={path} key={path}>
                {name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <Building2 size={16} className="text-blue-200" />
            <h3 className="font-bold text-sm uppercase tracking-wider text-blue-200">Wahdat Road Branch</h3>
          </div>
          <p className="text-blue-100/85 text-xs leading-5">
            Wahdat Rd, near Ijaz Hospital, Multan Chungi, Lahore, 54000
          </p>
          <div className="mt-3 space-y-1.5 text-xs text-blue-200">
            <p className="flex items-center gap-1.5"><Clock size={12} className="text-blue-200" /> Mon–Sun: 7:30 AM – 12:00 midnight</p>
            <p className="flex items-center gap-1.5"><Phone size={12} className="text-blue-200" /> {contact.phone}</p>
          </div>
          <a
            href={branches[0].mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-200 font-bold text-xs mt-3 inline-flex gap-1.5 items-center hover:underline"
          >
            Google Maps Directions <ArrowUpRight size={13} />
          </a>
        </div>

      </div>

      <div className="border-t border-white/15">
        <div className="container-site py-5 text-xs text-blue-100/65 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} Zeenat Laboratories (The Medical Laboratories). Lahore, Pakistan.</span>
          <span>Test prices follow the supplied rate list. Confirm preparation and availability with reception.</span>
        </div>
      </div>
    </footer>
  );
}

function Layout({ children }) {
  const loc = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [loc.pathname]);
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

function Heading({ tag, heading, description, center = false }) {
  return (
    <div className={center ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}>
      <p className="eyebrow mb-3">{tag}</p>
      <h2 className="section-title">{heading}</h2>
      {description && <p className="muted mt-4">{description}</p>}
    </div>
  );
}

function PageHero({ tag, title, description }) {
  return (
    <section className="bg-mist border-b border-[#E6EDF3] py-16 md:py-20">
      <div className="container-site">
        <p className="eyebrow mb-3">{tag}</p>
        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-deep max-w-3xl leading-tight">
          {title}
        </h1>
        <p className="muted mt-5 max-w-2xl">{description}</p>
      </div>
    </section>
  );
}

function Notice() {
  return (
    <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-900 text-sm">
      <AlertCircle size={19} className="shrink-0 mt-0.5 text-amber-700" />
      <p>
        <strong>Package prices are illustrative.</strong> Package offerings and prices need confirmation from the branch. Individual test prices follow the laboratory’s supplied rate list.
      </p>
    </div>
  );
}

function TestCard({ test }) {
  return (
    <div className="card p-6 flex flex-col">
      <div className="flex items-start justify-between gap-4">
        <span className="bg-blue-50 rounded-xl p-3 text-navy">
          <TestTube2 size={23} />
        </span>
        <span className="text-[10px] uppercase tracking-wide font-bold text-amber-700 bg-amber-50 rounded-full px-3 py-1.5">
          Listed price
        </span>
      </div>
      <p className="text-xs font-bold text-navy mt-5">{test.category}</p>
      <h3 className="font-display text-lg font-extrabold text-deep mt-2 min-h-[54px]">{test.name}</h3>
      <p className="muted text-sm mt-2 flex-1">{test.description}</p>
      <div className="border-t border-slate-100 mt-5 pt-5 flex items-center justify-between gap-3">
        <div>
          <span className="font-display text-xl font-extrabold text-deep">{money(test.price)}</span>
          <p className="text-[10px] text-slate-400">Supplied rate list</p>
        </div>
        <Link to={'/book?test=' + encodeURIComponent(test.name)} className="text-navy font-bold text-sm flex items-center gap-1">
          Request <ArrowUpRight size={17} />
        </Link>
      </div>
    </div>
  );
}

function PackageCard({ item }) {
  return (
    <div className={`card relative p-7 flex flex-col ${item.featured ? 'ring-2 ring-navy' : ''}`}>
      {item.featured && (
        <span className="absolute -top-3 left-6 bg-navy text-white text-xs font-bold px-4 py-1.5 rounded-full">
          Popular option
        </span>
      )}
      <span className="w-12 h-12 rounded-xl bg-navy/10 text-navy grid place-items-center">
        <HeartPulse size={24} />
      </span>
      <h3 className="font-display text-xl font-extrabold text-deep mt-6">{item.name}</h3>
      <p className="muted text-sm mt-2 min-h-12">{item.subtitle}</p>
      <div className="mt-5">
        <span className="font-display text-3xl font-extrabold text-deep">{money(item.price)}</span>
        <p className="text-xs text-amber-700 font-bold mt-1">Illustrative package price</p>
      </div>
      <div className="h-px bg-slate-100 my-6" />
      <p className="text-sm font-bold mb-4">Example included tests</p>
      <ul className="space-y-3 flex-1">
        {item.tests.map((t) => (
          <li key={t} className="flex items-start gap-2 text-sm text-slate-600">
            <CheckCircle2 size={17} className="text-navy shrink-0 mt-0.5" />
            {t}
          </li>
        ))}
      </ul>
      <Link
        to={'/book?test=' + encodeURIComponent(item.name)}
        className={item.featured ? 'btn-primary mt-8' : 'btn-secondary mt-8'}
      >
        Request this package <ArrowRight size={17} />
      </Link>
    </div>
  );
}

function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F3F9FC] via-white to-[#EFF6FF]">
        <div className="container-site grid lg:grid-cols-2 gap-10 items-center py-16 lg:py-24">
          <div>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="inline-flex items-center gap-2 bg-white border border-navy/20 rounded-full px-4 py-2 text-navy text-xs font-bold shadow-xs">
                <span className="w-2 h-2 bg-navy rounded-full" />
                WAHDAT ROAD BRANCH · LAHORE
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200 rounded-full px-3 py-1.5 text-slate-600 text-xs font-bold shadow-xs">
                <Clock size={13} className="text-navy shrink-0" /> Fasting from 7:30 AM
              </span>
            </div>
            <h1 className="font-display text-[42px] sm:text-5xl lg:text-[60px] leading-[1.12] font-extrabold text-deep mt-7">
              Your health deserves <span className="text-navy">care & precision.</span>
            </h1>
            <p className="text-slate-600 text-lg leading-8 mt-6 max-w-lg">
              Welcome to <strong>Zeenat Laboratories</strong> (The Medical Laboratories). Reliable diagnostic blood testing, routine health screening, and safe doorstep sample collection in Wahdat Road, Lahore.
            </p>
            <div className="flex flex-wrap gap-3 mt-9">
              <Link to="/book" className="btn-primary">
                <CalendarDays size={18} /> Book an Appointment
              </Link>

              <Link to="/contact" className="btn-secondary">
                <MapPin size={17} className="text-navy" /> Find Us
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-7 gap-y-3 mt-10 text-sm font-bold text-slate-600">
              <span className="flex gap-2 items-center">
                <CheckCircle2 size={17} className="text-navy" /> Fast WhatsApp PDF reports
              </span>
              <span className="flex gap-2 items-center">
                <CheckCircle2 size={17} className="text-navy" /> Single-use sterile vacutainers
              </span>
              <span className="flex gap-2 items-center">
                <CheckCircle2 size={17} className="text-navy" /> Walk-ins welcome anytime
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-5 bg-navy/10 rounded-[45px] rotate-3" />
            <img
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1400&q=85"
              alt="Medical laboratory interior"
              className="relative w-full h-[280px] sm:h-[390px] lg:h-[490px] object-cover rounded-[32px] shadow-soft"
            />
            <div className="absolute -bottom-5 left-5 right-5 sm:right-auto bg-white shadow-soft rounded-2xl p-5 flex gap-3 items-center border border-slate-100">
              <div className="w-12 h-12 bg-white rounded-xl p-1 border border-slate-200 flex items-center justify-center shrink-0">
                <img src={logo} alt="Zeenat Laboratories" className="w-full h-full object-contain" />
              </div>
              <div>
                <strong className="block text-deep font-display font-extrabold text-sm sm:text-base">
                  Zeenat Laboratories
                </strong>
                <small className="text-slate-500 font-medium">Wahdat Road Branch · Lahore</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site">
          <div className="flex flex-wrap justify-between items-end gap-5 mb-9">
            <Heading
              tag="Our Services"
              heading="Popular laboratory tests"
              description="Browse common diagnostic tests and request details from our Wahdat Road branch."
            />
            <Link to="/tests" className="font-bold text-navy inline-flex items-center gap-2">
              View all tests <ArrowRight size={17} />
            </Link>
          </div>
          <Notice />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-7">
            {tests.slice(0, 4).map((t) => (
              <TestCard key={t.id} test={t} />
            ))}
          </div>
          <div className="mt-12">
            <PrescriptionBanner />
          </div>
        </div>
      </section>

      <section className="py-20 bg-mist">
        <div className="container-site">
          <Heading
            tag="Wellness made simpler"
            heading="Health checkup packages"
            description="Preventive screening packages designed for all age groups."
          />
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {packages.map((p) => (
              <PackageCard item={p} key={p.id} />
            ))}
          </div>
        </div>
      </section>

      <HomeSamplingSection />

      <section className="py-20">
        <div className="container-site grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              className="rounded-[28px] w-full h-[400px] object-cover"
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85"
              alt="Healthcare professional"
            />
            <span className="absolute bottom-4 left-4 bg-white/95 text-slate-600 text-xs rounded-lg px-3 py-2 shadow-xs">
              Illustrative image — branch photos coming soon
            </span>
          </div>
          <div>
            <Heading
              tag="About Zeenat Laboratories"
              heading="Over 60 years of diagnostic trust in Lahore"
              description="Rooted in the 1964 legacy of Dr. Zeenat Hussain, our Wahdat Road branch (near Ijaz Hospital) delivers accurate pathology and compassionate outpatient care."
            />
            <div className="grid sm:grid-cols-2 gap-5 mt-8">
              {[
                [ClipboardList, 'Easy test discovery', 'Find commonly requested tests and fasting info.'],
                [CalendarDays, 'WhatsApp & online booking', 'Request an appointment or home sample in seconds.'],
                [Building2, 'Wahdat Road Branch', 'Near Ijaz Hospital, Multan Chungi.'],
                [Clock, 'Early fasting draws', 'Open from 7:30 AM daily for morning blood collections.']
              ].map(([Icon, t, d]) => (
                <div key={t}>
                  <Icon size={23} className="text-navy mb-3" />
                  <h3 className="font-bold text-deep">{t}</h3>
                  <p className="muted text-sm mt-1">{d}</p>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn-secondary mt-8">
              Learn more about us <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <FaqSection />

      <section className="bg-deep py-16">
        <div className="container-site flex flex-col md:flex-row justify-between gap-7 items-center">
          <div>
            <p className="text-blue-200 font-bold text-xs tracking-widest uppercase">Direct assistance</p>
            <h2 className="font-display font-extrabold text-white text-3xl mt-3">Need a lab test or home sampling?</h2>
            <p className="text-blue-100/75 mt-2">Send an appointment request or message us on WhatsApp.</p>
          </div>
          <div className="flex flex-wrap gap-3">

            <Link to="/book" className="btn-secondary whitespace-nowrap">
              Request an appointment <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Tests() {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('All Tests');
  const [sort, setSort] = useState('name');
  const [page, setPage] = useState(1);
  const pageSize = 12;
  const normalize = (value) => value.toLowerCase().replace(/[^a-z0-9]/g, '');
  const cats = ['All Tests', ...new Set(tests.map((t) => t.category))];
  const filtered = tests.filter(
    (t) =>
      (cat === 'All Tests' || t.category === cat) &&
      normalize(`${t.name} ${t.aliases} ${t.category} ${t.specimen}`).includes(normalize(q))
  ).sort((a, b) => sort === 'low' ? a.price - b.price : sort === 'high' ? b.price - a.price : a.name.localeCompare(b.name));
  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, pageCount);
  const start = (currentPage - 1) * pageSize;
  const visibleTests = filtered.slice(start, start + pageSize);
  const firstPage = Math.max(1, Math.min(currentPage - 2, pageCount - 4));
  const pageNumbers = Array.from({ length: Math.min(5, pageCount) }, (_, i) => firstPage + i);
  const changePage = (nextPage) => {
    setPage(nextPage);
    const results = document.getElementById('test-results');
    results?.focus({ preventScroll: true });
    results?.scrollIntoView({ block: 'start', behavior: 'instant' });
  };
  return (
    <>
      <PageHero
        tag="Diagnostic services"
        title="Tests & prices"
        description="Find your test and its listed price. Browse the complete laboratory rate list, search by name or abbreviation, or choose a category."
      />
      <section className="container-site py-14">
        <div className="flex flex-col lg:flex-row gap-4">
          <label className="relative flex-1">
            <Search size={20} className="absolute left-4 top-3.5 text-slate-400" />
            <input
              aria-label="Search tests"
              value={q}
              onChange={(e) => { setQ(e.target.value); setPage(1); }}
              placeholder="Search by test name e.g. CBC, Lipid, HbA1c, LFT..."
              className="field pl-12"
            />
          </label>
          <select
            className="field lg:w-60"
            value={cat}
            onChange={(e) => { setCat(e.target.value); setPage(1); }}
            aria-label="Filter test category"
          >
            {cats.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <select className="field lg:w-48" value={sort} onChange={(e) => { setSort(e.target.value); setPage(1); }} aria-label="Sort tests">
            <option value="name">Name: A–Z</option>
            <option value="low">Price: low to high</option>
            <option value="high">Price: high to low</option>
          </select>
        </div>
        <p id="test-results" tabIndex={-1} className="text-sm text-slate-500 mt-5 mb-6 scroll-mt-28" role="status">
          {filtered.length ? `Showing ${start + 1}–${Math.min(start + pageSize, filtered.length)} of ${filtered.length} tests` : 'No matching tests'}
          {filtered.length < tests.length && ` (${tests.length} in the full catalogue)`}
        </p>
        <div className="rounded-2xl border border-slate-200 overflow-hidden">
          <div className="hidden sm:grid sm:grid-cols-[1fr_130px_100px] gap-5 px-6 py-3 bg-mist text-xs font-bold uppercase tracking-wide text-slate-500" aria-hidden="true">
            <span>Test / specimen</span><span>Price (PKR)</span><span>Booking</span>
          </div>
          {visibleTests.map((t) => (
            <div key={t.id} className="grid grid-cols-[minmax(0,1fr)_auto] sm:grid-cols-[minmax(0,1fr)_130px_100px] gap-x-3 sm:gap-x-5 gap-y-3 px-4 sm:px-6 py-5 border-t border-slate-100 hover:bg-slate-50 items-center">
              <div>
                <h3 className="font-bold text-deep">{t.name}</h3>
                {t.aliases && <p className="text-sm text-slate-600 mt-1">{t.aliases}</p>}
                <p className="text-xs text-slate-500 mt-1">{t.category} · Specimen: {t.specimen}</p>
              </div>
              <span className="font-display font-extrabold text-deep whitespace-nowrap">{money(t.price)}</span>
              <Link to={'/book?test=' + encodeURIComponent(t.name)} aria-label={'Request ' + t.name} className="text-navy text-sm font-bold inline-flex items-center gap-1">Request <ArrowUpRight size={16} /></Link>
            </div>
          ))}
        </div>
        {pageCount > 1 && (
          <nav aria-label="Test catalogue pages" className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">Page {currentPage} of {pageCount}</p>
            <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
              <button type="button" disabled={currentPage === 1} onClick={() => changePage(currentPage - 1)} className="px-3 py-2 rounded-lg border border-slate-200 text-sm font-bold text-navy hover:bg-blue-50 disabled:opacity-40 disabled:cursor-not-allowed">Previous</button>
              {pageNumbers.map((number) => (
                <button key={number} type="button" aria-label={`Page ${number}`} aria-current={number === currentPage ? 'page' : undefined} onClick={() => changePage(number)} className={`w-9 h-9 rounded-lg text-sm font-bold ${number === currentPage ? 'bg-navy text-white' : 'border border-slate-200 text-navy hover:bg-blue-50'}`}>{number}</button>
              ))}
              <button type="button" disabled={currentPage === pageCount} onClick={() => changePage(currentPage + 1)} className="px-3 py-2 rounded-lg border border-slate-200 text-sm font-bold text-navy hover:bg-blue-50 disabled:opacity-40 disabled:cursor-not-allowed">Next</button>
            </div>
          </nav>
        )}
        {!filtered.length && (
          <div className="text-center py-12 text-slate-500">
            <p>No tests match your search. Try another term or ask reception.</p>
            <button type="button" onClick={() => { setQ(''); setCat('All Tests'); setPage(1); }} className="font-bold text-navy mt-4">Clear search and filters</button>
          </div>
        )}
      </section>
    </>
  );
}

function Packages() {
  return (
    <>
      <PageHero
        tag="Health packages"
        title="Choose a checkup that fits your needs"
        description="Preventive health checkup packages available across our Wahdat Road branch. Confirm actual offerings and fasting preparation with the branch."
      />
      <section className="container-site py-14">
        <Notice />
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {packages.map((p) => (
            <PackageCard item={p} key={p.id} />
          ))}
        </div>
        <div className="bg-mist rounded-2xl p-7 mt-10">
          <h3 className="font-display font-extrabold text-xl text-deep">Before your visit</h3>
          <p className="muted mt-2">
            Some tests require fasting or other preparation. Ask the branch for test-specific instructions. A booking request does not confirm an appointment until the branch responds.
          </p>
        </div>
      </section>
    </>
  );
}

function Book() {
  const params = new URLSearchParams(useLocation().search);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    test: params.get('test') || '',
    branch: 'Wahdat Road Branch (Near Ijaz Hospital, Multan Chungi)',
    date: '',
    time: '',
    visitType: 'Branch visit',
    notes: '',
    consent: true,
    website: ''
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const sendViaWhatsApp = (e) => {
    if (e) e.preventDefault();
    if (!form.name.trim()) {
      setError('Please enter patient full name.');
      return;
    }
    if (!/^03\d{9}$/.test(form.phone.replace(/[\s-]/g, ''))) {
      setError('Enter a valid Pakistani mobile number, e.g. 03001234567.');
      return;
    }
    setError('');
    const msg = `🏥 *Zeenat Laboratories (The Medical Laboratories)*\n📋 *Test Booking Request*\n──────────────────────\n👤 *Patient Name:* ${form.name}\n📞 *Mobile:* ${form.phone}${form.email ? `\n📧 *Email:* ${form.email}` : ''}\n🏢 *Preferred Branch:* ${form.branch}\n🧪 *Test / Package:* ${form.test || 'General Inquiry'}\n📅 *Preferred Date:* ${form.date || 'Earliest available'}\n⏰ *Time Window:* ${form.time || 'Morning'}\n🏠 *Visit Type:* ${form.visitType}\n${form.notes ? `📝 *Notes:* ${form.notes}\n` : ''}──────────────────────\n📍 *Branch:* Wahdat Road (Multan Chungi), Lahore`;
    const url = `https://wa.me/923270288889?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setStatus('whatsapp_opened');
  };

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    if (!form.name.trim()) {
      setError('Please enter patient full name.');
      return;
    }
    if (!/^03\d{9}$/.test(form.phone.replace(/[\s-]/g, ''))) {
      setError('Enter a valid Pakistani mobile number, e.g. 03001234567.');
      return;
    }
    if (form.website) return;
    const endpoint = import.meta.env.VITE_BOOKING_ENDPOINT;
    if (!endpoint) {
      sendViaWhatsApp();
      return;
    }
    setStatus('loading');
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'zeenat-labs-website', submittedAt: new Date().toISOString() })
      });
      if (!response.ok) throw new Error('The booking service could not accept the request.');
      setStatus('success');
      setForm({
        name: '',
        phone: '',
        email: '',
        test: '',
        branch: 'Wahdat Road Branch',
        date: '',
        time: '',
        visitType: 'Branch visit',
        notes: '',
        consent: true,
        website: ''
      });
    } catch (err) {
      setError(err.message + ' You can also book directly via WhatsApp.');
      setStatus('idle');
    }
  };

  return (
    <>
      <PageHero
        tag="Appointment request"
        title="Book a laboratory test"
        description="Schedule a visit at our Wahdat Road branch, or request safe home sample collection across Lahore."
      />
      <section className="container-site py-14">
        <PrescriptionBanner />
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-9">
          <form onSubmit={submit} className="card p-6 sm:p-9">
            <h2 className="font-display font-extrabold text-2xl text-deep">Patient & Test Details</h2>
            <p className="muted text-sm mt-2 mb-8">Fields marked * are required. We confirm all appointments promptly.</p>
            <div className="grid sm:grid-cols-2 gap-5">
              <label className="text-sm font-bold">
                Full name *
                <input
                  required
                  maxLength={100}
                  className="field mt-2"
                  value={form.name}
                  onChange={(e) => set('name', e.target.value)}
                  placeholder="Patient full name"
                />
              </label>
              <label className="text-sm font-bold">
                Mobile number *
                <input
                  required
                  inputMode="tel"
                  className="field mt-2"
                  value={form.phone}
                  onChange={(e) => set('phone', e.target.value)}
                  placeholder="0300 1234567"
                />
              </label>
              <label className="text-sm font-bold">
                Email (optional)
                <input
                  type="email"
                  className="field mt-2"
                  value={form.email}
                  onChange={(e) => set('email', e.target.value)}
                  placeholder="you@example.com"
                />
              </label>
              <label className="text-sm font-bold">
                Select Branch / Location *
                <select
                  required
                  className="field mt-2"
                  value={form.branch}
                  onChange={(e) => set('branch', e.target.value)}
                >
                  <option>Wahdat Road Branch (Near Ijaz Hospital, Multan Chungi)</option>
                  <option>Home Sample Collection (Lahore Doorstep)</option>
                </select>
              </label>
              <label className="text-sm font-bold">
                Test or package *
                <select
                  required
                  className="field mt-2"
                  value={form.test}
                  onChange={(e) => set('test', e.target.value)}
                >
                  <option value="">Select a test / package</option>
                  <optgroup label="Tests">
                    {tests.map((t) => (
                      <option key={t.id}>{t.name}</option>
                    ))}
                  </optgroup>
                  <optgroup label="Packages">
                    {packages.map((p) => (
                      <option key={p.id}>{p.name}</option>
                    ))}
                  </optgroup>
                  <option>Home Sample Collection (Multiple Tests)</option>
                  <option>Other / Doctor Prescription</option>
                </select>
              </label>
              <label className="text-sm font-bold">
                Preferred date *
                <input
                  required
                  type="date"
                  min={new Date().toLocaleDateString('en-CA')}
                  className="field mt-2"
                  value={form.date}
                  onChange={(e) => set('date', e.target.value)}
                />
              </label>
              <label className="text-sm font-bold sm:col-span-2">
                Preferred time window *
                <select
                  required
                  className="field mt-2"
                  value={form.time}
                  onChange={(e) => set('time', e.target.value)}
                >
                  <option value="">Choose a time window</option>
                  <option>Morning (7:30 AM – 11:00 AM) — Best for Fasting</option>
                  <option>Mid-day (11:00 AM – 3:00 PM)</option>
                  <option>Evening (3:00 PM – 8:00 PM)</option>
                  <option>Night (8:00 PM – 12:00 midnight)</option>
                </select>
              </label>
            </div>
            <label className="text-sm font-bold block mt-5">
              Visit type
              <select
                className="field mt-2"
                value={form.visitType}
                onChange={(e) => set('visitType', e.target.value)}
              >
                <option>Branch visit (Walk-in at selected location)</option>
                <option>Home sample collection (Lahore doorstep service)</option>
              </select>
            </label>
            <label className="text-sm font-bold block mt-5">
              Additional notes (optional)
              <textarea
                maxLength={500}
                rows={3}
                className="field mt-2 resize-y"
                value={form.notes}
                onChange={(e) => set('notes', e.target.value)}
                placeholder="e.g. Fasting sugar required, doctor slip attached, patient is elderly, etc."
              />
            </label>
            <input
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={form.website}
              onChange={(e) => set('website', e.target.value)}
            />
            <label className="flex items-start gap-3 text-sm text-slate-600 mt-6">
              <input
                type="checkbox"
                className="mt-1 accent-navy"
                checked={form.consent}
                onChange={(e) => set('consent', e.target.checked)}
              />
              <span>I agree to share my contact and appointment details with Zeenat Laboratories for this request. *</span>
            </label>
            {error && <div role="alert" className="bg-red-50 text-red-700 rounded-xl p-4 mt-5 text-sm">{error}</div>}
            {status === 'whatsapp_opened' && (
              <div
                role="status"
                className="bg-[#25D366]/10 border border-[#25D366]/30 text-[#128C7E] rounded-xl p-4 mt-5 text-sm font-medium flex items-center gap-3"
              >
                <WhatsAppIcon size={22} className="shrink-0 text-[#128C7E]" />
                <span>WhatsApp opened with your pre-filled appointment request! Press send in WhatsApp to finalize.</span>
              </div>
            )}
            {status === 'success' && (
              <div role="status" className="bg-navy/10 text-navy rounded-xl p-4 mt-5 text-sm font-semibold">
                Request sent successfully. Our branch staff will contact you shortly to confirm the appointment.
              </div>
            )}
            <div className="grid sm:grid-cols-2 gap-3 mt-7">
              <button
                type="button"
                onClick={sendViaWhatsApp}
                className="btn-primary !bg-[#128C7E] hover:!bg-[#075E54] text-white shadow-lg text-sm font-bold flex items-center justify-center gap-2"
              >
                <WhatsAppIcon size={18} /> Book via WhatsApp (Fastest)
              </button>
              <button
                disabled={status === 'loading'}
                type="submit"
                className="btn-primary text-sm font-bold flex items-center justify-center gap-2"
              >
                {status === 'loading' ? <Loader2 size={18} className="animate-spin" /> : <CalendarDays size={18} />}
                {status === 'loading' ? 'Sending...' : 'Submit Web Request'}
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-4 text-center">
              Call 0327 0288889 · Walk-in patients are always welcome at Wahdat Road.
            </p>
          </form>

          <aside className="space-y-5">
            <div className="rounded-2xl bg-deep text-white p-6 shadow-soft">
              <div className="flex items-center gap-2 text-blue-200 mb-3">
                <Building2 size={20} />
                <h3 className="font-display font-extrabold text-lg text-white">Wahdat Road Branch</h3>
              </div>
              <p className="text-blue-100/80 text-xs">{branches[0].shortAddress}</p>
              <div className="mt-3 pt-3 border-t border-white/10 text-xs text-blue-200 space-y-1">
                <p><strong>Hours:</strong> Mon–Sun: 7:30 AM – 12:00 midnight</p>
                <p><strong>Contact:</strong> 0327 0288889</p>
                <p><strong>Fasting:</strong> From 7:30 AM daily</p>
              </div>
              <a
                href={branches[0].mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 font-bold text-xs mt-3 inline-flex items-center gap-1 hover:underline"
              >
                Get Directions <ArrowUpRight size={13} />
              </a>
            </div>

            </aside>
        </div>
      </section>
    </>
  );
}

function PortraitFrame({ src, alt, initials, name, caption }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="relative rounded-3xl overflow-hidden border border-[#E5ECF1] bg-gradient-to-br from-[#EDF4FA] via-white to-[#DBEAFE] shadow-soft aspect-[4/4.4] max-w-[360px] w-full mx-auto">
      {!imgFailed ? (
        <img
          src={src}
          alt={alt}
          onError={() => setImgFailed(true)}
          className="w-full h-full object-cover object-top"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 pb-20 text-center">
          <div className="w-24 h-24 rounded-full bg-deep text-white font-display font-extrabold text-2xl flex items-center justify-center shadow-md ring-4 ring-white">
            {initials}
          </div>
          <p className="text-xs font-medium text-slate-500 mt-4">Portrait coming soon</p>
        </div>
      )}
      <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur rounded-xl px-4 py-2.5 border border-slate-100 shadow-xs">
        <p className="font-display font-extrabold text-deep text-sm leading-tight">{name}</p>
        <p className="text-[11px] font-semibold text-navy mt-0.5">{caption}</p>
      </div>
    </div>
  );
}

function About() {
  const { heritage, founder, centerHead, pillars } = aboutData;
  const pillarIcons = [ShieldCheck, Clock, HomeIcon, FileText];

  return (
    <>
      <PageHero
        tag="About Zeenat Laboratories"
        title="Over six decades of trusted diagnostics"
        description="Carrying forward the legacy of The Medical Laboratories since 1964—combining pioneering pathology standards with accessible outpatient care at our Wahdat Road branch in Lahore."
      />

      {/* Founder & Heritage */}
      <section className="container-site py-16 md:py-20">
        <div className="grid lg:grid-cols-[360px_1fr] gap-10 lg:gap-14 items-center">
          <PortraitFrame
            src={founder.image}
            alt={founder.imageAlt}
            initials={founder.initials}
            name={founder.name}
            caption={founder.badge}
          />
          <div>
            <p className="eyebrow mb-3">Founder & Legacy</p>
            <h2 className="section-title">{founder.name}</h2>
            <p className="text-navy font-bold text-sm mt-2">{founder.role}</p>
            <p className="muted mt-4">{heritage.summary}</p>
            <p className="muted mt-3">{founder.bio}</p>

            <div className="grid sm:grid-cols-3 gap-3 mt-6">
              {[
                ['Est. ' + heritage.established, 'Founded in Lahore'],
                ['60+ Years', 'Diagnostic Heritage'],
                ['Clinical Precision', 'Ethical Lab Reporting']
              ].map(([stat, label]) => (
                <div key={stat} className="rounded-xl bg-mist border border-[#E5ECF1] px-4 py-3">
                  <strong className="block font-display font-extrabold text-deep text-base">{stat}</strong>
                  <span className="text-xs text-slate-500">{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-2.5">
              {founder.highlights.map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <Award size={17} className="text-navy shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Center Head — Muhammad Zain */}
      <section className="bg-mist border-y border-[#E6EDF3] py-16 md:py-20">
        <div className="container-site">
          <div className="card p-7 sm:p-10 lg:p-12 grid lg:grid-cols-[1fr_340px] gap-10 items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="eyebrow">Center Leadership</span>
                <span className="inline-flex items-center gap-1.5 bg-navy/10 text-navy text-xs font-extrabold px-3 py-1 rounded-full">
                  <UserCheck size={13} /> {centerHead.experience}
                </span>
              </div>
              <h2 className="section-title">{centerHead.name}</h2>
              <p className="text-navy font-bold text-sm mt-2">{centerHead.role}</p>
              <p className="muted mt-4">{centerHead.bio}</p>

              <div className="mt-6 space-y-2.5">
                {centerHead.highlights.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 size={17} className="text-navy shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <Link to="/book" className="btn-primary text-sm">
                  <CalendarDays size={17} /> Book a Test
                </Link>
                <a
                  href={contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm"
                >
                  <WhatsAppIcon size={17} className="text-[#128C7E]" /> Message Branch
                </a>
              </div>
            </div>

            <PortraitFrame
              src={centerHead.image}
              alt={centerHead.imageAlt}
              initials={centerHead.initials}
              name={centerHead.name}
              caption={`${centerHead.role} · ${centerHead.experience}`}
            />
          </div>
        </div>
      </section>

      {/* Wahdat Road Diagnostic Care Highlights */}
      <section className="container-site py-16 md:py-20">
        <Heading
          tag="Wahdat Road Branch"
          heading="Care built around patients"
          description="Modern diagnostic precision paired with convenient hours, home sampling, and digital reporting."
          center={true}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {pillars.map((p, idx) => {
            const Icon = pillarIcons[idx] || ShieldCheck;
            return (
              <div key={p.title} className="card p-6 flex flex-col">
                <span className="w-11 h-11 rounded-xl bg-navy/10 text-navy flex items-center justify-center mb-4">
                  <Icon size={22} />
                </span>
                <h3 className="font-display font-extrabold text-lg text-deep">{p.title}</h3>
                <p className="muted text-sm mt-2">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

function Gallery() {
  return (
    <>
      <PageHero
        tag="Photo gallery"
        title="A closer look at laboratory care"
        description="Modern clinical diagnostic equipment and dedicated outpatient facilities serving our Wahdat Road branch."
      />
      <section className="container-site py-14">
        <div className="grid md:grid-cols-2 gap-7">
          {gallery.map((g) => (
            <div key={g.title} className="card overflow-hidden">
              <img src={g.image} alt={g.title + ' — illustrative image'} loading="lazy" className="w-full h-72 object-cover bg-mist" />
              <div className="p-6">
                <h2 className="font-display font-extrabold text-xl text-deep">{g.title}</h2>
                <p className="text-slate-500 text-sm mt-2">{g.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function Contact() {

  return (
    <>
      <PageHero
        tag="Contact & locations"
        title="Visit our Wahdat Road branch"
        description="Find branch details, operating schedules, telephone lines, and directions for our Wahdat Road location."
      />
      <section className="container-site py-14">
        <div className="grid gap-8 mb-12">
          {branches.map((b) => (
            <div key={b.id} className="card p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-navy bg-navy/10 px-3 py-1 rounded-full">
                    {b.shortName}
                  </span>
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    {b.badge}
                  </span>
                </div>
                <h3 className="font-display font-extrabold text-2xl text-deep">{b.name}</h3>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed flex items-start gap-2">
                  <MapPin size={17} className="text-navy shrink-0 mt-0.5" />
                  <span>{b.address}</span>
                </p>
                <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                  <p className="flex items-center gap-2">
                    <Clock size={14} className="text-navy" /> <strong>Hours:</strong> {b.timings}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone size={14} className="text-navy" /> <strong>Phone:</strong> {b.phone} {b.altPhone && `(Alt: ${b.altPhone})`}
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap gap-3">
                <a
                  href={'tel:' + b.phoneRaw}
                  className="btn-secondary text-xs"
                >
                  <Phone size={14} /> Call Branch
                </a>
                <a
                  href={b.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary !bg-[#128C7E] hover:!bg-[#075E54] text-white text-xs"
                >
                  <WhatsAppIcon size={15} /> WhatsApp
                </a>
                <a
                  href={b.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs"
                >
                  <Navigation size={14} /> View Map <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Embedded Map Showcase */}
        <div className="card p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="font-display font-extrabold text-2xl text-deep">Branch Map & Navigation</h3>
              <p className="muted text-sm mt-1">Get precise directions to Zeenat Laboratories on Google Maps.</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-200 h-[420px] bg-mist">
            <iframe
              title="Zeenat Laboratories Google Map"
              src={branches[0].mapEmbed}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="mt-12">
          <PrescriptionBanner />
        </div>
      </section>
      <FaqSection />
    </>
  );
}

function NotFound() {
  return (
    <div className="container-site text-center py-32">
      <h1 className="font-display text-5xl font-extrabold text-deep">Page not found</h1>
      <p className="muted mt-4">The page you requested doesn't exist.</p>
      <Link to="/" className="btn-primary mt-8">
        Back to home
      </Link>
    </div>
  );
}

function App() {
  const loc = useLocation();
  let page =
    loc.pathname === '/' ? (
      <Home />
    ) : loc.pathname === '/tests' ? (
      <Tests />
    ) : loc.pathname === '/packages' ? (
      <Packages />
    ) : loc.pathname === '/home-sampling' ? (
      <HomeSamplingPage />
    ) : loc.pathname === '/book' ? (
      <Book />
    ) : loc.pathname === '/about' ? (
      <About />
    ) : loc.pathname === '/gallery' ? (
      <Gallery />
    ) : loc.pathname === '/contact' ? (
      <Contact />
    ) : (
      <NotFound />
    );
  return <Layout>{page}</Layout>;
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
