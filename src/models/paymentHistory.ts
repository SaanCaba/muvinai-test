export interface PaymentHistory {
  year: string;
  payments: {
    amount: number;
    refused: boolean;
    card: {
      lastFourDigits: number;
      brand: string;
    };
    date: string;
  };
}
