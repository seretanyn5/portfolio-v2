import { notFound } from "next/navigation";
import proyek from "@/data/proyek";

export function generateStaticParams() {
  return proyek.map(({ slug }) => ({ slug }));
}

export default async function DetailProyekPage({ params }) {
  const { slug } = await params;
  const item = proyek.find((proyekItem) => proyekItem.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h1 className="mb-3 text-3xl font-bold text-utama">{item.nama}</h1>
        <p className="leading-7 text-gray-700">{item.deskripsi}</p>
      </section>
    </main>
  );
}