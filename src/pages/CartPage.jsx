import { useDispatch, useSelector } from "react-redux";
import {
    increaseCartItem,
    decreaseCartItem,
    removeCartItem,
    toggleCartItem,
} from "../store/actions/shoppingCartActions";
import { Link } from "react-router-dom";

function CartPage() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.shoppingCart.cart);

    const selectedItems = cart.filter((item) => item.checked);

    const productTotal = selectedItems.reduce(
        (total, item) => total + item.product.price * item.count,
        0
    );

    const shipping = productTotal > 0 ? 29.99 : 0;
    const discount = productTotal > 500 ? productTotal * 0.1 : 0;
    const grandTotal = productTotal + shipping - discount;

    const selectedCount = selectedItems.reduce(
        (total, item) => total + item.count,
        0
    );

    return (
        <main className="bg-[#FAFAFA] px-4 py-10">
            <section className="mx-auto max-w-[1200px]">
                <h1 className="mb-6 text-[30px] font-bold text-[#252B42]">
                    Sepetim ({cart.length} Ürün)
                </h1>

                {cart.length === 0 ? (
                    <div className="rounded-lg bg-white p-8 text-center shadow-sm">
                        <p className="text-[#737373]">Sepetiniz boş.</p>
                    </div>
                ) : (
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
                        <div className="flex flex-1 flex-col gap-5">
                            <div className="rounded-lg bg-[#F3F6FF] p-4 text-[14px] font-bold text-[#252B42]">
                                ✅ Sepetindeki ürünleri seçerek sipariş özetini görebilirsin.
                            </div>

                            {cart.map((item) => {
                                const product = item.product;

                                const image =
                                    product.image?.trim() ||
                                    product.images?.[0]?.url?.trim() ||
                                    product.thumbnail?.trim() ||
                                    "https://placehold.co/100x100";

                                return (
                                    <div
                                        key={product.id}
                                        className="rounded-lg border bg-white p-5 shadow-sm"
                                    >
                                        <div className="flex flex-col gap-5 md:flex-row md:items-center">
                                            <input
                                                type="checkbox"
                                                checked={item.checked}
                                                onChange={() => dispatch(toggleCartItem(product.id))}
                                                className="h-5 w-5 accent-[#F97316]"
                                            />

                                            <img
                                                src={image}
                                                alt={product.name}
                                                className="h-24 w-24 rounded-md object-cover object-top"
                                            />

                                            <div className="flex-1">
                                                <h2 className="text-[16px] font-bold text-[#252B42]">
                                                    {product.name}
                                                </h2>

                                                <p className="mt-1 line-clamp-2 text-[14px] text-[#737373]">
                                                    {product.description}
                                                </p>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <button
                                                    type="button"
                                                    onClick={() => dispatch(decreaseCartItem(product.id))}
                                                    className="h-9 w-9 rounded bg-gray-100 text-[20px] font-bold"
                                                >
                                                    -
                                                </button>

                                                <span className="w-6 text-center font-bold">
                                                    {item.count}
                                                </span>

                                                <button
                                                    type="button"
                                                    onClick={() => dispatch(increaseCartItem(product.id))}
                                                    className="h-9 w-9 rounded bg-gray-100 text-[20px] font-bold text-[#F97316]"
                                                >
                                                    +
                                                </button>
                                            </div>

                                            <p className="w-[120px] text-right text-[18px] font-bold text-[#F97316]">
                                                {(product.price * item.count).toLocaleString("tr-TR", {
                                                    minimumFractionDigits: 2,
                                                })}{" "}
                                                TL
                                            </p>

                                            <button
                                                type="button"
                                                onClick={() => dispatch(removeCartItem(product.id))}
                                                className="text-[20px] text-red-500"
                                            >
                                                🗑
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <aside className="w-full lg:w-[330px] lg:shrink-0">
                            <div className="sticky top-24 rounded-lg bg-white p-6 shadow-md">
                                <Link
                                    to="/create-order"
                                    className="block w-full rounded-md bg-[#F97316] py-3 text-center text-[14px] font-bold text-white"
                                >
                                    Sepeti Onayla →
                                </Link>

                                <h3 className="mb-4 text-[18px] font-bold text-[#252B42]">
                                    Sipariş Özeti
                                </h3>

                                <div className="mb-2 flex justify-between text-[14px] text-[#737373]">
                                    <span>Seçili Ürün</span>
                                    <span>{selectedCount}</span>
                                </div>

                                <div className="mb-2 flex justify-between text-[14px] text-[#737373]">
                                    <span>Ürün Toplamı</span>
                                    <span>
                                        {productTotal.toLocaleString("tr-TR", {
                                            minimumFractionDigits: 2,
                                        })}{" "}
                                        TL
                                    </span>
                                </div>

                                <div className="mb-2 flex justify-between text-[14px] text-[#737373]">
                                    <span>Kargo Toplam</span>
                                    <span>
                                        {shipping.toLocaleString("tr-TR", {
                                            minimumFractionDigits: 2,
                                        })}{" "}
                                        TL
                                    </span>
                                </div>

                                <div className="mb-2 flex justify-between text-[14px] text-[#737373]">
                                    <span>İndirim</span>
                                    <span className="text-red-500">
                                        -
                                        {discount.toLocaleString("tr-TR", {
                                            minimumFractionDigits: 2,
                                        })}{" "}
                                        TL
                                    </span>
                                </div>

                                <div className="mt-4 flex justify-between border-t pt-4 text-[16px] font-bold text-[#252B42]">
                                    <span>Toplam</span>
                                    <span className="text-[#F97316]">
                                        {grandTotal.toLocaleString("tr-TR", {
                                            minimumFractionDigits: 2,
                                        })}{" "}
                                        TL
                                    </span>
                                </div>

                                <button
                                    type="button"
                                    className="mt-5 w-full rounded-md border border-[#F97316] py-2 text-[13px] font-bold text-[#F97316]"
                                >
                                    + İndirim Kodu Gir
                                </button>

                                <button
                                    type="button"
                                    className="mt-3 w-full rounded-md bg-[#F97316] py-3 text-[14px] font-bold text-white"
                                >
                                    Sepeti Onayla →
                                </button>
                            </div>
                        </aside>
                    </div>
                )}
            </section>
        </main>
    );
}

export default CartPage;