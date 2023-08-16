import { PaymentHistory } from "../../../models/paymentHistory";

export const paymentHistory: PaymentHistory[] = [
  {
    year: "2023",
    payments: {
      amount: 40000,
      refused: false,
      card: {
        lastFourDigits: 3409,
        brand: "MasterCard",
      },
      date: "16/08/2023",
    },
  },
  {
    year: "2023",
    payments: {
      amount: 55000,
      refused: false,
      card: {
        lastFourDigits: 3409,
        brand: "MasterCard",
      },
      date: "14/07/2023",
    },
  },
  {
    year: "2023",
    payments: {
      amount: 55000,
      refused: true,
      card: {
        lastFourDigits: 3409,
        brand: "MasterCard",
      },
      date: "14/07/2023",
    },
  },
  {
    year: "2023",
    payments: {
      amount: 33000,
      refused: false,
      card: {
        lastFourDigits: 2239,
        brand: "Visa",
      },
      date: "11/06/2023",
    },
  },
  {
    year: "2022",
    payments: {
      amount: 20000,
      refused: false,
      card: {
        lastFourDigits: 2239,
        brand: "Visa",
      },
      date: "29/11/2022",
    },
  },
  {
    year: "2022",
    payments: {
      amount: 22000,
      refused: false,
      card: {
        lastFourDigits: 3409,
        brand: "MasterCard",
      },
      date: "26/10/2022",
    },
  },
  {
    year: "2022",
    payments: {
      amount: 24000,
      refused: true,
      card: {
        lastFourDigits: 3409,
        brand: "MasterCard",
      },
      date: "24/10/2022",
    },
  },
];
