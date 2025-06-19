// pages/product/[id].js
import Link from 'next/link';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
}

export default function ProductDetail({ product }) {
  return (
    <div style={styles.container}>
      <Link href="/" style={styles.backLink}>← Back to products</Link>

      <div style={styles.content}>
        <img src={product.image} alt={product.title} style={styles.image} />
        <div>
          <h1 style={styles.title}>{product.title}</h1>
          <p style={styles.category}><strong>Category:</strong> {product.category}</p>
          <p style={styles.description}>{product.description}</p>
          <p style={styles.price}>₹ {product.price}</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '1000px',
    margin: 'auto',
  },
  backLink: {
    textDecoration: 'none',
    color: '#0070f3',
    marginBottom: '20px',
    display: 'inline-block',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    gap: '30px',
    flexWrap: 'wrap',
  },
  image: {
    width: '300px',
    height: 'auto',
    objectFit: 'contain',
  },
  title: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  category: {
    fontSize: '14px',
    marginBottom: '10px',
  },
  description: {
    marginBottom: '20px',
  },
  price: {
    fontWeight: 'bold',
    fontSize: '20px',
  },
};
