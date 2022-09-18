import './index.css';
import { ScoreField } from './components/score/ScoreField';
import { Buttons } from './components/buttons/Buttons';
function App(props) {
  const reset = () => {
    props.store.reset();
  };
  return (
    <div className="wrapper">
      <h1>Камень-ножницы-бумага</h1>
      <p className="winner">Победитель: {props.store.state.whoWon}</p>
      <ScoreField score={props.store.state.score}></ScoreField>
      <Buttons
        dispatch={props.dispatch}
        pc={props.store.state.currentBattle}
      ></Buttons>
      <button className="reset-btn" onClick={reset}>
        Играть заново
      </button>
    </div>
  );
}

export default App;
