import { useEffect, useMemo, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Eye, Heart, ShoppingCart, ChevronRight } from "lucide-react";
import { fetchProductById } from "../store/thunks/productThunks";
import ProductCard from "../components/ProductCard";

function ProductDetailPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { productId } = useParams();

    const product = useSelector((state) => state.product.product);
    const productList = useSelector((state) => state.product.productList);
    const fetchState = useSelector((state) => state.product.fetchState);

    const [selectedImage, setSelectedImage] = useState("");

    useEffect(() => {
        dispatch(fetchProductById(productId));
    }, [dispatch, productId]);

    const images = useMemo(() => {
        return product?.images?.length
            ? product.images.map((image) => image.url)
            : ["https://placehold.co/500x700"];
    }, [product]);

    useEffect(() => {
        setSelectedImage(images[0]);
    }, [images]);

    const bestsellerProducts = useMemo(() => {
        return productList
            .filter((item) => String(item.id) !== String(productId))
            .slice(0, 8);
    }, [productList, productId]);

    const currentIndex = images.indexOf(selectedImage);

    const nextImage = () => {
        const nextIndex = (currentIndex + 1) % images.length;
        setSelectedImage(images[nextIndex]);
    };

    const prevImage = () => {
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setSelectedImage(images[prevIndex]);
    };

    if (fetchState === "FETCHING") {
        return (
            <main className="flex min-h-[500px] items-center justify-center bg-[#FAFAFA]">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#23A6F0] border-t-transparent" />
            </main>
        );
    }

    if (fetchState === "FAILED") {
        return (
            <main className="mx-auto max-w-[1050px] px-4 py-20">
                <button
                    type="button"
                    onClick={() => history.goBack()}
                    className="mb-6 rounded bg-[#23A6F0] px-5 py-2 text-sm font-bold text-white"
                >
                    Back
                </button>

                <h2 className="text-2xl font-bold text-red-500">
                    Ürün detayı alınamadı.
                </h2>
            </main>
        );
        
    }
    if (!product || !product.id) {
            return (
                <main className="flex min-h-[500px] items-center justify-center bg-[#FAFAFA]">
                    <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#23A6F0] border-t-transparent" />
                </main>
            );
        }

    return (
        <div className="bg-[#FAFAFA]">
            {/* breadcrumb */}
            <section className="mx-auto max-w-[1050px] px-4 py-6 md:py-8">
                <div className="flex items-center gap-2 text-[14px] font-bold">
                    <Link to="/" className="text-[#252B42]">
                        Home
                    </Link>
                    <ChevronRight size={16} className="text-[#BDBDBD]" />
                    <Link to="/shop" className="text-[#252B42]">
                        Shop
                    </Link>
                    <ChevronRight size={16} className="text-[#BDBDBD]" />
                    <span className="text-[#BDBDBD]">{product.name}</span>
                </div>
            </section>

            {/* top detail */}
            <section className="mx-auto max-w-[1050px] px-4 pb-8 md:pb-12">
                <button
                    type="button"
                    onClick={() => history.goBack()}
                    className="mb-6 rounded bg-[#23A6F0] px-5 py-2 text-sm font-bold text-white"
                >
                    Back
                </button>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
                    {/* left */}
                    <div>
                        <div className="relative overflow-hidden bg-white">
                            <img
                                src={selectedImage}
                                alt={product.name}
                                className="h-[277px] w-full object-cover md:h-[450px]"
                            />

                            <button
                                type="button"
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center text-[34px] text-white"
                            >
                                ‹
                            </button>

                            <button
                                type="button"
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center text-[34px] text-white"
                            >
                                ›
                            </button>
                        </div>

                        <div className="mt-4 flex gap-4">
                            {images.map((thumb, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => setSelectedImage(thumb)}
                                    className="overflow-hidden"
                                >
                                    <img
                                        src={thumb}
                                        alt={`${product.name}-${index + 1}`}
                                        className="h-[75px] w-[100px] object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* right */}
                    <div className="pt-0 md:pt-1">
                        <h1 className="text-[20px] font-normal text-[#252B42] md:text-[24px]">
                            {product.name}
                        </h1>

                        <div className="mt-3 flex items-center gap-3">
                            <div className="flex text-[20px] text-[#F3CD03]">
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span className="text-[#BDBDBD]">★</span>
                            </div>

                            <span className="text-[14px] font-bold text-[#737373]">
                                {product.rating || 0} Rating
                            </span>
                        </div>

                        <p className="mt-4 text-[24px] font-bold text-[#252B42] md:mt-6">
                            ${Number(product.price || 0).toFixed(2)}
                        </p>

                        <p className="mt-3 text-[14px] font-bold text-[#737373]">
                            Availability :
                            <span className="ml-1 text-[#23A6F0]">
                                {product.stock > 0 ? "In Stock" : "Out of Stock"}
                            </span>
                        </p>

                        <p className="mt-5 border-b border-[#BDBDBD] pb-5 text-[14px] leading-[20px] text-[#858585] md:mt-6 md:pb-6">
                            {product.description}
                        </p>

                        <div className="mt-5 flex gap-2 md:mt-6">
                            {["#23A6F0", "#2DC071", "#E77C40", "#252B42"].map(
                                (color, index) => (
                                    <span
                                        key={index}
                                        className="h-6 w-6 rounded-full"
                                        style={{ backgroundColor: color }}
                                    />
                                )
                            )}
                        </div>

                        <div className="mt-6 flex flex-wrap items-center gap-3 md:mt-8">
                            <button className="rounded-[5px] bg-[#23A6F0] px-5 py-3 text-[14px] font-bold text-white">
                                Select Options
                            </button>

                            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8E8E8] bg-white text-[#252B42]">
                                <Heart size={18} />
                            </button>

                            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8E8E8] bg-white text-[#252B42]">
                                <ShoppingCart size={18} />
                            </button>

                            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8E8E8] bg-white text-[#252B42]">
                                <Eye size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* tabs area */}
            <section className="border-t border-[#ECECEC] bg-white">
                <div className="mx-auto max-w-[1050px] px-4">
                    <div className="flex flex-wrap justify-center gap-8 py-6 text-[14px] font-semibold text-[#737373] md:gap-12">
                        <button className="text-[#252B42] underline underline-offset-4">
                            Description
                        </button>
                        <button>Additional Information</button>
                        <button>
                            Reviews <span className="text-[#23856D]">(0)</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 gap-10 border-t border-[#ECECEC] py-10 md:grid-cols-[332px_1fr_1fr] md:gap-8">
                        <div>
                            <img
                                src="/images/description-room.jpg"
                                alt="description"
                                className="w-full object-cover"
                            />
                        </div>

                        <div>
                            <h2 className="text-[24px] font-bold leading-[32px] text-[#252B42]">
                                the quick fox jumps over
                            </h2>

                            <div className="mt-7 space-y-5 text-[14px] leading-[20px] text-[#737373]">
                                <p>{product.description}</p>
                                <p>{product.description}</p>
                                <p>{product.description}</p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h2 className="text-[24px] font-bold leading-[32px] text-[#252B42]">
                                    the quick fox jumps over
                                </h2>

                                <div className="mt-7 space-y-4 text-[14px] font-bold text-[#737373]">
                                    <p>&gt; Stock: {product.stock}</p>
                                    <p>&gt; Store ID: {product.store_id}</p>
                                    <p>&gt; Category ID: {product.category_id}</p>
                                    <p>&gt; Sell Count: {product.sell_count}</p>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-[24px] font-bold leading-[32px] text-[#252B42]">
                                    Product Info
                                </h2>

                                <div className="mt-7 space-y-4 text-[14px] font-bold text-[#737373]">
                                    <p>&gt; Rating: {product.rating}</p>
                                    <p>&gt; Price: ${product.price}</p>
                                    <p>&gt; ID: {product.id}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* bestseller */}
            <section className="bg-white">
                <div className="mx-auto max-w-[1050px] px-4 py-12">
                    <div className="border-t border-[#ECECEC] pt-8">
                        <h2 className="text-[20px] font-bold text-[#252B42]">
                            BESTSELLER PRODUCTS
                        </h2>

                        <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                            {bestsellerProducts.map((item) => (
                                <ProductCard key={item.id} product={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* logos */}
            <section className="bg-[#FAFAFA] py-16">
                <div className="mx-auto max-w-[1050px] px-4">
                    <div className="flex flex-wrap items-center justify-between gap-y-8 md:flex-nowrap">
                        <img
                            src="/icons/hooli.svg"
                            alt="Hooli"
                            className="h-10 object-contain opacity-60"
                        />
                        <img
                            src="https://cdn.simpleicons.org/lyft/737373"
                            alt="Lyft"
                            className="h-10 object-contain opacity-60"
                        />
                        <img
                            src="/icons/piedPiper.svg"
                            alt="Pied Piper"
                            className="h-10 object-contain opacity-60"
                        />
                        <img
                            src="https://cdn.simpleicons.org/stripe/737373"
                            alt="Stripe"
                            className="h-10 object-contain opacity-60"
                        />
                        <img
                            src="/icons/aws.svg"
                            alt="AWS"
                            className="h-10 object-contain opacity-60"
                        />
                        <img
                            src="https://cdn.simpleicons.org/reddit/737373"
                            alt="Reddit"
                            className="h-10 object-contain opacity-60"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProductDetailPage;