"use client"
// components/VersusCard.js
import React, { useState } from 'react';
import BettingSlip from './BettingSlip/BettingSlip';

const VersusCard = ({ image1, image2, text1, text2, team1, team2, prob1, prob2, prob3, date, sportName, tournament }) => {
  const [bettingSlipVisible, setBettingSlipVisible] = useState(false);

  const handleOpenBettingSlip = () => {
    setBettingSlipVisible(true);
  };

  return (
    <div className="bg-base-100 shadow-xl p-4 mb-4 text-center max-w-md mx-auto rounded-xl">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-left">
          <h2 className="text-xl font-bold">{tournament} </h2>
        </div>
        <div className="text-right">
          <p className="text-gray-500">{date}</p>
        </div>
      </div>
      <div className="flex items-center justify-center mb-4">
        <div className="flex flex-col items-center mr-4">
          <img src={image1} alt="Team 1" className="w-24 h-auto rounded-xl mb-2" />
          <p className="text-lg font-bold">{text1}</p>
        </div>
        <span className="text-2xl font-bold mx-4">vs</span>
        <div className="flex flex-col items-center ml-4">
          <img src={image2} alt="Team 2" className="w-24 h-auto rounded-xl mb-2" />
          <p className="text-lg font-bold">{text2}</p>
        </div>
      </div>
      <div className="flex justify-between gap-2">
        <button
          onClick={handleOpenBettingSlip}
          className="result-button bg-transparent border-solid text-start border-2 border-gray-200 w-13 items-center justify-center p-2 rounded-xl transition duration-300 ease-in-out transform hover:bg-gray-200 hover:scale-105"
        >
          {team1} Wins
          <span className="text-purple-400"> {prob1}</span>
        </button>
        <button
          onClick={handleOpenBettingSlip}
          className="result-button bg-transparent border-solid text-start border-2 border-gray-200 w-13 items-center justify-center p-2 rounded-xl transition duration-300 ease-in-out transform hover:bg-gray-200 hover:scale-105"
        >
          Draw
          <span className="text-purple-400"> {prob2}</span>
        </button>
        <button
          onClick={handleOpenBettingSlip}
          className="result-button bg-transparent border-solid text-start border-2 border-gray-200 w-13 items-center justify-center p-2 rounded-xl transition duration-300 ease-in-out transform hover:bg-gray-200 hover:scale-105"
        >
          {team2} Wins
          <span className="text-purple-400"> {prob3}</span>
        </button>
      </div>
      {/* Betting Slip */}
      {bettingSlipVisible && (
        <BettingSlip
          onClose={() => setBettingSlipVisible(false)}
          match={{ team1, team2, prob1, prob2, prob3, date, sportName, image1, image2 }}
        />
      )}
    </div>
  );
};

export default VersusCard;

