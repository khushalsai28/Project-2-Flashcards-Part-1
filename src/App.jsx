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
  // Ordered navigation: start at the first card
  const [cards, setCards] = useState(() => flashcardSet.cards.slice());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState(null); // 'correct' | 'incorrect' | null

  const currentCard = cards[currentIndex];

  const normalize = (s) => s.replace(/[\W_]+/g, '').toLowerCase().trim();

  const submitGuess = (e) => {
    e && e.preventDefault();
    if (!guess) return;
    const user = normalize(guess);
    const answer = normalize(currentCard.answer);
    if (user === answer) {
      setFeedback('correct');
      setIsFlipped(true);
    } else {
      setFeedback('incorrect');
    }
  };

  const goNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex((i) => i + 1);
      setIsFlipped(false);
      setGuess('');
      setFeedback(null);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
      setIsFlipped(false);
      setGuess('');
      setFeedback(null);
    }
  };

  const shuffleCards = () => {
    const shuffled = cards.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setCards(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
    setGuess('');
    setFeedback(null);
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
          className={`flashcard ${isFlipped ? 'flipped' : ''} ${feedback === 'correct' ? 'correct' : feedback === 'incorrect' ? 'incorrect' : ''}`}
          style={{ borderColor: categoryStyles[currentCard.category] || '#6366f1' }}
          onClick={() => setIsFlipped((prev) => !prev)}
        >
          <div className="flashcard-body">
            <p className="card-side-label">{isFlipped ? 'Answer' : 'Question'}</p>
            <h2>{isFlipped ? currentCard.answer : currentCard.question}</h2>
            <span className="card-category">{currentCard.category}</span>
          </div>
        </div>

        <form className="guess-form" onSubmit={submitGuess}>
          <input
            className="guess-input"
            aria-label="Enter your guess"
            placeholder="Type your guess here"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            disabled={isFlipped}
          />
          <button className="submit-button" onClick={submitGuess} disabled={isFlipped}>
            Submit Answer
          </button>
        </form>

        {feedback && (
          <div className={`feedback ${feedback}`} role="status">
            {feedback === 'correct' ? 'Correct!' : 'Try again.'}
          </div>
        )}

        <div className="nav-row">
          <div className="nav-left">
            <button className="nav-icon" onClick={goPrev} disabled={currentIndex === 0} aria-label="Previous card">←</button>
          </div>

          <div className="nav-center">
            <button className="shuffle-button" onClick={shuffleCards} aria-label="Shuffle cards">Shuffle Cards</button>
          </div>

          <div className="nav-right">
            <button className="nav-icon" onClick={goNext} disabled={currentIndex === cards.length - 1} aria-label="Next card">→</button>
          </div>
        </div>
      </section>

      <footer className="app-footer">
        <p>Click the card to flip between the question and answer.</p>
      </footer>
    </div>
  );
}

export default App;
