import './App.css'
import {useState} from "react";

const SYMBOL_X = 'X' as const;
const SYMBOL_O = 'O' as const;

type Symbol = typeof SYMBOL_X | typeof SYMBOL_O;
type Cell = Symbol | null;
type WinnerLine = [number, number, number];

const computeWinner: (cells: Cell[]) => WinnerLine | null = (cells: Cell[]) => {
    const lines: Array<Array<number>> = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for (let i = 0, l = lines.length; i < l; i++) {
        const [a, b, c] = lines[i];
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            return [a, b, c];
        }
    }

    return null;
}

function App() {
    const [currentStep, setCurrentStep] = useState<Symbol>(SYMBOL_O);
    const [cells, setCells] = useState<Cell[]>([SYMBOL_O, null, null, SYMBOL_O, SYMBOL_X, null, null, null, null]);
    const [winnerSequence, setWinnerSequence] = useState<WinnerLine | null>();

    const getSymbolClassName = (symbol: Symbol) => {
        if (symbol === SYMBOL_O) return 'symbol--o';
        if (symbol === SYMBOL_X) return 'symbol--x';
        return '';
    }

    const renderSymbol = (symbol: Symbol) => <span className={`symbol ${getSymbolClassName(symbol)}`}>{symbol}</span>

    const handleCellClick = (index: number) => {
        if (cells[index] || winnerSequence) {
            return;
        }

        const cellsCopy = cells.slice();
        cellsCopy[index] = currentStep;
        const winner = computeWinner(cellsCopy);

        setCells(cellsCopy);
        setCurrentStep(currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O);
        setWinnerSequence(winner);
    }

    const winnerSymbol: Symbol | null = winnerSequence ? cells[winnerSequence[0]] : null;

    return (
        <div className="game">
            <div className="game-info">
                {winnerSequence ? 'Победитель:' : 'Ход:'} {renderSymbol(winnerSymbol ?? currentStep)}
            </div>
            <div className="game-field">
                {cells.map((symbol, index) => {
                    const isWinner = winnerSequence?.includes(index);

                    return <button key={index}
                                   className={`cell ${isWinner ? 'cell--win' : ''}`}
                                   onClick={() => handleCellClick(index)}
                    >{symbol ? renderSymbol(symbol) : null}</button>
                })}
            </div>
        </div>
    )
}

export default App
