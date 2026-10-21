export default function ServiceCard({ title, text, as: Heading = "h3" }) {
  return (
    <article className="rounded-card border border-s-[5px] border-line border-s-teal bg-white px-[1.4rem] py-[1.3rem]">
      <Heading className="mb-[0.3rem] text-[1.17em] font-bold">{title}</Heading>
      <p className="text-muted">{text}</p>
    </article>
  );
}
