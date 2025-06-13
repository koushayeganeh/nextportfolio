import Gallery from "@/components/Gallery";
import { boratasUserFacing } from "@/data/boratasUserFacing";

export default function UserInterface() {
  return (
    <>
      <div id="design-user-interface" className="space-y-8 scroll-mt-40">
        <h3 className="text-xl font-bold text-primary">
          3.3 - User-Facing Interface
        </h3>
        <p>
          I approached the public UI with a modular design system built in
          Tailwind CSS, anchored by Boratas’s brand palette. Every
          component—from hero banners and card grids to filter panels and media
          galleries—was standardized into reusable blocks, ensuring visual
          consistency and rapid iteration. A mobile-first breakpoint strategy,
          semantic HTML, and WCAG-compliant color contrasts guarantee
          accessibility and a seamless experience across devices.
        </p>
        <p>
          To guide users efficiently, I flattened the information architecture:
          top-level nav is limited to five pillars plus search/locale-switch,
          product filters operate on dual axes (function + mobility), and every
          detail page is a single scroll—no hidden tabs. Subtle
          micro-interactions (hover states, loading indicators) reinforce
          clarity, while performance tuning (Next.js ISR, WebP assets,
          code-splitting) keeps page renders under 300 ms and full-site builds
          under 60 s, aligning the UI’s speed and reliability with Boratas’s
          engineering excellence.
        </p>

        {/* Gallery of user-facing screenshots */}
        <Gallery photos={boratasUserFacing} />

        {/* ───────────────────────────────── Homepage */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold text-primary-alt">
            3.3.1 - Homepage — Story in One Scroll
          </h4>

          <p className="text-base">
            The redesigned homepage blends brand storytelling with functional
            touches in one smooth scroll—no hidden menus, just clear pathways to
            every key feature.
          </p>

          {/* 1) Full‐page scroll demo */}
          <div className="mt-6 rounded-lg overflow-hidden border border-neutral-700 shadow-lg">
            <video
              src="/data/projects/boratas+/videos/home-scroll.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
            />
          </div>

          {/* 2) Textual overview */}
          <p className="text-base">
            The homepage unfolds in a single, seamless scroll. It opens with an
            interactive hero banner (not a static carousel), featuring a punchy
            headline and subtext, an integrated search bar, three top‐level
            category buttons (Tracked • Stationary • Wheeled), and a “Request a
            Quote” call-to-action that launches a modal—immediately engaging
            visitors and guiding them to what they need.
          </p>

          <p className="text-base">
            Directly beneath, after a full-width captivating video loop section,
            three prominent quick-select cards let users jump straight to the
            full product range for each mobility type. This instant filtering
            approach gives fast, clear access to the right machines without
            extra navigation.
          </p>

          <p className="text-base">
            Then, the page introduces Boratas’s mission and expertise with a
            brief company overview and an “About Us” link. Below that, a
            consolidated resources area offers feature highlights, immediate PDF
            downloads of all core catalogs, and links to the latest industry
            insights—keeping every key resource visible, accessible, and just
            one scroll away.
          </p>
        </div>

        {/* ───────────────────────────────── Product Range */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold text-primary-alt">
            3.3.2 - Product Range — Interactive Grid
          </h4>

          <p className="text-base">
            The Product Range page brings every machine category into one
            dynamic grid—filterable by function and mobility, all without
            leaving the page.
          </p>

          {/* 1) Filter demo video */}
          <div className="mt-6 rounded-lg overflow-hidden border border-neutral-700 shadow-lg">
            {/* placeholder for the auto-play, looped MP4 filter demo */}
            <video
              src="/data/projects/boratas+/videos/products-filters.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
            />
          </div>

          {/* 2) Textual overview */}
          <p className="text-base">
            On a single “Product Range” page, every category—whether crusher,
            screen, conveyor, or feeder—appears as a card in one unified grid.
            Two sets of filter buttons at the top (Function: Crusher • Screen •
            Conveyor • … and Mobility: Tracked • Wheeled • Stationary) let
            visitors instantly refine the grid with any combination, client-side
            and without a full-page reload. As new categories are added, they
            simply become new cards—keeping the experience fast, flexible, and
            scalable.
          </p>

          <p className="text-base">
            When a user clicks any category card (for example, “Tracked Mobile
            Impact Crusher”), they move straight into a dedicated category page
            listing all related machine models. Each model card displays its
            thumbnail, model name, mobility tag, and key specs, enabling an
            intuitive drill-down from overview to details without ever losing
            context.
          </p>
        </div>

        {/* ───────────────────────────────── Machine Detail */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold text-primary-alt">
            3.3.3 - Machine Detail Page — All in one scroll
          </h4>

          <p className="text-base flex flex-col">
            On a specific machine page (e.g. the BPJ106), everything is laid out
            in one scrollable flow. No hidden tabs, just clearly labeled
            sections that blend data and narrative.
          </p>

          <div className="mt-8 rounded-lg overflow-hidden border border-neutral-700 shadow-lg">
            <video
              src="/data/projects/boratas+/videos/machine-page.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
            />
          </div>

          <div className="space-y-4">
            <p className="text-base">
              Each machine’s detail page is a single, seamless scroll. At the
              top, a breadcrumb trail and the model name sit alongside key specs
              and a high-resolution render—side-by-side on desktop, stacked on
              mobile—giving users immediate context and a clear overview of the
              equipment.
            </p>
            <p className="text-base">
              Technical data is always visible in a responsive two-column list
              of parameter-value pairs instead of hidden behind tabs. Just
              below, a large main image with an interactive thumbnail strip lets
              visitors explore every angle, and a highlighted “Characteristics”
              panel numbers out the model’s top features in narrative form.
            </p>
            <p className="text-base">
              All supporting resources live together: download cards for the
              model brochure and general catalogs, an embedded video demo, a
              related-models carousel for quick comparisons, and a sticky
              contact bar at the bottom with phone, WhatsApp, and email
              links—ensuring everything is accessible without extra clicks.
            </p>
          </div>
        </div>

        {/* ───────────────────────────────── Corporate Pages */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold text-primary-alt">
            3.3.4 - Corporate Pages — Cohesive Brand Experience
          </h4>

          <p className="text-base">
            All of the “Corporate” section pages—About Us, Our Company, Factory
            Tour, Technologies, Careers, Services—now share a single, flexible
            template.
          </p>

          {/* video placeholder */}
          <div className="mt-6 rounded-lg overflow-hidden border border-neutral-700 shadow-lg">
            <video
              src="/data/projects/boratas+/videos/corporate-pages.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
            />
          </div>

          <p className="text-base">
            At the top of each page sits a full-width hero section with a
            concise headline and subtext, followed by a contextual introduction
            block. For “Our Company” we emphasize history and values; “Factory
            Tour” features images and embedded map; “Technologies” showcases R&D
            articles in a card grid.
          </p>

          <p className="text-base">
            The “Careers” page adds a job-listing grid with “Apply Now” modal;
            the “Services” section lays out lifecycle stages in icon cards with
            quick-link buttons. Contact prompts and newsletter sign-up bars are
            sticky at the bottom, ensuring users always have a way to connect.
          </p>
        </div>
      </div>
    </>
  );
}
