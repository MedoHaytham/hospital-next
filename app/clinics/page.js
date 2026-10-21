import Image from "next/image";
import PageHead from "@/components/PageHead";
import ClinicTable from "@/components/ClinicTable";
import PhoneLinks from "@/components/PhoneLinks";
import { SCHEDULE } from "@/lib/clinics";
import { btn, h2 } from "@/lib/styles";

export const metadata = {
  title: "جدول العيادات",
  description: "جدول العيادات الخارجية بمستشفى الجيزة الدولي (التطبيقيين): الأقسام وأسماء الأطباء ومواعيدهم.",
};

export default function Clinics() {
  const { dayLabel, date, rows, image, imageSize } = SCHEDULE;
  return (
    <>
      <PageHead
        title="جدول العيادات الخارجية"
        lead={`عن يوم ${dayLabel} الموافق ${date}`}
      />
      <section className="wrap grid grid-cols-1 items-start gap-8 py-12 md:grid-cols-[minmax(0,1fr)_320px]">
        <div>
          <ClinicTable rows={rows} />
          <p className="mt-4 text-muted">
            للحجز والاستفسار اتصل على: <PhoneLinks />. المواعيد بتتغير من يوم للتاني، فتأكد قبل الحضور.
          </p>
        </div>
        <div>
          <h2 className={h2}>صورة الجدول</h2>
          <Image
            src={image}
            alt={`جدول العيادات الخارجية يوم ${dayLabel} ${date}`}
            width={imageSize.width}
            height={imageSize.height}
            className="h-auto w-full rounded-card border border-line"
          />
          <p className="my-4">
            <a className={btn} href={image} download="جدول-العيادات.jpeg">تحميل الصورة</a>
          </p>
        </div>
      </section>
    </>
  );
}
