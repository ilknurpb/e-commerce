import { Link } from "react-router-dom";

const plans = [
    {
        id: 1,
        name: "FREE",
        price: "0",
        dark: false,
    },
    {
        id: 2,
        name: "STANDARD",
        price: "9.99",
        dark: true,
    },
    {
        id: 3,
        name: "PREMIUM",
        price: "19.99",
        dark: false,
    },
];

const features = [
    { text: "Unlimited product updates", active: true },
    { text: "Unlimited product updates", active: true },
    { text: "Unlimited product updates", active: true },
    { text: "1GB Cloud storage", active: false },
    { text: "Email and community support", active: false },
];

const brands = [
    "/icons/hooli.svg",
    "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/lyft.svg",
    "/icons/piper.svg",
    "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/stripe.svg",
    "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonaws.svg",
    "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/reddit.svg",
];

function PricingPage() {
    return (
        <main className="bg-[#FAFAFA]">
            {/* HERO */}
            <section className="bg-white px-4 py-20 text-center">
                <p className="text-[14px] font-bold text-[#737373]">PRICING</p>

                <h1 className="mt-4 text-[40px] font-bold leading-[50px] text-[#252B42] md:text-[58px] md:leading-[80px]">
                    Simple Pricing
                </h1>

                <div className="mt-4 flex items-center justify-center gap-3 text-[14px] font-bold">
                    <Link to="/" className="text-[#252B42]">
                        Home
                    </Link>
                    <span className="text-[#BDBDBD]">{">"}</span>
                    <span className="text-[#737373]">Pricing</span>
                </div>
            </section>

            {/* PRICING */}
            <section className="px-4 py-20 text-center">
                <h2 className="text-[40px] font-bold text-[#252B42]">Pricing</h2>

                <p className="mx-auto mt-3 max-w-[470px] text-[14px] leading-5 text-[#737373]">
                    Problems trying to resolve the conflict between the two major realms
                    of Classical physics: Newtonian mechanics
                </p>

                <div className="mt-8 flex items-center justify-center gap-3">
                    <span className="text-[14px] font-bold text-[#252B42]">Monthly</span>

                    <button className="h-[28px] w-[50px] rounded-full border border-[#23A6F0] bg-white p-1">
                        <span className="block h-[18px] w-[18px] rounded-full bg-[#D0EAFE]" />
                    </button>

                    <span className="text-[14px] font-bold text-[#252B42]">Yearly</span>

                    <span className="rounded-full bg-[#B2E3FF] px-5 py-2 text-[14px] font-bold text-[#23A6F0]">
                        Save 25%
                    </span>
                </div>

                <div className="mx-auto mt-16 flex max-w-[985px] flex-col items-center md:flex-row md:items-end md:justify-center">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`w-full max-w-[330px] rounded-[10px] border border-[#23A6F0] px-10 py-12 ${plan.dark
                                    ? "bg-[#252B42] text-white md:py-20"
                                    : "bg-white text-[#252B42]"
                                }`}
                        >
                            <h3 className="text-[24px] font-bold">{plan.name}</h3>

                            <p
                                className={`mx-auto mt-8 max-w-[170px] text-[14px] font-bold leading-6 ${plan.dark ? "text-white" : "text-[#737373]"
                                    }`}
                            >
                                Organize across all apps by hand
                            </p>

                            <div className="mt-8 flex items-center justify-center gap-2 text-[#23A6F0]">
                                <span className="text-[40px] font-bold">{plan.price}</span>
                                <div className="text-left">
                                    <p className="text-[16px] font-bold">$</p>
                                    <p className="text-[14px] font-bold">Per Month</p>
                                </div>
                            </div>

                            <div className="mt-8 flex flex-col gap-4 text-left">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <span
                                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white ${feature.active ? "bg-[#2DC071]" : "bg-[#BDBDBD]"
                                                }`}
                                        >
                                            ✓
                                        </span>

                                        <p className="text-[14px] font-bold leading-6">
                                            {feature.text}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <button
                                className={`mt-8 w-full rounded-[5px] py-4 text-[14px] font-bold text-white ${plan.dark ? "bg-[#23A6F0]" : "bg-[#252B42]"
                                    }`}
                            >
                                Try for free
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* BRANDS */}
            <section className="px-4 py-16 text-center">
                <h3 className="text-[20px] font-bold text-[#252B42]">
                    Trusted By Over 4000 Big Companies
                </h3>

                <div className="mx-auto mt-12 grid max-w-[1050px] grid-cols-2 items-center justify-items-center gap-10 sm:grid-cols-3 lg:grid-cols-6">
                    {brands.map((brand, index) => (
                        <img
                            key={index}
                            src={brand}
                            alt="brand"
                            className="h-[45px] w-[110px] object-contain opacity-40 grayscale"
                        />
                    ))}
                </div>
            </section>
            {/* FAQ */}
            <section className="bg-white px-4 py-24">
                <div className="mx-auto max-w-[1050px]">
                    <div className="text-center">
                        <h2 className="text-[40px] font-bold text-[#252B42]">Pricing FAQs</h2>

                        <p className="mx-auto mt-3 max-w-[470px] text-[20px] leading-[30px] text-[#737373]">
                            Problems trying to resolve the conflict between the two major realms of Classical physics
                        </p>
                    </div>

                    <div className="mt-20 grid grid-cols-1 gap-x-20 gap-y-12 md:grid-cols-2">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item} className="flex gap-5">
                                <span className="text-[24px] font-bold text-[#23A6F0]">›</span>

                                <div>
                                    <h3 className="text-[16px] font-bold text-[#252B42]">
                                        the quick fox jumps over the lazy dog
                                    </h3>

                                    <p className="mt-2 text-[14px] leading-5 text-[#737373]">
                                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                                        RELIT official consequat door ENIM RELIT Mollie. Excitation venial
                                        consequent sent nostrum met.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="mt-16 text-center text-[20px] leading-[30px] text-[#737373]">
                        Haven’t got your answer? Contact our support
                    </p>
                </div>
            </section>

            {/* FREE TRIAL */}
            <section className="bg-white px-4 py-24 text-center">
                <div className="mx-auto max-w-[700px]">
                    <h2 className="text-[40px] font-bold leading-[50px] text-[#252B42]">
                        Start your 14 days free trial
                    </h2>

                    <p className="mx-auto mt-6 max-w-[420px] text-[14px] leading-5 text-[#737373]">
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                        RELIT official consequat.
                    </p>

                    <a
                        href="mailto:info@bandage.com"
                        className="mt-8 inline-block rounded-[5px] bg-[#23A6F0] px-10 py-4 text-[14px] font-bold text-white"
                    >
                        Try it free now
                    </a>

                    <div className="mt-8 flex justify-center gap-8">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/twitter-blue.svg" alt="Twitter" className="h-7 w-7" />
                        </a>

                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/facebook-blue.svg" alt="Facebook" className="h-7 w-7" />
                        </a>

                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/instagram-blue.svg" alt="Instagram" className="h-7 w-7" />
                        </a>

                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/linkedin-contact.svg" alt="LinkedIn" className="h-7 w-7" />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default PricingPage;