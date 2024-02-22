import { DecimalPipe } from "@angular/common";

export interface TradeData {
  TradeBlank: string;
  Trade: number;
  avgBuyValue: number;
  avgSellValue: number;
  profitValue: number;
  commulativeProfit: number;
  instrument: string;
  dtimeBuy: Date;
  dtimeSell: Date;
  avgHoldTime: string;
  avgNextTradeTime: string;
}


export interface TradeDataDaily {
  srNo:number;
  fileName: string;
  lostTrade:number;
  profitValue:number;
  totalTrades:number;
  winTrades:number;
}
