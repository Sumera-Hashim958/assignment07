"use client";

import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="bg-gradient-to-r from-yellow-600 via-purple-500 to-yellow-600 py-16 px-20 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-extrabold mb-4 text-white">Data Fetching Options</h1>
        <p className="text-gray-900 mb-6">Choose how you want to fetch the data:</p>
        <div className="flex gap-4">
          <button
            className="bg-yellow-600 text-white font-bold text-[20px] py-4 px-8 rounded-md hover:bg-slate-600 flex flex-col items-center justify-center"
            onClick={() => router.push("/client-side-data")}>
            <span>Client Side</span>
            <span>Data Fetching</span>
            </button>
          <button
            className="bg-yellow-600 text-white font-bold text-[20px] py-4 px-8 rounded-md hover:bg-slate-600 flex flex-col items-center justify-center"
            onClick={() => router.push("/server-data-fetching")}>
           <span>Server Side</span>
           <span>Data Fetching</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
