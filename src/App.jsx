import React from "react";
import BasketballPlayerCard from "./BasketballPlayerCard";
import "./App.css"; // Optional: If you want to add global styles

function App() {
  const player = {
    name: "LeBron James",
    image: "../public/LeBron.jpg",
    position: "Forward",
    stats: {
      pointsPerGame: 25.4,
      assistsPerGame: 7.1,
      reboundsPerGame: 10.5,
    },
  };

  return (
    <div className="App">
      <BasketballPlayerCard
        name={player.name}
        image={player.image}
        position={player.position}
        stats={player.stats}
      />
    </div>
  );
}

export default App;
