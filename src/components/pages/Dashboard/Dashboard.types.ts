interface IStockItem {
    price: number,
    high: number,
    bid: number,
    low: number,
    volume: number,
    ask: number,
    mid: number,
    timestamp: number,
    [key: string]: number
}

export type { IStockItem }