"use client";

import {
  Download,
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import IdeShell from "@/components/ide/IdeShell";
import { useLocale } from "next-intl";

export default function Resume() {
  const locale = useLocale();
  const isId = locale === "id";

  const copy = {
    downloadPdf: isId ? "Unduh PDF" : "Download PDF",
    role: isId
      ? "Co-Founder & Full-Stack Developer (Fokus Backend)"
      : "Co-Founder & Backend-Focused Full-Stack Developer",
    profileTitle: isId ? "Profil" : "Profile",
    profileText: isId
      ? "Co-founder dan Full-Stack Developer dengan pengalaman membangun sistem produksi untuk instansi pemerintah dan UMKM. Saya terbiasa mengambil kepemilikan dari tahap perencanaan, arsitektur backend, implementasi frontend, hingga deployment. Saat ini saya berfokus memperdalam Go untuk membangun layanan backend yang lebih robust, sambil tetap menghadirkan produk siap pakai dengan Next.js dan TypeScript."
      : "Co-founder and Full-Stack Developer with hands-on experience delivering production systems for government institutions and MSMEs. I take ownership from planning and backend architecture to frontend implementation and deployment. My current focus is deepening Go for robust backend services while continuing to deliver business-ready products with Next.js and TypeScript.",
    experienceTitle: isId ? "Pengalaman" : "Experience",
    projectsTitle: isId ? "Proyek" : "Projects",
    educationTitle: isId ? "Pendidikan" : "Education",
    availableFor: isId ? "Tersedia Untuk" : "Available For",
    fullTimeRoles: isId ? "Peran full-time" : "Full-time roles",
    fullTimeDesc: isId
      ? "Posisi Software Engineer dan Full-Stack berfokus backend"
      : "Software Engineer and Backend-Focused Full-Stack roles",
    freelanceProjects: isId ? "Proyek freelance" : "Freelance projects",
    freelanceDesc: isId
      ? "Pengembangan web full-stack, MVP untuk startup & UMKM"
      : "Full-stack web dev, MVP builds for startups & MSMEs",
    linksTitle: "Links",
    techStackTitle: "Tech Stack",
    toolsTitle: "Tools",
  };

  return (
    <IdeShell>
    <main className="bg-surface-container-low text-on-surface font-sans">
      <style jsx global>{`
        @media print {
          nav,
          header,
          aside,
          footer,
          .no-print {
            display: none !important;
          }
          section {
            page-break-inside: avoid;
          }
          * {
            color: black !important;
            background: white !important;
          }
          .border-l,
          [class*="border-"] {
            border-color: #333 !important;
          }
          .rounded-full {
            background-color: #000 !important;
          }
          * {
            box-shadow: none !important;
            transition: none !important;
          }
          main {
            padding: 0 !important;
          }
          .max-w-5xl {
            max-width: 100% !important;
            margin: 0 !important;
          }
          .ring-4 {
            box-shadow: none !important;
          }
          body {
            margin: 0;
            padding: 20px;
          }
        }
      `}</style>
      <div className="pt-24 pb-12 md:pt-28 md:pb-20 px-4 md:px-8">
        {/* download pdf */}
        <div className="max-w-5xl mx-auto mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <a
            href="/CV.pdf"
            download="Adibayu_Luthfiansyah_Resume.pdf"
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-primary-container text-on-primary-container px-6 py-3 min-h-[44px] hover:bg-secondary-container transition-colors"
          >
            <Download
              size={16}
              className="group-hover:translate-y-0.5 transition-transform"
            />
            {copy.downloadPdf}
          </a>
        </div>

        {/* resume */}
        <div className="max-w-5xl mx-auto bg-surface-container-lowest border border-outline-variant/40 overflow-hidden">
          {/* header */}
          <div className="px-8 md:px-16 py-12 md:py-16 border-b border-outline-variant/40 bg-surface-container transition-colors duration-500">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
              <div>
                <h1 className="text-[9vw] sm:text-5xl md:text-6xl lg:text-7xl font-serif italic text-on-surface transition-colors leading-tight break-words">
                  Adibayu Luthfiansyah Setyawan
                </h1>
                <p className="text-sm font-sans uppercase tracking-[0.3em] text-outline">
                  {copy.role}
                </p>
              </div>

              <div className="flex flex-col gap-3 text-sm text-on-surface-variant font-light w-full">
                <a
                  href="mailto:adibayu@adibayuluthfiansyah.dev"
                  className="flex items-start sm:items-center gap-3 hover:text-secondary transition-colors"
                >
                  <Mail size={16} className="shrink-0 mt-0.5 sm:mt-0" />
                  <span className="break-all sm:break-normal">
                    adibayu@adibayuluthfiansyah.dev
                  </span>
                </a>
                <span className="flex items-start sm:items-center gap-3">
                  <Phone size={16} className="shrink-0 mt-0.5 sm:mt-0" /> +62
                  895 7041 19180
                </span>
                <span className="flex items-start sm:items-center gap-3">
                  <MapPin size={16} className="shrink-0 mt-0.5 sm:mt-0" />{" "}
                  Pontianak, Indonesia
                </span>
              </div>
            </div>
          </div>

          {/* main container */}
          <div className="px-8 md:px-16 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20">
            {/* left col: exp, projects, education */}
            <div className="md:col-span-8 space-y-16">
              {/* profile */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-6 flex items-center gap-4">
                  {copy.profileTitle}
                  <span className="h-[1px] flex-1 bg-outline-variant/40"></span>
                </h2>
                <p className="text-on-surface-variant font-light leading-relaxed text-base md:text-lg max-w-prose">
                  {copy.profileText}
                </p>
              </section>

              {/* experience */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-6 flex items-center gap-4">
                  {copy.experienceTitle}
                  <span className="h-[1px] flex-1 bg-outline-variant/40"></span>
                </h2>

                <div className="space-y-10 md:space-y-14">
                  {/* PT Cangkir Tech */}
                  <div className="relative border-l border-outline-variant ml-2 pl-8 pb-2 transition-all duration-300 hover:pl-10 hover:border-primary-container">
                    <span className="absolute -left-[5px] top-2 w-2 h-2 bg-primary-container ring-4 ring-surface-container-lowest"></span>

                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                      <h3 className="text-xl font-serif italic text-on-surface">
                        Co-Founder & Lead Engineer
                      </h3>
                      <span className="text-xs font-sans text-outline uppercase tracking-widest mt-1 md:mt-0">
                        January 2026 – Present
                      </span>
                    </div>
                    <p className="text-on-surface font-medium text-sm mb-4">
                      PT Cangkir Tech, Pontianak, Indonesia
                    </p>
                    <ul className="list-disc list-outside ml-4 space-y-2 text-on-surface-variant font-light leading-relaxed text-sm md:text-base">
                      <li>
                        {isId
                          ? "Mendirikan PT Cangkir Tech dari nol, mengambil tanggung jawab delivery mulai dari discovery klien, technical scoping, keputusan arsitektur, hingga deployment ke production."
                          : "Co-founded PT Cangkir Tech from the ground up, owning delivery from client discovery and technical scoping to architecture decisions and production deployment."}
                      </li>
                      <li>
                        {isId
                          ? "Mengirimkan sistem production-grade untuk beberapa klien UMKM di Pontianak dengan menerjemahkan kebutuhan bisnis menjadi solusi yang skalabel dan mudah dirawat, dalam tenggat waktu nyata."
                          : "Delivered production-grade systems for multiple MSME clients in Pontianak, turning business requirements into scalable and maintainable solutions under real deadlines."}
                      </li>
                      <li>
                        {isId
                          ? "Menyusun standar engineering dan roadmap teknis yang menyeimbangkan kecepatan delivery, kualitas kode, dan efisiensi biaya untuk tim kecil dengan output tinggi."
                          : "Established engineering standards and technical roadmaps that balanced delivery speed, code quality, and cost-efficiency for a small, high-output team."}
                      </li>
                    </ul>
                  </div>

                  {/* Dinas Sosial */}
                  <div className="relative border-l border-outline-variant ml-2 pl-8 pb-2 transition-all duration-300 hover:pl-10 hover:border-primary-container">
                    <span className="absolute -left-[5px] top-2 w-2 h-2 bg-primary-container ring-4 ring-surface-container-lowest"></span>

                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                      <h3 className="text-xl font-serif italic text-on-surface">
                        Frontend Developer Intern
                      </h3>
                      <span className="text-xs font-sans text-outline uppercase tracking-widest mt-1 md:mt-0">
                        November 2025 – January 2026
                      </span>
                    </div>
                    <p className="text-on-surface font-medium text-sm mb-4">
                      Dinas Sosial Kabupaten Kubu Raya, Pontianak, Indonesia
                    </p>
                    <ul className="list-disc list-outside ml-4 space-y-2 text-on-surface-variant font-light leading-relaxed text-sm md:text-base">
                      <li>
                        {isId
                          ? "Mengganti proses dokumen manual menjadi dashboard berbasis peran untuk instansi sosial pemerintah, sehingga pengelolaan dokumen lebih aman dan mudah ditelusuri."
                          : "Replaced manual document handling with a role-based dashboard for a government social services agency, enabling more secure and traceable document management."}
                      </li>
                      <li>
                        {isId
                          ? "Membangun alur unggah dokumen yang terstruktur dengan pelacakan real-time dan administrasi pengguna untuk meningkatkan manajemen kasus internal yang sebelumnya mengandalkan koordinasi manual."
                          : "Built a structured upload flow with real-time tracking and user administration to improve internal case management that previously relied on manual coordination."}
                      </li>
                      <li>
                        {isId
                          ? "Mengimplementasikan activity logging dan arsitektur protected-route yang selaras dengan kebutuhan audit serta keamanan data tingkat pemerintahan."
                          : "Implemented activity logging and protected-route architecture aligned with government-level audit and data security requirements."}
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* projects */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-6 flex items-center gap-4">
                  {copy.projectsTitle}
                  <span className="h-[1px] flex-1 bg-outline-variant/40"></span>
                </h2>

                <div className="space-y-10 md:space-y-14">
                  {/* E-Commerce */}
                  <div className="relative border-l border-outline-variant ml-2 pl-8 pb-2 transition-all duration-300 hover:pl-10 hover:border-primary-container">
                    <span className="absolute -left-[5px] top-2 w-2 h-2 bg-primary-container ring-4 ring-surface-container-lowest"></span>

                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                      <h3 className="text-xl font-serif italic text-on-surface">
                        Full-Stack E-Commerce Platform
                      </h3>
                      <span className="text-xs font-sans text-outline uppercase tracking-widest mt-1 md:mt-0">
                        {isId ? "Proyek Pribadi" : "Personal Project"}
                      </span>
                    </div>
                    <p className="text-on-surface font-medium text-sm mb-4">
                      Next.js · Go · TypeScript · PostgreSQL · Prisma ·
                      Midtrans
                    </p>
                    <ul className="list-disc list-outside ml-4 space-y-2 text-on-surface-variant font-light leading-relaxed text-sm md:text-base">
                      <li>
                        {isId
                          ? "Merancang dan merilis platform e-commerce multi-vendor dari nol dengan dashboard khusus untuk Admin, Seller, dan Customer agar siap dipakai untuk operasional nyata."
                          : "Designed and shipped a multi-vendor e-commerce platform from scratch with dedicated Admin, Seller, and Customer dashboards for real operations."}
                      </li>
                      <li>
                        {isId
                          ? "Membangun backend type-safe berbasis Go dengan Prisma untuk menjaga integritas data, lalu mengintegrasikan cloud media storage dan Midtrans untuk alur checkout production."
                          : "Built a type-safe backend with Go and Prisma to maintain data integrity, then integrated cloud media storage and Midtrans for a production checkout flow."}
                      </li>
                      <li>
                        {isId
                          ? "Menangani eksekusi full-stack end-to-end: desain skema, kontrak API, implementasi frontend, hingga deployment cloud tanpa dukungan engineer eksternal."
                          : "Owned full-stack execution end to end: schema design, API contracts, frontend implementation, and cloud deployment without external engineering support."}
                      </li>
                    </ul>
                  </div>

                  {/* Invoicing SaaS */}
                  <div className="relative border-l border-outline-variant ml-2 pl-8 pb-2 transition-all duration-300 hover:pl-10 hover:border-primary-container">
                    <span className="absolute -left-[5px] top-2 w-2 h-2 bg-primary-container ring-4 ring-surface-container-lowest"></span>

                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                      <h3 className="text-xl font-serif italic text-on-surface">
                        Automated Invoicing SaaS
                      </h3>
                      <span className="text-xs font-sans text-outline uppercase tracking-widest mt-1 md:mt-0">
                        {isId ? "Proyek Pribadi" : "Personal Project"}
                      </span>
                    </div>
                    <p className="text-on-surface font-medium text-sm mb-4">
                      Next.js · TypeScript · Prisma · PostgreSQL · Midtrans ·
                      Server Actions
                    </p>
                    <ul className="list-disc list-outside ml-4 space-y-2 text-on-surface-variant font-light leading-relaxed text-sm md:text-base">
                      <li>
                        {isId
                          ? "Membangun SaaS invoicing untuk bisnis kecil yang mengotomatisasi pembuatan invoice, pengingat email, dan pelacakan pembayaran dengan scheduled jobs."
                          : "Built an invoicing SaaS for small businesses that automated invoice generation, email reminders, and collection tracking with scheduled jobs."}
                      </li>
                      <li>
                        {isId
                          ? "Mengintegrasikan Midtrans dengan Next.js Server Actions yang aman untuk menghadirkan alur pembayaran production-ready dengan pengamanan autentikasi modern."
                          : "Integrated Midtrans using secure Next.js Server Actions to deliver a production-ready payment flow with modern authentication safeguards."}
                      </li>
                      <li>
                        {isId
                          ? "Merancang produk secara end-to-end, dari skema database dan logika billing hingga dashboard klien, untuk menyelesaikan masalah invoicing nyata bagi pemilik bisnis."
                          : "Designed the product end to end, from database schema and billing logic to the client dashboard, to solve real invoicing pain points for business owners."}
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* education */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-6 flex items-center gap-4">
                  {copy.educationTitle}
                  <span className="h-[1px] flex-1 bg-outline-variant/40"></span>
                </h2>

                <div className="relative border-l border-outline-variant ml-2 pl-8">
                  <span className="absolute -left-[5px] top-2 w-2 h-2 bg-outline ring-4 ring-surface-container-lowest"></span>

                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                    <h3 className="text-xl font-serif italic text-on-surface">
                      Universitas Muhammadiyah Pontianak
                    </h3>
                    <span className="text-xs font-sans text-outline uppercase tracking-widest mt-1 md:mt-0">
                      {isId ? "2022 – Estimasi lulus 2026" : "2022 – Expected 2026"}
                    </span>
                  </div>
                  <p className="text-on-surface-variant font-light text-sm md:text-base">
                    {isId
                      ? "S1 Informatika (Teknik Informatika)"
                      : "Bachelor of Computer Science in Informatics Engineering"}
                  </p>
                  <p className="text-outline font-light text-sm mt-1">
                    GPA: 3.xx / 4.00
                  </p>
                </div>
              </section>
            </div>

            {/* right col */}
            <div className="md:col-span-4 space-y-12">
              {/* availability section */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">
                  {copy.availableFor}
                </h2>
                <div className="flex flex-col gap-3 text-sm font-light text-on-surface-variant">
                  <div className="flex flex-col gap-1">
                    <span className="text-on-surface font-medium text-sm">
                      {copy.fullTimeRoles}
                    </span>
                    <span className="text-xs text-outline leading-relaxed">
                      {copy.fullTimeDesc}
                    </span>
                  </div>
                  <div className="h-[0.5px] bg-surface-container"></div>
                  <div className="flex flex-col gap-1">
                    <span className="text-on-surface font-medium text-sm">
                      {copy.freelanceProjects}
                    </span>
                    <span className="text-xs text-outline leading-relaxed">
                      {copy.freelanceDesc}
                    </span>
                  </div>
                </div>
              </section>

              {/* links */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">
                  {copy.linksTitle}
                </h2>
                <div className="flex flex-col gap-4 text-sm font-light text-on-surface-variant">
                  <a
                    href="https://github.com/Adibayuluthfiansyah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-secondary transition-colors group"
                  >
                    <Github
                      size={18}
                      className="group-hover:text-secondary transition-colors"
                    />
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/adibayuluthfiansyah/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-secondary transition-colors group"
                  >
                    <Linkedin
                      size={18}
                      className="group-hover:text-secondary transition-colors"
                    />
                    LinkedIn
                  </a>
                  <a
                    href="https://instagram.com/adibayuluthfiansyah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-secondary transition-colors group"
                  >
                    <Instagram
                      size={18}
                      className="group-hover:text-secondary transition-colors"
                    />
                    Instagram
                  </a>
                </div>
              </section>

              {/* tech stack */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">
                  {copy.techStackTitle}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Go (Golang)",
                    "TypeScript",
                    "JavaScript",
                    "Next.js",
                    "React",
                    "Node.js",
                    "PostgreSQL",
                    "Prisma",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-surface-container border border-outline-variant/40 text-on-surface-variant text-xs font-sans tracking-wide"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              {/* tools */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">
                  {copy.toolsTitle}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {["Docker", "Nginx", "Git", "Bruno"].map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 bg-surface-container border border-outline-variant/40 text-on-surface-variant text-xs font-sans tracking-wide"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
    </IdeShell>
  );
}
