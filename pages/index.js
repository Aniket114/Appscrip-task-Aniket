import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import Sidebar from '../components/Sidebar';
import Header from '@/components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));

    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  return (
    <>
      <Header />
      <div className="container">
        <Sidebar
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <main className="main">
          <h1 className="heading">DISCOVER OUR PRODUCTS</h1>
          <div className="grid">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
      <Footer />

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: row;
          padding: 20px;
          gap: 20px;
          flex-wrap: wrap;
        }

        .main {
          flex: 1;
          min-width: 280px;
        }

        .heading {
          text-align: center;
          font-size: 1.5rem;
          margin-bottom: 10px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 20px;
        }

        @media (max-width: 1024px) {
          .grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .container {
            flex-direction: column;
            padding: 1rem;
          }

          .grid {
            grid-template-columns: repeat(2, 1fr); /* ✅ 2 cards per row on mobile */
            gap: 16px;
          }

          .heading {
            font-size: 1.3rem;
          }
        }

        @media (max-width: 480px) {
          .grid {
            grid-template-columns: 1fr;
          }

          .heading {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </>
  );
}
