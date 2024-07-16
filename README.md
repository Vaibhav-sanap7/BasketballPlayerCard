# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# BasketballPlayerCard Component

## Overview

This project is a React component named `BasketballPlayerCard` that displays information about a basketball player. The component includes the player's name, image, position, and stats (points per game, assists per game, and rebounds per game).

## Usage

### Props

- `name` (string): The player's name.
- `image` (string): URL to the player's image.
- `position` (string): The player's position.
- `stats` (object): An object containing the player's stats (e.g., { pointsPerGame: 25.4, assistsPerGame: 7.1, reboundsPerGame: 10.5 }).

### Example Usage

```javascript
import React from "react";
import BasketballPlayerCard from "./BasketballPlayerCard";

function App() {
  return (
    <div>
      <BasketballPlayerCard
        name="LeBron James"
        image="https://example.com/lebron.jpg"
        position="Forward"
        stats={{
          pointsPerGame: 25.4,
          assistsPerGame: 7.1,
          reboundsPerGame: 10.5,
        }}
      />
    </div>
  );
}

export default App;
```
