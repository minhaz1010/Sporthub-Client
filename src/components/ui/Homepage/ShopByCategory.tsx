import React from 'react';
import { Link } from 'react-router-dom';

const sportsData = [
  { name: 'Baseball', emoji: '⚾' },
  { name: 'Basketball', emoji: '🏀' },
  { name: 'Football', emoji: '🏈' },
  { name: 'Soccer', emoji: '⚽' },
  { name: 'Softball', emoji: '🥎' },
  { name: 'Track', emoji: '🏃' },
  { name: 'Volleyball', emoji: '🏐' },
  { name: 'Wrestling', emoji: '🤼' },
];

const SportsSpecialists: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">YOUR TEAM SPORTS SPECIALISTS</h1>

      <div className="relative overflow-hidden mb-8">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-4xl font-bold mx-4">Featured Category</span>
          <span className="text-4xl font-bold mx-4">Featured Category</span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

        {sportsData.map((sport) => (
          <Link to={"#"} key={sport.name} className="flex flex-col items-center text-[#FFFFFF] bg-[#344256] p-6 rounded-xl shadow-lg hover:bg-slate-500 transition-colors duration-300">
            <span className="text-6xl mb-4">{sport.emoji}</span>
            <p className="text-lg text-white text-center">{sport.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SportsSpecialists;