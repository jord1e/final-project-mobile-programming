type Quote = {
  quote: string;
  timestamp: Date;
};

type QuoteListEntry = {
  addedOn: Date;
  quote: Quote;
};

type QuoteList = {
  entries: Array<QuoteListEntry>;
  createdOn: Date;
};
