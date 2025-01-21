import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-gray-50 text-gray-700 dark:bg-gray-900 dark:text-gray-200"
    >
      {/* Divider */}
      <hr className="w-11/12 mx-auto border-gray-300 dark:border-gray-700" />

      {/* Main Footer Content */}
      <section className="container py-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
        {/* Logo and Tagline */}
        <div className="col-span-full xl:col-span-2 flex flex-col items-start">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex items-center gap-2 text-gray-800 dark:text-gray-100"
          >
            <LogoIcon />
          </a>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            Empowering Your Digital Presence.
          </p>
        </div>

        {/* Follow Us */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100">
            Follow Us
          </h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-70 hover:opacity-100 transition-all text-gray-600 dark:text-gray-300"
            >
              Instagram
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-70 hover:opacity-100 transition-all text-gray-600 dark:text-gray-300"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* Platforms */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100">
            Contact
          </h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="tel:+918660822267"
              aria-label="Call +91 86608 22267"
              className="opacity-70 hover:opacity-100 transition-all text-gray-600 dark:text-gray-300"
            >
              +91 86608 22267
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="mailto:support@abumatics.com"
              className="opacity-70 hover:opacity-100 transition-all text-gray-600 dark:text-gray-300"
            >
              support@abumatics.com
            </a>
            </div>
            <div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Abumatics,+Moulana+Azad+Road,+Bhatkal+581320"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="View Abumatics location on Google Maps"
              className="opacity-70 hover:opacity-100 transition-all text-gray-600 dark:text-gray-300"
            >
              Abumatics, Moulana Azad Road, Bhatkal 581320
            </a>
          </div>
        
        </div>
      </section>

      {/* Credits Section */}
      <section className="container pb-14 text-center">
        <h3 className="text-sm text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Abumatics. Crafted with love by{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.linkedin.com/in/inshal-armar-172895334/"
            className="text-primary dark:text-primary transition-all hover:border-b-2"
          >
            Inshal
          </a>{" "}
          &{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.linkedin.com/in/majeed-mohtesham"
            className="text-primary dark:text-primary transition-all hover:border-b-2"
          >
            Abdul Majeed
          </a>
        </h3>
      </section>
    </footer>
  );
};
