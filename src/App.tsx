import './App.css'
import {useState} from "react";
import {GameCell, GameInfo} from "./modules";
import {Cell, Symbol, SYMBOL_O, SYMBOL_X, WinnerLine} from "./types";


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

export const App = () => {
    const [currentStep, setCurrentStep] = useState<Symbol>(SYMBOL_O);
    const [cells, setCells] = useState<Cell[]>([SYMBOL_O, null, null, SYMBOL_O, SYMBOL_X, null, null, null, null]);
    const [winnerSequence, setWinnerSequence] = useState<WinnerLine | null>(null);

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

    const handleResetClick = () => {
        setCells(Array.from({length: 9}, () => null));
        setCurrentStep(SYMBOL_X);
        setWinnerSequence(null);
    }

    const winnerSymbol: Symbol | null = winnerSequence ? cells[winnerSequence[0]] : null;
    const isDraw: boolean = !winnerSymbol && cells.filter(Boolean).length === 9;

    return (
        <div className="game">
            <GameInfo isDraw={isDraw} currentStep={currentStep}
                      winnerSymbol={winnerSymbol}/>
            <div className="game-field">
                {cells.map((symbol, index) => {
                    const isWinner = winnerSequence?.includes(index) ?? false;

                    return <GameCell key={index} isWinner={isWinner} onClick={() => handleCellClick(index)}
                                     symbol={symbol}/>
                })}
            </div>
            <button className="reset" onClick={handleResetClick}>Очистить</button>
        </div>
    )
}
