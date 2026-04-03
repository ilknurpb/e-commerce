import { Link } from "react-router-dom";

function NeuralUniverse() {
  return (
    <section className="bg-[#FAFAFA]">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between">
        {/* SOL GÖRSEL */}
        <div className="w-1/2">
          <img
            src="/images/neural-universe.png"
            alt="Part of the Neural Universe"
            className="h-[682px] w-full object-cover"
          />
        </div>

        {/* SAĞ İÇERİK */}
        <div className="flex w-1/2 justify-center px-8">
          <div className="max-w-[480px]">
            <p className="mb-6 text-[16px] font-bold uppercase leading-[24px] tracking-[0.1px] text-[#BDBDBD]">
              SUMMER 2020
            </p>

            <h2 className="mb-8 text-[58px] font-bold leading-[80px] tracking-[0.2px] text-[#252B42]">
              Part of the Neural Universe
            </h2>

            <p className="mb-8 max-w-[376px] text-[20px] font-normal leading-[30px] tracking-[0.2px] text-[#737373]">
              We know how large objects will act, but things on a small scale.
            </p>

            <div className="flex items-center gap-4">
              <Link
                to="/shop"
                className="rounded-[5px] bg-[#2DC071] px-10 py-[15px] text-[14px] font-bold leading-[22px] tracking-[0.2px] text-white transition hover:opacity-90"
              >
                BUY NOW
              </Link>

              <Link
                to="/about"
                className="rounded-[5px] border border-[#2DC071] px-10 py-[15px] text-[14px] font-bold leading-[22px] tracking-[0.2px] text-[#2DC071] transition hover:bg-[#2DC071] hover:text-white"
              >
                READ MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NeuralUniverse;