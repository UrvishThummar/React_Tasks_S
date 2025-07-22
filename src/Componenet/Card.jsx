import React, { useState, useEffect } from 'react';
import './Card.css'

function Card() {
  const [cards, setCards] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  // Initialize the game
  useEffect(() => {
    resetGame();
  }, []);
  
  // Check for matches when 2 cards are flipped
  useEffect(() => {
    if (flippedIndices.length === 2) {
      const [firstIdx, secondIdx] = flippedIndices;
      const firstCard = cards[firstIdx];
      const secondCard = cards[secondIdx];

      if (firstCard.value === secondCard.value) {
        // Match found
        const newCards = [...cards];
        newCards[firstIdx].matched = true;
        newCards[secondIdx].matched = true;
        setCards(newCards);

        // Check if all cards are matched
        if (newCards.every(card => card.matched)) {
          setGameWon(true);
        }
      } else {
        // No match, flip back after delay
        setTimeout(() => {
          const newCards = [...cards];
          newCards[firstIdx].flipped = false;
          newCards[secondIdx].flipped = false;
          setCards(newCards);
        }, 1000);
      }

      setFlippedIndices([]);
      setMoves(prev => prev + 1);
    }
  }, [flippedIndices, cards]);

  const resetGame = () => {
    // Create pairs of numbers (1-8 for 16 cards)
    const numbers = Array.from({ length: 8 }, (_, i) => i + 1);
    const cardValues = [...numbers, ...numbers]; // Duplicate for pairs
    const shuffled = [...cardValues].sort(() => Math.random() - 0.5);

    const newCards = shuffled.map((value, index) => ({
      id: index,
      value,
      flipped: false,
      matched: false,
    }));

    setCards(newCards);
    setFlippedIndices([]);
    setMoves(0);
    setGameWon(false);
  };

  const handleCardClick = (index) => {
    // Ignore if card is already flipped/matched or 2 cards are already flipped
    if (
      cards[index].flipped ||
      cards[index].matched ||
      flippedIndices.length === 2
    ) {
      return;
    }

    const newCards = [...cards];
    newCards[index].flipped = true;
    setCards(newCards);
    setFlippedIndices([...flippedIndices, index]);
  };

  return (
    <div className="app">
      <h1>Memory Flip Card Game</h1>
      <div className="game-info">
        <p>Moves: {moves}</p>
        <button onClick={resetGame}>Reset Game</button>
      </div>

      {gameWon ? (
        <div className="win-message">
          <h2>You Win! 🎉</h2>
          <p>Total Moves: {moves}</p>
        </div>
      ) : (
        <div className="card-grid">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`card ${card.flipped || card.matched ? 'flipped' : ''}`}
              onClick={() => handleCardClick(index)}
            >
              {card.flipped || card.matched ? card.value : '?'}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Card;