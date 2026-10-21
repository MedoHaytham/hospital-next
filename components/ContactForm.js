"use client";

import { useState, useRef } from "react";
import { btn } from "@/lib/styles";
import emailjs from "@emailjs/browser";

const field = (err) =>
  `w-full rounded-[10px] border-[1.5px] bg-white px-[0.9rem] py-[0.7rem] transition-colors ${
    err ? "border-danger focus:border-danger" : "border-line focus:border-teal"
  }`;

export default function ContactForm() {
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // "ok" | "bad" | null
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_zwx7br5";
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_73u2re9";
  const publicKey =
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ||
    process.env.NEXT_PUBLIC_PUBLIC_KEY ||
    "QTeE5sS-xH58YlJR9";

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData);
    const errs = {};

    if (!data.name?.trim()) errs.name = true;
    if (!data.email?.trim() || !/^\S+@\S+\.\S+$/.test(data.email)) errs.email = true;
    if (!data.message?.trim()) errs.message = true;

    setErrors(errs);

    if (Object.keys(errs).length > 0) {
      setStatus("bad");
      return;
    }

    setIsLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
      setStatus("ok");
      setErrors({});
      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("bad");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="grid gap-4" noValidate>
      <label className="grid gap-[0.3rem] font-semibold">
        الاسم
        <input
          name="name"
          type="text"
          autoComplete="name"
          disabled={isLoading}
          className={field(errors.name)}
        />
        {errors.name && <span className="text-sm font-normal text-danger">يرجى كتابة الاسم</span>}
      </label>

      <label className="grid gap-[0.3rem] font-semibold">
        البريد الإلكتروني
        <input
          name="email"
          type="email"
          dir="ltr"
          autoComplete="email"
          disabled={isLoading}
          className={field(errors.email)}
        />
        {errors.email && (
          <span className="text-sm font-normal text-danger">يرجى إدخال بريد إلكتروني صحيح</span>
        )}
      </label>

      <label className="grid gap-[0.3rem] font-semibold">
        رسالتك
        <textarea
          name="message"
          rows={5}
          disabled={isLoading}
          className={field(errors.message)}
        />
        {errors.message && <span className="text-sm font-normal text-danger">يرجى كتابة الرسالة</span>}
      </label>

      <button
        className={`${btn} disabled:cursor-not-allowed disabled:opacity-60`}
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "جاري الإرسال..." : "إرسال الرسالة"}
      </button>

      <p
        id="status"
        role="status"
        aria-live="polite"
        className={`font-semibold ${status === "ok" ? "text-teal" : ""} ${status === "bad" ? "text-danger" : ""}`}
      >
        {status === "ok" && "تم إرسال رسالتك بنجاح. شكرًا لتواصلك معنا وسنرد عليك في أقرب وقت."}
        {status === "bad" &&
          Object.keys(errors).length > 0 &&
          "من فضلك أكمل الحقول المطلوبة وتأكد من صحة البريد الإلكتروني."}
        {status === "bad" &&
          Object.keys(errors).length === 0 &&
          "حدث خطأ أثناء الإرسال، يرجى التحقق من مفاتيح EmailJS أو الاتصال بالإنترنت والمحاولة مجددًا."}
      </p>
    </form>
  );
}
