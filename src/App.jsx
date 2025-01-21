import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-sky-200 flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <svg width="300" height="400" viewBox="0 0 300 400">
          {/* Stem */}
          <path
            d="M150 400 L150 250"
            stroke="#2F8F3F"
            strokeWidth="8"
            fill="none"
          />
          {/* Leaf */}
          <path
            d="M150 350 Q180 330 160 310 Q140 290 150 320"
            fill="#3CAF50"
          />
          {/* Flower petals */}
          {[0, 60, 120, 180, 240, 300].map((rotation) => (
            <path
              key={rotation}
              d="M150 250 Q180 220 150 190 Q120 220 150 250"
              fill="#FFD700"
              transform={`rotate(${rotation}, 150, 250)`}
            />
          ))}
          {/* Center of flower */}
          <circle cx="150" cy="250" r="20" fill="#FFA000" />
        </svg>
        
        <div className="mt-8 space-y-4">
          <h1 className="text-3xl font-bold text-yellow-600 font-serif">
            Una flor bonita
          </h1>
          <h2 className="text-2xl text-yellow-700 font-serif italic">
            para Amy, una niña bonita :3
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App;