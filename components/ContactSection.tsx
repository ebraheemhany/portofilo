"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Mail, Phone, Copy, Check } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
const channels = [
  {
    key: "email",
    icon: Mail,
    value: "ebraheemhany2004@gmail.com",
    href: "mailto:ebraheemhany2004@gmail.com",
    copyable: true,
  },
  {
    key: "phone",
    icon: Phone,
    value: "+20 105 093 1447",
    href: "tel:+201050931447",
    copyable: true,
  },
  {
    key: "github",
    icon: SiGithub,
    value: "github.com/ebraheemhany",
    href: "https://github.com/ebraheemhany",
    copyable: false,
  },
  {
    key: "linkedin",
    icon: FaLinkedinIn,
    value: "linkedin.com/in/ebraheem-hany",
    href: "https://linkedin.com/in/ebraheem-hany-679649349",
    copyable: false,
  },
];

const emailComposeUrl =
  "https://mail.google.com/mail/?view=cm&fs=1&to=ebraheemhany2004@gmail.com";

export default function ContactSection() {
  const t = useTranslations("contact");
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (key: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(key);
      setTimeout(() => setCopied(null), 1500);
    } catch {
      // clipboard unavailable — silently ignore
    }
  };

  return (
    <section id="contact" className="px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-10">
        <div>
          <div className="text-amber-400 text-sm font-semibold mb-3">
            {t("eyebrow")}
          </div>
          <h2 className="mb-4 max-w-sm text-2xl font-semibold leading-tight sm:text-3xl">
            {t("title")}
          </h2>
          <p className="text-neutral-400 max-w-sm mb-7">{t("text")}</p>

          <div className="inline-flex items-center gap-2 text-xs text-teal-400 border border-teal-500/30 bg-teal-500/10 px-3 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            {t("status")}
          </div>

          <div>
            <a
              href={emailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-lg bg-amber-400 px-5 py-2.5 text-sm font-medium text-neutral-950 transition-transform hover:-translate-y-0.5"
            >
              {t("cta")}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {channels.map(({ key, icon: Icon, value, href, copyable }) => (
            <div
              key={key}
              className="group flex min-w-0 items-center justify-between gap-3 rounded-xl border px-4 py-4 transition-colors theme-border theme-surface hover:border-(--accent-strong) sm:gap-4 sm:px-5"
            >
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener" : undefined}
                className="flex min-w-0 flex-1 items-center gap-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-(--page-bg) theme-muted">
                  <Icon size={16} />
                </span>
                <div className="min-w-0">
                  <div className="text-xs theme-muted">
                    {t(`labels.${key}`)}
                  </div>
                  <div className="text-sm truncate ">{value}</div>
                </div>
              </a>

              {copyable && (
                <button
                  type="button"
                  onClick={() => handleCopy(key, value)}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border theme-border theme-muted transition-colors hover:border-(--accent-strong) hover:text-(--accent-strong)"
                  aria-label="Copy"
                >
                  {copied === key ? <Check size={14} /> : <Copy size={14} />}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
