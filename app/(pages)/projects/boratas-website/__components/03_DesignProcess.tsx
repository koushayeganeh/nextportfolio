"use client";

import Image from "next/image";
import { BsExclamationCircle } from "react-icons/bs";
import Container from "@/components/ui/container";
import Gallery from "@/components/Gallery";
import { boratasRendersExamples } from "@/data/boratasRendersExamples";

/**
 *  The image paths below ( /boratas_screens/... ) should point to real
 *  screenshots or short GIFs that live in /public/boratas_screens/.
 *  Replace any filename or add more <Image> tags as your case-study grows.
 */

export default function DesignProcess() {
  return (
    <Container>
      <div className="space-y-36">
        {/* ───────────────────────────────── 3.1 | Discovery */}
        <div id="design-discovery" className="space-y-12">
          <h3 className="text-xl font-bold text-primary">
            3.1 – Identifying Key Issues
          </h3>
          <p>
            Having worked at Boratas, I was already deeply familiar with the
            problems of our previous website. By closely examining customer
            feedback, dealer suggestions, and discussions with our sales and
            marketing teams, I identified the major usability and design issues:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Item 1 */}
            <li className="flex items-start bg-white border border-gray-200 rounded-lg shadow-sm p-4">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-[#26a69a] flex items-center justify-center">
                  <BsExclamationCircle className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="ml-4">
                <p className="text-base font-semibold text-[#121512]">
                  Hidden Specifications
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  Machine specs—the most crucial information—were buried inside
                  tabs, making them difficult to find.
                </p>
              </div>
            </li>

            {/* Item 2 */}
            <li className="flex items-start bg-white border border-gray-200 rounded-lg shadow-sm p-4">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-[#26a69a] flex items-center justify-center">
                  <BsExclamationCircle className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="ml-4">
                <p className="text-base font-semibold text-[#121512]">
                  Lack of Centralized Listings
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  There was no single organized page where users could view all
                  available machines and their categories at once.
                </p>
              </div>
            </li>

            {/* Item 3 */}
            <li className="flex items-start bg-white border border-gray-200 rounded-lg shadow-sm p-4">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-[#26a69a] flex items-center justify-center">
                  <BsExclamationCircle className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="ml-4">
                <p className="text-base font-semibold text-[#121512]">
                  Scattered Content
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  Media, specifications, PDFs, and technical tables were
                  scattered and hidden within multiple tabs, frustrating
                  visitors.
                </p>
              </div>
            </li>

            {/* Item 4 */}
            <li className="flex items-start bg-white border border-gray-200 rounded-lg shadow-sm p-4">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-[#26a69a] flex items-center justify-center">
                  <BsExclamationCircle className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="ml-4">
                <p className="text-base font-semibold text-[#121512]">
                  Poor Mobile Experience
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  Machine specifications used tables that were not responsive,
                  causing a poor experience on mobile devices.
                </p>
              </div>
            </li>

            {/* Item 5 */}
            <li className="flex items-start bg-white border border-gray-200 rounded-lg shadow-sm p-4">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-[#26a69a] flex items-center justify-center">
                  <BsExclamationCircle className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="ml-4">
                <p className="text-base font-semibold text-[#121512]">
                  Ineffective SEO
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  The website was not optimized, resulting in poor visibility on
                  search engines.
                </p>
              </div>
            </li>

            {/* Item 6 */}
            <li className="flex items-start bg-white border border-gray-200 rounded-lg shadow-sm p-4">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-[#26a69a] flex items-center justify-center">
                  <BsExclamationCircle className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="ml-4">
                <p className="text-base font-semibold text-[#121512]">
                  Weak Admin Panel
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  The admin interface was outdated, difficult to use, and not
                  tailored to Boratas workflow.
                </p>
              </div>
            </li>

            {/* Item 7 */}
            <li className="flex items-start bg-white border border-gray-200 rounded-lg shadow-sm p-4">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-[#26a69a] flex items-center justify-center">
                  <BsExclamationCircle className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="ml-4">
                <p className="text-base font-semibold text-[#121512]">
                  Unprofessional Design
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  Visuals and overall design lacked professionalism and clarity.
                </p>
              </div>
            </li>

            {/* Item 8 */}
            <li className="flex items-start bg-white border border-gray-200 rounded-lg shadow-sm p-4">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-[#26a69a] flex items-center justify-center">
                  <BsExclamationCircle className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="ml-4">
                <p className="text-base font-semibold text-[#121512]">
                  No User Tracking
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  There was no mechanism to track user interactions or gather
                  meaningful data.
                </p>
              </div>
            </li>

            {/* Item 9 */}
            <li className="flex items-start bg-white border border-gray-200 rounded-lg shadow-sm p-4">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-[#26a69a] flex items-center justify-center">
                  <BsExclamationCircle className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="ml-4">
                <p className="text-base font-semibold text-[#121512]">
                  No Inquiry Management
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  The website lacked tools for handling inquiries or analyzing
                  user data.
                </p>
              </div>
            </li>

            {/* Item 10 */}
            <li className="flex items-start bg-white border border-gray-200 rounded-lg shadow-sm p-4">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-[#26a69a] flex items-center justify-center">
                  <BsExclamationCircle className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="ml-4">
                <p className="text-base font-semibold text-[#121512]">
                  No Centralized Email Management
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  There was no structured email library for customer
                  communication.
                </p>
              </div>
            </li>
          </ul>
          {/* <Image
          src="/data/projects/boratas+/images/graphs/boratas_issues_radial2.jpg"
          alt="Journey map snapshot (replace with real Miro export)"
          width={1200}
          height={450}
          className="rounded-lg border border-neutral-700"
        /> */}
        </div>

        <div id="design-ia" className="space-y-12">
          <h3 className="text-xl font-bold text-primary">
            3.2 · Information Architecture & Sitemap
          </h3>

          <p>
            The old Boratas website suffered from confusing navigation and
            disorganized content. Important details like machine specifications,
            media, and brochures were scattered and hard to find. Users
            struggled to locate vital information, and everything required
            excessive clicks and guesswork.
          </p>

          <div>
            <h4 className="text-lg font-semibold text-primary-alt mt-8">
              Customer-Focused Organization
            </h4>
            <p>
              Customers primarily seek detailed technical information about our
              machines, solutions, and services. We reorganized these into
              intuitive groups:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Products:</strong> Clearly categorized machines with
                accessible details and specifications.
              </li>
              <li>
                <strong>Services:</strong> Lifecycle services, from presales
                support to maintenance and upgrades.
              </li>
              <li>
                <strong>Catalogs & Media:</strong> Easily accessible resources
                including photos, videos, and downloadable PDFs.
              </li>
              <li>
                <strong>Technology & Articles:</strong> Insightful content on
                innovation, R&D, and industry expertise.
              </li>
            </ul>

            <h4 className="text-lg font-semibold text-primary-alt mt-8">
              Business and Brand Information
            </h4>
            <p>
              For stakeholders interested in Boratas as a company—potential
              employees, partners, and investors—we clearly presented:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>About:</strong> Comprehensive information about the
                company, factory capabilities, and innovation efforts.
              </li>
              <li>
                <strong>Careers:</strong> Transparent and easily navigable job
                listings and application processes.
              </li>
              <li>
                <strong>Partnership Opportunities:</strong> Clear presentation
                of how potential collaborators can engage with Boratas.
              </li>
            </ul>

            <h4 className="text-lg font-semibold text-primary-alt mt-8">
              Robust Internal Navigation & Search
            </h4>
            <p>
              Users are provided with robust internal search capabilities and
              clearly structured navigation, ensuring they can quickly reach the
              exact content they need.
            </p>

            <h4 className="text-lg font-semibold text-primary-alt mt-8">
              Streamlined Admin Experience
            </h4>
            <p>
              Behind the scenes, the admin interface reflects the same IA
              principles—clear grouping, intuitive paths, and easy access to
              frequently used functionalities:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Simplified machine management workflows.</li>
              <li>Centralized catalog and email management.</li>
              <li>
                Effective tracking and analysis of user inquiries and
                interactions.
              </li>
            </ul>
          </div>

          <p>
            I completely restructured the information architecture to create
            clarity and ease of navigation. The new sitemap divides content
            intuitively into clearly defined divs:
          </p>

          <pre className="bg-neutral-800 text-white p-4 rounded-lg text-sm overflow-x-auto">
            {`/[locale]
├─ products                       // clearly organized, dynamic machine pages
│  └─ [categorySlug]              // category pages
│     └─ [machineSlug]            // individual machine detail pages
├─ services                       // lifecycle services detail pages
│  ├─ commissioning
│  ├─ presales
│  ├─ remote-support
│  ├─ spare-parts
│  ├─ training
│  ├─ upgrades
│  └─ ServicesPageClient.tsx
├─ about                           // company-related information
│  ├─ company
│  ├─ factory
│  ├─ technology
│  └─ AboutClient.tsx
├─ article
│  └─ [slug]                      // dynamic article pages
├─ careers                        // job opportunities
│  └─ openings
│     └─  [slug]                  // detailed job descriptions
├─ technology                     // in-depth R&D articles
├─ careers                        // job openings and recruitment
├─ catalogs                       // centralized, easy-access PDF downloads
├─ kvkk-info                      // data privacy compliance information
├─ privacy                        // privacy policy
├─ partnership
├─ photos                         // Photo library
├─ videos                         // video library
├─ contact                        // contact page and modal form integration
└─ search                         // robust internal search functionality`}
          </pre>

          <p>
            On the admin side, I built a clean, easy-to-use interface to manage
            machines, articles, inquiries, email communication, job listings,
            and document catalogs efficiently:
          </p>

          <pre className="bg-neutral-800 text-white p-4 rounded-lg text-sm overflow-x-auto">
            {`/(protected)/admin
├─ add-machine         // streamlined machine creation workflow
├─ machines            // intuitive machine management
├─ taxonomies          // organized categories and specs
├─ article             // structured content editing
├─ catalogs            // simplified catalog management
├─ email-library       // centralized email communication tools
├─ inquiries           // effective inquiry tracking and data analytics
└─ job-openings        // clear job posting management`}
          </pre>

          <p>
            The dynamic ISR approach ensures build times stay below 60
            seconds—even with more than 140 machines—while individual machine
            detail pages stream swiftly from PostgreSQL, typically loading
            within ~240 ms. This robust and scalable structure has significantly
            improved usability, SEO, and overall user experience.
          </p>

          {/* <Image
          src="/boratas_screens/sitemap.png"
          alt="High-res sitemap illustrating intuitive navigation structure"
          width={1200}
          height={550}
          className="rounded-lg border border-neutral-700"
        /> */}
        </div>

        {/* ───────────────────────────────── 3.4 | Homepage */}
        <div id="design-home" className="space-y-12">
          <h3 className="text-xl font-bold text-primary">
            3.4 · Homepage — Story in One Scroll
          </h3>

          {/* 1) Full-page stitched screenshots */}
          <div className="w-full">
            <Gallery
              photos={[
                {
                  src: "/data/projects/boratas+/images/screenshots/home-desktop.jpg",
                  width: 1,
                  height: 2.3,
                  title: "Boratas-Renders-Examples #1",
                },
                {
                  src: "/data/projects/boratas+/images/screenshots/home-mobile.jpg",
                  width: 1,
                  height: 11,
                  title: "Boratas-Renders-Examples #2",
                },
              ]}
            />
          </div>

          {/* 2) Focused “callout” screenshots */}
          <div className="flex flex-col w-full gap-16">
            <div className="flex flex-col md:flex-row gap-8">
              <Image
                src="/data/projects/boratas+/images/screenshots/home-interactive-banner.jpg"
                alt="Homepage hero interactive banner"
                width={540}
                height={300}
                className="rounded-lg border border-neutral-700 shadow-sm"
              />
              <div className="flex flex-col justify-center">
                <p className="text-base flex flex-col">
                  <strong>Hero Interactive Banner:</strong>
                  Instead of a traditional carousel, the very first div of the
                  homepage is an interactive banner that immediately engages
                  visitors:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                  <li>A concise introductory headline and subtext.</li>
                  <li>
                    A search bar for quickly locating specific machines or
                    resources.
                  </li>
                  <li>
                    Three prominent buttons linking to the top‐level product
                    categories (Tracked, Stationary, Wheeled).
                  </li>
                  <li>
                    A primary “Request a Quote” call-to-action that opens a
                    modal, streamlining inquiries.
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <Image
                src="/data/projects/boratas+/images/screenshots/home-machines-range.jpg"
                alt="Homepage hero interactive banner"
                width={540}
                height={200}
                className="rounded-lg border border-neutral-700 shadow-sm"
              />
              <div className="flex flex-col justify-center">
                <p className="text-base flex flex-col">
                  <strong>Quick-Select Cards:</strong>
                  Following a video loop banner, the homepage displays three
                  clearly defined cards—one for each mobility type (Tracked,
                  Stationary, Wheeled)—to guide users into the full product
                  lineup:
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <Image
                src="/data/projects/boratas+/images/screenshots/home-information-intro.jpg"
                alt="Homepage hero interactive banner"
                width={540}
                height={600}
                className="rounded-lg border border-neutral-700 shadow-sm"
              />
              <div className="flex flex-col justify-center">
                <p className="text-base flex flex-col">
                  <strong>Company & Resources div:</strong>
                  This unified area in homepage introduces the company and gives
                  quick access to key resources:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                  <li>
                    <strong>Brief Introduction:</strong>A short paragraph
                    summarizes the company's mission and expertise, followed by
                    a “About Us” button that navigates to the full company page.
                  </li>
                  <li>
                    <strong>Feature Cards:</strong>
                    Three cards highlight core divs, each with an image, title,
                    brief description, and a “Learn more →” link.
                  </li>
                  <li>
                    <strong>Overview Catalogs:</strong>
                    Three download buttons allow users to grab PDFs immediately.
                    A “Explore All PDF Documents” button links to a page listing
                    every catalog.
                  </li>
                  <li>
                    <strong>Latest Industry Insights:</strong>A small list shows
                    the titles of the most recent articles, with each title
                    linking to its full post. Below this list is an “Explore All
                    Articles” button for the full blog.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-lg overflow-hidden border border-neutral-700 shadow-lg">
            <video
              src="/data/projects/boratas+/videos/home-scroll.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
            />
          </div>
          <p className="text-center text-sm text-gray-600">
            Scroll‐down/scroll‐up demo of the Boratas homepage.
          </p>
        </div>

        {/* ───────────────────────────────── 3.5 | Product Range */}
        <div id="design-range" className="space-y-12">
          <h3 className="text-xl font-bold text-primary">
            3.5 · Product Range — Interactive Grid
          </h3>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Screenshot of the full grid with filters visible at the top */}
            <Image
              src="/data/projects/boratas+/images/screenshots/products-grid.jpg"
              alt="Boratas Product Range interactive grid with filter buttons"
              width={400}
              height={900}
              className="rounded-lg border border-neutral-700 shadow-sm"
            />

            {/* Explanatory text */}
            <div className="flex flex-col justify-center">
              <p className="text-base flex flex-col">
                <strong>Unified Product Range Page:</strong>
                In this industry—where each machine can be described by both a
                <em>function</em> (crusher, screen, conveyor, etc.) and a
                <em>mobility type</em> (tracked, wheeled, stationary)I built a
                single “Product Range” page that lets users see every
                combination in one place.
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                <li>
                  <strong>Two‐axis categorization:</strong>
                  At the top of the page, we expose two sets of filter buttons:
                  – <em>Machine Type</em> (Crusher, Screen, Conveyor, Hopper &
                  Feeder, Wet Processing) – <em>Mobility Type</em> (Tracked,
                  Wheeled, Stationary) These two dimensions work in parallel, so
                  any combination is possible.
                </li>
                <li>
                  <strong>Single, scalable grid:</strong>
                  Rather than separate “Tracked Crushers” pages, “Wheeled
                  Screens” pages, etc., users land on a single, unified grid.
                  Every card has a tiny label (“Tracked Mobile,” “Wheeled
                  Mobile,” “Stationary,” etc.) along with its thumbnail image
                  and name.
                </li>
                <li>
                  <strong>Instant client‐side filtering:</strong>
                  When someone clicks “Crusher” and “Wheeled” at the top, the
                  JavaScript immediately hides any card that isn’t a wheeled
                  crusher. This makes the experience extremely fast and
                  intuitive—no full‐page reloads are needed.
                </li>
                <li>
                  <strong>Better UX & scalability:</strong>
                  Visitors can scroll through all categories in one place, get
                  an overview of what’s available, and refine by any combination
                  of function+mobility. As Boratas adds new machine lines (e.g.,
                  a new “Hybrid Mobile Jaw Crusher”), it simply becomes another
                  card in this grid—no extra templates required.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 mt-8">
            <Image
              src="/data/projects/boratas+/images/screenshots/category-grid.jpg"
              alt="Tracked Mobile Impact Crusher category page with machine model cards"
              width={500}
              height={350}
              className="rounded-lg border border-neutral-700 shadow-sm"
            />
            <div className="flex flex-col justify-center">
              <p className="text-base flex flex-col">
                <strong>Category‐Level Pages:</strong>
                When a user clicks on any of the category cards in the “Product
                Range” grid (e.g., “Tracked Mobile Impact Crusher”), they are
                taken to a dedicated category page that lists all the individual
                machine models in that category.
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                <li>
                  Each machine model is displayed as its own card, showing a
                  thumbnail, model code, mobility tag, and key specs (capacity,
                  feed opening, weight, etc.).
                </li>
                <li>
                  This approach lets users drill down from a high‐level overview
                  into the specific machines they care about, without losing
                  context.
                </li>
              </ul>
            </div>
          </div>

          {/* Short looping demo video to show filters in action */}
          <div className="mt-8 rounded-lg overflow-hidden border border-neutral-700 shadow-lg">
            <video
              src="/data/projects/boratas+/videos/products-filters.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
            />
          </div>
          <p className="mt-2 text-center text-sm text-gray-600">
            Live filter demo: “Crusher” + “Wheeled” → only wheeled crushers
            remain visible.
          </p>
        </div>

        {/* ───────────────────────────────── 3.6 | Machine Detail */}
        <div className="flex flex-col justify-center">
          <p className="text-base flex flex-col">
            <strong>Machine Detail Page — Specs Meet Storytelling:</strong>
            When a user clicks into a specific machine (e.g., “Tracked Mobile
            Impact Crusher BPK125”), they land on a single, comprehensive page
            where every piece of media, specification, download, and video is
            right up front—nothing hidden behind tabs as in the legacy site.
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
            <li>
              <strong>Breadcrumb & Page Title:</strong>
              At the top, a clear breadcrumb (“Home › Products › Tracked Mobile
              Impact Crusher › BPK125”) shows context and hierarchy. Immediately
              below, the mobility tag (“Tracked Mobile”) plus the bold model
              name (“BPK125 Impact Crusher”) establish exactly what you’re
              viewing.
            </li>
            <li>
              <strong>Availability & Contact Links:</strong>A “Ready In Stock”
              badge sits next to the title (if applicable), and clickable
              phone/WhatsApp icons are displayed prominently so a buyer can call
              or message right away.
            </li>
            <li>
              <strong>Main Hero Image & Gallery:</strong>A large, high-quality
              render of the machine is front and center. Directly beneath, a
              horizontal strip of thumbnail images shows multiple angles
              (on-site shots, close-ups, etc.). Clicking any thumbnail swaps the
              main image—keeping all media in one place.
            </li>
            <li>
              <strong>Specifications Table:</strong>
              On the left side, a clean, two-column table lists capacity, feed
              opening, weight, transport dimensions, and more. Because it’s
              native HTML (not hidden in tabs), mobile users can scroll rather
              than pinch/zoom to see every spec.
            </li>
            <li>
              <strong>Story-Driven Description & Characteristics:</strong>
              Next to the specs is a narrative paragraph describing the BPK125’s
              use cases, performance, and design philosophy. Below that, a
              red-accented “BPK125 Characteristics” box numbers out six key
              features (e.g., “High-Performance Impact Crushing Mechanism,”
              “Hybrid (Diesel-Electric) Power,” “Operator-Centric Design,”
              etc.), combining storytelling with technical detail.
            </li>
            <li>
              <strong>PDF Downloads & General Catalogs:</strong>
              In a sidebar panel, native buttons let users immediately download
              the English or Turkish BPK125 brochure. Directly under that,
              “General Overview Catalogs” (e.g., “Boratas Tracked Mobile
              Machines Catalog (EN)” and “(TR)”) are presented with large
              download buttons, all without leaving the page.
            </li>
            <li>
              <strong>Embedded Videos:</strong>
              Also in the sidebar, the “BPK125 Videos” section embeds a YouTube
              (or MP4) demo so viewers can watch the machine in action without
              extra clicks. The scroll-to-view behavior ensures the video is
              just a swipe away.
            </li>
            <li>
              <strong>Feature Icons & Bullet Lists:</strong>
              Below the narrative, five compact icon tiles (e.g., “Track
              Mounted,” “Hybrid Drive,” “Wireless Control,” “PLC Control,”
              “Foldable Components”) give a quick visual summary of the
              machine’s selling points. Under that, a “Standard Features” list
              and an “Optional Features” list—each with a subtle vertical accent
              bar—spell out exactly what comes in the base configuration and
              what add-ons are available.
            </li>
            <li>
              <strong>Full-Width Callout & Other Models:</strong>A large,
              full-bleed photo of the BPK125 is used as a background for a short
              tagline at bottom (“Boratas® Mobile Impact Crusher BPK125 is a
              highly versatile and adaptable machine…”). Immediately after, a
              horizontal “Other Models” slider (e.g., BPK100, BPK101, BPK126)
              shows thumbnail cards for related units, so users can easily jump
              to the next model without returning to the category grid.
            </li>
            <li>
              <strong>Everything on One Page:</strong>
              By collapsing media, specs, downloads, videos, and related links
              into one scrollable layout, there are no hidden tabs—every detail
              is discoverable by simply scrolling. This unified approach ensures
              maximum transparency and a far more engaging, story-driven
              experience than the old site’s tabbed, siloed design.
            </li>
          </ul>
        </div>

        {/* ───────────────────────────────── 3.7 | Search & Mega-Menu */}
        {/* <div id="design-menu" className="space-y-12">
          <h3 className="text-3xl font-bold text-primary">
            3.7 · Mega-Menu & Edge Search
          </h3>

          <Image
            src="/boratas_screens/mega-menu.png"
            alt="Mega-menu open state"
            width={1200}
            height={650}
            className="rounded-lg border border-neutral-700"
          />

          <p>
            Products nav reveals a three-column mega-menu. An edge-cached
            <code>/api/search?q=impact</code> endpoint returns 5 results in
            30–70 ms.
          </p>
        </div> */}

        {/* ───────────────────────────────── 3.8 | Supporting Pages */}
        {/* <div id="design-support" className="space-y-12">
          <h3 className="text-3xl font-bold text-primary">
            3.8 · Supporting Pages
          </h3>

          <p className="italic">
            Services · Technology blog · Careers shown in one collage.
          </p>

          <Image
            src="/boratas_screens/supporting-pages.png"
            alt="Collage of supporting pages"
            width={1200}
            height={700}
            className="rounded-lg border border-neutral-700"
          />
        </div> */}

        {/* ───────────────────────────────── 3.9 | Admin CMS */}
        {/* <div id="design-admin" className="space-y-12">
          <h3 className="text-3xl font-bold text-primary">
            3.9 · Admin Panel — Custom CMS
          </h3>

          <Image
            src="/boratas_screens/admin-overview.png"
            alt="Admin traffic dashboard"
            width={1200}
            height={700}
            className="rounded-lg border border-neutral-700"
          />

          <p>
            Built on ShadCN DataTable; every write is an optimistic mutation
            with server re-validation fallback.
          </p>

          <Image
            src="/boratas_screens/admin-edit-machine.png"
            alt="Admin edit machine form"
            width={1200}
            height={1500}
            className="rounded-lg border border-neutral-700 mt-6"
          />
        </div> */}

        {/* ───────────────────────────────── 3.10 | Forms */}
        {/* <div id="design-forms" className="space-y-12">
          <h3 className="text-3xl font-bold text-primary">
            3.10 · Inquiry Forms, RHF + Zod
          </h3>

          <pre className="bg-neutral-800 text-white p-4 rounded-lg text-sm overflow-x-auto">
            {`const InquirySchema = z.object({
  name:        z.string().min(2),
  email:       z.string().email(),
  country:     z.string(),
  phone:       z.string().optional(),
  message:     z.string().max(1000),
  machineSlug: z.string().optional(),
})`}
          </pre>

          <ul className="list-disc pl-6 space-y-2">
            <li>Inline error bubbles animate opacity 150 ms.</li>
            <li>
              hCaptcha v2 hidden after first successful solve per session.
            </li>
            <li>Server schema mirror stops type drift.</li>
          </ul>
        </div> */}

        {/* ───────────────────────────────── 3.11 | Motion */}
        {/* <div id="design-motion" className="space-y-12">
          <h3 className="text-3xl font-bold text-primary">
            3.11 · Micro-Interactions & Motion
          </h3>

          <Image
            src="/boratas_screens/motion.gif"
            alt="GIF of card hover, table reveal, hero overlay"
            width={1000}
            height={500}
            className="rounded-lg border border-neutral-700"
          />

          <ul className="list-disc pl-6 space-y-2">
            <li>Framer Motion: spring(120,8) scale-up on card hover.</li>
            <li>
              SpecTable columns cascade fade 80 ms each, disabled if{" "}
              <code>prefers-reduced-motion</code>.
            </li>
            <li>
              SVG crusher diagram draws path over 1.4 s then halts to 0 opacity
              0.6.
            </li>
          </ul>
        </div> */}

        {/* ───────────────────────────────── 3.12 | Accessibility */}
        {/* <div id="design-a11y" className="space-y-12">
          <h3 className="text-3xl font-bold text-primary">
            3.12 · Accessibility & Responsive Craft
          </h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              All color tokens pass WCAG AA; accent orange AA large on dark.
            </li>
            <li>
              Skip-to-content link appears on focus; keyboard nav covers
              mega-menu and galleries.
            </li>
            <li>
              Chevron buttons have <code>aria-label</code> and enlarges hit area
              to 44 × 44 px.
            </li>
          </ul>

          <Image
            src="/boratas_screens/axe.png"
            alt="Lighthouse / Axe report all green"
            width={900}
            height={400}
            className="rounded-lg border border-neutral-700"
          />
        </div> */}

        {/* ───────────────────────────────── 3.13 | Localization */}
        {/* <div id="design-l10n" className="space-y-12">
          <h3 className="text-3xl font-bold text-primary">
            3.13 · Localization & Content Ops
          </h3>

          <p>
            Dual-pane fields in the admin let the marketing team update English
            and Turkish side-by-side; saving triggers on-demand revalidate for
            both locales in &lt; 1.8 s.
          </p>

          <Image
            src="/boratas_screens/admin-translation.png"
            alt="Admin translation side-by-side"
            width={1000}
            height={450}
            className="rounded-lg border border-neutral-700"
          />
        </div> */}

        {/* ───────────────────────────────── 3.14 | Performance-First Design */}
        {/* <div id="design-perf" className="space-y-12">
          <h3 className="text-3xl font-bold text-primary">
            3.14 · Performance-First Design Choices
          </h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              Home hero images <code>blur-up</code> via{" "}
              <code>placeholder="blur"</code>.
            </li>
            <li>
              Spec images offloaded to Cloudflare R2; <code>next/image</code>{" "}
              remote loader caps Vercel transforms.
            </li>
            <li>
              Optional <code>images.unoptimized=true</code> switch during
              traffic spikes.
            </li>
          </ul>
        </div> */}

        {/* ───────────────────────────────── 3.15 | Impact */}
        {/* <div id="design-impact" className="space-y-12">
          <h3 className="text-3xl font-bold text-primary">
            3.15 · Design Impact
          </h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Mobile LCP 1.9 s</strong> (–61 %).
            </li>
            <li>
              <strong>Avg. session +62 %</strong>; users explore product pages
              instead of bouncing.
            </li>
            <li>
              <strong>PDF downloads ×4.6</strong> via machine-level CTAs.
            </li>
            <li>
              <strong>Admin publish time &lt; 6 min</strong> for new machine
              dual-locale (was 1 week).
            </li>
          </ul>
        </div> */}
      </div>
    </Container>
  );
}
