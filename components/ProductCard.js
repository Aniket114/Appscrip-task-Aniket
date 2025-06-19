// components/ProductCard.js
import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <>
      <Link href={`/product/${product.id}`} className="product-card">
        <div>
          <img src={product.image} alt={product.title} className="product-image" />
          <h3 className="product-title">{product.title}</h3>
          <p className="product-price">₹ {product.price}</p>
        </div>
      </Link>

      <style jsx>{`
        .product-card {
          width: 100%; /* ✅ very important */
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 8px;
          text-decoration: none;
          color: #000;
          transition: transform 0.2s ease-in-out;
          background: #fff;
        }

        .product-image {
          width: 100%;
          height: 200px;
          object-fit: contain;
          margin-bottom: 10px;
        }

        .product-title {
          font-size: 16px;
          height: 50px;
          overflow: hidden;
        }

        .product-price {
          font-weight: bold;
          margin-top: 10px;
        }

        @media (max-width: 768px) {
          .product-image {
            height: 150px;
          }

          .product-title {
            font-size: 14px;
            height: 40px;
          }

          .product-price {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
};

export default ProductCard;
