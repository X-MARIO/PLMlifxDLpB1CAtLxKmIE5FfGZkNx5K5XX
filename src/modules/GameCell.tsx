import {Symbol} from "../types";
import {GameSymbol} from "./GameSymbol.tsx";

export const GameCell = ({isWinner, onClick, symbol}: {
    isWinner: boolean,
    onClick: () => void,
    symbol: Symbol | null
}) => {
    return (
        <button
            className={`cell ${isWinner ? 'cell--win' : ''}`}
            onClick={onClick}
        >{symbol ? <GameSymbol symbol={symbol}/> : null}</button>
    )
}