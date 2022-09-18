import './score.css';
export const ScoreField = (props) => {
  return (
    <div className="score__wrapper">
      <div className="right-player">{props.score[0].score}</div>:
      <div className="left-player">{props.score[1].score}</div>
    </div>
  );
};
