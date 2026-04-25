import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://workintech-fe-ecommerce.onrender.com";

function PreviousOrdersPage() {
  const [orders, setOrders] = useState([]);
  const [openOrderId, setOpenOrderId] = useState(null);

  const token = localStorage.getItem("token");

  const axiosConfig = {
    headers: {
      Authorization: token,
    },
  };

  useEffect(() => {
    axios
      .get(`${API_URL}/order`, axiosConfig)
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log("Siparişler alınamadı:", err);
      });
  }, []);

  const toggleOrder = (orderId) => {
    setOpenOrderId(openOrderId === orderId ? null : orderId);
  };

  return (
    <main className="bg-[#FAFAFA] px-4 py-10">
      <section className="mx-auto max-w-[1100px]">
        <h1 className="mb-8 text-[30px] font-bold text-[#252B42]">
          Önceki Siparişlerim
        </h1>

        {orders.length === 0 ? (
          <div className="rounded-lg bg-white p-8 text-center shadow-sm">
            <p className="text-[#737373]">
              Henüz siparişiniz bulunmuyor.
            </p>
          </div>
        ) : (
          <div className="overflow-hidden rounded-lg bg-white shadow-sm">
            <table className="w-full border-collapse text-left">
              <thead className="bg-[#252B42] text-white">
                <tr>
                  <th className="p-4">Sipariş No</th>
                  <th className="p-4">Tarih</th>
                  <th className="p-4">Tutar</th>
                  <th className="p-4">Ürün Sayısı</th>
                  <th className="p-4">Detay</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order) => (
                  <>
                    <tr key={order.id} className="border-b">
                      <td className="p-4 font-bold text-[#252B42]">
                        #{order.id}
                      </td>

                      <td className="p-4 text-[#737373]">
                        {new Date(order.order_date).toLocaleDateString("tr-TR")}
                      </td>

                      <td className="p-4 font-bold text-[#F97316]">
                        {Number(order.price).toLocaleString("tr-TR", {
                          minimumFractionDigits: 2,
                        })}{" "}
                        TL
                      </td>

                      <td className="p-4 text-[#737373]">
                        {order.products?.length || 0}
                      </td>

                      <td className="p-4">
                        <button
                          type="button"
                          onClick={() => toggleOrder(order.id)}
                          className="rounded-md bg-[#23A6F0] px-4 py-2 text-[13px] font-bold text-white"
                        >
                          {openOrderId === order.id ? "Kapat" : "Detay Gör"}
                        </button>
                      </td>
                    </tr>

                    {openOrderId === order.id && (
                      <tr>
                        <td colSpan="5" className="bg-[#FAFAFA] p-5">
                          <h3 className="mb-4 text-[18px] font-bold text-[#252B42]">
                            Sipariş Detayları
                          </h3>

                          <div className="flex flex-col gap-3">
                            {order.products?.map((product) => (
                              <div
                                key={product.product_id}
                                className="rounded-md border bg-white p-4"
                              >
                                <p className="font-bold text-[#252B42]">
                                  Ürün ID: {product.product_id}
                                </p>

                                <p className="text-[14px] text-[#737373]">
                                  Adet: {product.count}
                                </p>

                                <p className="text-[14px] text-[#737373]">
                                  Detay: {product.detail}
                                </p>
                              </div>
                            ))}
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
}

export default PreviousOrdersPage;