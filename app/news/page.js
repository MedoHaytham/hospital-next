import PageHead from "@/components/PageHead";
import NewsCard from "@/components/NewsCard";
import { NEWS } from "@/lib/news";
import { CONTACTS } from "@/lib/site";
import { cardGrid, btn } from "@/lib/styles";

export const metadata = {
  title: "الأخبار",
  description: "آخر أخبار وإعلانات مستشفى الجيزة الدولي (التطبيقيين).",
};

export default function News() {
  return (
    <>
      <PageHead title="أخبار المستشفى" lead="آخر الإعلانات والمستجدات من المستشفى." />
      <section className="wrap py-12">
        <div className={cardGrid}>
          {NEWS.map((n) => <NewsCard key={n.title} as="h2" {...n} />)}
        </div>
        <p className="my-8">
          <a className={btn} href={CONTACTS.facebook} target="_blank" rel="noopener noreferrer">
            تابع صفحتنا على فيسبوك
          </a>
        </p>
      </section>
    </>
  );
}
