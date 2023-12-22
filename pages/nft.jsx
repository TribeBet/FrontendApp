import Image from 'next/image';
import { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const nft = () => {
    const [userProfile, setUserProfile] = useState({
        username: 'User123',
        twitterHandle: '@user123',
        avatar: '',
        stats: {
            matchesPlayed: 10,
            matchesWon: 6,
            matchesLost: 4
        },
        ongoingBets: [
            { team: 'India', odds: 1.5, betAmount: 100, potentialWin: 150 },
            { team: 'Australia', odds: 2.0, betAmount: 120, potentialWin: 240 },
            // Add more bets as needed
        ],
        pastBets: [
            { match: 'Match 1', result: 'Won', amountWon: 100 },
            { match: 'Match 2', result: 'Lost', amountLost: 50 },
            // Add more past bets as needed
        ],
    });

    const pieData = {
        labels: ['Matches Won', 'Matches Lost'],
        datasets: [
            {
                data: [userProfile.stats.matchesWon, userProfile.stats.matchesLost],
                backgroundColor: ['#4ade80', '#f87171'],
                hoverBackgroundColor: ['#22d3ee', '#fb7185']
            }
        ]
    };

    const pieOptions = {
        maintainAspectRatio: false, // This will prevent the chart from resizing dramatically
        responsive: true,
    };
    const additionalStatsData = [
        { label: 'Total Matches Played', value: userProfile.stats.matchesPlayed },
        { label: 'Total Bet Amount', value: calculateTotalBetAmount(userProfile) },
        { label: 'Matches Won', value: userProfile.stats.matchesWon },
        { label: 'Matches Lost', value: userProfile.stats.matchesLost },
        
        
        // Add more stats data as needed
    ];
return (
        <div className="bg-black text-white min-h-screen p-4">
            <div className="container mx-auto">
                {/* Profile and Statistics Sections */}
                {/* ... same as before */}<div className="p-4 rounded-lg bg-gradient-to-r from-gray-700 to-gray-900 mb-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <Image src={userProfile.avatar} alt="Avatar" width={100} height={100} className="rounded-full" />
                            <h1 className="text-3xl font-bold">{userProfile.username}</h1>
                        </div>
                        <button className="bg-green-400 text-black px-4 py-2 rounded hover:bg-green-500 transition duration-300">
                            Connect to {userProfile.twitterHandle}
                        </button>
                    </div>
                </div>

                <div className="p-4 rounded-lg bg-gradient-to-r from-gray-700 to-gray-900 mb-6">
                    <h2 className="text-2xl font-semibold">Statistics</h2>
                    <div className="mt-4 h-64"> {/* Adjust height as needed */}
                        <Pie data={pieData} options={pieOptions} />
                    </div>
                </div>
                
                <div className="p-4 rounded-lg bg-gradient-to-r from-gray-700 to-gray-900 mb-6">
                    <h2 className="text-2xl font-semibold">Additional Statistics</h2>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        {additionalStatsData.map((data, index) => (
                            <div key={index} className="bg-gray-800 border border-gray-600 rounded-lg p-4">
                                <div className="text-lg font-semibold text-yellow-300">{data.label}</div>
                                <div className="text-2xl font-bold text-green-400 mt-2">${data.value.toFixed(2)}</div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Ongoing Bets Section */}
                <div className="p-4 rounded-lg bg-gradient-to-r from-gray-700 to-gray-900 mb-6">
                    <h2 className="text-2xl font-semibold">Ongoing Bets</h2>
                    <div className="flex flex-wrap justify-center gap-4 mt-4">
                        {userProfile.ongoingBets && userProfile.ongoingBets.map((bet, index) => (
                            <div key={index} className="bg-gray-800 border border-gray-600 rounded-lg p-4 max-w-sm">
                                {/* Bet card content */}
                                {/* ... same as before */}
                                <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center">
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
                                    alt="Team Flag"
                                    className="w-8 h-5 mr-2" />
                                <span className="text-lg font-semibold text-yellow-300">{bet.team}</span>
                            </div>
                            <span className="text-md text-yellow-300 font-semibold">
                                x{bet.odds.toFixed(2)}
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
                                    value={bet.betAmount}
                                    className="block w-full pl-4 pr-12 sm:text-sm bg-gray-700 border-gray-600 rounded-md text-white"
                                    placeholder="0"
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="text-right">
                            <span className="text-sm font-medium text-gray-300">Potential Win:</span>
                            <span className="text-lg font-bold text-green-400 ml-2">
                                ${bet.potentialWin.toFixed(2)}
                            </span>
                        </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Past Bets Section */}
                <div className="p-4 rounded-lg bg-gradient-to-r from-gray-700 to-gray-800 mb-6">
                    <h2 className="text-2xl font-semibold">Past Bets</h2>
                    <div className="flex flex-wrap justify-center gap-4 mt-4">
                        {userProfile.pastBets && userProfile.pastBets.map((bet, index) => (
                            <div key={index} className="bg-gray-800 border border-gray-600 rounded-lg p-4 max-w-sm">
                                <div className="text-sm">
                                    Match: {bet.match}, Result: {bet.result}, Amount: ${bet.result === 'Won' ? bet.amountWon : bet.amountLost}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default nft;


function calculateTotalBetAmount(userProfile) {
    let totalAmount = 0;
    userProfile.ongoingBets.forEach((bet) => {
        totalAmount += bet.betAmount;
    });
    userProfile.pastBets.forEach((bet) => {
        if (bet.result === 'Won') {
            totalAmount += bet.amountWon;
        } else {
            totalAmount += bet.amountLost;
        }
    });
    return totalAmount;
}