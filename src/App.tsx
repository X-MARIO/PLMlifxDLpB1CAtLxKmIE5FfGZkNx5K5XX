import './App.css'
import {GameCell, GameInfo} from "./modules";
import {useGameState} from "./hooks";


export const App = () => {
    const {
        cells,
        currentStep,
        winnerSequence,
        handleCellClick,
        handleResetClick,
        winnerSymbol,
        isDraw
    } = useGameState();
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
