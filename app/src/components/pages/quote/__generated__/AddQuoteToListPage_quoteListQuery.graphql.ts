/**
 * @generated SignedSource<<f26dd99362097c9855e2fd6028cee615>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AddQuoteToListPage_quoteListQuery$variables = {};
export type AddQuoteToListPage_quoteListQuery$data = {
  readonly viewer: {
    readonly quoteLists: ReadonlyArray<{
      readonly id: string;
      readonly name: string;
      readonly quotes: ReadonlyArray<{
        readonly id: string;
      }>;
      readonly size: number;
      readonly " $fragmentSpreads": FragmentRefs<"QuoteListCard_quoteList">;
    }>;
  };
};
export type AddQuoteToListPage_quoteListQuery = {
  response: AddQuoteToListPage_quoteListQuery$data;
  variables: AddQuoteToListPage_quoteListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "size",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "Quote",
  "kind": "LinkedField",
  "name": "quotes",
  "plural": true,
  "selections": [
    (v0/*: any*/)
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AddQuoteToListPage_quoteListQuery",
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
            "alias": null,
            "args": null,
            "concreteType": "ShareableQuoteList",
            "kind": "LinkedField",
            "name": "quoteLists",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "QuoteListCard_quoteList"
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
    "name": "AddQuoteToListPage_quoteListQuery",
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
            "alias": null,
            "args": null,
            "concreteType": "ShareableQuoteList",
            "kind": "LinkedField",
            "name": "quoteLists",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
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
    "cacheID": "615d409d075664463010f9af7f5f4c76",
    "id": null,
    "metadata": {},
    "name": "AddQuoteToListPage_quoteListQuery",
    "operationKind": "query",
    "text": "query AddQuoteToListPage_quoteListQuery {\n  viewer {\n    quoteLists {\n      id\n      name\n      size\n      quotes {\n        id\n      }\n      ...QuoteListCard_quoteList\n    }\n    id\n  }\n}\n\nfragment QuoteListCard_quoteList on ShareableQuoteList {\n  id\n  name\n  size\n  createdAt\n}\n"
  }
};
})();

(node as any).hash = "15b3849f3781477853c6ea4be7bfb6b7";

export default node;
