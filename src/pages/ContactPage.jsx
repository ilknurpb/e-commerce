function ContactPage() {
  return (
    <main className="bg-white">
      {/* CONTACT HERO 1 */}
      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto flex max-w-[875px] flex-col items-center text-center">
          <h1 className="max-w-[220px] text-[32px] font-bold leading-[40px] text-[#252B42] md:max-w-[600px] md:text-[58px] md:leading-[80px]">
            Get answers to all your questions.
          </h1>

          <p className="mt-4 max-w-[220px] text-[14px] leading-[20px] text-[#737373] md:mt-6 md:max-w-[470px] md:text-[20px] md:leading-[30px]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics:
          </p>

          <a
            href="mailto:info@bandage.com"
            className="mt-6 rounded-[5px] bg-[#23A6F0] px-6 py-3 text-[14px] font-bold text-white md:mt-8"
          >
            CONTACT OUR COMPANY
          </a>

          <div className="mt-6 flex items-center gap-4 md:mt-8">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F5F5] transition hover:scale-110 hover:bg-black"
            >
              <img src="/icons/twitter.svg" alt="Twitter" className="h-4 w-4" />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F5F5] transition hover:scale-110 hover:bg-[#1877F2]"
            >
              <img src="/icons/facebook.svg" alt="Facebook" className="h-4 w-4" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F5F5] transition hover:scale-110 hover:bg-[#E4405F]"
            >
              <img src="/icons/instagram.svg" alt="Instagram" className="h-4 w-4" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F5F5] transition hover:scale-110 hover:bg-[#0A66C2]"
            >
              <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT HERO 2 */}
      <section className="px-4 pb-12 md:pb-16">
        <div
          className="mx-auto flex min-h-[220px] max-w-[1050px] items-center justify-center bg-cover bg-center px-6 py-10 text-center md:min-h-[300px] md:px-10"
          style={{ backgroundImage: "url('/images/contact-chair.jpg')" }}
        >
          <div className="flex flex-col items-center">
            <h2 className="text-[24px] font-bold leading-[32px] text-[#252B42] md:text-[40px] md:leading-[50px]">
              Questions & Answers
            </h2>

            <p className="mt-3 max-w-[240px] text-[12px] leading-[16px] text-[#737373] md:max-w-[450px] md:text-[14px] md:leading-[20px]">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics:
            </p>

            <a
              href="mailto:info@bandage.com"
              className="mt-5 text-[14px] font-bold text-[#23A6F0]"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION 3 */}
      <section className="px-4 pb-12 md:pb-16">
        <div
          className="mx-auto max-w-[1050px] overflow-hidden bg-cover bg-[center_top]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(1,78,92,0.92) 0%, rgba(35,166,240,0.35) 65%, rgba(35,166,240,0.1) 100%),
              url('/images/contact-background.png')
            `,
          }}
        >
          <div className="grid grid-cols-1 px-8 py-12 text-white md:grid-cols-2 md:px-14 md:py-16">
            <div className="flex items-start md:items-center">
              <div className="max-w-[260px]">
                <h2 className="text-[32px] font-bold leading-[40px] md:text-[40px] md:leading-[50px]">
                  CONTACT US
                </h2>

                <p className="mt-5 text-[14px] leading-[20px] text-white/90">
                  Problems trying to resolve the conflict between the two major
                  realms of Classical physics: Newtonian mechanics
                </p>

                <a
                  href="mailto:info@bandage.com"
                  className="mt-6 inline-block rounded-[5px] bg-[#23A6F0] px-6 py-3 text-[14px] font-bold text-white"
                >
                  CONTACT US
                </a>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 justify-items-center gap-y-10 sm:grid-cols-2 md:mt-0 md:justify-items-start">
              <div className="max-w-[220px] text-center md:text-left">
                <h3 className="text-[24px] font-bold">Paris</h3>
                <div className="mx-auto mt-3 h-[2px] w-10 bg-white/50 md:mx-0" />
                <p className="mt-4 text-[14px] leading-[28px] text-white/90">
                  1901 Thorn ridge Cir.
                  <br />
                  75000 Paris
                  <br />
                  Phone : <a href="tel:+451215215">+451 215 215</a>
                  <br />
                  Fax : +451 215 215
                </p>
              </div>

              <div className="max-w-[220px] text-center md:text-left">
                <h3 className="text-[24px] font-bold">New York</h3>
                <div className="mx-auto mt-3 h-[2px] w-10 bg-white/50 md:mx-0" />
                <p className="mt-4 text-[14px] leading-[28px] text-white/90">
                  2715 Ash Dr. San Jose,
                  <br />
                  75000 Paris
                  <br />
                  Phone : <a href="tel:+451215215">+451 215 215</a>
                  <br />
                  Fax : +451 215 215
                </p>
              </div>

              <div className="max-w-[220px] text-center md:text-left">
                <h3 className="text-[24px] font-bold">Berlin</h3>
                <div className="mx-auto mt-3 h-[2px] w-10 bg-white/50 md:mx-0" />
                <p className="mt-4 text-[14px] leading-[28px] text-white/90">
                  4140 Parker Rd.
                  <br />
                  75000 Paris
                  <br />
                  Phone : <a href="tel:+451215215">+451 215 215</a>
                  <br />
                  Fax : +451 215 215
                </p>
              </div>

              <div className="max-w-[220px] text-center md:text-left">
                <h3 className="text-[24px] font-bold">London</h3>
                <div className="mx-auto mt-3 h-[2px] w-10 bg-white/50 md:mx-0" />
                <p className="mt-4 text-[14px] leading-[28px] text-white/90">
                  3517 W. Gray St. Utica,
                  <br />
                  75000 Paris
                  <br />
                  Phone : <a href="tel:+451215215">+451 215 215</a>
                  <br />
                  Fax : +451 215 215
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION 4 */}
      <section className="px-4 pb-14 md:pb-20">
        <div className="mx-auto grid max-w-[1050px] overflow-hidden md:grid-cols-[1.2fr_0.8fr]">
          <div className="flex items-center bg-[#2A7CC7] px-8 py-12 text-white md:px-14 md:py-16">
            <div className="max-w-[320px]">
              <p className="text-[12px] font-bold uppercase tracking-wide md:text-[14px]">
                WORK WITH US
              </p>

              <h2 className="mt-5 text-[32px] font-bold leading-[40px] md:mt-6 md:text-[40px] md:leading-[50px]">
                Now Let&apos;s grow Yours
              </h2>

              <p className="mt-5 text-[14px] leading-[20px] text-white/90 md:mt-6">
                The gradual accumulation of information about atomic and
                small-scale behavior during the first quarter of the 20th
              </p>

              <a
                href="mailto:info@bandage.com"
                className="mt-6 inline-block rounded-[5px] border border-white px-6 py-3 text-[14px] font-bold text-white md:mt-8"
              >
                Button
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <img
              src="/images/contact-woman.jpg"
              alt="woman"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;