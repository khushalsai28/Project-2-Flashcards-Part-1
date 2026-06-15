import { useState } from 'react';

const flashcardSet = {
  title: 'World Capitals Study Set',
  description: 'Practice matching countries to their capitals with a randomized flashcard quiz.',
  cards: [
    { question: 'Japan', answer: 'Tokyo', category: 'Geography' },
    { question: 'Brazil', answer: 'Brasília', category: 'Geography' },
    { question: 'Australia', answer: 'Canberra', category: 'Geography' },
    { question: 'Canada', answer: 'Ottawa', category: 'Geography' },
    { question: 'Egypt', answer: 'Cairo', category: 'Geography' },
    { question: 'France', answer: 'Paris', category: 'Geography' },
    { question: 'India', answer: 'New Delhi', category: 'Geography' },
    { question: 'Mexico', answer: 'Mexico City', category: 'Geography' },
    { question: 'Spain', answer: 'Madrid', category: 'Geography' },
    { question: 'South Africa', answer: 'Pretoria', category: 'Geography' }
  ]
};

const categoryStyles = {
  Geography: '#3b82f6',
  History: '#ef4444',
  Science: '#10b981'
};

function App() {
  const [currentIndex, setCurrentIndex] = useState(() => Math.floor(Math.random() * flashcardSet.cards.length));
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = flashcardSet.cards[currentIndex];

  const showNextCard = () => {
    let nextIndex = currentIndex;
    while (nextIndex === currentIndex && flashcardSet.cards.length > 1) {
      nextIndex = Math.floor(Math.random() * flashcardSet.cards.length);
    }
    setCurrentIndex(nextIndex);
    setIsFlipped(false);
  };

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>{flashcardSet.title}</h1>
        <p>{flashcardSet.description}</p>
        <p className="card-count">{flashcardSet.cards.length} cards</p>
      </header>

      <section className="flashcard-area">
        <div
          className={`flashcard ${isFlipped ? 'flipped' : ''}`}
          style={{ borderColor: categoryStyles[currentCard.category] || '#6366f1' }}
          onClick={() => setIsFlipped((prev) => !prev)}
        >
          <div className="flashcard-body">
            <p className="card-side-label">{isFlipped ? 'Answer' : 'Question'}</p>
            <h2>{isFlipped ? currentCard.answer : currentCard.question}</h2>
            <span className="card-category">{currentCard.category}</span>
          </div>
        </div>
        <button className="next-button" onClick={showNextCard}>
          Show Random Card
        </button>
      </section>

      <footer className="app-footer">
        <p>Click the card to flip between the question and answer.</p>
      </footer>
    </div>
  );
}

export default App;
