"use client";

import { useLocale, useTranslations } from "next-intl";

const career = [
  {
    company: "Blitz Armada",
    period: "Jun 2025 – Jul 2026",
    initials: "BA",
    points: {
      en: [
        "Worked across all features of Layaly El Qahera, a large-scale car and hotel booking platform.",
        "Collaborated within a team on a production codebase, contributing to both new features and fixes.",
      ],
      ar: [
        "اشتغلت على كل مميزات مشروع Layaly El Qahera، منصة كبيرة لحجز السيارات والفنادق.",
        "اشتغلت جوا فريق على كود بروداكشن فعلي، وساهمت في مميزات جديدة وإصلاحات.",
      ],
    },
  },
];

const education = [
  {
    institution: "Ain Shams University",
    period: "Expected 2026",
    initials: "AS",
    detail: {
      en: "Faculty of Arts – Department of Geographic Information Systems (GIS)",
      ar: "كلية الآداب – قسم نظم المعلومات الجغرافية (GIS)",
    },
  },
];

export default function AboutSection() {
  const t = useTranslations("about");
  const locale = useLocale() as "en" | "ar";

  return (
    <section id="about" className="border-b px-5 py-12 theme-border sm:px-8 lg:px-12 lg:py-16">
      <div className="eyebrow theme-accent text-sm font-semibold mb-1">
        {t("eyebrow")}
      </div>
      <h2 className="mb-2 text-2xl font-semibold leading-snug sm:text-3xl">{t("title")}</h2>
      <p className="theme-muted text-sm mb-6">{t("subtitle")}</p>

      <div className="flex flex-col gap-4 max-w-3xl text-[15px] leading-relaxed">
        <p>{t("p1")}</p>
        <p>{t("p2")}</p>
        <p>{t("p3")}</p>
      </div>

      <div className="mt-14">
        <h3 className="text-xl font-semibold mb-1">{t("careerTitle")}</h3>
        <p className="theme-muted text-sm mb-6">{t("careerSubtitle")}</p>

        <div className="flex flex-col gap-4">
          {career.map((job) => (
            <div
              key={job.company}
              className="flex min-w-0 gap-3 rounded-lg border border-s-2 border-s-(--accent-strong) p-4 text-(--text-main) transition-colors theme-border theme-surface sm:gap-4 sm:p-5"
            >
              <div className="w-11 h-11 shrink-0 rounded-lg bg-(--page-bg) theme-border border flex items-center justify-center text-sm font-semibold">
                {job.initials}
              </div>
              <div className="min-w-0">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <h4 className="font-semibold">{job.company}</h4>
                  <span className="theme-muted text-xs">{job.period}</span>
                </div>
                <ul className="theme-muted mt-2 list-disc space-y-1 ps-5 text-sm marker:text-(--accent-strong)">
                  {job.points[locale].map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <h3 className="text-xl font-semibold mb-1">{t("educationTitle")}</h3>
        <p className="theme-muted text-sm mb-6">{t("educationSubtitle")}</p>

        <div className="flex flex-col gap-4">
          {education.map((edu) => (
            <div
              key={edu.institution}
              className="flex min-w-0 gap-3 rounded-lg border border-s-2 border-s-(--accent-strong) p-4 text-(--text-main) transition-colors theme-border theme-surface sm:gap-4 sm:p-5"
            >
              <div className="w-11 h-11 shrink-0 rounded-lg bg-(--page-bg) theme-border border flex items-center justify-center text-sm font-semibold">
                {edu.initials}
              </div>
              <div className="min-w-0">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <h4 className="font-semibold">{edu.institution}</h4>
                  <span className="theme-muted text-xs">{edu.period}</span>
                </div>
                <p className="theme-muted mt-2 text-sm">{edu.detail[locale]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
