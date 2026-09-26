"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Check, ChevronDown } from "lucide-react";
import Image from "next/image";

const languages = [
  { code: "en", label: "English", flag: "https://flagcdn.com/w40/gb.png" },
  { code: "ar", label: "العربية", flag: "https://flagcdn.com/w40/eg.png" },
] as const;
export default function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const current = languages.find((lang) => lang.code === locale)!;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="flex items-center gap-1.5 px-2.5 h-[34px] rounded-lg theme-border border theme-surface text-sm hover:border-[var(--accent)] transition-colors"
        >
          <div className="relative w-5 h-3.5 shrink-0">
            <Image
              src={current.flag}
              alt=""
              fill
              className="object-cover rounded-sm"
            />
          </div>
          <span>{current.code.toUpperCase()}</span>
          <ChevronDown size={14} className="text-neutral-400" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="min-w-[150px]">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => router.replace(pathname, { locale: lang.code })}
            className="flex items-center justify-between gap-3 cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <div className="relative w-5 h-3.5 shrink-0">
                <Image
                  src={lang.flag}
                  alt=""
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
              <span>{lang.label}</span>
            </span>
            {lang.code === locale && (
              <Check size={14} className="text-[var(--accent)]" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
