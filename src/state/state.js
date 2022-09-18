import { rerender } from "..";
export let store = {
  state: {
    score: [
      { name: 'you', score: 0 },
      { name: 'pc', score: 0 },
    ],
    currentBattle: [
      { name: 'you', id: 0, current: 2 },
      { name: 'pc', id: 1, current: 1 },
    ],
    whoWon: ''
  },
  reset() {
    this.state.score[0].score = 0
    this.state.score[1].score = 0
    rerender()
  },
  whoWin() {
    let yourPoint = this.state.currentBattle[0].current;
    let pcPoint = this.state.currentBattle[1].current;
    if (
      (yourPoint === 1 && pcPoint === 2) ||
      (yourPoint === 2 && pcPoint === 0) ||
      (yourPoint === 0 && pcPoint === 1)
    ) {
      this.state.score[0].score += 1;
      this.state.whoWon = 'you'
      rerender()
    } else if (
      (yourPoint === 2 && pcPoint === 1) ||
      (yourPoint === 0 && pcPoint === 2) ||
      (yourPoint === 1 && pcPoint === 0)
    ) {
      this.state.score[1].score += 1;
      this.state.whoWon = 'pc'
      rerender()
    } else if (yourPoint === pcPoint) {
      this.state.score[1].score += 1;
      this.state.score[0].score += 1;
      this.state.whoWon = 'draw'
      rerender()
    }
  },
  botTurns() {
    function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    this.state.currentBattle[1].current = getRndInteger(0, 3);
    this.whoWin();
  },
  dispatch(action) {
    if (action.type === 'stone') {
      this.state.currentBattle.forEach((e) => {
        if (e.id === action.idPlayer) {
          e.current = 1;
          this.botTurns();
        }
      });
    } else if (action.type === 'paper') {
      this.state.currentBattle.forEach((e) => {
        if (e.id === action.idPlayer) {
          e.current = 0;
          this.botTurns();
        }
      });
    } else if (action.type === 'wives') {
      this.state.currentBattle.forEach((e) => {
        if (e.id === action.idPlayer) {
          e.current = 2;
          this.botTurns();
        }
      });
    }
  },
};
