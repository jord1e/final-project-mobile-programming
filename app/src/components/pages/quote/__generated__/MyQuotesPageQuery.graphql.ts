/**
 * @generated SignedSource<<3e7eb7b67623ab3d3a9b934724ee9615>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyQuotesPageQuery$variables = {};
export type MyQuotesPageQuery$data = {
  readonly viewer: {
    readonly myQuotes: {
      readonly size: number;
      readonly " $fragmentSpreads": FragmentRefs<"QuoteCardList_quotes">;
    };
  };
};
export type MyQuotesPageQuery = {
  response: MyQuotesPageQuery$data;
  variables: MyQuotesPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "size",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  (v1/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MyQuotesPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": "myQuotes",
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "quotes",
            "plural": false,
            "selections": [
              (v0/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "QuoteCardList_quotes"
              }
            ],
            "storageKey": null
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MyQuotesPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": "myQuotes",
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "quotes",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              (v0/*: any*/),
              {
                "kind": "TypeDiscriminator",
                "abstractKey": "__isQuoteList"
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Quote",
                "kind": "LinkedField",
                "name": "quotes",
                "plural": true,
                "selections": [
                  (v1/*: any*/),
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
                    "selections": (v2/*: any*/),
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": (v2/*: any*/),
                "type": "Node",
                "abstractKey": "__isNode"
              }
            ],
            "storageKey": null
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "2c3346450eaea23935e77398cd8cd2c1",
    "id": null,
    "metadata": {},
    "name": "MyQuotesPageQuery",
    "operationKind": "query",
    "text": "query MyQuotesPageQuery {\n  viewer {\n    myQuotes: quotes {\n      __typename\n      size\n      ...QuoteCardList_quotes\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment QuoteCardList_quotes on QuoteList {\n  __isQuoteList: __typename\n  quotes {\n    id\n    ...QuoteCard_quote\n  }\n}\n\nfragment QuoteCard_quote on Quote {\n  id\n  quoteText\n  quoteDate\n  locationText\n  quotees {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "5d26875275f7a9183fc69bf9b44bfcdd";

export default node;
