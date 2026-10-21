# موقع المستشفى (Next.js)

```bash
npm install
npm run dev      # للتطوير: http://localhost:3000
npm run build    # ينتج موقع Static في فولدر out
```

- اسم المستشفى والقائمة والخدمات: `lib/site.js`
- دومين الموقع (SEO): `metadataBase` في `app/layout.js`
- فورم الاتصال واجهة فقط: `components/ContactForm.js`

## التنسيق (Tailwind CSS v4)

- الألوان والخطوط وتوكنز التصميم في `app/globals.css` داخل `@theme`
  (مثلًا `bg-teal` و `text-ink` و `border-line` و `rounded-card`)
- الكلاسات المتكررة (الزرار، العناوين، شبكة الكروت) في `lib/styles.js`
- باقي التنسيق utility classes مباشرة داخل المكونات

## تحديث المحتوى

- جدول العيادات: `lib/clinics.js` + استبدال الصورة في `public/assets/clinics-schedule.jpeg`
- الأخبار: `lib/news.js` (أضف الخبر الجديد في أول المصفوفة)
- أرقام الحجز والإيميل والعنوان ورابط فيسبوك: `CONTACTS` في `lib/site.js`
