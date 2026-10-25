import Image from "next/image";

export default function Hero({ nama, tagline }) {
  return (
    <section className="flex flex-col items-center gap-6 rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm md:flex-row md:text-left">
      <Image
        src="/self12.jpg"
        alt={`Foto profil ${nama}`}
        width={140}
        height={140}
        priority
        className="size-[140px] shrink-0 rounded-full border-4 border-aksen object-cover"
      />

      <div>
        <h1 className="text-3xl font-bold text-utama md:text-4xl">
          Halo, saya {nama}!
        </h1>
        <p className="mt-3 text-lg text-gray-700">{tagline}</p>
      </div>
    </section>
  );
}
