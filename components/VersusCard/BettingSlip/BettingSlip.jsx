"use client"
// components/BettingSlip.js
import React, { useState } from 'react';

const BettingSlip = ({ onClose, match }) => {
  const [selectedOption, setSelectedOption] = useState('Team A');
  const [betAmount, setBetAmount] = useState(0);

  const odds = selectedOption === 'Team A' ? match.prob1 : selectedOption === 'Team B' ? match.prob2 : match.prob3;

  const calculatePotentialWin = () => {
    return (parseFloat(betAmount) * parseFloat(odds)).toFixed(2);
  };

  const handlePlaceBet = () => {
    // Implement your logic to place the bet
    console.log(`Bet placed on ${selectedOption} with amount ${betAmount}`);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black bg-opacity-30 flex items-center justify-center backdrop-blur-md">
      <div className="bg-transparent border-2 border-solid border-gray-400 p-4 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-2">Bet Slip</h2>
        <div className="mb-2">
          <h3 className="text-lg font-bold">{match.team1} VS {match.team2}</h3>
          <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <img src={match.team1.image} alt={match.team1.name} className="w-16 h-auto rounded-xl mb-2 mr-2" />
            <h2 className="text-2xl font-bold">{match.team1.name}</h2>
          </div>

          <div className="flex items-center">
            <img src={match.team2.image} alt={match.team2.name} className="w-16 h-auto rounded-xl mb-2 mr-2" />
            <h2 className="text-2xl font-bold">{match.team2.name}</h2>
          </div>
        </div>
          
          <div className="mt-2">
            <label className="block text-sm font-medium text-gray-200 mb-1">Select Option</label>
            <select
              className="w-full px-2 py-1 border border-gray-300 rounded"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="Team A">{`${match.team1} - ${match.prob1}`}</option>
              <option value="Team B">{`${match.team2} - ${match.prob2}`}</option>
              <option value="Draw">{`Draw - ${match.prob3}`}</option>
            </select>
          </div>
          <input
            type="number"
            placeholder="Enter bet amount"
            value={betAmount}
            onChange={(e) => setBetAmount(e.target.value)}
            className="w-full px-2 py-1 border border-gray-300 rounded mt-2"
          />
          <p className="text-sm mt-2">Potential Win: {calculatePotentialWin()}</p>
        </div>
        <div className="mb-4">
          <button
            onClick={handlePlaceBet}
            className="bg-purple-700 text-white px-4 py-2 rounded-full focus:outline-none hover:bg-purple-800"
          >
            Place Bet
          </button>
        </div>
        <button
          onClick={onClose}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded-full focus:outline-none hover:bg-gray-400"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default BettingSlip;
