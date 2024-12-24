"use client";

import React, { useEffect, useState } from "react";


interface StoreData {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Page = () => {
  const [data, setData] = useState<StoreData[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const parsedResponse: StoreData[] = await response.json();
      console.log("products >>>", parsedResponse);
      setData(parsedResponse);
    };
    fetchData();
  }, []);

  return (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data.map((product) => (
        <div key={product.id} className="bg-white shadow-md rounded-lg border p-4">
          <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-lg"/>
          <h2 className="font-bold text-lg mt-2">{product.title}</h2>
          <p className="text-gray-600">{product.description}</p>
          <div className="flex justify-between items-center">
          <p className="font-semibold mt-2">Price: ${product.price}</p>
          <p className="text-yellow-500 flex items-center space-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-yellow-500">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
              <span>{product.rating.rate}</span>
              <span>({product.rating.count} reviews)</span>
            </p>
          </div>
          <p className="text-sm text-gray-500">Category: {product.category}</p>
          <button className="rounded-md border-2 bg-blue-600 w-32 h-10 mt-4 text-white">Buy Now</button>
        </div>
      ))}
    </div>
  );
};

export default Page;
