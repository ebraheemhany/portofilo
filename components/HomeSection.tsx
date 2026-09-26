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
  SiGit,
  SiGithub,
  SiVercel,
  SiRailway,
  SiPostman,
} from "react-icons/si";
import { FiCode } from "react-icons/fi";
import Link from "next/link";

type Skill = { name: string; icon: IconType; color: string };

const skillGroups: { label: string; items: Skill[] }[] = [
  {
    label: "Front-end",
    items: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "var(--text-main)" },
    ],
  },
  {
    label: "Back-end",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "var(--text-main)" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "REST APIs", icon: FiCode, color: "#E8A33D" },
    ],
  },
  {
    label: "Real-time & state",
    items: [
      { name: "Socket.io", icon: SiSocketdotio, color: "var(--text-main)" },
      { name: "TanStack Query", icon: SiReactquery, color: "#FF4154" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Context API", icon: FiCode, color: "#E8A33D" },
    ],
  },
  {
    label: "Styling",
    items: [
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "Material UI", icon: SiMui, color: "#007FFF" },
      { name: "Styled Components", icon: SiStyledcomponents, color: "#DB7093" },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "var(--text-main)" },
      { name: "Vercel", icon: SiVercel, color: "var(--text-main)" },
      { name: "Railway", icon: SiRailway, color: "var(--text-main)" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ],
  },
];

export default function HomeSection() {
  const t = useTranslations("hero");
  const contact = useTranslations("contact");

  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden border-b theme-border px-5 pb-8 pt-14 sm:px-8 sm:pt-20 lg:px-12 lg:pt-24"
      >
        <p className="theme-accent text-sm font-semibold mb-3">
          {t("eyebrow")}
        </p>
        <h1 className="max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
          {t("title")}
        </h1>
        <p className="mt-4 max-w-2xl theme-muted text-[15px] leading-relaxed">
          {t("text")}
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href={"/projects"}
            className="inline-flex min-h-11 items-center rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-medium transition-transform hover:-translate-y-0.5"
          >
            {t("cta1")}
          </Link>
          <Link
            href={"/contact"}
            className="inline-flex min-h-11 items-center rounded-lg border px-5 py-2.5 text-sm transition-transform theme-border hover:-translate-y-0.5"
          >
            {t("cta2")}
          </Link>
        </div>
      </section>
      {/* skills */}
      <section
        id="skills"
        className="border-b py-10 px-5 theme-border sm:px-8 lg:px-12"
      >
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>
        <div className="flex flex-col gap-5">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="text-sm theme-muted mb-3">{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map(({ name, icon: Icon, color }) => (
                  <span
                    key={name}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-sm theme-surface theme-border border"
                  >
                    <Icon size={14} color={color} />
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="group relative overflow-hidden rounded-2xl border p-5 theme-border theme-surface sm:p-8">
          <div
            className="absolute inset-0 bg-linear-to-t from-(--accent)/10 via-(--accent)/5 to-transparent
                 translate-y-full group-hover:translate-y-0
                 transition-transform duration-500 ease-out"
          />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="theme-accent">●</span>
              <h3 className="text-xl font-semibold">{contact("title")}</h3>
            </div>
            <p className="theme-muted max-w-md mb-6">{contact("text")}</p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ebraheemhany2004@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2.5 rounded-lg bg-amber-500 text-sm font-medium hover:-translate-y-0.5 transition-transform"
            >
              {contact("cta")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
