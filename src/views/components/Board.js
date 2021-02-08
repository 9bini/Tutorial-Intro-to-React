import React from "react";
import Square from "./Square.js";

class Board extends React.Component {
  renderSquare(i) {
    return (

      <Square
       // key={i} 를 추가한 이유: key prop을 지정하여 각 아이템이 다른 아이템들과 다르다는 것을 알려주기 위해
        key={i}
        value={this.props.squares[i]}
        // 리엑트에서 onClick 혹은 handleClick 함수에 어떤 이름들 붙일 수 있으며 코드는
        // 코드는 동일하게 작동합니다.
        // 하지만 리액트에서는 이벤트를 나타내는 prop에는 on[even],
        // 이벤트를 처리하는 함수에는 handle[Event]를 사용하는 것이 일반적입니다.
        onClick={() => this.props.onClick(i)}
        className={checkWinnerIndex(this.props.win, i) ? 'test' : ''}
      />
    );
  }

  render() {
    const squaresBox = [];
    let count = 0;
    for (let i = 0; i <3; i++) {
      const squares = [];
      for (let j = 0; j < 3; j++) {
        squares.push(this.renderSquare(3 * i + j));
      }
      // key 를 추가한 이유: key prop을 지정하여 각 아이템이 다른 아이템들과 다르다는 것을 알려주기 위해
      squaresBox.push(<div key={count++} className="board-row">{squares}</div>);
    }
    return (
      <div>
        {squaresBox}
      </div>
    );
  }
}                

function checkWinnerIndex(win, i) {
  if (!win) return false;
  for (let index = 0; index < win.length; index++) {
      if(i === win[index])return true;
  }
}

export default Board;