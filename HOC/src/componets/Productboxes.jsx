// import { useEffect, useState } from "react";
// import ProductCard from "./ProductCard";
// import withBestSeller from "./withBestSeller";

// const BestSellerCard = withBestSeller(ProductCard);

// function Productboxes() {

//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((data) => setProducts(data));
//   }, []);

//   return (
//     <div className="h-[85vh] mt-[10vh] w-[100vw] flex flex-wrap gap-5 justify-center">

//       {products.map((product) => {

//         if (product.rating.rate >= 4) {
//           return (
//             <BestSellerCard
//               key={product.id}
//               title={product.title}
//               image={product.image}
//               price={product.price}
//               rating={product.rating.rate}
//             />
//           );
//         }

//         return (
//           <ProductCard
//             key={product.id}
//             title={product.title}
//             image={product.image}
//             price={product.price}
//             rating={product.rating.rate}
//           />
//         );
//       })}

//     </div>
//   );
// }

// export default Productboxes;

import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";
import withBestSeller from "./withBestSeller";
import Shimmer from "./Shimmer";

const BestSellerCard = withBestSeller(ProductCard);

function Productboxes() {
  const fetchProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    return res.json();
  };

  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <Shimmer />;

  if (error) return <h1>Error loading products</h1>;

  return (
    <div className="h-[85vh] mt-[10vh] w-[100vw] flex flex-wrap gap-5 justify-center">
      {products.map((product) => {
        if (product.rating.rate >= 4) {
          return (
            <BestSellerCard
              key={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              rating={product.rating.rate}
            />
          );
        }

        return (
          <ProductCard
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            rating={product.rating.rate}
          />
        );
      })}
    </div>
  );
}

export default Productboxes;
