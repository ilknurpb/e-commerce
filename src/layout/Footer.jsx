import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white">
      {/* ÜST KISIM */}
      <div className="mx-auto max-w-[1050px] px-4 py-[40px]">
        <div className="flex items-center justify-between border-b border-[#E6E6E6] pb-[40px]">
          <h2 className="text-[24px] font-bold leading-[32px] tracking-[0.1px] text-[#252B42]">
            Bandage
          </h2>

          <div className="flex items-center gap-5">
            <Link to="#" aria-label="facebook">
              <img
                src="/icons/facebook-blue.svg"
                alt="facebook"
                className="h-6 w-6"
              />
            </Link>
            <Link to="#" aria-label="instagram">
              <img
                src="/icons/instagram-blue.svg"
                alt="instagram"
                className="h-6 w-6"
              />
            </Link>
            <Link to="#" aria-label="twitter">
              <img
                src="/icons/twitter-blue.svg"
                alt="twitter"
                className="h-6 w-6"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* ORTA KISIM */}
      <div className="mx-auto max-w-[1050px] px-4 py-[50px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div>
            <h3 className="mb-5 text-[16px] font-bold leading-[24px] tracking-[0.1px] text-[#252B42]">
              Company Info
            </h3>
            <div className="flex flex-col gap-[10px]">
              <Link className="text-[14px] font-bold text-[#737373]" to="#">
                About Us
              </Link>
              <Link className="text-[14px] font-bold text-[#737373]" to="#">
                Carrier
              </Link>
              <Link className="text-[14px] font-bold text-[#737373]" to="#">
                We are hiring
              </Link>
              <Link className="text-[14px] font-bold text-[#737373]" to="#">
                Blog
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-5 text-[16px] font-bold leading-[24px] tracking-[0.1px] text-[#252B42]">
              Legal
            </h3>
            <div className="flex flex-col gap-[10px]">
              <Link className="text-[14px] font-bold text-[#737373]" to="#">
                About Us
              </Link>
              <Link className="text-[14px] font-bold text-[#737373]" to="#">
                Carrier
              </Link>
              <Link className="text-[14px] font-bold text-[#737373]" to="#">
                We are hiring
              </Link>
              <Link className="text-[14px] font-bold text-[#737373]" to="#">
                Blog
              </Link>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="mb-5 text-[16px] font-bold leading-[24px] tracking-[0.1px] text-[#252B42]">
              Features
            </h3>
            <div className="flex flex-col gap-[10px]">
              <Link className="text-[14px] font-bold text-[#737373]" to="#">
                Business Marketing
              </Link>
              <Link className="text-[14px] font-bold text-[#737373]" to="#">
                User Analytic
              </Link>
              <Link className="text-[14px] font-bold text-[#737373]" to="#">
                Live Chat
              </Link>
              <Link className="text-[14px] font-bold text-[#737373]" to="#">
                Unlimited Support
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-5 text-[16px] font-bold leading-[24px] tracking-[0.1px] text-[#252B42]">
              Resources
            </h3>
            <div className="flex flex-col gap-[10px]">
              <Link className="text-[14px] font-bold text-[#737373]" to="#">
                IOS & Android
              </Link>
              <Link className="text-[14px] font-bold text-[#737373]" to="#">
                Watch Link Demo
              </Link>
              <Link className="text-[14px] font-bold text-[#737373]" to="#">
                Customers
              </Link>
              <Link className="text-[14px] font-bold text-[#737373]" to="#">
                API
              </Link>
            </div>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="mb-5 text-[16px] font-bold leading-[24px] tracking-[0.1px] text-[#252B42]">
              Get In Touch
            </h3>

            <form className="mb-[10px] flex overflow-hidden rounded-[5px] border border-[#E6E6E6]">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-[#F9F9F9] px-5 py-[15px] text-[14px] text-[#737373] outline-none"
              />
              <button
                type="submit"
                className="bg-[#23A6F0] px-5 py-[15px] text-[14px] font-normal text-white"
              >
                Subscribe
              </button>
            </form>

            <p className="text-[12px] font-normal leading-[28px] tracking-[0.2px] text-[#737373]">
              Lore imp sum dolor Amit
            </p>
          </div>
        </div>
      </div>

      {/* ALT KISIM */}
      <div className="bg-[#FAFAFA]">
        <div className="mx-auto max-w-[1050px] px-4 py-[25px]">
          <p className="text-[14px] font-bold leading-[24px] tracking-[0.2px] text-[#737373]">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;