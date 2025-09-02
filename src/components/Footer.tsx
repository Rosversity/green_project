import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    main: [
      { name: "Careers", href: "/careers" },
      { name: "Subscribe", href: "/subscribe" },
      { name: "Alumni", href: "/alumni" },
      { name: "About", href: "/about" },
      { name: "Offices", href: "/offices" },
    ],
    legal: [
      { name: "PRIVACY POLICY", href: "/privacy" },
      { name: "TERMS OF USE", href: "/terms" },
      { name: "SITEMAP", href: "/sitemap" },
      { name: "RESPONSIBLE DISCLOSURE", href: "/responsible-disclosure" },
      { name: "COOKIE PREFERENCES", href: "/cookies" },
    ],
    social: [
      { name: "LinkedIn", href: "https://linkedin.com" },
      { name: "Facebook", href: "https://facebook.com" },
      { name: "Twitter", href: "https://twitter.com" },
      { name: "Instagram", href: "https://instagram.com" },
      { name: "YouTube", href: "https://youtube.com" },
    ]
  };

  return (
    <footer className="bg-neutral-200 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 mb-12">
          {/* Company tagline */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-light text-black mb-4">
              Unlocking the Potential of Those Who Advance the World
            </h2>
          </div>

          {/* Main links */}
          <div className="lg:col-span-1">
            <div className="flex flex-wrap gap-6">
              {footerLinks.main.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-black hover:text-green-500 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-black mb-4">
              How can we assist you?
            </h3>
            <p className="text-gray-500 mb-6 text-sm">
              We value the opportunity to connect with you. Please submit your inquiries and feedback, and our experienced professionals are ready to assist you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-green-300 text-black font-medium rounded hover:bg-green-700 hover:text-white transition-colors"
            >
              CONTACT US →
            </Link>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-neutral-300">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Logo and company info */}
            <div className="flex items-center gap-4">
              <div className="text-xl font-bold text-black">
                <span className="bg-black text-white px-2 py-1 rounded">GREEN</span>
                <span className="ml-1">PROJECT


                  
                </span>
              </div>
              <span className="text-sm text-gray-500">
                CONSULTING GROUP
              </span>
            </div>

            {/* Language selector */}
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="font-medium text-black">EN</span>
              <span>|</span>
              <Link href="/ja" className="hover:text-green-500">JA</Link>
            </div>
          </div>

          {/* Legal links */}
          <div className="mt-8 flex flex-wrap gap-6 text-xs text-gray-500 uppercase">
            {footerLinks.legal.map((link, index) => (
              <span key={link.name} className="flex items-center">
                <Link
                  href={link.href}
                  className="hover:text-green-500 transition-colors"
                >
                  {link.name}
                </Link>
                {index < footerLinks.legal.length - 1 && (
                  <span className="ml-6 text-gray-400">|</span>
                )}
              </span>
            ))}
          </div>

          {/* Social links */}
          <div className="mt-6 flex items-center gap-4">
            <span className="text-sm font-medium text-black">FOLLOW US</span>
            <div className="flex gap-4">
              {footerLinks.social.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-gray-500 hover:text-green-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{social.name}</span>
                  <div className="w-6 h-6 bg-gray-400 rounded"></div>
                </Link>
              ))}
            </div>
          </div>

          {/* Disclaimer and copyright */}
          <div className="mt-8 pt-8 border-t border-neutral-300 text-xs text-gray-500 space-y-4">
            <p>
              Green Project Consulting Group is an Equal Opportunity Employer. All qualified applicants will receive consideration for employment without regard to race, color, age, religion, sex, sexual orientation, gender identity / expression, national origin, protected veteran status, or any other characteristic protected under federal, state or local law, where applicable, and those with criminal histories will be considered in a manner consistent with applicable state and local laws.
            </p>
            <p>
              Pursuant to Transparency in Coverage final rules (85 FR 72158) set forth in the United States by The Departments of the Treasury, Labor, and Health and Human Services{" "}
              <Link href="/machine-readable-files" className="underline hover:text-green-500">
                click here to access required Machine Readable Files
              </Link>
              {" "}or{" "}
              <Link href="/federal-no-surprises" className="underline hover:text-green-500">
                here to access the Federal No Surprises Bill Act Disclosure.
              </Link>
            </p>
            <p>© {currentYear} Green Project Consulting Group</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 