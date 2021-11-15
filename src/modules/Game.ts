class Game {
  anwers: (string | undefined)[];
  direction: string;
  constructor(answers: (string | undefined)[], direction: string) {
    this.anwers = answers;
    this.direction = direction;
  }
}

export default Game;
