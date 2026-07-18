import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin, Wheat, Sprout, Flame, Beef, CheckCircle2, Award, Cog, Truck } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const base = import.meta.env.BASE_URL || "/";
const prefix = base.endsWith("/") ? base.slice(0, -1) : base;

const LOGO = `${prefix}/assets/logo.jpg`;
const HERO = `${prefix}/assets/hero-drone.jpg`;
const MILL_WIDE = `${prefix}/assets/mill-wide.jpg`;
const MILL_FRONT = `${prefix}/assets/mill-front.jpg`;
const MILL_SIDE = `${prefix}/assets/mill-side.jpg`;
const MILL_GATE = `${prefix}/assets/mill-gate.jpg`;

const PRIMARY_PHONE = "919908717008";
const PHONES = [
  { label: "88970 17953", tel: "918897017953" },
  { label: "99087 17008", tel: "919908717008" },
  { label: "82475 75306", tel: "918247575306" },
  { label: "79951 54690 (Owner)", tel: "917995154690" },
];

const WA_LINK = `https://wa.me/${PRIMARY_PHONE}?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20your%20products.`;

const categories = [
  {
    icon: Wheat,
    en: "Rice",
    te: "బియ్యము",
    note: "Modern Rice Mill — custom milling (dampakam) available at mill rate",
    items: [
      { en: "Raw Rice / Pathu Biyyam", te: "పాత బియ్యము" },
      { en: "Single Polish Rice", te: "సింగిల్ పాలిష్ బియ్యము" },
      { en: "Ara Nooka — broken rice", te: "అర నూక" },
      { en: "Sanna Nooka — fine broken rice", te: "సన్న నూక" },
    ],
  },
  {
    icon: Sprout,
    en: "Pulses / Dals",
    te: "పప్పులు",
    note: "Quality pulses at wholesale rates",
    items: [
      { en: "Kandi Pappu (Toor Dal)", te: "కంది పప్పు" },
      { en: "Mina Pappu (Urad Dal)", te: "మినప పప్పు" },
      { en: "Chenaga Pappu (Bengal Gram)", te: "చెనగ పప్పు" },
      { en: "Pesalu Pappu (Moong Dal)", te: "పెసల పప్పు" },
      { en: "Senagalu (Chickpeas)", te: "సెనగలు" },
      { en: "Veru Senaga Pappu (Groundnut)", te: "వేరు శెనగ పప్పు" },
    ],
  },
  {
    icon: Flame,
    en: "Spice Powders",
    te: "పొడులు",
    note: "Made from quality raw material, wholesale rates",
    items: [
      { en: "Mirapa Podi (Chilli Powder)", te: "మిరపపొడి" },
      { en: "Pasupu Podi (Turmeric Powder)", te: "పసుపుపొడి" },
      { en: "Daniyala Podi (Coriander Powder)", te: "దనియాల పొడి" },
    ],
  },
  {
    icon: Beef,
    en: "Cattle Feed",
    te: "పశువుల మేత",
    note: "At mill rates",
    items: [
      { en: "Tavudu (Rice Bran)", te: "తవుడు" },
      { en: "Taraku Tavudu", te: "తరకు తవుడు" },
      { en: "Chiru Nooka", te: "చిరు నూక" },
      { en: "Minapenttu", te: "మినపొట్టు" },
    ],
  },
];

const features = [
  { icon: CheckCircle2, en: "Wholesale / Mill Rates", te: "మిల్లు ధరలకే" },
  { icon: Cog, en: "Modern Rice Milling", te: "ఆధునిక మిల్లింగ్" },
  { icon: Award, en: "GST Registered", te: "GST రిజిస్టర్డ్" },
  { icon: Truck, en: "Custom Paddy Milling", te: "కస్టమ్ మిల్లింగ్" },
];

