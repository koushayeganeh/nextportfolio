export default function Issues() {
  return (
    <>
      <div id="issues" className="space-y-6 scroll-mt-40">
        <h3 className="text-xl font-bold text-primary">
          3.1 – Identifying Key Issues
        </h3>
        <p>
          Having worked at Boratas, I was already deeply familiar with the
          problems of our previous website. By closely examining customer
          feedback, dealer suggestions, and discussions with our sales and
          marketing teams, I identified the major usability and design issues:
        </p>
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            [
              "Hidden Specifications",
              "Machine specs—the most crucial info—were buried inside tabs, making them hard to find.",
            ],
            [
              "Lack of Centralized Listings",
              "No single page showed all machines and categories in one place.",
            ],
            [
              "Scattered Content",
              "Media, specs, PDFs, and tables were spread across tabs, frustrating visitors.",
            ],
            [
              "Poor Mobile Experience",
              "Specs tables weren’t responsive, forcing pinch/zoom on phones.",
            ],
            [
              "Ineffective SEO",
              "The site wasn’t optimized, so search engines barely noticed it.",
            ],
            [
              "Weak Admin Panel",
              "The backend was outdated, cumbersome, and didn’t fit Boratas’s workflow.",
            ],
            [
              "Unprofessional Design",
              "Visuals lacked polish; the overall look felt dated.",
            ],
            [
              "No User Tracking",
              "There was no way to track interactions or gather analytics.",
            ],
            [
              "No Inquiry Management",
              "No tools existed to handle or analyze incoming leads.",
            ],
            [
              "No Centralized Email Library",
              "Customer emails and templates had no central repository.",
            ],
          ].map(([title, desc], idx) => (
            <div
              key={title}
              className={`
        p-4 rounded-lg border-l-4 border-[#26a69a]
        bg-[#1b1d1b]
      `}
            >
              <dt className="text-base font-semibold text-white">{title}</dt>
              <dd className="mt-1 text-sm text-primary-alt leading-relaxed">
                {desc}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
}
