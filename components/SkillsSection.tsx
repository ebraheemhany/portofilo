"use client";

import { useTranslations } from "next-intl";
import type { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiSocketdotio,
  SiReactquery,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiStyledcomponents,
  SiJsonwebtokens,
  SiGoogle,
  SiCloudinary,
  SiFirebase,
  SiReacthookform,
  SiZod,
  SiAxios,
  SiGit,
  SiGithub,
  SiVercel,
  SiRailway,
  SiPostman,
} from "react-icons/si";
import { FiCode, FiLock, FiDatabase } from "react-icons/fi";

type Item = { name: string; icon: IconType };

type Category = {
  key: string;
  span: "sm" | "md" | "lg";
  accent: string;
  items: Item[];
};

const categories: Category[] = [
  {
    key: "frontend",
    span: "lg",
    accent: "bg-amber-400",
    items: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
    ],
  },
  {
    key: "backend",
    span: "md",
    accent: "bg-teal-400",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "REST APIs", icon: FiCode },
    ],
  },
  {
    key: "realtime",
    span: "md",
    accent: "bg-amber-400",
    items: [
      { name: "Socket.io", icon: SiSocketdotio },
      { name: "TanStack Query", icon: SiReactquery },
      { name: "Redux", icon: SiRedux },
      { name: "Context API", icon: FiCode },
    ],
  },
  {
    key: "styling",
    span: "sm",
    accent: "bg-teal-400",
    items: [
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Material UI", icon: SiMui },
      { name: "Styled Components", icon: SiStyledcomponents },
    ],
  },
  {
    key: "auth",
    span: "sm",
    accent: "bg-amber-400",
    items: [
      { name: "JWT", icon: SiJsonwebtokens },
      { name: "Refresh Tokens", icon: FiLock },
      { name: "Google OAuth", icon: SiGoogle },
      { name: "bcrypt", icon: FiLock },
    ],
  },
  {
    key: "libraries",
    span: "md",
    accent: "bg-teal-400",
    items: [
      { name: "Cloudinary", icon: SiCloudinary },
      { name: "Firebase", icon: SiFirebase },
      { name: "React Hook Form", icon: SiReacthookform },
      { name: "Zod", icon: SiZod },
      { name: "Axios", icon: SiAxios },
    ],
  },
  {
    key: "tools",
    span: "lg",
    accent: "bg-amber-400",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Vercel", icon: SiVercel },
      { name: "Railway", icon: SiRailway },
      { name: "Postman", icon: SiPostman },
      { name: "pgAdmin", icon: FiDatabase },
    ],
  },
];

const spanClass: Record<Category["span"], string> = {
  sm: "sm:col-span-1 lg:col-span-2",
  md: "sm:col-span-2 lg:col-span-3",
  lg: "sm:col-span-2 lg:col-span-4",
};

export default function SkillsSection() {
  const t = useTranslations("skills");

  return (
    <section
      id="skills"
      className="border-b px-5 py-12 theme-border sm:px-8 lg:px-12 lg:py-16"
    >
      <div className="text-(--accent-strong) text-sm font-semibold mb-1">
        {t("eyebrow")}
      </div>
      <h2 className="text-2xl font-semibold mb-2">{t("title")}</h2>
      <p className="theme-muted text-sm mb-8">{t("subtitle")}</p>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-8">
        {categories.map((category) => (
          <div
            key={category.key}
            className={`group relative overflow-hidden rounded-2xl border p-4 transition-colors theme-border theme-surface hover:border-(--accent-strong) sm:p-6 ${spanClass[category.span]}`}
          >
            <span
              className={`absolute top-0 inset-inline-start-0 h-[3px] w-10 rounded-e-full ${category.accent}`}
            />

            <h3 className="text-sm font-medium text-(--text-main) mt-2 mb-4">
              {t(`categories.${category.key}`)}
            </h3>

            <div className="flex flex-wrap gap-2">
              {category.items.map(({ name, icon: Icon }) => (
                <span
                  key={name}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] bg-(--page-bg) theme-border border group-hover:border-(--accent-strong) transition-colors"
                >
                  <Icon size={13} className="theme-muted" />
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
