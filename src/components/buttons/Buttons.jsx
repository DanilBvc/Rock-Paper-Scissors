import './buttons.css';
export const Buttons = (props) => {
  let botTurn = () => {
    if (props.pc[1].current === 0) {
      return 'бумага';
    } else if (props.pc[1].current === 1) {
      return 'камень';
    } else {
      return 'ножницы';
    }
  };
  const stoneClicked = (id) => {
    props.dispatch({ type: 'stone', idPlayer: id });
  };
  const paperClicked = (id) => {
    props.dispatch({ type: 'paper', idPlayer: id });
  };
  const wivesClicked = (id) => {
    props.dispatch({ type: 'wives', idPlayer: id });
  };

  return (
    <div className="buttons__wrapper">
      <div className="right-buttons">
        <button
          className="btn"
          onClick={() => {
            paperClicked(0);
          }}
        >
          бумага
        </button>
        <button
          className="btn"
          onClick={() => {
            stoneClicked(0);
          }}
        >
          камень
        </button>
        <button
          className="btn"
          onClick={() => {
            wivesClicked(0);
          }}
        >
          ножницы
        </button>
      </div>
      <div className="left-buttons">Pc turn : {botTurn()}</div>
    </div>
  );
};
