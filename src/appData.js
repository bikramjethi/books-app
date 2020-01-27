//status can have 3 basic values B -- Bought, BR -- Bought & Read, TB -- To buy

export const B = 'BOUGHT';
export const BR = 'BOUGHTNREAD';
export const TB = 'TOBUY';

export const booksData = [
  {
    name: "Sapiens",
    author: "Yuval Noah Harari",
    year: "2014",
    status: B,
    listedPrices: {
      amazon: 219,
      seller23: 200,
      bought: 200
    },
    review: "An intiguing book"
  }
];
