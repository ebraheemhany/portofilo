"use client";

import { useTranslations } from "next-intl";
import ThemeToggle from "./ThemeToggle";
import LocaleSwitcher from "./LocaleSwitcher";
import { Link, usePathname } from "@/i18n/navigation";
import Image from "next/image";
import { createPortal } from "react-dom";
import { useState } from "react";

const navItems = ["home", "about", "skills", "projects", "contact"] as const;

export default function Sidebar() {
  const t = useTranslations("nav");

  const tSidebar = useTranslations("sidebar");
  const pathname = usePathname();
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <aside className="w-full shrink-0 border-b theme-border p-3 flex flex-col gap-3 sm:p-4 lg:w-[220px] lg:border-b-0 lg:border-e lg:p-6 lg:gap-6 lg:sticky lg:top-0 lg:h-screen">
        <div className="w-full flex flex-row items-center justify-between gap-3 lg:flex-col lg:gap-4">
          <div className="relative w-12 h-12 shrink-0 rounded-full overflow-hidden theme-border border lg:w-25 lg:h-25">
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="group relative w-full h-full rounded-full overflow-hidden theme-border border cursor-pointer"
            >
              <Image
                src="/hema.png"
                fill
                alt="Ebraheem Hany"
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-xs font-medium">
                  {tSidebar("viewImage")}
                </span>
              </div>
            </button>
          </div>

          <div className="min-w-0 flex flex-1 flex-col items-start px-1 lg:flex-none lg:items-center">
            <div dir="ltr" className="flex items-center justify-center gap-1.5">
              <h1 className="whitespace-nowrap text-sm font-semibold lg:text-lg">
                Ebraheem Hany
              </h1>
              <svg
                className="mt-1 h-4 w-4 shrink-0 text-blue-500 lg:mt-2 lg:h-6 lg:w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9.593 3.322c.717-.884 2.098-.884 2.815 0 .378.466.995.66 1.567.487.72-.217 1.504.19 1.736.914l.146.454c.13.407.446.727.85.86l.437.144c.718.238 1.117 1.008.897 1.73-.17.56.015 1.166.469 1.541.68.564.68 1.62 0 2.184-.454.375-.639.98-.469 1.541.22.722-.179 1.492-.897 1.73l-.436.144a1.4 1.4 0 0 0-.851.86l-.146.454c-.232.723-1.016 1.131-1.736.914-.572-.173-1.19.021-1.567.487-.717.884-2.098.884-2.815 0a1.4 1.4 0 0 0-1.567-.487c-.72.217-1.504-.19-1.736-.914l-.146-.454a1.4 1.4 0 0 0-.85-.86l-.437-.144c-.718-.238-1.117-1.008-.897-1.73.17-.56-.015-1.166-.469-1.541-.68-.564-.68-1.62 0-2.184.454-.375.639-.981.469-1.541-.22-.722.179-1.492.897-1.73l.436-.144c.404-.133.72-.453.85-.86l.146-.454c.232-.723 1.016-1.131 1.736-.914.572.173 1.19-.021 1.567-.487Z" />
                <path
                  d="m9 12.75 1.75 1.75 3.5-3.5"
                  transform="translate(0 -1.5)"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
            {/* <p className="text-sm text-neutral-400 mt-1">{tSidebar("role")}</p> */}
            <div className="mt-1 inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2 py-1 text-[10px] theme-success lg:mt-3 lg:gap-2 lg:px-3 lg:py-1.5 lg:text-xs">
              <span className="w-1.5 h-1.5 rounded-full theme-success-dot" />
              {tSidebar("status")}
            </div>
          </div>

          <div className="flex justify-center gap-2">
            <ThemeToggle />
            <LocaleSwitcher />
          </div>
        </div>

        <nav className="mobile-nav -mx-3 flex flex-row gap-1 overflow-x-auto overscroll-x-contain px-3 pb-1 sm:-mx-4 sm:px-4 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0">
          {navItems.map((item) =>
            (() => {
              const href =
                item === "home"
                  ? "/"
                  : item === "about"
                    ? "/about"
                    : item === "projects"
                      ? "/projects"
                      : item === "skills"
                        ? "/skills"
                        : "/contact";
              const isActive = pathname === href;

              return (
                <Link
                  key={item}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={`shrink-0 px-3 py-2.5 rounded-lg text-sm border-b-2 border-s-0 transition-colors lg:border-b-0 lg:border-s-2 ${
                    isActive
                      ? "theme-surface-hover text-[var(--text-main)] border-[var(--accent)] theme-surface"
                      : "theme-muted border-transparent hover:text-[var(--text-main)] theme-surface-hover"
                  }`}
                >
                  {t(item)}
                </Link>
              );
            })(),
          )}
        </nav>

        <div className="mt-auto hidden pt-5 theme-border border-t text-sm theme-muted lg:block">
          <p className=" text-center">
            COPYRIGHT © 2026 Ebraheem Hany. All rights reserved
          </p>
        </div>
      </aside>
      {showModal &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-9999 flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Profile image"
              className="relative aspect-square w-[min(80vw,600px)] overflow-hidden rounded-full border-4 border-white/80 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src="/hema.png"
                fill
                alt="Ebraheem Hany"
                className="object-cover"
              />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
