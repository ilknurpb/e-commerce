import { Play } from "lucide-react";
import TeamCard from "../components/TeamCard";
import { teamData } from "../data/teamData";

function AboutPage() {
  const stats = [
    { id: 1, value: "15K", label: "Happy Customers" },
    { id: 2, value: "150K", label: "Monthly Visitors" },
    { id: 3, value: "15", label: "Countries Worldwide" },
    { id: 4, value: "100+", label: "Top Partners" },
  ];

  const brands = [
    "/icons/hooli.svg",
    "/icons/lyft.svg",
    "/icons/brand-bird.svg",
    "/icons/stripe.svg",
    "/icons/aws.svg",
    "/icons/reddit.svg",
  ];

  // 🔥 YENİ: TÜM RESİMLER URL'DEN
  const aboutImages = {
    hero:
      "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=700&auto=format&fit=crop",
    video:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop",
    cta:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=700&auto=format&fit=crop",
  };

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="overflow-hidden bg-[#FAFAFA]">
        <div className="mx-auto max-w-[390px] px-6 py-14 md:max-w-[1200px] md:px-8 md:py-16">
          <div className="flex flex-col items-center text-center md:flex-row md:items-center md:justify-between md:text-left">
            <div className="max-w-[280px] md:max-w-[420px]">
              <p className="hidden text-[12px] font-bold text-[#252B42] md:block">
                ABOUT COMPANY
              </p>

              <h1 className="text-[40px] font-bold leading-[50px] text-[#252B42] md:mt-4 md:text-[58px] md:leading-[80px]">
                ABOUT US
              </h1>

              <p className="mt-8 text-[20px] leading-[30px] text-[#737373] md:mt-5 md:max-w-[340px]">
                We know how large objects will act, but things on a small scale just do not act that way.
              </p>

              <button className="mt-8 rounded-[5px] bg-[#23A6F0] px-10 py-4 text-[14px] font-bold text-white">
                Get Quote Now
              </button>
            </div>

            <div className="relative mt-16 flex w-full justify-center md:mt-0 md:h-[520px] md:w-[600px]">
              <div className="absolute left-1/2 top-[28px] h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-[#F7DCDC] md:left-auto md:right-[70px] md:top-[40px] md:h-[420px] md:w-[420px] md:translate-x-0"></div>

              {/* 🔥 URL IMAGE */}
              <img
                src={aboutImages.hero}
                alt="about hero"
                className="relative z-10 h-[360px] object-contain md:absolute md:bottom-0 md:right-0 md:h-[520px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="mx-auto max-w-[390px] px-6 py-16 md:max-w-[1050px] md:px-8 md:py-16">
        <div className="relative overflow-hidden rounded-[20px]">
          {/* 🔥 URL IMAGE */}
          <img
            src={aboutImages.video}
            alt="video cover"
            className="h-[316px] w-full object-cover md:h-[540px]"
          />

          <button className="absolute left-1/2 top-1/2 flex h-[68px] w-[68px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#23A6F0] text-white md:h-[92px] md:w-[92px]">
            <Play size={24} fill="white" className="ml-1" />
          </button>
        </div>
      </section>

      {/* TEAM */}
      <section className="mx-auto max-w-[390px] px-6 py-20 md:max-w-[1050px] md:px-8 md:py-20">
        <div className="text-center">
          <h2 className="text-[40px] font-bold leading-[50px] text-[#252B42]">
            Meet Our Team
          </h2>

          <p className="mx-auto mt-4 max-w-[300px] text-[14px] leading-5 text-[#737373] md:max-w-[470px]">
            Problems trying to resolve the conflict between the two major realms of Classical physics.
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center gap-10 md:flex-row md:justify-center md:gap-8">
          {teamData.slice(0, 3).map((member) => (
            <div key={member.id} className="w-full max-w-[316px]">
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </section>

      {/* BRANDS */}
      <section className="bg-[#FAFAFA]">
        <div className="mx-auto max-w-[390px] px-6 py-20 md:max-w-[1050px] md:px-8 md:py-20">
          <div className="text-center">
            <h2 className="text-[40px] font-bold leading-[50px] text-[#252B42]">
              Big Companies Are Here
            </h2>

            <p className="mx-auto mt-4 max-w-[320px] text-[14px] leading-5 text-[#737373] md:max-w-[470px]">
              Problems trying to resolve the conflict between the two major realms.
            </p>
          </div>

          <div className="mt-16 flex flex-col items-center gap-12 md:flex-row md:justify-between md:gap-8">
            {brands.map((brand, index) => (
              <img
                key={index}
                src={brand}
                alt="brand"
                className="max-h-[60px] object-contain opacity-60"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[390px] md:max-w-[1440px]">
        <div className="bg-[#2A7CC7] px-6 py-16 text-center text-white md:mx-auto md:flex md:max-w-[1050px] md:items-stretch md:px-0 md:py-0">
          <div className="flex flex-col md:w-1/2 md:justify-center md:px-16 md:py-20 md:text-left">
            <p className="text-[14px] font-bold">WORK WITH US</p>

            <h2 className="mt-6 text-[40px] font-bold leading-[50px]">
              Now Let’s grow Yours
            </h2>

            <p className="mt-6 text-[14px] leading-5 md:max-w-[350px]">
              The gradual accumulation of information about atomic and small-scale behavior.
            </p>

            <button className="mt-8 inline-flex w-fit self-center rounded-[5px] border border-white px-10 py-3 text-[14px] font-bold text-white md:self-start">
              Button
            </button>
          </div>

          {/* 🔥 URL IMAGE */}
          <div className="hidden md:block md:w-1/2">
            <img
              src={aboutImages.cta}
              alt="cta"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;