/**
 * @generated SignedSource<<8ee0ee38d06d57b5bb3afc42dc408d3a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type EditQuoteListPage_quoteListDataQuery$variables = {
  quoteListId: string;
};
export type EditQuoteListPage_quoteListDataQuery$data = {
  readonly currentQuoteList: {
    readonly id?: string;
    readonly name?: string;
  };
};
export type EditQuoteListPage_quoteListDataQuery = {
  response: EditQuoteListPage_quoteListDataQuery$data;
  variables: EditQuoteListPage_quoteListDataQuery$variables;
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
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EditQuoteListPage_quoteListDataQuery",
    "selections": [
      {
        "kind": "RequiredField",
        "field": {
          "alias": "currentQuoteList",
          "args": (v1/*: any*/),
          "concreteType": null,
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            {
              "kind": "InlineFragment",
              "selections": [
                (v2/*: any*/),
                (v3/*: any*/)
              ],
              "type": "ShareableQuoteList",
              "abstractKey": null
            }
          ],
          "storageKey": null
        },
        "action": "THROW",
        "path": "currentQuoteList"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EditQuoteListPage_quoteListDataQuery",
    "selections": [
      {
        "alias": "currentQuoteList",
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
              (v3/*: any*/)
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
    "cacheID": "f257bda0b2274e0cf35cd9513cf82df0",
    "id": null,
    "metadata": {},
    "name": "EditQuoteListPage_quoteListDataQuery",
    "operationKind": "query",
    "text": "query EditQuoteListPage_quoteListDataQuery(\n  $quoteListId: ID!\n) {\n  currentQuoteList: node(id: $quoteListId) {\n    __typename\n    ... on ShareableQuoteList {\n      id\n      name\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "145c55c6a0d60e28e19d1b06f6e153f9";

export default node;
