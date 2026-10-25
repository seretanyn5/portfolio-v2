import "./globals.css";

export const metadata = {
  title: "Portofolio Farisah Aqilah Azka",
  description:
    "Portofolio Farisah Aqilah Azka, siswa SMK yang sedang belajar web development dan desain.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}