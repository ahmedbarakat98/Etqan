import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ArrowRight,
  Globe2,
  Building2,
  MessageSquare,
  Facebook,
  Youtube,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-10 text-white">
      {/* Background */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.65),rgba(2,6,23,1))]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/10 px-4 py-2 text-sm font-medium text-teal-300">
              <MessageSquare className="h-4 w-4" />
              Contact Us
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Let’s Build Smarter
              <span className="block bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Geospatial Solutions
              </span>
            </h1>

            <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
              Get in touch with Etqan for geoinformatics, GIS platforms, digital
              transformation, spatial intelligence, and enterprise mapping
              solutions.
            </p>
          </div>

          {/* Content */}
          <div className="mt-20 grid gap-8 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="space-y-6 lg:col-span-1">
              <ContactCard
                icon={<Mail className="h-5 w-5" />}
                title="Email"
                value="Kaeeeeem@etqan.com"
                href="mailto:info@etqan.com"
              />

              <ContactCard
                icon={<Phone className="h-5 w-5" />}
                title="Phone"
                value="01126970063"
                href="tel:+0233159243"
              />

              <ContactCard
                icon={<MapPin className="h-5 w-5" />}
                title="Location"
                value="Helwan - Elabtal"
              />

              <ContactCard
                icon={<Facebook className="h-5 w-5" />}
                title="Facebook"
                value="Follow us on Facebook"
                href="https://facebook.com/your-page"
              />

              <ContactCard
                icon={<Youtube className="h-5 w-5" />}
                title="YouTube"
                value="Subscribe on YouTube"
                href="https://youtube.com/@your-channel"
              />

              <ContactCard
                icon={<Clock className="h-5 w-5" />}
                title="Working Hours"
                value="Sat - fri, 6:00 AM - 12:00 PM"
              />
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="rounded-3xl py-4 border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30 backdrop-blur-md sm:p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-white">
                    Send us a message
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Tell us about your project, requirements, or the solution
                    you are looking for.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-300">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-teal-400/60 focus:ring-2 focus:ring-teal-400/20"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-300">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-teal-400/60 focus:ring-2 focus:ring-teal-400/20"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-300">
                        Company
                      </label>
                      <input
                        type="text"
                        placeholder="Company name"
                        className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-teal-400/60 focus:ring-2 focus:ring-teal-400/20"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-300">
                        Service Interest
                      </label>
                      <select className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none transition focus:border-teal-400/60 focus:ring-2 focus:ring-teal-400/20">
                        <option>GIS & Geospatial Solutions</option>
                        <option>Digital Twin Solutions</option>
                        <option>GeoAI & Spatial Intelligence</option>
                        <option>Enterprise GIS Platforms</option>
                        <option>Consultation & Project Management</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      placeholder="Write your message here..."
                      className="w-full h-48.5 resize-none rounded-2xl border border-white/10 bg-slate-900/70 px-4 pt-3 pb-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-teal-400/60 focus:ring-2 focus:ring-teal-400/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-teal-400 to-cyan-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-teal-500/20 transition hover:scale-[1.01] hover:from-teal-300 hover:to-cyan-400 sm:w-auto"
                  >
                    Send Message
                    <Send className="h-4 w-4 transition group-hover:translate-x-1" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Bottom Cards */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <FeatureCard
              icon={<Globe2 className="h-6 w-6" />}
              title="Geospatial Expertise"
              text="GIS, mapping, spatial data, digital twin, and enterprise geospatial platforms."
            />

            <FeatureCard
              icon={<Building2 className="h-6 w-6" />}
              title="Enterprise Solutions"
              text="Scalable solutions designed for government, organizations, and large-scale projects."
            />

            <FeatureCard
              icon={<ArrowRight className="h-6 w-6" />}
              title="Project Consultation"
              text="From requirements analysis to implementation, integration, and delivery support."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactCard({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md transition hover:border-teal-400/30 hover:bg-white/[0.07]">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-teal-400/10 text-teal-300">
        {icon}
      </div>

      <div>
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-slate-400">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}

function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.06]">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
    </div>
  );
}
