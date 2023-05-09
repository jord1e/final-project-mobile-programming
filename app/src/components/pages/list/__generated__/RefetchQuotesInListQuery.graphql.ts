/**
 * @generated SignedSource<<dda222a98e7a293a03bc0751eb9c7b8e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RefetchQuotesInListQuery$variables = {
  id: string;
};
export type RefetchQuotesInListQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"QuotesInListPage_data">;
  } | null;
};
export type RefetchQuotesInListQuery = {
  response: RefetchQuotesInListQuery$data;
  variables: RefetchQuotesInListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
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
    "name": "RefetchQuotesInListQuery",
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
            "args": null,
            "kind": "FragmentSpread",
            "name": "QuotesInListPage_data"
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
    "name": "RefetchQuotesInListQuery",
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
    "cacheID": "c0887d4ee0e47d8189df2deacfd3c3a2",
    "id": null,
    "metadata": {},
    "name": "RefetchQuotesInListQuery",
    "operationKind": "query",
    "text": "query RefetchQuotesInListQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...QuotesInListPage_data\n    id\n  }\n}\n\nfragment QuoteCardList_quotes on QuoteList {\n  __isQuoteList: __typename\n  quotes {\n    id\n    ...QuoteCard_quote\n  }\n}\n\nfragment QuoteCard_quote on Quote {\n  id\n  quoteText\n  quoteDate\n  locationText\n  quotees {\n    id\n  }\n}\n\nfragment QuoteListCard_quoteList on ShareableQuoteList {\n  id\n  name\n  size\n  createdAt\n}\n\nfragment QuotesInListPage_data on ShareableQuoteList {\n  name\n  size\n  ...QuoteListCard_quoteList\n  ...QuoteCardList_quotes\n  id\n}\n"
  }
};
})();

(node as any).hash = "53251c6b7fb9dbb720cd8724efa1a0ee";

export default node;
