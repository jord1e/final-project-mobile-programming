/**
 * @generated SignedSource<<232ee2f80af5b2794969d0f77497bac2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyQuoteListsPageQuery$variables = {};
export type MyQuoteListsPageQuery$data = {
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"MyQuoteListsPage_myQuoteLists">;
  };
};
export type MyQuoteListsPageQuery = {
  response: MyQuoteListsPageQuery$data;
  variables: MyQuoteListsPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MyQuoteListsPageQuery",
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
            "args": null,
            "kind": "FragmentSpread",
            "name": "MyQuoteListsPage_myQuoteLists"
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
    "name": "MyQuoteListsPageQuery",
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
            "alias": "myQuoteLists",
            "args": null,
            "concreteType": "ShareableQuoteList",
            "kind": "LinkedField",
            "name": "quoteLists",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "size",
                "storageKey": null
              },
              (v0/*: any*/),
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
                "name": "createdAt",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "0f5b5556b84bb11aa42ca28c74c4aae1",
    "id": null,
    "metadata": {},
    "name": "MyQuoteListsPageQuery",
    "operationKind": "query",
    "text": "query MyQuoteListsPageQuery {\n  viewer {\n    ...MyQuoteListsPage_myQuoteLists\n    id\n  }\n}\n\nfragment MyQuoteListsPage_myQuoteLists on User {\n  myQuoteLists: quoteLists {\n    size\n    id\n    ...QuoteListCard_quoteList\n  }\n  id\n}\n\nfragment QuoteListCard_quoteList on ShareableQuoteList {\n  id\n  name\n  size\n  createdAt\n}\n"
  }
};
})();

(node as any).hash = "95fe8be602c2b4da0b4d036eb1341619";

export default node;
