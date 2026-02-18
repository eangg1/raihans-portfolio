import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Mail,
  Moon,
  Sun,
  Download,
} from "lucide-react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

  /* ================= DARK MODE (Tailwind v4 way) ================= */
  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  /* ================= DATA ================= */

  const certificates = [
    {
      title: "Google Ads Fundamentals",
      issuer: "Coursera",
      year: "2024",
      image: "/sertifikat/google-ads.jpg",
    },
  ];

  const projects = [
    {
      title: "Static Web Karang Taruna",
      img: "katar.png",
      desc: "Website statis untuk organisasi karang taruna",
      demo: "https://karangtaruna05serdang.vercel.app/",
      github: "https://github.com/eangg1/karangtaruna05serdang",
    },
    {
      title: "Raihan's Showcase",
      img: "showcase.png",
      desc: "Catatan personal tentang tontonan, bacaan, dan lagu yang saya sukai",
      demo: "https://raihans-showcase.vercel.app/",
      github: "https://github.com/eangg1/raihans-showcase",
    },
  ];

  /* ================= UI ================= */

  return (
    <div className="bg-white text-gray-800 dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-300 scroll-smooth">
      {/* ================= NAVBAR ================= */}
        <nav className="fixed top-0 w-full backdrop-blur bg-white/70 dark:bg-zinc-900/70 border-b z-50">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

            {/* LOGO */}
            <h1 className="font-semibold text-lg">Raihan's Portofolio</h1>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex gap-6 text-sm items-center">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#certificates">Sertifikat</a>
              <a href="#projects">Project</a>
            </div>

            {/* RIGHT SIDE (ALWAYS VISIBLE) */}
            <div className="flex items-center gap-3">

              {/* TOGGLE THEME (pisah & selalu tampil) */}
              <button
                onClick={() => setDark(!dark)}
                className="relative w-14 h-8 flex items-center rounded-full transition-all duration-500
                          bg-gray-300 dark:bg-gray-600 hover:scale-105 border border-gray-400 dark:border-gray-700"
              >
                <span
                  className={`absolute left-1 top-1 w-6 h-6 rounded-full flex items-center justify-center
                              bg-white dark:bg-gray-900 shadow-md transform transition-all duration-500
                              ${dark ? "translate-x-6" : "translate-x-0"}`}
                >
                  {dark ? (
                    <Moon className="w-4 h-4 text-gray-100" />
                  ) : (
                    <Sun className="w-4 h-4 text-yellow-400" />
                  )}
                </span>
              </button>

              {/* HAMBURGER */}
              <button
                className="md:hidden p-2 rounded-xl border"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          {/* ================= MOBILE MENU ================= */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: menuOpen ? "auto" : 0,
              opacity: menuOpen ? 1 : 0,
            }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-6 pb-6 pt-3 flex flex-col gap-3 bg-white dark:bg-zinc-900">

              {["home", "about", "certificates", "projects"].map((m) => (
                <a
                  key={m}
                  href={`#${m}`}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-xl border text-sm hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
                >
                  {m}
                </a>
              ))}

            </div>
          </motion.div>
        </nav>
      

      {/* ================= HOME ================= */}
      <Section id="home">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-screen">

          {/* ===== KIRI (TEXT) ===== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Selamat Datang <br /> Di Portofolio Saya
            </h2>

            <p className="opacity-70 leading-relaxed max-w-xl">
              website portofolio ini dibuat untuk memperkenalkan profil diri, latar belakang
              pendidikan, serta pengalaman kerja di bidang operasional, administrasi,
              manajemen inventaris, dan pelayanan pelanggan. saya terbiasa bekerja secara
              teliti, mengelola banyak tugas, serta berkolaborasi dalam tim untuk memastikan
              setiap pekerjaan berjalan efektif dan tepat waktu.
            </p>
          </motion.div>


          {/* ===== KANAN (IMAGE / VECTOR) ===== */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src="public/ilustrasi.png"
              alt="illustration kerja tim dan administrasi"
              className="w-80 md:w-105 drop-shadow-xl 
              transition-all duration-500 ease-out 
              hover:scale-105 hover:rotate-3 hover:-translate-y-2"
            />
          </motion.div>

        </div>
      </Section>

      {/* ================= ABOUT ================= */}
      <Section id="about" gray>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-semibold mb-4">About Me</h3>
            <h4 className="text-5xl font-medium opacity-80 mb-4">Raihan Dwi Saputra</h4>

            <p className="opacity-70 leading-relaxed mb-6">
              Saya adalah lulusan bisnis daring dan pemasaran yang memiliki pengalaman di bidang operasional, 
              administrasi, manajemen inventaris, serta pelayanan pelanggan. Terbiasa bekerja dalam tim, 
              mengelola banyak tugas sekaligus, dan menjaga ketelitian dalam pekerjaan. Memiliki kemampuan kepemimpinan, 
              manajemen waktu, serta mampu beradaptasi di lingkungan kerja yang dinamis. Terbuka untuk peluang kerja, 
              freelance, dan kolaborasi proyek.
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4 flex-wrap">

              {/* download cv */}
              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black text-sm font-medium hover:scale-105 transition"
              >
                <Download size={18} />
                Download CV
              </a>

              {/* kontak */}
             <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=raihands.j@gmail.com&su=Kerja%20Sama%20Project&body=Halo%20Raihan,%20saya%20tertarik%20untuk%20berdiskusi%20mengenai%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl border text-sm font-medium hover:bg-gray-100 hover:scale-105 dark:hover:bg-zinc-800 transition"
            >
              <Mail size={18} />
              Kontak saya
            </a>

          </div>
          </motion.div>


          <motion.img
            src="/Foto.jpeg"
            className="rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
          />
        </div>
      </Section>
    

      {/* ================= CERTIFICATE ================= */}
      <Section id="certificates">
        <h3 className="text-3xl font-semibold text-center mb-12">
          Sertifikat
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((c, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="relative cursor-pointer rounded-2xl overflow-hidden shadow-lg group"
              onClick={() => setSelectedCert(c)}
            >
              {/* IMAGE WRAPPER 4:3 */}
              <div className="aspect-4/3 w-full overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white text-center p-4">
                <h4 className="font-semibold text-lg">{c.title}</h4>
                <p className="text-sm opacity-80">
                  {c.issuer} • {c.year}
                </p>
              </div>
            </motion.div>

          ))}
        </div>

        {/* MODAL */}
        {selectedCert && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-4 max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full rounded-xl"
              />

              <div className="mt-4">
                <h4 className="font-semibold text-lg">
                  {selectedCert.title}
                </h4>
                <p className="text-sm opacity-70">
                  {selectedCert.issuer} • {selectedCert.year}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </Section>



      {/* ================= PROJECT ================= */}
      <Section id="projects" gray>
        <h3 className="text-3xl font-semibold text-center mb-12">Project</h3>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="rounded-2xl border overflow-hidden bg-white dark:bg-zinc-900 shadow-sm hover:shadow-xl transition flex flex-col"
            >
              <img src={p.img} className="h-44 w-full object-cover" />

              <div className="p-4 flex flex-col flex-1">
                <h4 className="font-semibold mb-1">{p.title}</h4>
                <p className="text-sm opacity-70 mb-4 flex-1">{p.desc}</p>

                {/* BUTTONS */}
                <div className="flex gap-2">
                  <a
                    href={p.demo}
                    target="_blank"
                    className="flex-1 text-center px-3 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black text-sm hover:scale-105 transition"
                  >
                    Demo
                  </a>

                  <a
                    href={p.github}
                    target="_blank"
                    className="flex-1 text-center px-3 py-2 rounded-lg border text-sm hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </Section>

      {/* ================= FOOTER ================= */}
      <footer className="py-10 border-t text-center text-sm opacity-60 flex flex-col items-center gap-4">
        <p>© {new Date().getFullYear()} Raihan's Portofolio</p>
      </footer>
    </div>
  );
}

/* ================= REUSABLE ================= */

function Section({ children, id, gray = false }: any) {
  return (
    <section
      id={id}
      className={`py-24 px-6 ${gray ? "bg-gray-50 dark:bg-zinc-900" : ""}`}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}

