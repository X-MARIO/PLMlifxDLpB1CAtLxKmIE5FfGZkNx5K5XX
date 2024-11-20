import {Symbol, SYMBOL_O, SYMBOL_X} from "../types";

export const GameSymbol = ({symbol}: { symbol: Symbol }) => {
    const getSymbolClassName = (symbol: Symbol) => {
        if (symbol === SYMBOL_O) return 'symbol--o';
        if (symbol === SYMBOL_X) return 'symbol--x';
        return '';
    }

    return (
        <span className={`symbol ${getSymbolClassName(symbol)}`}>{symbol}</span>
    )
}