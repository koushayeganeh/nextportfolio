"use client";

import Issues from "./__design-comps/Issues";
import InformationArchitecture from "./__design-comps/InformationArchitecture";
import UserInterface from "./__design-comps/UserInterface";
import AdminDashboard from "./__design-comps/AdminDashboard";
import Responsive from "./__design-comps/Responsive";

/**
 *  The image paths below ( /boratas_screens/... ) should point to real
 *  screenshots or short GIFs that live in /public/boratas_screens/.
 *  Replace any filename or add more <Image> tags as your case-study grows.
 */

export default function DesignProcess() {
  return (
    <div className="space-y-24">
      {/* ───────────────────────────────── 3.1 | Discovery */}
      <Issues />

      {/* ───────────────────────────────── 3.2 | IA */}
      <InformationArchitecture />

      {/* ───────────────────────────────── 3.3 | UI */}
      <UserInterface />

      {/* ───────────────────────────────── 3.4 | Admin Dashboard */}
      <AdminDashboard />

      {/* ───────────────────────────────── 3.5 | Responsive */}
      <Responsive />
    </div>
  );
}
