import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/actions/shoppingCartActions";

const API_URL = "https://workintech-fe-ecommerce.onrender.com";

const initialAddressForm = {
  title: "",
  name: "",
  surname: "",
  phone: "",
  city: "",
  district: "",
  neighborhood: "",
};

const initialCardForm = {
  card_no: "",
  expire_month: "",
  expire_year: "",
  name_on_card: "",
};

function CreateOrderPage() {
  const [step, setStep] = useState("address");

  const [addresses, setAddresses] = useState([]);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [editingAddressId, setEditingAddressId] = useState(null);
  const [addressForm, setAddressForm] = useState(initialAddressForm);

  const [cards, setCards] = useState([]);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [showCardForm, setShowCardForm] = useState(false);
  const [editingCardId, setEditingCardId] = useState(null);
  const [cardForm, setCardForm] = useState(initialCardForm);

  const token = localStorage.getItem("token");

  const axiosConfig = {
    headers: {
      Authorization: token,
    },
  };

  const getAddresses = () => {
    axios
      .get(`${API_URL}/user/address`, axiosConfig)
      .then((res) => setAddresses(res.data))
      .catch((err) => console.log("Adresler alınamadı:", err));
  };

  const getCards = () => {
    axios
      .get(`${API_URL}/user/card`, axiosConfig)
      .then((res) => setCards(res.data))
      .catch((err) => console.log("Kartlar alınamadı:", err));
  };

  useEffect(() => {
    getAddresses();
    getCards();
  }, []);

  const handleAddressChange = (e) => {
    const { name, value } = e.target;

    setAddressForm({
      ...addressForm,
      [name]: value,
    });
  };

  const handleCardChange = (e) => {
    const { name, value } = e.target;

    setCardForm({
      ...cardForm,
      [name]: value,
    });
  };

  const handleAddAddress = () => {
    setShowAddressForm(true);
    setEditingAddressId(null);
    setAddressForm(initialAddressForm);
  };

  const handleEditAddress = (address) => {
    setShowAddressForm(true);
    setEditingAddressId(address.id);

    setAddressForm({
      title: address.title || "",
      name: address.name || "",
      surname: address.surname || "",
      phone: address.phone || "",
      city: address.city || "",
      district: address.district || "",
      neighborhood: address.neighborhood || "",
    });
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();

    if (editingAddressId) {
      axios
        .put(
          `${API_URL}/user/address`,
          {
            id: editingAddressId,
            ...addressForm,
          },
          axiosConfig
        )
        .then(() => {
          getAddresses();
          setShowAddressForm(false);
          setEditingAddressId(null);
          setAddressForm(initialAddressForm);
        })
        .catch((err) => console.log("Adres güncellenemedi:", err));
    } else {
      axios
        .post(`${API_URL}/user/address`, addressForm, axiosConfig)
        .then(() => {
          getAddresses();
          setShowAddressForm(false);
          setAddressForm(initialAddressForm);
        })
        .catch((err) => console.log("Adres eklenemedi:", err));
    }
  };

  const handleDeleteAddress = (addressId) => {
    axios
      .delete(`${API_URL}/user/address/${addressId}`, axiosConfig)
      .then(() => getAddresses())
      .catch((err) => console.log("Adres silinemedi:", err));
  };

  const handleAddCard = () => {
    setShowCardForm(true);
    setEditingCardId(null);
    setCardForm(initialCardForm);
  };

  const handleEditCard = (card) => {
    setShowCardForm(true);
    setEditingCardId(card.id);

    setCardForm({
      card_no: card.card_no || "",
      expire_month: card.expire_month || "",
      expire_year: card.expire_year || "",
      name_on_card: card.name_on_card || "",
    });
  };
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.shoppingCart.cart);
  const [ccv, setCcv] = useState("");
  const [isOrderSuccess, setIsOrderSuccess] = useState(false);

  const handleCardSubmit = (e) => {
    e.preventDefault();

    const payload = {
      card_no: cardForm.card_no,
      expire_month: Number(cardForm.expire_month),
      expire_year: Number(cardForm.expire_year),
      name_on_card: cardForm.name_on_card,
    };

    if (editingCardId) {
      axios
        .put(
          `${API_URL}/user/card`,
          {
            id: editingCardId,
            ...payload,
          },
          axiosConfig
        )
        .then(() => {
          getCards();
          setShowCardForm(false);
          setEditingCardId(null);
          setCardForm(initialCardForm);
        })
        .catch((err) => console.log("Kart güncellenemedi:", err));
    } else {
      axios
        .post(`${API_URL}/user/card`, payload, axiosConfig)
        .then(() => {
          getCards();
          setShowCardForm(false);
          setCardForm(initialCardForm);
        })
        .catch((err) => console.log("Kart eklenemedi:", err));
    }
  };

  const handleDeleteCard = (cardId) => {
    axios
      .delete(`${API_URL}/user/card/${cardId}`, axiosConfig)
      .then(() => getCards())
      .catch((err) => console.log("Kart silinemedi:", err));
  };
  const handleCreateOrder = () => {
    const selectedAddress = addresses.find(
      (address) => address.id === selectedAddressId
    );

    const selectedCard = cards.find((card) => card.id === selectedCardId);

    if (!selectedAddress) {
      alert("Lütfen adres seçiniz.");
      return;
    }

    if (!selectedCard) {
      alert("Lütfen kart seçiniz.");
      return;
    }

    if (!ccv) {
      alert("Lütfen CVV giriniz.");
      return;
    }

    const selectedProducts = cart.filter((item) => item.checked);

    if (selectedProducts.length === 0) {
      alert("Lütfen sepette ürün seçiniz.");
      return;
    }

    const price = selectedProducts.reduce(
      (total, item) => total + item.product.price * item.count,
      0
    );

    const payload = {
      address_id: selectedAddress.id,
      order_date: new Date().toISOString(),
      card_no: Number(selectedCard.card_no),
      card_name: selectedCard.name_on_card,
      card_expire_month: Number(selectedCard.expire_month),
      card_expire_year: Number(selectedCard.expire_year),
      card_ccv: Number(ccv),
      price: price,
      products: selectedProducts.map((item) => ({
        product_id: item.product.id,
        count: item.count,
        detail: item.product.name,
      })),
    };

    axios
      .post(`${API_URL}/order`, payload, axiosConfig)
      .then(() => {
        dispatch(clearCart());
        setIsOrderSuccess(true);
        setSelectedAddressId(null);
        setSelectedCardId(null);
        setCcv("");
      })
      .catch((err) => {
        console.log("Sipariş oluşturulamadı:", err);
        alert("Sipariş oluşturulamadı.");
      });
  };
  return (
    <main className="bg-[#FAFAFA] px-4 py-10">
      <section className="mx-auto max-w-[1200px]">
        {isOrderSuccess && (
          <div className="mb-6 rounded-lg bg-green-100 p-5 text-center text-green-700">
            🎉 Tebrikler! Siparişiniz başarıyla oluşturuldu.
          </div>
        )}
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <button
            type="button"
            onClick={() => setStep("address")}
            className={`rounded-lg bg-white p-6 text-left shadow-sm ${step === "address" ? "border-b-4 border-[#F97316]" : "opacity-60"
              }`}
          >
            <p className="text-[28px] font-bold text-[#F97316]">1</p>
            <h2 className="text-[22px] font-bold text-[#252B42]">
              Adres Bilgileri
            </h2>
          </button>

          <button
            type="button"
            onClick={() => setStep("payment")}
            className={`rounded-lg bg-white p-6 text-left shadow-sm ${step === "payment" ? "border-b-4 border-[#F97316]" : "opacity-60"
              }`}
          >
            <p className="text-[28px] font-bold text-[#F97316]">2</p>
            <h2 className="text-[22px] font-bold text-[#252B42]">
              Ödeme Seçenekleri
            </h2>
          </button>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="flex-1 rounded-lg bg-white p-6 shadow-sm">
            {step === "address" ? (
              <>
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-[22px] font-bold text-[#252B42]">
                    Teslimat Adresi
                  </h2>

                  <button
                    type="button"
                    onClick={handleAddAddress}
                    className="rounded-md bg-[#F97316] px-5 py-2 text-[14px] font-bold text-white"
                  >
                    + Yeni Adres Ekle
                  </button>
                </div>

                {showAddressForm && (
                  <form
                    onSubmit={handleAddressSubmit}
                    className="mb-8 grid grid-cols-1 gap-4 rounded-lg border p-5 md:grid-cols-2"
                  >
                    <input
                      name="title"
                      value={addressForm.title}
                      onChange={handleAddressChange}
                      placeholder="Adres Başlığı"
                      className="rounded-md border p-3"
                    />

                    <input
                      name="name"
                      value={addressForm.name}
                      onChange={handleAddressChange}
                      placeholder="Ad"
                      className="rounded-md border p-3"
                    />

                    <input
                      name="surname"
                      value={addressForm.surname}
                      onChange={handleAddressChange}
                      placeholder="Soyad"
                      className="rounded-md border p-3"
                    />

                    <input
                      name="phone"
                      value={addressForm.phone}
                      onChange={handleAddressChange}
                      placeholder="Telefon"
                      className="rounded-md border p-3"
                    />

                    <select
                      name="city"
                      value={addressForm.city}
                      onChange={handleAddressChange}
                      className="rounded-md border p-3"
                    >
                      <option value="">İl Seçiniz</option>
                      <option value="istanbul">İstanbul</option>
                      <option value="ankara">Ankara</option>
                      <option value="izmir">İzmir</option>
                      <option value="bursa">Bursa</option>
                      <option value="antalya">Antalya</option>
                    </select>

                    <input
                      name="district"
                      value={addressForm.district}
                      onChange={handleAddressChange}
                      placeholder="İlçe"
                      className="rounded-md border p-3"
                    />

                    <textarea
                      name="neighborhood"
                      value={addressForm.neighborhood}
                      onChange={handleAddressChange}
                      placeholder="Mahalle, sokak, bina ve kapı no"
                      className="min-h-[100px] rounded-md border p-3 md:col-span-2"
                    />

                    <div className="flex gap-3 md:col-span-2">
                      <button
                        type="submit"
                        className="rounded-md bg-[#F97316] px-6 py-3 font-bold text-white"
                      >
                        {editingAddressId ? "Adresi Güncelle" : "Adresi Kaydet"}
                      </button>

                      <button
                        type="button"
                        onClick={() => setShowAddressForm(false)}
                        className="rounded-md border px-6 py-3 font-bold"
                      >
                        Vazgeç
                      </button>
                    </div>
                  </form>
                )}

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  {addresses.map((address) => (
                    <div
                      key={address.id}
                      className={`rounded-lg border p-5 ${selectedAddressId === address.id
                        ? "border-[#F97316]"
                        : "border-gray-200"
                        }`}
                    >
                      <div className="mb-3 flex items-center justify-between">
                        <label className="flex items-center gap-2 font-bold">
                          <input
                            type="radio"
                            name="selectedAddress"
                            checked={selectedAddressId === address.id}
                            onChange={() => setSelectedAddressId(address.id)}
                            className="accent-[#F97316]"
                          />
                          {address.title}
                        </label>

                        <button
                          type="button"
                          onClick={() => handleEditAddress(address)}
                          className="text-[13px] font-bold text-[#23A6F0]"
                        >
                          Düzenle
                        </button>
                      </div>

                      <p className="text-[14px] font-bold text-[#252B42]">
                        {address.name} {address.surname}
                      </p>

                      <p className="mt-1 text-[14px] text-[#737373]">
                        {address.phone}
                      </p>

                      <p className="mt-2 text-[14px] text-[#737373]">
                        {address.city} / {address.district}
                      </p>

                      <p className="mt-2 text-[14px] text-[#737373]">
                        {address.neighborhood}
                      </p>

                      <button
                        type="button"
                        onClick={() => handleDeleteAddress(address.id)}
                        className="mt-4 text-[13px] font-bold text-red-500"
                      >
                        Sil
                      </button>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h2 className="text-[24px] font-bold text-[#252B42]">
                      Kart Bilgileri
                    </h2>
                    <p className="mt-1 text-[14px] text-[#737373]">
                      Kart ile ödeme yapabilirsiniz.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleAddCard}
                    className="rounded-md bg-[#F97316] px-5 py-2 text-[14px] font-bold text-white"
                  >
                    + Yeni Kart Ekle
                  </button>
                </div>

                {showCardForm && (
                  <form
                    onSubmit={handleCardSubmit}
                    className="mb-8 grid grid-cols-1 gap-4 rounded-lg border p-5 md:grid-cols-2"
                  >
                    <input
                      name="name_on_card"
                      value={cardForm.name_on_card}
                      onChange={handleCardChange}
                      placeholder="Kart Üzerindeki İsim"
                      className="rounded-md border p-3 md:col-span-2"
                    />

                    <input
                      name="card_no"
                      value={cardForm.card_no}
                      onChange={handleCardChange}
                      placeholder="Kart Numarası"
                      maxLength={16}
                      className="rounded-md border p-3 md:col-span-2"
                    />

                    <select
                      name="expire_month"
                      value={cardForm.expire_month}
                      onChange={handleCardChange}
                      className="rounded-md border p-3"
                    >
                      <option value="">Ay</option>
                      {Array.from({ length: 12 }, (_, index) => index + 1).map(
                        (month) => (
                          <option key={month} value={month}>
                            {month}
                          </option>
                        )
                      )}
                    </select>

                    <select
                      name="expire_year"
                      value={cardForm.expire_year}
                      onChange={handleCardChange}
                      className="rounded-md border p-3"
                    >
                      <option value="">Yıl</option>
                      {[2025, 2026, 2027, 2028, 2029, 2030].map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                    <input
                      type="text"
                      value={ccv}
                      onChange={(e) => setCcv(e.target.value)}
                      placeholder="CVV"
                      maxLength={3}
                      className="rounded-md border p-3"
                    />

                    <label className="flex items-center gap-2 md:col-span-2">
                      <input type="checkbox" className="h-5 w-5 accent-[#F97316]" />
                      <span className="font-bold text-[#252B42]">
                        3D Secure ile ödemek istiyorum
                      </span>
                    </label>

                    <div className="flex gap-3 md:col-span-2">
                      <button
                        type="submit"
                        className="rounded-md bg-[#F97316] px-6 py-3 font-bold text-white"
                      >
                        {editingCardId ? "Kartı Güncelle" : "Kartı Kaydet"}
                      </button>

                      <button
                        type="button"
                        onClick={() => setShowCardForm(false)}
                        className="rounded-md border px-6 py-3 font-bold"
                      >
                        Vazgeç
                      </button>
                    </div>
                  </form>
                )}

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  {cards.map((card) => (
                    <div
                      key={card.id}
                      className={`rounded-lg border p-5 ${selectedCardId === card.id
                        ? "border-[#F97316]"
                        : "border-gray-200"
                        }`}
                    >
                      <div className="mb-4 flex items-center justify-between">
                        <label className="flex items-center gap-2 font-bold">
                          <input
                            type="radio"
                            name="selectedCard"
                            checked={selectedCardId === card.id}
                            onChange={() => setSelectedCardId(card.id)}
                            className="accent-[#F97316]"
                          />
                          {card.name_on_card}
                        </label>

                        <button
                          type="button"
                          onClick={() => handleEditCard(card)}
                          className="text-[13px] font-bold text-[#23A6F0]"
                        >
                          Düzenle
                        </button>
                      </div>

                      <div className="rounded-lg bg-[#F5F5F5] p-5">
                        <p className="text-[14px] font-bold text-[#252B42]">
                          **** **** **** {card.card_no?.slice(-4)}
                        </p>

                        <p className="mt-3 text-[13px] text-[#737373]">
                          Son Kullanma: {card.expire_month}/{card.expire_year}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleDeleteCard(card.id)}
                        className="mt-4 text-[13px] font-bold text-red-500"
                      >
                        Sil
                      </button>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-lg border p-5">
                  <h3 className="text-[20px] font-bold text-[#252B42]">
                    Taksit Seçenekleri
                  </h3>

                  <div className="mt-4 flex justify-between rounded-lg border p-4">
                    <span className="font-bold">Tek Çekim</span>
                    <span className="font-bold text-[#F97316]">
                      Sipariş tutarı
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>

          <aside className="w-full lg:w-[320px]">
            <div className="sticky top-24 rounded-lg bg-white p-6 shadow-md">
              {step === "address" ? (
                <button
                  type="button"
                  onClick={() => setStep("payment")}
                  className="mb-5 w-full rounded-md bg-[#F97316] py-3 text-[14px] font-bold text-white"
                >
                  Kaydet ve Devam Et
                </button>
              ) : (
                <button
                  type="button"
                  className="mb-5 w-full rounded-md bg-[#F97316] py-3 text-[14px] font-bold text-white"
                  onClick={handleCreateOrder}
                >
                  Ödeme Yap
                </button>
              )}

              <h3 className="mb-4 text-[20px] font-bold text-[#252B42]">
                Sipariş Özeti
              </h3>

              <div className="space-y-2 text-[14px] text-[#737373]">
                <div className="flex justify-between">
                  <span>Ürün Toplamı</span>
                  <span>0,00 TL</span>
                </div>

                <div className="flex justify-between">
                  <span>Kargo Toplam</span>
                  <span>29,99 TL</span>
                </div>

                <div className="flex justify-between text-[#F97316]">
                  <span>İndirim</span>
                  <span>-29,99 TL</span>
                </div>

                <div className="mt-4 flex justify-between border-t pt-4 text-[16px] font-bold text-[#252B42]">
                  <span>Toplam</span>
                  <span className="text-[#F97316]">0,00 TL</span>
                </div>
              </div>

              {step === "address" ? (
                <button
                  type="button"
                  onClick={() => setStep("payment")}
                  className="mt-5 w-full rounded-md bg-[#F97316] py-3 text-[14px] font-bold text-white"
                >
                  Kaydet ve Devam Et
                </button>
              ) : (
                <button
                  type="button"
                  className="mt-5 w-full rounded-md bg-[#F97316] py-3 text-[14px] font-bold text-white"
                  onClick={handleCreateOrder}
                >
                  Ödeme Yap
                </button>
              )}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default CreateOrderPage;