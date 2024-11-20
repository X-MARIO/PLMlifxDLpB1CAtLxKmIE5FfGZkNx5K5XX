import './App.css'
import {useState} from "react";

const SYMBOL_X = 'X' as const;
const SYMBOL_O = 'O' as const;

type Symbol = typeof SYMBOL_X | typeof SYMBOL_O;

function App() {
    const [currentStep, setCurrentStep] = useState<Symbol>(SYMBOL_O);
    const [cells, setCells] = useState<Array<Symbol | null>>([SYMBOL_O, null, null, SYMBOL_O, SYMBOL_X, null, null, null, null]);

    const getSymbolClassName = (symbol: Symbol) => {
        if (symbol === SYMBOL_O) return 'symbol--o';
        if (symbol === SYMBOL_X) return 'symbol--x';
        return '';
    }

    const renderSymbol = (symbol: Symbol) => <span className={`symbol ${getSymbolClassName(symbol)}`}>{symbol}</span>

    const handleCellClick = (index: number) => {
        if (cells[index]) {
            return;
        }

        const cellsCopy = cells.slice();
        cellsCopy[index] = currentStep;
        setCells(cellsCopy);
        setCurrentStep(currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O);
    }

    return (
        <div className="game">
            <div className="game-info">
                Ход: {renderSymbol(currentStep)}
            </div>
            <div className="game-field">
                {cells.map((symbol, index) => {
                    return <button key={index}
                                   className="cell"
                                   onClick={() => handleCellClick(index)}
                    >{symbol ? renderSymbol(symbol) : null}</button>
                })}
            </div>
        </div>
    )
}

export default App
