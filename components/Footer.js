import Link from "next/link";
import PhoneLinks from "@/components/PhoneLinks";
import { CONTACTS, NAV, SITE_NAME } from "@/lib/site";

const title = "mb-2 block font-bold text-white";

export default function Footer() {
  return (
    <footer className="bg-ink pt-10 text-[#d7e5e4]">
      <div className="wrap grid gap-6 md:grid-cols-3 md:gap-8">
        <div>
          <strong className={title}>{SITE_NAME}</strong>
          <p>رعايتكم هي هدفنا.</p>
        </div>
        <div>
          <strong className={title}>روابط</strong>
          {NAV.map((l) => (
            <Link key={l.href} href={l.href} className="block py-[0.1rem] hover:underline">
              {l.label}
            </Link>
          ))}
        </div>
        <div>
          <strong className={title}>تواصل معنا</strong>
          <p>
            الهاتف: <PhoneLinks /><br />
            البريد الإلكتروني: <a href={`mailto:${CONTACTS.email}`} dir="ltr" className="hover:underline">{CONTACTS.email}</a><br />
            العنوان: {CONTACTS.address}<br />
            <a href={CONTACTS.facebook} target="_blank" rel="noopener noreferrer" className="hover:underline">صفحتنا على فيسبوك</a>
          </p>
        </div>
      </div>
      <p className="mt-8 border-t border-white/13 p-4 text-center text-[0.9rem]">
        © {new Date().getFullYear()} {SITE_NAME}. جميع الحقوق محفوظة.
      </p>
    </footer>
  );
}
