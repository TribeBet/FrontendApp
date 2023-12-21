import React, { useState } from 'react';

const BetComponent = () => {
  const [betAmount, setBetAmount] = useState(20); // Example bet amount
  const odds = 3.21; // Example odds
  const potentialWin = betAmount * odds;

  return (
    <div className="bg-black border border-gray-600 rounded-lg p-4 max-w-sm mx-auto mt-5">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
            alt="India Flag"
            className="w-8 h-5 mr-2"
          />
          <span className="text-lg font-semibold text-yellow-300">India</span>
        </div>
        <span className="text-md text-yellow-300 font-semibold">
          x{odds.toFixed(2)}
        </span>
      </div>
      <div className="mb-4">
        <label htmlFor="betAmount" className="text-sm font-medium text-gray-300">
          Bet Amount
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            type="number"
            id="betAmount"
            value={betAmount}
            onChange={(e) => setBetAmount(e.target.value)}
            className="block w-full pl-4 pr-12 sm:text-sm bg-gray-800 border-gray-600 rounded-md text-white"
            placeholder="0"
          />
        </div>
      </div>
      <div className="text-right">
        <span className="text-sm font-medium text-gray-300">Potential Win:</span>
        <span className="text-lg font-bold text-green-400 ml-2">
          ${potentialWin.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default BetComponent;
