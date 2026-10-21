// كلاسات Tailwind المتكررة في أكتر من مكان (الزرار، العناوين، شبكة الكروت)

const btnBase =
  "inline-block cursor-pointer rounded-full px-[1.6rem] py-3 font-bold no-underline hover:brightness-[1.07]";

export const btn = `${btnBase} border-0 bg-amber text-ink`;
export const btnGhost = `${btnBase} border-2 border-white/55 bg-transparent text-white`;

export const h2 = "mb-4 text-[1.6rem] font-bold text-teal";

export const cardGrid =
  "grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[1.2rem]";
