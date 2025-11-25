import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Network,
  PhoneCall,
  Cpu,
  Zap,
  Cctv,
  Code2,
  Building2,
  Users,
  Briefcase,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

/**
 * Prime IT Solutions – Futuristic, single‑file React site
 * - Uses in‑page routing (no external router needed)
 * - Tailwind for styling
 * - Replace logo URLs / partner logos / client logos with your assets
 */

const NAV = [
  { key: "home", label: "Home" },
  { key: "services", label: "Services" },
  { key: "companies", label: "Our Companies" },
  { key: "clients", label: "Clients & Partners" },
  { key: "careers", label: "Careers" },
  { key: "contact", label: "Contact" },
];

const SERVICES = [
  {
    title: "IT Infrastructure Solutions & Services",
    icon: Network,
    blurb:
      "Comprehensive infrastructure design, implementation, and management.",
    body:
      "We provide end‑to‑end IT infrastructure solutions including network design, server deployment, cloud migration, and infrastructure management. Our team ensures your IT foundation is robust, scalable, and secure to support your business growth.",
    chips: ["Network", "Cloud", "Servers", "Managed IT"],
  },
  {
    title: "Cybersecurity Solutions & Services",
    icon: ShieldCheck,
    blurb: "Advanced security solutions to protect your digital assets.",
    body:
      "Protect your organization with our advanced cybersecurity solutions. We offer threat detection and prevention, security audits, vulnerability assessments, penetration testing, and incident response services to safeguard your critical data.",
    chips: ["Threat Detection", "Audits", "Pen‑Testing", "IR"],
  },
  {
    title: "IP Telephony & Contact Center Solutions",
    icon: PhoneCall,
    blurb: "Modern communication systems for seamless connectivity.",
    body:
      "Transform your business communications with our IP telephony and contact center solutions. We deliver unified communications platforms, VoIP systems, and omnichannel customer engagement solutions for enterprise‑grade reliability.",
    chips: ["VoIP", "UC", "Contact Center", "Omnichannel"],
  },
  {
    title: "IoT Solutions & Services",
    icon: Cpu,
    blurb: "Smart connected devices and IoT platform integration.",
    body:
      "Harness the power of connected devices with our IoT solutions. We provide IoT platform development, sensor integration, device management, and data analytics to enable smart operations and predictive maintenance.",
    chips: ["Sensors", "Platforms", "Analytics", "Automation"],
  },
  {
    title: "Electrical & Power Solutions",
    icon: Zap,
    blurb: "Reliable power infrastructure and management systems.",
    body:
      "Ensure reliable power infrastructure with our electrical and power solutions. We offer UPS systems, backup generators, power monitoring, and energy management solutions to protect your critical systems.",
    chips: ["UPS", "Generators", "Monitoring", "Energy Mgmt"],
  },
  {
    title: "Physical Security Solutions",
    icon: Cctv,
    blurb: "Comprehensive physical security and surveillance systems.",
    body:
      "Secure your facilities with our comprehensive physical security solutions. We provide access control systems, video surveillance, intrusion detection, and integrated security management platforms.",
    chips: ["Access Control", "CCTV", "Intrusion", "Integrated"],
  },
  {
    title: "Web Designing & Software Solutions",
    icon: Code2,
    blurb: "Custom software development and web design services.",
    body:
      "Bring your digital vision to life with our web design and software development services. We create responsive websites, custom applications, mobile apps, and e‑commerce platforms using modern technologies.",
    chips: ["Web", "Apps", "Mobile", "E‑Commerce"],
  },
];

const COMPANIES = [
  {
    name: "Prime Engineering Lanka (PVT) LTD",
    focus: "Engineering & Infrastructure",
    desc: "Engineering solutions and infrastructure development services.",
  },
  {
    name: "Prime Teleservice (PVT) LTD",
    focus: "Telecommunications",
    desc: "Telecommunications and telecom infrastructure services.",
  },
  {
    name: "Prime IT Solutions (PVT) LTD",
    focus: "Information Technology",
    desc: "Comprehensive IT solutions, consulting, and technology services.",
    highlight: true,
  },
  {
    name: "Prime Engineering Automation (PVT) LTD",
    focus: "Engineering & Automation",
    desc: "Engineering automation solutions and services.",
  },
  {
    name: "Prime Academy (PVT) LTD",
    focus: "Education & Training",
    desc: "Professional training and skill development in various fields.",
  },
  {
    name: "Prime Holidays (PVT) LTD",
    focus: "Travel & Hospitality",
    desc: "Travel and hospitality services for corporate and leisure clients.",
  },
  {
    name: "PELa Ceylon Teas (PVT) LTD",
    focus: "Agriculture & Export",
    desc: "Premium tea production and export services.",
  },
];

