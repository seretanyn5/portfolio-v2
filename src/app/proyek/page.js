import Link from "next/link";
import proyek from "@/data/proyek";

export default function ProyekPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-bold text-utama">Proyek</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {proyek.map((item) => (
          <article
            key={item.slug}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-utama">{item.nama}</h2>
            <p className="mt-2 leading-7 text-gray-700">{item.deskripsi}</p>
            <Link
              href={`/proyek/${item.slug}`}
              className="mt-4 inline-block font-semibold text-aksen hover:underline"
            >
              Lihat detail
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}