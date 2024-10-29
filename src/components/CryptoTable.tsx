import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


interface Coin {
  id: string;
  name: string;
  symbol: string;
  price_usd: string;
  tsupply: string;
}

// Define the constant for items per page
const ITEMS_PER_PAGE = 10;

const CryptoTable: React.FC = () => {
  // Define the state variables
  const [coins, setCoins] = useState<Coin[]>([]); // Array to store coins data
  const [currentPage, setCurrentPage] = useState<number>(1); // Pagination state for current page

  // Fetch data from the CoinLore API
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await axios.get("https://api.coinlore.net/api/tickers/");
        setCoins(response.data.data); // Update the coins state with API data
      } catch (error) {
        console.error("Error fetching data:", error); // Log any errors
      }
    };
    fetchCoins();
  }, []);

  // Calculate the indices for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentCoins = coins.slice(startIndex, endIndex); // Slice coins for the current page

  // Function to handle moving to the next page
  const handleNextPage = () => {
    if (endIndex < coins.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  // Function to handle moving to the previous page
  const handlePreviousPage = () => {
    if (startIndex > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="p-4 flex flex-col w-full md:w-3/4 lg:w-2/3 m-auto">
      <h2 className="text-center text-2xl font-semibold mb-4">Cryptocurrency Prices</h2>

      {/* Responsive table for larger screens */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">💰 Coin</th>
              <th className="border border-gray-400 px-4 py-2">📄 Code</th>
              <th className="border border-gray-400 px-4 py-2">💸 Price</th>
              <th className="border border-gray-400 px-4 py-2">📈 Total Supply</th>
            </tr>
          </thead>
          <tbody>
            {currentCoins.map((coin) => (
              <tr key={coin.id} className="bg-white even:bg-gray-300">
                <td className="border border-gray-400 px-4 py-2">{coin.name}</td>
                <td className="border border-gray-400 px-4 py-2">{coin.symbol}</td>
                <td className="border border-gray-400 px-4 py-2">${coin.price_usd}</td>
                <td className="border border-gray-400 px-4 py-2">
                  {parseFloat(coin.tsupply).toLocaleString()} {coin.symbol}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Responsive card layout for smaller screens */}
      <div className="sm:hidden">
        {currentCoins.map((coin) => (
          <div key={coin.id} className="grid grid-cols-2 bg-white even:bg-gray-300 p-4 rounded-sm">
            <div className="flex flex-col items-start mb-8">
              <span className="font-semibold">💰 Coin:</span>
              <span>{coin.name}</span>
            </div>
            <div className="flex flex-col items-start mb-8">
              <span className="font-semibold">📄 Code:</span>
              <span>{coin.symbol}</span>
            </div>
            <div className="flex flex-col items-start mb-8">
              <span className="font-semibold">💸 Price:</span>
              <span>${coin.price_usd}</span>
            </div>
            <div className="flex flex-col items-start mb-8">
              <span className="font-semibold">📈 Total Supply:</span>
              <span>{parseFloat(coin.tsupply).toLocaleString()} {coin.symbol}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination buttons */}
      <div className="flex justify-between mt-4">
        <div className="flex-auto">
            <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 flex items-center bg-gray-50 hover:bg-gray-300 disabled:hidden"
            >
            <FaArrowLeft className="pr-2"/> Previous
            </button>
        </div>
        <div>
            <button
            onClick={handleNextPage}
            disabled={endIndex >= coins.length}
            className="px-4 py-2 flex items-center bg-gray-50 hover:bg-gray-300 disabled:hidden"
            >
            Next <FaArrowRight className="pl-2"/>
            </button>
        </div>
      </div>
    </div>
  );
};

export default CryptoTable;
