export default function InformationArchitecture() {
  return (
    <>
      <div id="design-ia" className="space-y-6 scroll-mt-40">
        <h3 className="text-xl font-bold text-primary">
          3.2 - Information Architecture & Sitemap
        </h3>

        <p>
          The old Boratas website suffered from confusing navigation and
          disorganized content. Important details like machine specifications,
          media, and brochures were scattered and hard to find. Users struggled
          to locate vital information, and everything required excessive clicks
          and guesswork.
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
              <strong>Partnership Opportunities:</strong> Clear presentation of
              how potential collaborators can engage with Boratas.
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
          machines, articles, inquiries, email communication, job listings, and
          document catalogs efficiently:
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
          detail pages stream swiftly from PostgreSQL, typically loading within
          ~240 ms. This robust and scalable structure has significantly improved
          usability, SEO, and overall user experience.
        </p>
      </div>
    </>
  );
}
