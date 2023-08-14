import React, { useState } from 'react';

function App() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState(null);
  const [feedback, setFeedback] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (guess === number) {
      setFeedback('Congratulations! You got it right!');
    } else if (guess > number) {
      setFeedback('大きすぎます');
    } else {
      setFeedback('小さすぎます');
    }
    setGuess(null);
  }

  return (
    <div className='container'>
      <div className='box'>
        <p>{number}</p>
        <h1>Number guessing game</h1>
        <p>We have selected a random number between 1 and 100. See if you can guess it in 4 turns or fewer. We'll tell you if your guess was too high or too low.</p>
        <div className='guess'>
          <label>
            Enter a guess:
          </label>
          <form onSubmit={handleSubmit} className='guessField'>
            <input
              className='guessField'
              type="number"
              min="1"
              max="100"
              value={guess}
              onChange={event => setGuess(parseInt(event.target.value))}
            />
            <button className="guessSubmit" type="submit">Submit guess</button>
          </form>  
        </div>
        <div className="resultParas">
          <p className="guesses">Previous guesses:{feedback}</p>
          <p className="lastResult">Wrong!</p>
          <p className="lowOrHi">{feedback}</p>
          <button className="startNew">Start new game</button>
        </div>
      </div>
    </div>
  );
}

export default App;