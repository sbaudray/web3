interface HangmanGameState {
  secret: string;
  lives: number;
  isWin: boolean;
  isGameOver: boolean;
  guessedLetters: Array<string>;
}

function createGame(secret: string): HangmanGameState {
  return {
    secret,
    lives: 1,
    isWin: false,
    isGameOver: false,
    guessedLetters: [],
  };
}

function playTurn(
  letter: string,
  gameState: HangmanGameState
): HangmanGameState {
  const { secret, guessedLetters, lives, isGameOver } = gameState;

  if (isGameOver || guessedLetters.includes(letter)) {
    return gameState;
  }

  const newLetters = [...guessedLetters, letter];

  const isGoodGuess = secret.includes(letter);

  const newLives = isGoodGuess ? lives : lives - 1;

  const isWin = secret.split("").every((letter) => newLetters.includes(letter));

  return {
    secret,
    guessedLetters: newLetters,
    lives: newLives,
    isGameOver: lives === 0,
    isWin,
  };
}

function displaySecret(state: HangmanGameState) {
  return state.secret
    .split("")
    .map((char) => {
      if (state.guessedLetters.includes(char)) {
        return char;
      } else {
        return "_";
      }
    })
    .join("");
}

const game = createGame("santa");
const turn1 = playTurn("a", game);
const turn2 = playTurn("n", turn1);
console.log(displaySecret(turn2)); // '_AN_A'
