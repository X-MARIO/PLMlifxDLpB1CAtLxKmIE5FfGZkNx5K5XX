import {Symbol} from "../types";
import {GameSymbol} from "./GameSymbol.tsx";

export const GameInfo = ({isDraw, winnerSymbol, currentStep}: {
    isDraw: boolean,
    winnerSymbol: Symbol | null,
    currentStep: Symbol,
}) => {
    if (isDraw) {
        return (
            <div className="game-info">
                Ничья
            </div>
        )
    }

    if (winnerSymbol) {
        return (
            <div className="game-info">
                Победитель: <GameSymbol symbol={winnerSymbol}/>
            </div>
        )
    }

    return (
        <div className="game-info">
            Ход: <GameSymbol symbol={currentStep}/>
        </div>
    )
}