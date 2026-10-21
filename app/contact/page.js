import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import PageHead from "@/components/PageHead";
import PhoneLinks from "@/components/PhoneLinks";
import { h2 } from "@/lib/styles";
import { CONTACTS } from "@/lib/site";

export const metadata = {
  title: "اتصل بنا",
  description: "تواصل مع المستشفى للاستفسار أو حجز موعد.",
};

const p = "mb-4";
const link = "font-bold text-teal hover:underline";

export default function Contact() {
  return (
    <>
      <PageHead title="اتصل بنا" lead="للحجز والاستفسار اتصل بنا أو اكتب لنا وسنرد عليك في أقرب وقت." />
      <section className="wrap grid gap-6 py-12 md:grid-cols-2 md:gap-12">
        <ContactForm />
        <aside className="self-start rounded-card bg-mint p-6">
          <h2 className={h2}>بيانات التواصل</h2>
          <p className={p}><b>العنوان</b><br />{CONTACTS.address}</p>
          <p className={p}><b>الهاتف (الحجز والاستفسار)</b><br /><PhoneLinks /></p>
          <p className={p}>
            <b>البريد الإلكتروني</b><br />
            <a href={`mailto:${CONTACTS.email}`} dir="ltr" className="hover:underline">{CONTACTS.email}</a>
          </p>
          <p className={p}>
            <b>مواعيد العيادات</b><br />
            تختلف من يوم لآخر، <Link className={link} href="/clinics">شوف جدول العيادات</Link>
          </p>
          <p className={p}>
            <a className={link} href={CONTACTS.facebook} target="_blank" rel="noopener noreferrer">
              صفحتنا على فيسبوك
            </a>
          </p>
        </aside>
      </section>
    </>
  );
}
