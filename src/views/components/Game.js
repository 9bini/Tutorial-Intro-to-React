import React from "react";
import Board from './Board.js';
class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
                x: null,
                y: null,
            }],
            stepNumber: 0,
            xIsNext: true,
        };
    }
    jumpTo(step) {
        this.setState({
            stepNumber: step,
            // stepNumber가 짝수일 때 마다 xIsNext를 true로 설정
            xIsNext: (step % 2) === 0,
        });
    }

    handleClick(i) {
        // 클릭할 때 마다 히스토리를 잘라 미래 기록을 날림
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
                x: Math.floor(i / 3),
                y: Math.floor(i % 3),
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,

        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move + ' (' + step.x + ', ' + step.y + ')' :
                'Go to game start';
            return (
                // 
                <li key={move}>
                    <button 
                        onClick={() => this.jumpTo(move)}
                        className= {move === this.state.stepNumber? 'font-weight-bold' :''}
                        >
                        {desc}
                    </button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default Game;