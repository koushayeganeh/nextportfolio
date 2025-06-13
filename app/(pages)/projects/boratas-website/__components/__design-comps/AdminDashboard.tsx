import Gallery from "@/components/Gallery";
import { boratasAdminDashboard } from "@/data/boratasAdminDashboard";
import React from "react";

export default function AdminDashboard() {
  return (
    <>
      <div id="design-admin-dashboard" className="space-y-8 scroll-mt-40">
        <h3 className="text-xl font-bold text-primary">
          3.4 - Admin-Facing Dashboard
        </h3>
        <p>
          Behind the scenes, the team uses a unified admin console to manage
          products, catalogs, inquiries, and analytics. The dashboard is
          designed for efficiency: data-heavy tables, quick-action modals, and
          real-time charts all live under a consistent sidebar and user-friendly
          intuitive design, so admins can perform daily tasks without
          context-switching.
        </p>

        {/* Gallery of admin-side screenshots */}
        <Gallery photos={boratasAdminDashboard} />

        {/* ───────────────────────────────── General Overview */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold text-primary-alt">
            3.4.1 – Admin Dashboard — General Overview
          </h4>

          <p className="text-base">
            The Admin Dashboard home screen brings all of key metrics into one
            view. At a glance, the team can see visitor trends, top-performing
            URLs, inquiry volumes, and catalog download counts—providing instant
            insight into site performance and lead generation.
          </p>

          {/* 1) Full‐page scroll demo */}
          <div className="mt-6 rounded-lg overflow-hidden border border-neutral-700 shadow-lg">
            {/* placeholder for the auto‐play, looped MP4 dashboard demo */}
            <video
              src="/data/projects/boratas+/videos/admin-panel.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
            />
          </div>

          {/* 2) Textual overview */}
          <p className="text-base">
            At the top, a row of KPI cards displays today’s and this
            month’s/week's visitor counts, bounce rate, and average session
            duration, alongside custom‐URL view statistics.
          </p>

          <p className="text-base">
            Below the KPIs, an interactive timeline chart plots visitor and
            inquiry volumes over time, with hover tooltips and date‐range
            selectors for deeper analysis. Adjacent panels show cumulative
            inquiry totals, PDF/catalog download counts, and recent contact form
            submissions—each with export and filter controls for rapid
            reporting.
          </p>
        </div>

        {/* ───────────────────────────────── Machine Management */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold text-primary-alt">
            3.4.2 – Machine Management: Listing & Edit Form
          </h4>
          <p className="text-base">
            I consolidated the machine inventory and edit workflows into one
            persistent interface. A searchable, filterable table sits above, and
            clicking “Edit” on any row slides in the form panel—preserving list
            state and context for uninterrupted task flow.
          </p>

          {/* 1) Form interaction demo */}
          <div className="mt-6 rounded-lg overflow-hidden border border-neutral-700 shadow-lg">
            {/* placeholder for the auto-play, looped MP4 form-demo */}
            <video
              src="/data/projects/boratas+/videos/admin-machine.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
            />
          </div>

          <p className="text-base">
            <strong>Inline Locale Editing:</strong> Every text field expands
            into side-by-side inputs for English and Turkish, with a
            live-preview toggle. This keeps translations in sync and removes
            back-and-forth between language tabs.
          </p>

          <p className="text-base">
            <strong>Dynamic Field Logic:</strong> Function and Mobility
            selectors drive conditional display of spec inputs—only relevant
            fields appear, reducing cognitive load and speeding up data entry.
          </p>

          <p className="text-base">
            <strong>Drag-and-Drop Media Manager:</strong> Bulk-upload zone
            accepts images, PDFs, and videos. Thumbnails generate instantly and
            can be reordered or deleted inline via grab handles, so asset
            management feels direct and visual.
          </p>

          <p className="text-base">
            <strong>Grid-Based Spec Editor:</strong> Technical parameters
            (capacity, feed opening, weight, dimensions) render in a responsive
            two-column grid with clear labels, inline validation, and contextual
            tooltips—making heavy form work structured and error-resistant.
          </p>

          <p className="text-base">
            <strong>Admin-Centric UX:</strong> Autosave with success/error
            banners, keyboard shortcuts for Save/Cancel, and a sticky summary
            panel keep key actions and status always visible—ensuring admins
            move quickly and confidently through updates.
          </p>
        </div>

        {/* ───────────────────────────────── Machine Image Hotspots */}

        <div className="space-y-6">
          <h4 className="text-lg font-bold text-primary-alt">
            3.4.3 — Machine Image Hotspots Editor
          </h4>

          <p className="text-base">
            Admins can enrich any machine’s 3D render with interactive hotspots.
            Clicking on the image drops a marker and instantly opens a
            multilanguage panel to enter a title and description for that spot.
          </p>

          {/* Hotspots editor demo */}
          <div className="mt-6 rounded-lg overflow-hidden border border-neutral-700 shadow-lg">
            {/* placeholder for the auto-play, looped MP4 hotspots-demo */}
            <video
              src="/data/projects/boratas+/videos/admin-hotspot.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
            />
          </div>

          <p className="text-base">
            <strong>Intuitive Placement:</strong> Click or tap anywhere on the
            cover image to add a hotspot. Drag to reposition or delete with one
            click—no separate “map” interface required.
          </p>

          <p className="text-base">
            <strong>Side-by-Side Locale Fields:</strong> Each hotspot panel
            displays two input columns (EN & TR). Admins can toggle languages
            and see a live preview of how the tooltip will read on the public
            site.
          </p>

          <p className="text-base">
            <strong>Front-End Hover & Tap Tooltips:</strong> On the user-facing
            page, hovering (or tapping on mobile) reveals a clean tooltip with
            the localized title and description, styled to match the machine
            page’s theme.
          </p>
        </div>

        {/* ───────────────────────────────── Inquiries & Email Library */}

        <div className="space-y-6">
          <h4 className="text-lg font-bold text-primary-alt">
            3.4.4 — Inquiries & Email Library Management
          </h4>

          <p className="text-base">
            A single console to view, search, and act on every incoming inquiry,
            plus a built-in library of email templates. Everything lives in
            intuitive tables with on-demand filters, live search, and bulk
            actions—so admins can stay on top of leads without hunting through
            different modules.
          </p>

          {/* Inquiries & Email Library demo */}
          <div className="mt-6 rounded-lg overflow-hidden border border-neutral-700 shadow-lg">
            {/* placeholder for auto-play, looped MP4 inquiries-demo */}
            <video
              src="/data/projects/boratas+/videos/admin-inquiries.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
            />
          </div>

          <p className="text-base">
            <strong>Responsive Data Grid:</strong> Columns for date, name,
            email, product, and status can be shown or hidden via a column
            picker. Live search filters across all fields, and dropdown filters
            let you narrow by date range, product category, or inquiry status in
            a click.
          </p>

          <p className="text-base">
            <strong>Bulk Actions & Export:</strong> Select multiple rows to mark
            as read/unread, assign to team members, or export CSV. Contextual
            action buttons appear on row hover, keeping the UI clean until you
            need them.
          </p>

          <p className="text-base">
            <strong>Email Template Library:</strong> A tabbed view lists
            reusable templates—welcome messages, quote follow-ups, drip
            campaigns—tagged by purpose. Click to preview in a modal, edit
            inline with a rich-text toolbar, or copy a template into a new
            inquiry with one click.
          </p>

          <p className="text-base">
            <strong>UX & Design Choices:</strong> Sticky filter/header row
            ensures controls stay in view. Row expansion reveals full message
            text without leaving the page. Autosave drafts in the template
            editor, keyboard shortcuts for quick navigation, and consistent
            spacing and typography make the interface feel both powerful and
            approachable.
          </p>
        </div>
      </div>
    </>
  );
}
