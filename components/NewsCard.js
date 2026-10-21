import Link from "next/link";

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("ar-EG", { dateStyle: "long", timeZone: "UTC" });
}

export default function NewsCard({ title, text, date, pinned, href, linkText = "التفاصيل", as: Heading = "h3" }) {
  return (
    <article
      className={`rounded-card border border-s-[5px] border-line bg-white px-[1.4rem] py-[1.3rem] ${
        pinned ? "border-s-amber" : "border-s-teal"
      }`}
    >
      <p className="mb-1 text-[0.9rem] font-semibold text-muted">
        {pinned ? "تنبيه" : <time dateTime={date}>{formatDate(date)}</time>}
      </p>
      <Heading className="mb-[0.3rem] text-[1.17em] font-bold">{title}</Heading>
      <p className="text-muted">{text}</p>
      {href && (
        <p className="mt-2">
          <Link className="font-bold text-teal hover:underline" href={href}>{linkText}</Link>
        </p>
      )}
    </article>
  );
}
