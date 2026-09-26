import ContactSection from "@/components/ContactSection";
import Sidebar from "@/components/Sidebar";
import React from "react";

export default function ContactPage() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col lg:flex-row">
      <Sidebar />
      <main className="flex-1 min-w-0">
        <ContactSection />
      </main>
    </div>
  );
}
