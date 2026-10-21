import { CONTACTS } from "@/lib/site";

// أرقام الحجز كروابط اتصال مباشر (tel:)
export default function PhoneLinks() {
  return CONTACTS.phone.map((n, i) => (
    <span key={n}>
      {i > 0 && " - "}
      <a href={`tel:${n}`} dir="ltr" className="hover:underline">{n}</a>
    </span>
  ));
}
