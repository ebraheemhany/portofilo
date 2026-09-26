"use client";

import { useLocale } from "next-intl";
import {
  SiNextdotjs,
  SiTypescript,
  SiGooglegemini,
  SiReact,
  SiSocketdotio,
  SiPostgresql,
  SiChartdotjs,
  SiTailwindcss,
  SiReactquery,
  SiExpress,
  SiJsonwebtokens,
  SiCloudinary,
  SiStripe,
} from "react-icons/si";
import type { IconType } from "react-icons";

type Project = {
  title: string;
  description: { en: string; ar: string };
  image: string;
  link: string | null;
  icons: IconType[];
};

const projects: Project[] = [
  {
    title: "Masar",
    description: {
      en: "An AI-guided routing app — the agent plots and displays routes directly on the map as you ask for them.",
      ar: "تطبيق توجيه مدعوم بالذكاء الاصطناعي — الوكيل بيرسم المسارات على الخريطة لحظيًا مع كل طلب.",
    },
    image: "/masar_image.png",
    link: "https://masar-olive.vercel.app/en",
    icons: [SiNextdotjs, SiTypescript, SiReact, SiTailwindcss, SiGooglegemini],
  },
  {
    title: "Yalla Book",
    description: {
      en: "A full-stack social platform with real-time chat and a custom Node.js/PostgreSQL backend.",
      ar: "منصة اجتماعية متكاملة بشات لحظي وباك إند مخصص بـ Node.js وPostgreSQL.",
    },
    image: "/yalla_image.png",
    link: "https://social-app-8jsk.vercel.app/",
    icons: [
      SiReact,
      SiNextdotjs,
      SiTypescript,
      SiTailwindcss,
      SiReactquery,
      SiSocketdotio,
      SiExpress,
      SiPostgresql,
      SiJsonwebtokens,
      SiCloudinary,
    ],
  },
  {
    title: "Solar GIS Dashboard",
    description: {
      en: "A graduation project visualizing satellite-based solar data through interactive charts.",
      ar: "مشروع تخرّج بيعرض بيانات طاقة شمسية من أقمار صناعية في شكل رسوم بيانية تفاعلية.",
    },
    image: "/dash_image.png",
    link: "https://solar-two-lovat.vercel.app/",
    icons: [SiReact, SiTypescript, SiChartdotjs, SiTailwindcss],
  },
  {
    title: "Hospital Management Site",
    description: {
      en: "A complete system for managing a clinic's day-to-day operations.",
      ar: "نظام متكامل لإدارة العمليات اليومية لعيادة طبية.",
    },
    image: "/hospitall_image.png",
    link: "https://hospitall-eo6m.vercel.app/",
    icons: [SiReact, SiTypescript, SiTailwindcss],
  },
  {
    title: "Smart Devices Store",
    description: {
      en: "An e-commerce platform for smart devices and mobiles, with a full cart and checkout flow integrating Stripe and Paymob.",
      ar: "منصة تجارة إلكترونية للأجهزة الذكية والموبايلات، بعربة تسوق ونظام دفع متكامل عن طريق Stripe وPaymob.",
    },
    image: "/reda_image.png",
    link: "https://reda-e-commerce.vercel.app/",
    icons: [SiNextdotjs, SiTypescript, SiTailwindcss, SiStripe],
  },
];

export default function ProjectsSection() {
  const locale = useLocale() as "en" | "ar";

  return (
    <section
      id="projects"
      className="border-b px-5 py-12 theme-border sm:px-8 lg:px-12 lg:py-16"
    >
      <h2 className="text-2xl font-semibold mb-2">Projects</h2>
      <p className="theme-muted text-sm mb-8">
        {locale === "ar"
          ? "شوية مشاريع اشتغلت عليها"
          : "A few things I've built"}
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
        {projects.map((project) => {
          const Card = (
            <div className="group relative rounded-2xl border theme-border theme-surface overflow-hidden transition-colors hover:border-(--accent-strong)">
              <div
                className="h-48 w-full bg-(--surface-hover) bg-no-repeat bg-top sm:h-56
                           group-hover:bg-bottom
                           transition-[background-position] duration-[4000ms] ease-in-out"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: "100% auto",
                }}
              />
              <div className="absolute top-3 end-3 flex items-center gap-1 rounded-full bg-(--surface) backdrop-blur px-2.5 py-1 text-[11px] theme-muted opacity-0 group-hover:opacity-100 transition-opacity">
                {project.link
                  ? locale === "ar"
                    ? "معاينة حية"
                    : "Live preview"
                  : locale === "ar"
                    ? "قريبًا"
                    : "Coming soon"}
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="mb-2 break-words text-lg font-semibold">
                  {project.title}
                </h3>
                <p className="mb-4 break-words text-sm theme-muted">
                  {project.description[locale]}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.icons.map((Icon, i) => (
                    <span
                      key={i}
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border bg-(--page-bg) text-(--text-main) theme-border"
                    >
                      <Icon size={14} />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );

          return project.link ? (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener"
            >
              {Card}
            </a>
          ) : (
            <div key={project.title}>{Card}</div>
          );
        })}
      </div>
    </section>
  );
}
