export const SYMBOL_X = 'X' as const;
export const SYMBOL_O = 'O' as const;

export type Symbol = typeof SYMBOL_X | typeof SYMBOL_O;