const INDUSTRIES = [
  "Financial Services",
  "Healthcare",
  "Manufacturing",
  "Retail & E‑commerce",
  "Education",
  "Government",
  "Telecommunications",
  "Energy & Utilities",
  "Transportation & Logistics",
];

const TESTIMONIAL = {
  quote:
    "Prime IT Solutions showed professionalism and outstanding developer efficiency. Challenges during the development cycle were solved quickly, communication stayed smooth, and delivery was fast. We fully met our expectations and look forward to working together again.",
  name: "Ruwan Weerasuriya",
  org: "Air Resources Management Center, Sri Lanka",
};

const CONTACT = {
  email: "hello@prime.lk",
  phones: ["+94 (11) 5 672 666", "+94 (11) 5 752 117"],
  address: "No. 36, Nugegoda Road, Pepiliyana, Sri Lanka",
  hours: [
    "Monday – Friday: 9:00 AM – 6:00 PM",
    "Saturday: 10:00 AM – 4:00 PM",
    "Sunday: Closed",
  ],
};

const PageShell = ({ children }) => (
  <div className="relative min-h-[calc(100vh-120px)]">
    {/* ambient grid + glow */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute -bottom-48 -left-48 h-[620px] w-[620px] rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-[length:28px_28px] opacity-40" />
    </div>
    <div className="relative">{children}</div>
  </div>
);

const SectionTitle = ({ kicker, title, sub }) => (
  <div className="mb-8">
    {kicker && (
      <div className="text-xs tracking-[0.35em] uppercase text-cyan-300/90">
        {kicker}
      </div>
    )}
    <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-white">
      {title}
    </h2>
    {sub && <p className="mt-2 text-white/70 max-w-3xl">{sub}</p>}
  </div>
);

const Pill = ({ children }) => (
  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
    {children}
  </span>
);

const PrimeSite = () => {
  const [page, setPage] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const current = useMemo(() => NAV.find((n) => n.key === page), [page]);

  return (
    <div className="min-h-screen bg-[#04050a] text-white">
      <Header
        page={page}
        setPage={setPage}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <AnimatePresence mode="wait">
        <motion.main
          key={page}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="px-4 md:px-8"
        >
          <PageShell>
            {page === "home" && <Home setPage={setPage} />}
            {page === "services" && <Services setPage={setPage} />}
            {page === "companies" && <Companies />}
            {page === "clients" && <Clients setPage={setPage} />}
            {page === "careers" && <Careers setPage={setPage} />}
            {page === "contact" && <Contact />}
          </PageShell>
        </motion.main>
      </AnimatePresence>

      <Footer setPage={setPage} current={current} />
    </div>
  );
};

const Header = ({ page, setPage, mobileOpen, setMobileOpen }) => (
  <header className="sticky top-0 z-50 border-b border-white/10 bg-[#04050a]/70 backdrop-blur-xl">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
      <button
        onClick={() => setPage("home")}
        className="flex items-center gap-3"
      >
        {/* Placeholder logo */}
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 font-bold">
          P
        </div>
        <div className="text-left leading-tight">
          <div className="text-sm font-semibold tracking-wide">
            Prime IT Solutions
          </div>
          <div className="text-[11px] text-white/50">
            Where Innovation Meets IT Excellence
          </div>
        </div>
      </button>

      <nav className="hidden items-center gap-1 md:flex">
        {NAV.map((n) => (
          <button
            key={n.key}
            onClick={() => setPage(n.key)}
            className={`rounded-full px-4 py-2 text-sm transition ${
              page === n.key
                ? "bg-white/10 text-white"
                : "text-white/70 hover:bg-white/5 hover:text-white"
            }`}
          >
            {n.label}
          </button>
        ))}
      </nav>

      <button
        className="md:hidden grid h-10 w-10 place-items-center rounded-xl bg-white/5 hover:bg-white/10"
        onClick={() => setMobileOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={18} /> : <Menu size={18} />}
      </button>
    </div>

    <AnimatePresence>
      {mobileOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden border-t border-white/10"
        >
          <div className="px-4 py-3 grid gap-1">
            {NAV.map((n) => (
              <button
                key={n.key}
                onClick={() => {
                  setPage(n.key);
                  setMobileOpen(false);
                }}
                className={`text-left rounded-xl px-4 py-3 ${
                  page === n.key ? "bg-white/10" : "bg-white/5"
                }`}
              >
                {n.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </header>
);

const Home = ({ setPage }) => (
  <div className="mx-auto max-w-6xl">
    {/* HERO */}
    <section className="relative pt-10 md:pt-16">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            FUTURE‑READY IT SERVICES
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
            Where Innovation Meets <span className="text-cyan-300">IT Excellence</span>
          </h1>
          <p className="mt-4 text-white/70 text-lg">
            Delivering cutting‑edge IT solutions and consulting services to transform your business.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => setPage("services")}
              className="rounded-2xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-5 py-3 text-sm font-semibold shadow-lg shadow-fuchsia-500/20"
            >
              Explore Our Services
            </button>
            <button
              onClick={() => setPage("contact")}
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10"
            >
              Contact Us
            </button>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-white/70">
            <Metric label="Projects Delivered" value="150+" />
            <Metric label="Enterprise Clients" value="60+" />
            <Metric label="Solution Partners" value="18+" />
            <Metric label="Avg. Response" value="< 2h" />
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-4">
            <div className="h-full w-full rounded-2xl bg-[conic-gradient(from_180deg_at_50%_50%,rgba(34,211,238,0.25),rgba(217,70,239,0.25),rgba(34,211,238,0.25))] p-[1px]">
              <div className="h-full w-full rounded-2xl bg-[#050714] grid place-items-center">
                <OrbitalGraphic />
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-xs text-white/70">
            AI‑assisted delivery • Secure‑by‑design • Cloud‑native
          </div>
        </div>
      </div>
    </section>

    {/* ABOUT */}
    <section className="mt-16 md:mt-20">
      <SectionTitle kicker="About" title="Prime IT Solutions" />
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <h3 className="text-lg font-semibold">Who we are</h3>
          <p className="mt-2 text-white/70">
            Prime IT Solutions focuses on IT solution designing & consulting. Founded upon a vision to change the way we interact with information technology, we deliver workflow and knowledge support to help clients handle dynamic business and technology challenges.
          </p>
        </Card>
        <Card>
          <h3 className="text-lg font-semibold">What we aim for</h3>
          <p className="mt-2 text-white/70">
            We combine deep industry expertise with enabling technologies to improve bottom‑line performance. We bring experience, best practices, and customized tools suited to each client’s unique requirements.
          </p>
        </Card>
        <Card>
          <h3 className="text-lg font-semibold">Who we serve</h3>
          <p className="mt-2 text-white/70">
            We provide IT solutions for both private and public sectors, across organizations of all sizes—simplifying operations by integrating and automating business processes.
          </p>
        </Card>
      </div>
    </section>

    {/* BUSINESS UNITS PREVIEW */}
    <section className="mt-16 md:mt-20">
      <SectionTitle
        kicker="Business Units"
        title="Solutions across your transformation journey"
        sub="Comprehensive IT solutions spanning various needs at every stage of the transformation process."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {SERVICES.map((s, i) => (
          <motion.button
            key={s.title}
            onClick={() => setPage("services")}
            whileHover={{ y: -2 }}
            className="group rounded-3xl border border-white/10 bg-white/5 p-5 text-left hover:bg-white/10"
          >
            <div className="flex items-start gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10">
                <s.icon size={20} className="text-cyan-300" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold">{s.title}</h3>
                  <ChevronRight className="opacity-0 group-hover:opacity-100 transition" size={18} />
                </div>
                <p className="mt-1 text-sm text-white/70">{s.blurb}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.chips.map((c) => (
                    <Pill key={c}>{c}</Pill>
                  ))}
                </div>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </section>

    {/* TESTIMONIAL */}
    <section className="mt-16 md:mt-20">
      <SectionTitle kicker="Testimonials" title="What Our Clients Say" />
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 md:p-10">
        <p className="text-lg text-white/80">“{TESTIMONIAL.quote}”</p>
        <div className="mt-5 flex items-center gap-3 text-sm">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-white/10">
            <Users size={16} />
          </div>
          <div>
            <div className="font-semibold">{TESTIMONIAL.name}</div>
            <div className="text-white/60">{TESTIMONIAL.org}</div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="mt-16 mb-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-semibold">Ready to Transform Your Business?</h3>
          <p className="mt-2 text-white/70">
            Let’s discuss how our IT solutions can help you achieve your business goals.
          </p>
        </div>
        <button
          onClick={() => setPage("contact")}
          className="rounded-2xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-6 py-3 text-sm font-semibold shadow-lg shadow-cyan-500/20"
        >
          Get Started Today
        </button>
      </div>
    </section>
  </div>
);

const Services = ({ setPage }) => (
  <div className="mx-auto max-w-6xl py-10 md:py-14">
    <SectionTitle
      kicker="Services"
      title="Comprehensive IT solutions tailored to your business needs"
      sub="We deliver excellence across all technology domains."
    />
    <div className="grid gap-5 md:grid-cols-2">
      {SERVICES.map((s) => (
        <div key={s.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-start gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10">
              <s.icon className="text-fuchsia-300" size={22} />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-white/70">{s.body}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {s.chips.map((c) => (
                  <Pill key={c}>{c}</Pill>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-7 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
      <div>
        <h4 className="text-xl font-semibold">Need a Custom Solution?</h4>
        <p className="mt-1 text-white/70">
          Our team is ready to discuss your specific requirements and design a solution that fits your needs perfectly.
        </p>
      </div>
      <button
        onClick={() => setPage("contact")}
        className="rounded-2xl border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold hover:bg-white/15"
      >
        Contact Our Experts
      </button>
    </div>
  </div>
);

const Companies = () => (
  <div className="mx-auto max-w-6xl py-10 md:py-14">
    <SectionTitle
      kicker="Group"
      title="Our Companies"
      sub="A diverse portfolio of enterprises delivering excellence across multiple industries and sectors."
    />
    <div className="grid gap-4 md:grid-cols-2">
      {COMPANIES.map((c) => (
        <div
          key={c.name}
          className={`rounded-3xl border p-6 ${
            c.highlight
              ? "border-cyan-400/40 bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10"
              : "border-white/10 bg-white/5"
          }`}
        >
          <div className="flex items-start gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10">
              <Building2 size={20} className="text-cyan-300" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{c.name}</h3>
              <div className="mt-1 text-sm text-white/60">Focus Area</div>
              <div className="text-white/85 font-medium">{c.focus}</div>
              <p className="mt-2 text-white/70">{c.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-7 md:p-8">
      <h4 className="text-xl font-semibold">About Our Group</h4>
      <p className="mt-2 text-white/70">
        Our group represents a commitment to excellence across diverse sectors. From cutting‑edge IT solutions to traditional industries, we bring innovation, expertise, and reliability to every venture. Together, we create synergies that enable integrated services that drive business success.
      </p>
    </div>
  </div>
);

const Clients = ({ setPage }) => (
  <div className="mx-auto max-w-6xl py-10 md:py-14">
    <SectionTitle
      kicker="Clients"
      title="Clients & Partners"
      sub="Building lasting relationships with industry leaders and innovative organizations worldwide."
    />
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <h3 className="text-lg font-semibold">Trusted by Leading Organizations</h3>
        <p className="mt-2 text-white/70">
          We’re proud to serve a diverse portfolio of clients across industries, from startups to Fortune 500 companies. Our commitment to excellence has earned us long‑term partnerships with organizations that value innovation and reliability.
        </p>
        {/* Replace with real logos */}
        <div className="mt-4 grid grid-cols-3 gap-3 opacity-80">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-12 rounded-xl bg-white/10" />
          ))}
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold">Industries We Serve</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {INDUSTRIES.map((x) => (
            <Pill key={x}>{x}</Pill>
          ))}
        </div>
      </Card>
    </div>

    <div className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-7 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
      <div>
        <h4 className="text-xl font-semibold">Become a Partner</h4>
        <p className="mt-1 text-white/70">
          Interested in partnering with us? Let’s explore how we can create value together.
        </p>
      </div>
      <button
        onClick={() => setPage("contact")}
        className="rounded-2xl bg-white/10 px-6 py-3 text-sm font-semibold hover:bg-white/15"
      >
        Contact Us
      </button>
    </div>
  </div>
);

const Careers = ({ setPage }) => (
  <div className="mx-auto max-w-6xl py-10 md:py-14">
    <SectionTitle
      kicker="Careers"
      title="Build the future with Prime"
      sub="Join a team that ships real solutions, learns fast, and loves hard problems."
    />

    <div className="grid gap-6 md:grid-cols-3">
      <Card>
        <Briefcase className="text-cyan-300" />
        <h3 className="mt-3 text-lg font-semibold">Work on meaningful projects</h3>
        <p className="mt-2 text-white/70">
          From critical infrastructure and cybersecurity to IoT and custom software, you’ll help deliver technology that matters.
        </p>
      </Card>
      <Card>
        <Users className="text-fuchsia-300" />
        <h3 className="mt-3 text-lg font-semibold">Grow your craft</h3>
        <p className="mt-2 text-white/70">
          Mentoring, certifications, and exposure to global solution partners keep you moving forward.
        </p>
      </Card>
      <Card>
        <Cpu className="text-cyan-300" />
        <h3 className="mt-3 text-lg font-semibold">Future‑ready culture</h3>
        <p className="mt-2 text-white/70">
          We value initiative, curiosity, and clear communication—so great ideas ship quickly.
        </p>
      </Card>
    </div>

    {/* Simple application CTA */}
    <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-7 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
      <div>
        <h4 className="text-xl font-semibold">Want to join us?</h4>
        <p className="mt-1 text-white/70">
          Email your CV and portfolio to <span className="text-white">{CONTACT.email}</span> with the role you’re applying for.
        </p>
      </div>
      <button
        onClick={() => setPage("contact")}
        className="rounded-2xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-6 py-3 text-sm font-semibold"
      >
        Talk to HR
      </button>
    </div>
  </div>
);

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    service: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <div className="mx-auto max-w-6xl py-10 md:py-14">
      <SectionTitle
        kicker="Contact"
        title="Contact Us"
        sub="Get in touch with our team. We’re here to help you find the right IT solutions for your business."
      />

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold">Get In Touch</h3>
          <div className="mt-4 grid gap-4 text-sm">
            <InfoRow icon={Mail} label="Email" value={CONTACT.email} />
            <InfoRow icon={PhoneCall} label="Phone" value={CONTACT.phones.join(" / ")} />
            <InfoRow icon={MapPin} label="Address" value={CONTACT.address} />
            <div className="flex items-start gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/10">
                <Clock size={16} />
              </div>
              <div>
                <div className="text-white/60">Business Hours</div>
                <div className="mt-1 grid gap-1 text-white/85">
                  {CONTACT.hours.map((h) => (
                    <div key={h}>{h}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="mt-6 h-56 rounded-2xl bg-white/10 grid place-items-center text-white/60">
            Add Google Map embed here
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold">Send Us a Message</h3>
          <form
            className="mt-4 grid gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <Input label="Full Name *" value={form.name} onChange={update("name")} required />
            <Input label="Email Address *" type="email" value={form.email} onChange={update("email")} required />
            <Input label="Phone Number" value={form.phone} onChange={update("phone")} />
            <Input label="Company Name" value={form.company} onChange={update("company")} />
            <Input label="Subject *" value={form.subject} onChange={update("subject")} required />
            <Select
              label="Service"
              value={form.service}
              onChange={update("service")}
              options={["IT Infrastructure", "Cybersecurity", "IP Telephony", "IoT Solutions", "Electrical & Power", "Physical Security", "Web & Software"]}
            />
            <Textarea label="Message *" value={form.message} onChange={update("message")} required />

            <button
              type="submit"
              className="mt-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-6 py-3 text-sm font-semibold"
            >
              Send Message
            </button>
            {sent && (
              <div className="text-sm text-emerald-300">
                Message prepared locally. Hook this form to your backend/email service to send.
              </div>
            )}
          </form>
        </div>
      </div>

      <div className="mt-10 text-white/70">
        <h4 className="text-lg font-semibold text-white">Visit Our Office</h4>
        <p className="mt-2">We’d love to meet you—drop by during business hours or schedule a call.</p>
      </div>
    </div>
  );
};

const Footer = ({ setPage, current }) => (
  <footer className="border-t border-white/10 bg-[#050614]">
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-8 grid gap-8 md:grid-cols-4">
      <div className="md:col-span-2">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 font-bold">
            P
          </div>
          <div>
            <div className="font-semibold">Prime IT Solutions (PVT) LTD</div>
            <div className="text-xs text-white/60">
              Leading IT solutions provider delivering innovative technology services to businesses worldwide.
            </div>
          </div>
        </div>
        <p className="mt-3 text-sm text-white/70 max-w-xl">
          {current ? `You’re viewing: ${current.label}.` : ""}
        </p>
      </div>

      <div className="text-sm">
        <div className="font-semibold">Quick Links</div>
        <div className="mt-2 grid gap-1 text-white/70">
          <button onClick={() => setPage("home")} className="text-left hover:text-white">Home</button>
          <button onClick={() => setPage("services")} className="text-left hover:text-white">Services</button>
          <button onClick={() => setPage("clients")} className="text-left hover:text-white">Clients & Partners</button>
          <button onClick={() => setPage("careers")} className="text-left hover:text-white">Careers</button>
        </div>
      </div>

      <div className="text-sm">
        <div className="font-semibold">Contact Us</div>
        <div className="mt-2 grid gap-2 text-white/70">
          <div>{CONTACT.email}</div>
          <div>{CONTACT.phones.join(" / ")}</div>
          <div>{CONTACT.address}</div>
        </div>
      </div>
    </div>

    <div className="px-4 pb-8 text-center text-xs text-white/50">
      © {new Date().getFullYear()} Prime IT Solutions Private Limited. All rights reserved.
    </div>
  </footer>
);

/* ---------- tiny UI bits ---------- */
const Card = ({ children }) => (
  <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
    {children}
  </div>
);

const Metric = ({ label, value }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
    <div className="text-lg font-semibold text-white">{value}</div>
    <div className="text-xs text-white/60">{label}</div>
  </div>
);

const InfoRow = ({ icon: Icon, label, value }) => (
  <div className="flex items-start gap-3">
    <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/10">
      <Icon size={16} />
    </div>
    <div>
      <div className="text-white/60">{label}</div>
      <div className="mt-0.5 text-white/85">{value}</div>
    </div>
  </div>
);

const Input = ({ label, ...props }) => (
  <label className="grid gap-1 text-sm">
    <span className="text-white/70">{label}</span>
    <input
      {...props}
      className="rounded-2xl border border-white/10 bg-[#050714] px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-cyan-400/50"
    />
  </label>
);

const Textarea = ({ label, ...props }) => (
  <label className="grid gap-1 text-sm">
    <span className="text-white/70">{label}</span>
    <textarea
      {...props}
      rows={5}
      className="rounded-2xl border border-white/10 bg-[#050714] px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-cyan-400/50"
    />
  </label>
);

const Select = ({ label, options, ...props }) => (
  <label className="grid gap-1 text-sm">
    <span className="text-white/70">{label}</span>
    <select
      {...props}
      className="rounded-2xl border border-white/10 bg-[#050714] px-4 py-3 text-white outline-none focus:border-cyan-400/50"
    >
      <option value="">Select a service...</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  </label>
);

const OrbitalGraphic = () => (
  <div className="relative h-72 w-72 md:h-80 md:w-80">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
      className="absolute inset-0 rounded-full border border-white/10"
    />
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
      className="absolute inset-8 rounded-full border border-cyan-300/30"
    />
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
      className="absolute inset-16 rounded-full border border-fuchsia-300/30"
    />
    <div className="absolute inset-0 grid place-items-center">
      <div className="rounded-3xl bg-white/10 px-6 py-5 text-center">
        <div className="text-sm text-white/70">Prime Stack</div>
        <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
          {[
            "Infrastructure",
            "Cybersecurity",
            "IoT",
            "Software",
            "Telephony",
            "Power",
          ].map((x) => (
            <div key={x} className="rounded-xl bg-[#050714] px-3 py-2">
              {x}
            </div>
          ))}
        </div>
      </div>
    </div>
    {[
      { top: "6%", left: "50%" },
      { top: "50%", left: "94%" },
      { top: "92%", left: "50%" },
      { top: "50%", left: "6%" },
    ].map((p, i) => (
      <div
        key={i}
        className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.9)]"
        style={p}
      />
    ))}
  </div>
);

export default PrimeSite;
