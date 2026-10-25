import proyek from "@/data/proyek";

export function generateStaticParams() {
  return proyek.map(({ slug }) => ({ slug }));
}

export default function ProjectDetailPage() {
  return (
    <main>
      <h1>Project Details</h1>
      <p>Welcome to my project page.</p>
    </main>
  );
}