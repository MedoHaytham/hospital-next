import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import NewsCard from "@/components/NewsCard";
import PhoneLinks from "@/components/PhoneLinks";
import { SERVICES } from "@/lib/site";
import { NEWS } from "@/lib/news";
import { btn, btnGhost, h2, cardGrid } from "@/lib/styles";

export const metadata = { title: "الرئيسية" };

const FACTS = [
  ["٦١", "سريرًا للإقامة"],
  ["٥", "غرف عمليات"],
  ["٨", "أسرّة رعاية مركزة"],
  ["٨", "تخصصات في العيادات"],
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-teal pt-12 text-white md:pt-20">
        <div className="wrap">
          <h1 className="mb-4 max-w-[14em] text-[clamp(2.2rem,6vw,4.2rem)] leading-[1.25] font-bold">
            رعايتكم هي هدفنا
          </h1>
          <p className="mb-8 max-w-[34em] text-[1.2rem] opacity-92">
            عيادات خارجية متعددة التخصصات وغرف عمليات مجهزة ورعاية مركزة، في شارع الهرم بالجيزة.
          </p>
          <div className="flex flex-wrap gap-[0.8rem] pb-4">
            <Link className={btn} href="/clinics">جدول العيادات الخارجية</Link>
            <Link className={btnGhost} href="/services">تعرّف على خدماتنا</Link>
          </div>
          <p className="pb-10">للحجز والاستفسار: <PhoneLinks /></p>
        </div>
        <svg className="block h-20 w-full text-amber" viewBox="0 0 600 80" preserveAspectRatio="none" aria-hidden="true">
          <path
            className="animate-draw [stroke-dasharray:1] [stroke-dashoffset:1] motion-reduce:animate-none motion-reduce:[stroke-dashoffset:0]"
            d="M0 40h180l15-30 25 62 22-48 12 16h346"
            fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" pathLength="1"
          />
        </svg>
      </section>

      <section className="wrap -mt-px grid grid-cols-2 gap-4 border-b border-line py-8 md:grid-cols-4" aria-label="لمحة سريعة">
        {FACTS.map(([num, label]) => (
          <div key={label}>
            <b className="block text-[2rem] leading-[1.2] text-teal">{num}</b>
            <span className="text-muted">{label}</span>
          </div>
        ))}
      </section>

      <section className="wrap py-12">
        <h2 className={h2}>أبرز أخبار المستشفى</h2>
        <div className={cardGrid}>
          {NEWS.slice(0, 3).map((n) => <NewsCard key={n.title} {...n} />)}
        </div>
        <p className="my-[1em]"><Link className="font-bold text-teal" href="/news">كل الأخبار</Link></p>
      </section>

      <section className="wrap pb-12">
        <h2 className={h2}>أبرز خدماتنا</h2>
        <div className={cardGrid}>
          {SERVICES.slice(0, 3).map((s) => <ServiceCard key={s.title} {...s} />)}
        </div>
        <p className="my-[1em]"><Link className="font-bold text-teal" href="/services">كل الخدمات</Link></p>
      </section>
    </>
  );
}
