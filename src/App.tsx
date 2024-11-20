import './App.css'

const SYMBOL_X = 'X' as const;
const SYMBOL_O = 'O' as const;

type Symbol = typeof SYMBOL_X | typeof SYMBOL_O;

function App() {
    const cells = [SYMBOL_O, null, null, SYMBOL_O, SYMBOL_X, null, null, null, null];
    const currentStep = SYMBOL_O;

    const getSymbolClassName = (symbol: Symbol) => {
        if (symbol === SYMBOL_O) return 'symbol--o';
        if (symbol === SYMBOL_X) return 'symbol--x';
        return '';
    }

    const renderSymbol = (symbol: Symbol) => <span className={`symbol ${getSymbolClassName(symbol)}`}>{symbol}</span>

    return (
        <div className="game">
            <div className="game-info">
                Ход: {renderSymbol(currentStep)}
            </div>
            <div className="game-field">
                {cells.map((symbol, index) => {
                    return <button key={index} className="cell">{symbol ? renderSymbol(symbol) : null}</button>
                })}
            </div>
        </div>
    )
}

export default App
