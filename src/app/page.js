import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Hero
        nama="Farisah Aqilah Azka"
        tagline="Siswa kelas X SMK, calon Junior Web Developer."
      />

      <section className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-3 text-2xl font-bold text-utama">Tentang Saya</h2>
        <p className="leading-7 text-gray-700">
          Saya senang belajar melalui hal-hal yang saya sukai, mulai dari
          teknologi hingga dunia kreatif. Bagi saya, setiap proyek adalah
          kesempatan untuk mencoba, berkembang, dan menciptakan sesuatu yang
          baru.
        </p>
      </section>

      <section className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-2xl font-bold text-utama">Hobi</h2>
          <ul className="list-inside list-disc space-y-2 text-gray-600">
            <li>Menggambar</li>
            <li>Mendengarkan musik</li>
            <li>Membaca</li>
          </ul>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-2xl font-bold text-utama">Cita-cita</h2>
          <p className="leading-7 text-gray-600">
            Menjadi UI/UX Designer dan Web Developer. Langkah yang saya
            rencanakan:
          </p>
          <ul className="mt-3 list-inside list-disc space-y-2 text-gray-600">
            <li>Terus berlatih membuat website</li>
            <li>Mengembangkan kemampuan desain</li>
          </ul>
        </div>
      </section>

      <section className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-utama">Keahlian</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard
              key={skill.nama}
              nama={skill.nama}
              level={skill.level}
            />
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-utama">Jadwal Belajar</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="p-4">Hari</th>
                <th className="p-4">Waktu</th>
                <th className="p-4">Kegiatan</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-100">
                <td className="p-4">Senin</td>
                <td className="p-4">19.00 - 20.00</td>
                <td className="p-4">Membaca ulang modul</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-4">Minggu</td>
                <td className="p-4">10.00 - 15.00</td>
                <td className="p-4">Mengerjakan tugas praktik</td>
              </tr>
              <tr>
                <td className="p-4">Minggu</td>
                <td className="p-4">18.30 - 21.00</td>
                <td className="p-4">Merekam video dan menulis laporan</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}