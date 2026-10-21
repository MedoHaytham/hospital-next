import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_NAME } from "@/lib/site";

export const metadata = {
  metadataBase: new URL("https://example.com"), // غيّره لدومين الموقع
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  description: "مستشفى الجيزة الدولي (التطبيقيين) بشارع الهرم: عيادات خارجية متعددة التخصصات وغرف عمليات ورعاية مركزة.",
  openGraph: { locale: "ar_EG", type: "website", siteName: SITE_NAME },
};

export const viewport = { themeColor: "#0E5E5C" };

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth motion-reduce:scroll-auto">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;600;700&display=swap"
        />
      </head>
      <body className="bg-paper font-sans text-[17px] leading-[1.8] text-ink">
        <a
          className="absolute start-4 -top-16 z-10 bg-amber px-4 py-2 focus:top-4"
          href="#main"
        >
          تخطي إلى المحتوى
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
