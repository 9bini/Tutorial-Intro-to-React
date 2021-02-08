import React from "react";
import Square from "./Square.js";

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        // 리엑트에서 onClick 혹은 handleClick 함수에 어떤 이름들 붙일 수 있으며 코드는
        // 코드는 동일하게 작동합니다.
        // 하지만 리액트에서는 이벤트를 나타내는 prop에는 on[even],
        // 이벤트를 처리하는 함수에는 handle[Event]를 사용하는 것이 일반적입니다.
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}                


export default Board;