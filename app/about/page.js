import Link from "next/link";
import PageHead from "@/components/PageHead";
import { h2, btn } from "@/lib/styles";

export const metadata = {
  title: "عن المستشفى",
  description: "تعرّف على مستشفى الجيزة الدولي (التطبيقيين) وإمكانياتها وتخصصاتها.",
};

export default function About() {
  return (
    <>
      <PageHead title="عن المستشفى" lead="رعايتكم هي هدفنا." />
      <section className="wrap grid gap-6 py-12 md:grid-cols-2 md:gap-12">
        <div>
          <h2 className={h2}>من نحن</h2>
          <p className="my-[1em]">مستشفى الجيزة الدولي (التطبيقيين) في شارع الهرم بالجيزة. نقدّم خدماتنا من خلال عيادات خارجية متعددة التخصصات، وغرف عمليات، ورعاية مركزة للكبار ووحدة لرعاية الأطفال المبتسرين.</p>
        </div>
        <div>
          <h2 className={h2}>إمكانياتنا</h2>
          <p className="my-[1em]">٦١ سريرًا للإقامة، و٥ غرف عمليات مجهزة تُجرى فيها معظم الجراحات، و٨ أسرّة للرعاية المركزة للكبار.</p>
        </div>
      </section>
      <section className="wrap pb-12">
        <p className="my-[1em]">تعرّف على مواعيد الأطباء في جدول العيادات الخارجية.</p>
        <Link className={btn} href="/clinics">جدول العيادات</Link>
      </section>
    </>
  );
}
