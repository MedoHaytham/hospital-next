// جدول العيادات الخارجية. حدّث هذا الملف كل ما ينزل جدول جديد، وبدّل الصورة في public/assets
export const SCHEDULE = {
  dayLabel: "الاثنين",
  date: "19/10",
  image: "/assets/clinics-schedule.jpeg",
  imageSize: { width: 1024, height: 1536 },
  rows: [
    { dept: "العظام", doctors: [
      { name: "د. رضا ابراهيم", time: "2 ظهرًا" },
      { name: "د. برهام سيد", time: "6 مساءً" },
    ] },
    { dept: "الباطنة والغدد", doctors: [{ name: "د. حنان عبدالحافظ", time: "12 ظهرًا" }] },
    { dept: "الجراحة العامة", doctors: [
      { name: "د. محمد سلطان", time: "1 ظهرًا" },
      { name: "د. علي عبدالقادر", time: "4 مساءً" },
    ] },
    { dept: "الأنف والأذن", doctors: [{ name: "د. فادي سمير", time: "4 مساءً" }] },
    { dept: "النساء", doctors: [{ name: "د. مازن عبدالرؤوف", time: "6 مساءً" }] },
    { dept: "المخ والأعصاب", doctors: [{ name: "د. عبدالواحد عتيق", time: "3 مساءً" }] },
    { dept: "الجلدية والتناسيلية", doctors: [{ name: "د. حازم احمد", time: "2 مساءً" }] },
    { dept: "الأسنان", doctors: [{ name: "د. اميمة صلاح", time: "12 ظهرًا" }] },
  ],
};
