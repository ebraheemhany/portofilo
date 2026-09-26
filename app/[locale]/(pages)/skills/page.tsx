import React from "react";
import Sidebar from "@/components/Sidebar";
import SkillsSection from "@/components/SkillsSection";

const SkillsPage = () => {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col lg:flex-row">
      <Sidebar />
      <main className="flex-1 min-w-0">
        <SkillsSection />
      </main>
    </div>
  );
};

export default SkillsPage;
