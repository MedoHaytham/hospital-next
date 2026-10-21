import PageHead from "@/components/PageHead";
import ServiceCard from "@/components/ServiceCard";
import { SERVICES } from "@/lib/site";
import { cardGrid } from "@/lib/styles";

export const metadata = {
  title: "الخدمات",
  description: "أقسام وخدمات المستشفى: الطوارئ، الباطنة، الجراحة، العظام، الأطفال، المعامل والأشعة.",
};

export default function Services() {
  return (
    <>
      <PageHead title="الخدمات والأقسام" lead="كل ما تحتاجه من رعاية في مكان واحد." />
      <section className="wrap py-12">
        <div className={cardGrid}>
          {SERVICES.map((s) => <ServiceCard key={s.title} as="h2" {...s} />)}
        </div>
      </section>
    </>
  );
}