const galleryImages = [
  { src: HERO, alt: "Aerial drone view of Sri Bhupatheswara Rice Mill" },
  { src: MILL_WIDE, alt: "Front view of the rice mill in Yakasiri" },
  { src: MILL_SIDE, alt: "Side view of the mill with paddy fields" },
  { src: MILL_FRONT, alt: "Rice mill building close-up" },
  { src: MILL_GATE, alt: "Entrance gate and signboard" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <a href="#home" className="flex items-center gap-2 min-w-0">
            <img src={LOGO} alt="Sri Bhupatheswara Rice Mill logo" className="h-11 w-11 shrink-0 rounded-full object-contain bg-white ring-1 ring-border" />
            <div className="min-w-0">
              <div className="truncate text-sm font-bold leading-tight">Sri Bhupatheswara</div>
              <div className="truncate text-[11px] text-muted-foreground">Rice Mill & Agro Products</div>
            </div>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a href="#home" className="hover:text-primary">Home</a>
            <a href="#about" className="hover:text-primary">About</a>
            <a href="#products" className="hover:text-primary">Products</a>
            <a href="#gallery" className="hover:text-primary">Gallery</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
          </nav>
          <a
            href={`tel:+${PRIMARY_PHONE}`}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow hover:opacity-95"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div
          className="relative min-h-[86vh] w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(20,40,25,0.78)] via-[rgba(30,20,10,0.55)] to-[rgba(181,52,42,0.55)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_85%,rgba(245,239,230,0.18),transparent_60%)]" />
          <div className="relative mx-auto flex min-h-[86vh] max-w-6xl flex-col justify-center px-4 py-20 text-white">
            <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[color:var(--brand-green)]" />
              Yakasiri • Chittamur Mandal • Tirupati Dt.
            </span>
            <div className="flex items-center gap-4">
              <img src={LOGO} alt="" className="hidden h-20 w-20 rounded-full bg-white/95 p-2 shadow-2xl ring-2 ring-white/40 sm:block" />
              <h1 className="font-display text-4xl font-black leading-[1.05] sm:text-6xl md:text-7xl">
                <span className="block font-telugu text-3xl font-bold sm:text-5xl md:text-6xl">
                  శ్రీ భూపతేశ్వర రైస్ మిల్
                </span>
                <span className="mt-2 block">Sri Bhupatheswara Rice Mill</span>
                <span className="mt-1 block text-2xl font-semibold text-[color:var(--brand-cream)] sm:text-3xl md:text-4xl">
                  & Agro Products
                </span>
              </h1>
            </div>
            <p className="mt-6 max-w-2xl text-base text-white/90 sm:text-lg">
              Wholesale Rice, Dals, Spice Powders & Cattle Feed — sold at mill rates.
              <span className="mt-2 block font-telugu text-[color:var(--brand-cream)]">
                మా మిల్లు ధరలకే నాణ్యమైన ఉత్పత్తులు.
              </span>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:+${PRIMARY_PHONE}`}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold shadow-lg hover:opacity-95"
              >
                <Phone className="h-5 w-5" /> Call Now
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-green)] px-6 py-3 text-base font-semibold text-white shadow-lg hover:opacity-95"
              >
                <MessageCircle className="h-5 w-5" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">About Us</p>
            <h2 className="mt-2 font-display text-3xl font-black sm:text-4xl">
              A modern mill, rooted in Yakasiri.
            </h2>
            <p className="mt-2 font-telugu text-lg text-secondary">
              గ్రామీణ ఆంధ్రలో నమ్మకమైన కుటుంబ వ్యాపారం.
            </p>
            <p className="mt-6 text-base leading-relaxed text-foreground/85">
              Sri Bhupatheswara Rice Mill & Agro Products is a modern rice mill located at
              Yakasiri village, Chittamur Mandal, Tirupati Dt. We serve surrounding villages
              with quality rice, pulses, spice powders and cattle feed at wholesale / mill
              rates. Custom paddy milling (dampakam / ఇయ్యము) is also available at mill rate.
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl border border-border bg-card p-4">
                <dt className="text-muted-foreground">Owner</dt>
                <dd className="mt-1 font-semibold">Kaku Prabhakar Reddy</dd>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <dt className="text-muted-foreground">GST</dt>
                <dd className="mt-1 font-semibold">37ANNPK1937C1Z0</dd>
              </div>
            </dl>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border shadow-xl">
              <img src={MILL_WIDE} alt="Sri Bhupatheswara Rice Mill building" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 hidden rounded-2xl bg-primary px-5 py-3 text-primary-foreground shadow-xl md:block">
              <div className="text-xs opacity-80">Est. Modern Mill</div>
              <div className="font-display text-2xl font-black">Yakasiri</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="bg-muted/60 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our Products</p>
            <h2 className="mt-2 font-display text-3xl font-black sm:text-4xl">
              Everything at mill rates.
            </h2>
            <p className="mt-2 font-telugu text-lg text-secondary">మా ఉత్పత్తులు</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <article
                  key={cat.en}
                  className="group relative flex flex-col rounded-3xl border border-border bg-card p-6 shadow-sm transition hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display text-2xl font-bold">{cat.en}</h3>
                      <p className="font-telugu text-lg text-secondary">{cat.te}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">{cat.note}</p>
                  <ul className="mt-4 space-y-2">
                    {cat.items.map((it) => (
                      <li key={it.en} className="flex items-start gap-2 border-b border-dashed border-border/70 pb-2 last:border-0">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <div className="min-w-0 flex-1">
                          <div className="text-sm font-medium">{it.en}</div>
                          <div className="font-telugu text-sm text-muted-foreground">{it.te}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`${WA_LINK.split("?")[0]}?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20${encodeURIComponent(cat.en)}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--brand-green)] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-95"
                  >
                    <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Why Choose Us</p>
          <h2 className="mt-2 font-display text-3xl font-black sm:text-4xl">Trusted by local farmers & traders.</h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.en} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <Icon className="h-8 w-8 text-primary" />
                <div className="mt-4 font-display text-lg font-bold">{f.en}</div>
                <div className="font-telugu text-sm text-secondary">{f.te}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="bg-muted/60 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Gallery</p>
          <h2 className="mt-2 font-display text-3xl font-black sm:text-4xl">A look at the mill.</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl border border-border shadow-sm ${i === 0 ? "sm:col-span-2 lg:col-span-2 aspect-[16/9]" : "aspect-[4/3]"}`}
              >
                <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover transition hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Contact</p>
            <h2 className="mt-2 font-display text-3xl font-black sm:text-4xl">Visit or call us.</h2>
            <p className="mt-2 font-telugu text-lg text-secondary">మమ్మల్ని సంప్రదించండి</p>

            <div className="mt-6 space-y-4">
              <div className="flex gap-3 rounded-2xl border border-border bg-card p-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div className="text-sm">
                  <div className="font-semibold">Sri Bhupatheswara Rice Mill & Agro Products</div>
                  <div className="mt-1 text-muted-foreground">
                    Sy. No. 342-11, Yakasiri (V), Chittamur Mandal,<br />
                    Tirupati Dt. – 524126, Andhra Pradesh, India
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">GST: 37ANNPK1937C1Z0</div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-4">
                <div className="text-sm font-semibold">Phone Numbers</div>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {PHONES.map((p) => (
                    <li key={p.tel}>
                      <a
                        href={`tel:+${p.tel}`}
                        className="flex items-center gap-2 rounded-xl bg-primary/10 px-3 py-2.5 text-sm font-semibold text-primary hover:bg-primary/15"
                      >
                        <Phone className="h-4 w-4" /> {p.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-[4/3] overflow-hidden rounded-xl border border-border">
                  <img src={MILL_GATE} alt="Mill entrance gate with signboards" loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-xl border border-border">
                  <img src={MILL_FRONT} alt="Mill building front" loading="lazy" className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border shadow-xl">
              <iframe
                title="Location map"
                src="https://www.google.com/maps?q=Yakasiri+Chittamur+Tirupati&output=embed"
                className="h-full w-full"
                loading="lazy"
              />
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const name = fd.get("name");
                const phone = fd.get("phone");
                const msg = fd.get("message");
                const text = `Hello, I'm ${name} (${phone}).%0A${msg}`;
                window.open(`https://wa.me/${PRIMARY_PHONE}?text=${text}`, "_blank");
              }}
              className="rounded-3xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="font-display text-lg font-bold">Send a quick enquiry</div>
              <p className="mt-1 text-sm text-muted-foreground">Submits via WhatsApp — no account needed.</p>
              <div className="mt-4 grid gap-3">
                <input name="name" required placeholder="Your name" className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring" />
                <input name="phone" required type="tel" placeholder="Phone number" className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring" />
                <textarea name="message" required rows={3} placeholder="What are you looking for?" className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring" />
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-95">
                  <MessageCircle className="h-4 w-4" /> Send via WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-[color:var(--brand-cream)]">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <img src={LOGO} alt="Sri Bhupatheswara logo" className="h-11 w-11 rounded-full bg-white object-contain ring-1 ring-border" />
              <div>
                <div className="text-sm font-bold">Sri Bhupatheswara</div>
                <div className="text-[11px] text-muted-foreground">Rice Mill & Agro Products</div>
              </div>
            </div>
            <p className="mt-3 font-telugu text-sm text-secondary">శ్రీ భూపతేశ్వర రైస్ మిల్ & ఆగ్రో ప్రొడక్ట్స్</p>
            <p className="mt-2 text-xs text-muted-foreground">GST: 37ANNPK1937C1Z0</p>
          </div>
          <div className="text-sm">
            <div className="font-semibold">Address</div>
            <p className="mt-2 text-muted-foreground">
              Sy. No. 342-11, Yakasiri (V), Chittamur Mandal, Tirupati Dt. – 524126, Andhra Pradesh, India
            </p>
          </div>
          <div className="text-sm">
            <div className="font-semibold">Call Us</div>
            <ul className="mt-2 space-y-1">
              {PHONES.map((p) => (
                <li key={p.tel}>
                  <a href={`tel:+${p.tel}`} className="text-muted-foreground hover:text-primary">
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-border/70 px-4 py-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Sri Bhupatheswara Rice Mill & Agro Products. All rights reserved.
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[color:var(--brand-green)] text-white shadow-2xl transition hover:scale-105"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
