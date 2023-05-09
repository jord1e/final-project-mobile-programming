/**
 * @generated SignedSource<<080cb340826ebdb7c40ee7fe55689fb2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type QuotesInListPageQuery$variables = {
  quoteListId: string;
};
export type QuotesInListPageQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"QuotesInListPage_data">;
  } | null;
};
export type QuotesInListPageQuery = {
  response: QuotesInListPageQuery$data;
  variables: QuotesInListPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "quoteListId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "quoteListId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "QuotesInListPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "QuotesInListPage_data"
              }
            ],
            "type": "ShareableQuoteList",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "QuotesInListPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "size",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "createdAt",
                "storageKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Quote",
                    "kind": "LinkedField",
                    "name": "quotes",
                    "plural": true,
                    "selections": [
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "quoteText",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "quoteDate",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "locationText",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Quotee",
                        "kind": "LinkedField",
                        "name": "quotees",
                        "plural": true,
                        "selections": [
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "type": "QuoteList",
                "abstractKey": "__isQuoteList"
              }
            ],
            "type": "ShareableQuoteList",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "8571c57069545d893b018ee365d7aaf8",
    "id": null,
    "metadata": {},
    "name": "QuotesInListPageQuery",
    "operationKind": "query",
    "text": "query QuotesInListPageQuery(\n  $quoteListId: ID!\n) {\n  node(id: $quoteListId) {\n    __typename\n    ... on ShareableQuoteList {\n      ...QuotesInListPage_data\n    }\n    id\n  }\n}\n\nfragment QuoteCardList_quotes on QuoteList {\n  __isQuoteList: __typename\n  quotes {\n    id\n    ...QuoteCard_quote\n  }\n}\n\nfragment QuoteCard_quote on Quote {\n  id\n  quoteText\n  quoteDate\n  locationText\n  quotees {\n    id\n  }\n}\n\nfragment QuoteListCard_quoteList on ShareableQuoteList {\n  id\n  name\n  size\n  createdAt\n}\n\nfragment QuotesInListPage_data on ShareableQuoteList {\n  name\n  size\n  ...QuoteListCard_quoteList\n  ...QuoteCardList_quotes\n  id\n}\n"
  }
};
})();

(node as any).hash = "5ff49975691aa3b919b0525fce5b3897";

export default node;
