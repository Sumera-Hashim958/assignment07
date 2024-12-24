import React, { useEffect, useState } from "react";

interface BookData {
  id: number;
  name: string;
  author: string;
  description: string;
  price: number;
  type: string;
  available: boolean;
  image: string;
}

const Page = async () => {
      const response = await fetch("https://simple-books-api.glitch.me/books/");
      const parsedResponse: BookData[] = await response.json();
      console.log("Book >>>", parsedResponse);

      return <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {parsedResponse.map((book) => (
        <div key={book.id} className="bg-white shadow-md rounded-lg border p-4">
            <h2 className="font-bold text-lg">{book.name}</h2>
          <p className="text-gray-600">Author: {book.author}</p>
          <p className="text-gray-600">Description: {book.description}</p>
          <p className="text-gray-600">Price: ${book.price}</p>
          <p className="text-gray-600">Type: {book.type}</p>
          <p className={`mt-2 ${book.available ? "text-green-600" : "text-red-600"}`}>
            {book.available ? "Available" : "Not Available"}
          </p>
        </div>
    
      ))}</div>;
    
    }
    
    export default Page
    