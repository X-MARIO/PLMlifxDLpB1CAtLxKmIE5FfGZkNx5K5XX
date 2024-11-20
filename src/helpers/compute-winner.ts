import {Cell, WinnerLine} from "../types";

export const computeWinner: (cells: Cell[]) => WinnerLine | null = (cells: Cell[]) => {
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