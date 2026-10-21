export default function PageHead({ title, lead }) {
  return (
    <section className="bg-mint pt-12 pb-[2.2rem]">
      <div className="wrap">
        <h1 className="text-[clamp(2rem,4.5vw,3rem)] font-bold text-teal">{title}</h1>
        <p className="mt-2 max-w-[34em] text-[1.2rem] text-ink opacity-92">{lead}</p>
      </div>
    </section>
  );
}
