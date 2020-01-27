//status can have 3 basic values B -- Bought, BR -- Bought & Read, TB -- To buy

export const BOUGHT = "BOUGHT";
export const READ = "READ";
export const TOBUY = "TOBUY";
export const NA = "NOT APPLICABLE";

export const booksData = [
  {
    name: "Sapiens",
    author: "Yuval Noah Harari",
    year: "2014",
    status: READ,
    listedPrices: {
      amazon: 219,
      seller23: 200,
      bought: 200
    },
    review: "An intiguing book"
  },
  {
    name: "Think and Grow Rich",
    author: "Napolean Hill",
    year: "1937",
    status: BOUGHT,
    listedPrices: {
      amazon: 99,
      seller23: NA,
      bought: 99
    },
    review: "Learn How to manage your finance"
  },
  {
    name: "Animal Farm",
    author: "George Orwell",
    year: "1945",
    status: READ,
    listedPrices: {
      amazon: 79,
      seller23: NA,
      bought: 79
    },
    review: "How politics eventually ends up"
  }
];
