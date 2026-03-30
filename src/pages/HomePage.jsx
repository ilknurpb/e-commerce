import Slider from '../components/Slider';
import ProductCard from '../components/ProductCard';

function HomePage() {
  const products = [
    {
      id: 1,
      image: 'https://picsum.photos/300?1',
      title: 'Graphic Design',
      department: 'English Department',
      price: 6.48,
      oldPrice: 16.48,
    },
    {
      id: 2,
      image: 'https://picsum.photos/300?2',
      title: 'Graphic Design',
      department: 'English Department',
      price: 6.48,
      oldPrice: 16.48,
    },
    {
      id: 3,
      image: 'https://picsum.photos/300?3',
      title: 'Graphic Design',
      department: 'English Department',
      price: 6.48,
      oldPrice: 16.48,
    },
    {
      id: 4,
      image: 'https://picsum.photos/300?4',
      title: 'Graphic Design',
      department: 'English Department',
      price: 6.48,
      oldPrice: 16.48,
    },
  ];

  return (
    <>
      <Slider />

      <section className="mx-auto max-w-7xl px-4 py-10">
        <h2 className="mb-6 text-2xl font-bold text-center">
          Bestseller Products
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {products.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </>
  );
}

export default HomePage;