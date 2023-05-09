export type RootStackParamList = {
  Root: undefined;
  Home: undefined;
  CreateQuote: undefined;
  MyQuotes: undefined;
  MyQuotees: undefined;
  CreateQuotee: undefined;
  EditQuotee: {
    quoteeId: string;
  };
  Quotes: undefined;
  Quotees: undefined;
  MyQuoteLists: undefined;
  CreateQuoteList: undefined;
  EditQuoteList: {
    quoteListId: string;
  };
  QuotesInList: {
    quoteListId: string;
  };
  Lists: undefined;
  EditQuote: {
    quoteId: string;
  };
  QuoteModal: {
    quoteId: string;
  };
  QuoteModifyListPresence: {
    quoteId: string;
  };
  UpdateQuoteeToQuote: {
    quoteId: string;
  };
};
