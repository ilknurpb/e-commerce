


const EditorsPick = () => {
  const editorsPick = [
    {
      id: 1,
      image: "/images/men.jpg",
      label: "MEN",
    },
    {
      id: 2,
      image: "/images/women.jpg",
      label: "WOMEN",
    },
    {
      id: 3,
      image: "/images/accessories.jpg",
      label: "ACCESSORIES",
    },
    {
      id: 4,
      image: "/images/kids.jpg",
      label: "KIDS",
    },
  ];

  return (
    <section className="bg-[#FAFAFA] py-[80px]">
      <div className="mx-auto max-w-[1050px]">

        {/* BAŞLIK */}
        <div className="mb-[48px] text-center">
          <h2 className="text-[24px] font-bold text-[#252B42]">
            EDITOR’S PICK
          </h2>
          <p className="mt-2 text-[14px] text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-3 gap-[30px]">

          {/* MEN */}
          <div className="relative h-[500px] overflow-hidden">
            <img
              src={editorsPick[0].image}
              alt="men"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-4 left-4 bg-white px-4 py-1 text-sm font-bold">
              {editorsPick[0].label}
            </span>
            <a
              href="#"
              className="absolute bottom-4 left-4 bg-white px-4 py-1 text-sm font-bold hover:bg-[#23A6F0] hover:text-white transition"
            >
             MEN
            </a>
          </div>

          {/* WOMEN */}
          <div className="relative h-[500px] overflow-hidden">
            <img
              src={editorsPick[1].image}
              alt="women"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-4 left-4 bg-white px-4 py-1 text-sm font-bold">
              {editorsPick[1].label}
            </span>
            <a
              href="#"
              className="absolute bottom-4 left-4 bg-white px-4 py-1 text-sm font-bold hover:bg-[#23A6F0] hover:text-white transition"
            >
              WOMEN
            </a> 
          </div>

          {/* SAĞ KISIM */}
          <div className="flex flex-col gap-[30px]">

            {/* ACCESSORIES */}
            <div className="relative h-[235px] overflow-hidden">
              <img
                src={editorsPick[2].image}
                alt="accessories"
                className="w-full h-full object-cover object-top"
              />
              <span className="absolute bottom-4 left-4 bg-white px-4 py-1 text-sm font-bold">
                {editorsPick[2].label}
              </span>
                <a
                    href="#"    
                    className="absolute bottom-4 left-4 bg-white px-4 py-1 text-sm font-bold hover:bg-[#23A6F0] hover:text-white transition"
                >
                    ACCESSORIES
                </a>                              
            </div>

            {/* KIDS */}
            <div className="relative h-[235px] overflow-hidden">
              <img
                src={editorsPick[3].image}
                alt="kids"
                className="w-full h-full object-cover object-top"
              />
              <span className="absolute bottom-4 left-4 bg-white px-4 py-1 text-sm font-bold">
                {editorsPick[3].label}
              </span>
                <a
                    href="#"
                    className="absolute bottom-4 left-4 bg-white px-4 py-1 text-sm font-bold hover:bg-[#23A6F0] hover:text-white transition"
                >
                    KIDS
                </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default EditorsPick;