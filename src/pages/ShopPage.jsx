


import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

// Shop page üst kategori kartları
const shopCategories = [
    {
        id: 1,
        title: "CLOTHS",
        items: "5 Items",
        image:
            "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 2,
        title: "CLOTHS",
        items: "5 Items",
        image:
            "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 3,
        title: "CLOTHS",
        items: "5 Items",
        image:
            "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 4,
        title: "CLOTHS",
        items: "5 Items",
        image:
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 5,
        title: "CLOTHS",
        items: "5 Items",
        image:
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
    },
];

function ShopPage() {
    // 🔥 BestSeller olmayan ürünler
    const shopProducts = products.filter(
        (product) => product.isBestSeller === false
    );

    return (
        <main className="bg-white">

            {/* -------- SHOP HEADER -------- */}
            <section className="bg-[#FAFAFA] mb-16">
                <div className="mx-auto flex max-w-7xl flex-col gap-6">

                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <h1 className="text-3xl font-bold text-[#252B42] md:text-[40px]">
                            Shop
                        </h1>

                        <div className="flex items-center gap-2 text-sm font-bold">
                            <span className="text-[#252B42]">Home</span>
                            <span className="text-[#BDBDBD]">{">"}</span>
                            <span className="text-[#BDBDBD]">Shop</span>
                        </div>
                    </div>

                    {/* CATEGORY CARDS */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
                        {shopCategories.map((category) => (
                            <div key={category.id} className="relative h-[360px] sm:h-[300px]overflow-hidden ">
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="h-full w-full object-cover object-top"
                                />

                                <div className="absolute inset-0 bg-black/20" />

                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                                    <h3 className="text-lg font-bold">{category.title}</h3>
                                    <p className="mt-2 text-sm font-semibold">{category.items}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* -------- FILTER ROW -------- */}
            <section className="bg-[#FAFAFA] mb-16">
                <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">

                    <p className="text-sm font-bold text-[#737373]">
                        Showing all {shopProducts.length} results
                    </p>

                    <div className="flex flex-col gap-4 md:flex-row md:items-center">

                        <div className="flex items-center gap-3">
                            <span className="text-sm font-bold text-[#737373]">Views:</span>

                            <button className="flex h-11 w-11 items-center justify-center rounded-md border border-[#ECECEC] bg-white">
                                ⊞
                            </button>

                            <button className="flex h-11 w-11 items-center justify-center rounded-md border border-[#ECECEC] bg-white">
                                ≣
                            </button>
                        </div>

                        <div className="flex gap-3">
                            <select className="h-12 rounded-md border border-[#DDDDDD] bg-white px-4 text-sm">
                                <option>Popularity</option>
                                <option>Newest</option>
                                <option>Price: Low to High</option>
                            </select>

                            <button className="h-12 rounded-md bg-[#23A6F0] px-6 text-sm font-bold text-white">
                                Filter
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            {/* -------- PRODUCT GRID -------- */}
            <section className="mb-16">
                <div className="mx-auto max-w-7xl">

                    <div className="grid grid-cols-1 justify-items-center gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                        {shopProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    {/* -------- PAGINATION -------- */}
                    <div className="mt-16 flex justify-center">
                        <div className="flex overflow-hidden rounded-md border border-[#BDBDBD]">

                            <button className="h-[74px] min-w-[83px] bg-[#F3F3F3] text-sm font-bold text-[#BDBDBD]">
                                First
                            </button>

                            <button className="h-[74px] min-w-[46px] bg-white text-sm font-bold text-[#23A6F0]">
                                1
                            </button>

                            <button className="h-[74px] min-w-[46px] bg-[#23A6F0] text-sm font-bold text-white">
                                2
                            </button>

                            <button className="h-[74px] min-w-[46px] bg-white text-sm font-bold text-[#23A6F0]">
                                3
                            </button>

                            <button className="h-[74px] min-w-[83px] bg-white text-sm font-bold text-[#23A6F0]">
                                Next
                            </button>

                        </div>
                    </div>

                </div>
            </section>
            <section className="bg-[#FAFAFA] mb-16">
                <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <img
                        src="/icons/hooli.svg"
                        alt="Hooli"
                        className="h-8 object-contain md:h-10"
                    />
                    <img
                        src="https://cdn.simpleicons.org/lyft/737373"
                        alt="Lyft"
                        className="h-8 object-contain md:h-10"
                    />
                    <img
                        src="/icons/piedPiper.svg"
                        alt="Pied Piper"
                        className="h-8 object-contain md:h-10"
                    />
                    <img
                        src="https://cdn.simpleicons.org/stripe/737373"
                        alt="Stripe"
                        className="h-8 object-contain md:h-10"
                    />
                    <img
                        src="/icons/aws.svg"
                        alt="AWS"
                        className="h-8 object-contain md:h-10"
                    />
                    <img
                        src="https://cdn.simpleicons.org/reddit/737373"
                        alt="Reddit"
                        className="h-8 object-contain md:h-10"
                    />
                </div>
            </section>

        </main>
    );
}

export default ShopPage;