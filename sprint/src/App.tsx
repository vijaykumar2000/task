import { useEffect, useState } from 'react';
import './App.css';
import Footer from './component/Footer';


interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

function App() {
  
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
   
    fetch("https://dummyjson.com/products/1")
      .then((res) => res.json())
      .then((data: Product) => {
        setProduct(data); 
      })
      .catch((error) => {
        console.error("Error fetching the product:", error);
      });
  }, []);

  return (
    <>
    
      <div>
        <h1>Product Details</h1>
        
        {product ? (
          <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.thumbnail} alt={product.title} width="200" />
          </div>
        ) : (
          <p>Loading...</p> 
        )}
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
